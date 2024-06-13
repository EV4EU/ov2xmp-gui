<template>
    <div>
      <p v-if="loading">Loading locations...</p>
      <p v-else-if="error">Error fetching locations: {{ error }}</p>
      <!-- Pass the fetched locations to the MapComponent -->
      <MapComponent :locations="locations" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { fetchChargingPoints } from './apiLocationView'; // Import the fetch function
  import MapComponent from '../map_leaflet_v1/LeafletMap.vue'; // Import the map component
  
  // Define props to receive data from App.vue
  const props = defineProps({
    apiUrl: {
      type: String,
      required: true,
    },
    query: {
      type: Object,
      required: false,
    },
    token:{
      type: String,
      required: true
    }
  });
  
  // Reactive state variables
  const locations = ref([]);
  const loading = ref(true);
  const error = ref(null);
  
  // Fetch charging points from the given API URL and query parameters
  const fetchLocations = async () => {
    try {
      //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1MzM1NjE5LCJpYXQiOjE3MTI3NDM2MTksImp0aSI6IjAyM2E5NTlkMmFlMDQxMDI4MjZlMGZkOWIzYTNiZWNmIiwidXNlcl9pZCI6MX0.6tWG2idWRp8NJ_dpZasU5ec63s3lw_S54rDUqlNOQBc'; // Set your authorization token
      
      // Construct the URL with query parameters if provided
      const queryString = new URLSearchParams(props.query || {}).toString();
      const fullApiUrl = `${props.apiUrl}?${queryString}`; // Append query parameters

      const response = await fetchChargingPoints(fullApiUrl, props.token);
      // Log the entire response
      console.log('fullApiUrl:', fullApiUrl);
      console.log('Response:', response);
      locations.value = response; // Set the fetched data
      
    } catch (e) {
      error.value = `Error fetching locations: ${e.message}`;
    } finally {
      loading.value = false; // Loading state is complete
    }
  };
  

  
  // Fetch locations when the component is mounted
  onMounted(fetchLocations);
  </script>
  