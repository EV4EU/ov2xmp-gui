<template>
  <div class="map-container">
    <l-map :use-global-leaflet="false" :zoom="zoom" :center="center">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <!--
        
        Render a marker for each location 
      <l-marker
        v-for="(location, index) in locations"
        :key="index"
        :lat-lng="[location.location.coordinates.latitude, location.location.coordinates.longitude]"
      >
    
    -->
      <l-marker
        v-for="(location, index) in locations"
        :key="index"
        :lat-lng="[location.location__coordinates.latitude, location.location__coordinates.longitude]"
        :icon="getMarkerIcon(location.chargepoint_status)"
        @click="handleMarkerClick(location)"
      >
        <l-popup>
          {{ location.location__city }}
        </l-popup>
      </l-marker>

      <!-- Marker for the center -->
      <l-marker :lat-lng="[37.9838096, 23.7275388]">
        <l-popup>
            Center
        </l-popup>
      </l-marker>


    </l-map>
    <!-- Display location information when a marker is clicked -->
    <p v-if="selectedLocation">{{ selectedLocation.location__city }}</p>
  </div>
</template>

<script setup>




import { ref,onMounted  } from 'vue';
import { LMap, LTileLayer, LMarker, LPopup  } from '@vue-leaflet/vue-leaflet';
import 'leaflet/dist/leaflet.css'; // Include Leaflet's CSS
import L from 'leaflet'; // Import Leaflet library


// Define the 'locations' prop to receive data from parent component
const props = defineProps({
  locations: {
    type: Array,
    required: true,
  },
});


// Zoom level and center position for the map

// Reactive state for the map's center (initialized with a default value)
const zoom = ref(10);
const center = ref([37.9838096, 23.7275388]); // Default value ref([37.9838096, 23.7275388]);

// State for handling loading and errors
const loading = ref(true);
const error = ref(null);

// Reactive variable to store the selected location when a marker is clicked
import { eventBus } from './EventBus';

const selectedLocation = ref(null);

// Function to handle marker clicks and store selected location
const handleMarkerClick = (location) => {
  selectedLocation.value = location;
};


// Function to get the user's current geolocation
const getUserLocation = () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log('latitude-Longtitude:', [latitude,longitude]);
        // Update the map's center with the user's geolocation
        //center.value = [latitude, longitude];
        center.value = [latitude, longitude];
        console.log("lat-long:",[latitude, longitude])
        loading.value = false; // Geolocation obtained successfully
      },
      (err) => {
        error.value = `Error fetching location: ${err.message}`;
        loading.value = false; // Stop the loading state
      },
      {
        enableHighAccuracy: true, // Attempt to get high-accuracy location
        timeout: 500, // Maximum time to wait for geolocation
        maximumAge: 1, // No cache, always fetch the latest location
      }
    );
  } else {
    error.value = "Geolocation is not supported by this browser";
    loading.value = false; // Stop the loading state
  }
};

// Function to get marker icon based on chargepoint status
const getMarkerIcon = (chargepointStatus) => {
  switch (chargepointStatus) {
    case 'Available':
      return new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
    case 'Unavailable':
      return new L.Icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });
    case 'Faulted':
      return new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          });
    default:
      // Define default icon
      break;
  }
};
// Fetch the user's location when the component is mounted
onMounted(getUserLocation);
///// THe Geolocation 











</script>

<style>
.map-container {
  height: 400px;
  width: 100%;
}

l-map {
  height: 100%;
  width: 100%;
}
</style>

