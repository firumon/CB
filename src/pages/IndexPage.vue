<template>
  <q-page padding class="flex justify-center">
	<q-card class="my-card" style="width:90vw; max-width:390px;">
<!--		<q-card-section class="bg-primary text-white">
			<div class="text-h6">പ്രീ ഓർഡറിങ് </div>
			<div class="text-subtitle2">Rs 30 ഒരു കലണ്ടറിനു </div>
		</q-card-section>-->

		<q-card-section class="q-gutter-y-sm">
			<div class="text-caption">നിങ്ങള്ക്ക് കലണ്ടർ വേണമെങ്കിൽ, പേരും ഫോൺ നമ്പറും താഴെ കൊടുത്തു submit ചെയ്യുക </div>
			<div class="text-caption">കലണ്ടർ ഒന്നിന് 30 രൂപ. ചാവക്കാട് മേഖലയിൽ ഫിറോസ് യുമായി നേരിട്ട് കണ്ടു കൈപ്പറ്റാൻ സൗകര്യം ഉള്ളവർക്ക് മാത്രമാണ് ഈ സൗകര്യം.. അസൗകര്യം നേരിട്ടിട്ടുണ്ടെങ്കിൽ, നീരുപാതികം ക്ഷമ ചോദിക്കുന്നു.. തല്ക്കാലം വേറെ ഓപ്ഷൻ ഇല്ലാത്തതു കൊണ്ടാണ് ...</div>
			<div class="text-caption">കലണ്ടർ, ജനുവരി മാസം ആദ്യ ആഴ്ചയിലാകും എത്തുക.. പ്രിൻറ് ചെയ്തു, കോഴിക്കോട് നിന്ന് എത്തേണ്ടതുണ്ട്...</div>
			<div class="text-caption"> &nbsp; </div>
			<q-input outlined v-model="person.name" label="പേര്" />
			<q-input outlined v-model="person.phone" label="ഫോൺ" />
			<q-input outlined v-model.number="person.quantity" type="number" label="എത്ര എണ്ണം" />
			<q-btn color="primary" label="👇 Submit" @click="addName" />
			<q-inner-loading :showing="loading" />
		</q-card-section>

		<q-separator />

		<q-list separator v-if="Object.keys(bookings).length">
			<q-item>
				<q-item-label header>👇 ഇതുവരെ ബുക്ക് ചെയ്തത് {{ Object.keys(bookings).length }} പേർ, {{ total }} എണ്ണം</q-item-label>
			</q-item>
			<q-item v-for="(booking,id,idx) in bookings" :key="id">
<!--				<q-item-section side class='text-bold'>{{ idx+1 }}</q-item-section>-->
				<q-item-section>
					<q-item-label>{{ booking.name }}</q-item-label>
					<q-item-label caption>{{ booking.phone }}</q-item-label>
				</q-item-section>
        <q-item-section side>
          <q-item-label>
            <q-btn icon="currency_rupee" :color="booking.paid ? 'positive' :'grey-3'" size="md" flat dense round @click="paid(id)" />
            <q-btn icon="done_all" :color="booking.delivered ? 'positive' :'grey-3'" size="md" flat dense round @click="delivered(id)" />
          </q-item-label>
        </q-item-section>
				<q-item-section side>
				  <q-avatar rounded>{{ booking.quantity }}</q-avatar>
				</q-item-section>
				<q-item-section side v-if="booking.delete">
				  <q-btn icon="close" round color="negative" dense @click="deleteName(id)" />
				</q-item-section>
			</q-item>
		</q-list>
    </q-card>
  </q-page>
</template>

<script setup>
	import { db,collection,getDocs,addDoc,deleteDoc,doc,updateDoc } from 'boot/firebase.js';
	import { ref,reactive } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute();
	const admin = route.meta && route.meta.admin
  const bookings = ref({}), loading = ref(false), total = ref(0);
	const person = reactive({ name:'',phone:'',quantity:1 })
	async function setBookings(){
		loading.value = true;
		const qSnaps = await getDocs(collection(db,'history_calendar/orders/bookings'))
		qSnaps.forEach(qSnap => {
			bookings.value[qSnap.id] = qSnap.data();
      total.value += parseInt(qSnap.get('quantity'))
		})
		loading.value = false;
	}

	setBookings();

	async function addName(){
		if(!person.name || !person.phone) return alert('പേരും ഫോൺ നമ്പറും നിർബന്ധമാണ് സുഹൃത്തേ ');
		loading.value = true;
		const dRef = await addDoc(collection(db, "history_calendar/orders/bookings"), person);
		alert('നന്ദി, താങ്കളുടെ പേര് നോട്ട് ചെയ്തിട്ടുണ്ട്.. കലണ്ടർ ഉടൻ എത്തിക്കാം... ' + (person.quantity*30) + ' രൂപ കരുതി വെച്ചോളൂ');
		bookings.value[dRef.id] = Object.assign({ delete:true },person)
    total.value += parseInt(person.quantity)
    person.name = ""; person.phone = ""; person.quantity = 1
		loading.value = false;
	}

  async function deleteName(id){
    loading.value = true;
    await deleteDoc(doc(db,'history_calendar/orders/bookings/' + id))
    total.value -= parseInt(bookings.value[id].quantity)
    delete bookings.value[id]
    loading.value = false;
  }

  async function paid(id){
    if(!admin) return;
    loading.value = true;
    let paid = (bookings.value[id].paid = !bookings.value[id].paid)
    await updateDoc(doc(db,'history_calendar/orders/bookings/' + id),{ paid })
    loading.value = false;
  }

  async function delivered(id){
    if(!admin) return;
    loading.value = true;
    let delivered = (bookings.value[id].delivered = !bookings.value[id].delivered)
    await updateDoc(doc(db,'history_calendar/orders/bookings/' + id),{ delivered })
    loading.value = false;
  }
</script>
