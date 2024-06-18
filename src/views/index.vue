<template>
  <header class="z-40" :class="{ dark: store.semidark && store.menu === 'horizontal' }">
    <div class="shadow-sm">
      <div class="relative bg-white flex w-full items-center px-4 py-2.5 dark:bg-[#0e1726]">
        <div class="horizontal-logo flex lg:hidden justify-between items-center ltr:mr-2 rtl:ml-2">
          <router-link to="/" class="main-logo flex items-center shrink-0">
            <img class="w-15 ml-[5px] flex-none" src="/assets/images/logo.svg" alt="Logo" />
            <span class="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle hidden md:inline dark:text-white-light transition-all duration-300"></span>
          </router-link>
          <a href="javascript:;" class="collapse-icon flex-none dark:text-[#d0d2d6] hover:text-primary dark:hover:text-primary flex lg:hidden ltr:ml-2 rtl:mr-2 p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60" @click="store.toggleSidebar()">
            <icon-menu class="w-5 h-5" />
          </a>
        </div>
        <div class="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
          <div class="sm:ltr:mr-auto sm:rtl:ml-auto"></div>
          <div>
            <a href="javascript:;"   v-show="store.theme === 'light'" class="flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60" @click="store.toggleTheme('dark')">
              <icon-sun />
            </a>
            <a href="javascript:;" v-show="store.theme === 'dark'" class="flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60" @click="store.toggleTheme('system')">
              <icon-moon />
            </a>
            <a href="javascript:;" v-show="store.theme === 'system'" class="flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60" @click="store.toggleTheme('light')">
              <icon-laptop />
            </a>
          </div>
          <div class="dropdown shrink-0">
            <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-end' : 'bottom-start'" offsetDistance="8" class="!block">
              <button type="button" class="relative group block">
                <img class="w-9 h-9 rounded-full object-cover saturate-50 group-hover:saturate-100" src="/assets/images/user-profile.jpeg" alt="User Profile" />
              </button>
              <template #content="{ close }">
                <ul class="text-dark dark:text-white-dark !py-0 w-[230px] font-semibold dark:text-white-light/90">
                  <li v-if="Task_14_response.length > 0">
                    <div class="flex items-center px-4 py-4">
                      <div class="flex-none">
                        <img class="rounded-md w-10 h-10 object-cover" src="/assets/images/user-profile.jpeg" alt="User Profile" />
                      </div>
                      <div class="ltr:pl-4 rtl:pr-4 truncate">
                        <h4 class="text-base">{{ Task_14_response[0].user__first_name }}</h4>
                        <a class="text-xs bg-success-light rounded text-success" href="javascript:;">{{ Task_14_response[0].user__is_superuser ? 'Admin' : 'User' }}</a>
                      </div>
                    </div>
                  </li>
                  <li class="border-t border-white-light dark:border-white-light/10">
                    <router-link to="/auth/boxed-signin" class="text-danger !py-3" @click="close()">
                      <icon-logout class="w-4.5 h-4.5 ltr:mr-2 rtl:ml-2 rotate-90 shrink-0" />
                      Sign Out
                    </router-link>
                  </li>
                </ul>
              </template>
            </Popper>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div>
    <TabGroup>

      <TabList class="flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">

      <Tab as="template" v-slot="{ selected }" >
        <a href="javascript:;" @click="handleDashboardClick" class="flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary !outline-none" :class="{ '!border-primary text-primary': selected }">
          <icon-home />
          Dashboard
        </a>
      </Tab>

      <Tab as="template" v-slot="{ selected }" id="profile-overview">
        <a href="javascript:;" class="flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary !outline-none" :class="{ '!border-primary text-primary': selected }">
          <icon-user />
          Profile Overview
        </a>
      </Tab>
      <Tab as="template" v-slot="{ selected }" id="profile-overview">
        <a href="javascript:;" class="flex gap-2 p-4 border-b border-transparent hover:border-red-500 hover:text-orange-500 !outline-none" :class="{ '!border-red-500 text-orange-500': selected }">
          <icon-user />
          Admin Tools
        </a>
      </Tab>

    </TabList>

      <TabPanels>

        <TabPanel>

          <div class="pt-5">
            <div class="grid xl:grid-cols-3 gap-6 mb-6">
              <div class="panel h-full xl:col-span-2">
                <div class="map-container">
                  <div id="map" class="map"></div>
                </div>
              </div>
              <div class="panel h-full">
                <div class="max-h-96 overflow-y-auto">
                  <form class="space-y-5">
                    <div class="grid grid-cols-1 gap-5">
                      <div>
                        <label for="startAddress">Start Address</label>
                        <input
                          id="startAddress"
                          type="text"
                          placeholder="Enter Start Address"
                          v-model="startAddress"
                          class="form-input w-full"
                          required
                        />
                      </div>
                      <div class="arrow-icons flex justify-center my-2">
                        <button type="button">
                          <FontAwesomeIcon
                            :icon="['fas', 'arrow-rotate-left']"
                            size="2xl"
                            style="color: #B197FC;"
                            @click="swapAddresses('backward')"
                          />
                        </button>
                      </div>
                      <div>
                        <label for="destinationAddress">Destination Address</label>
                        <input
                          id="destinationAddress"
                          type="text"
                          placeholder="Enter Destination Address"
                          v-model="destinationAddress"
                          class="form-input w-full"
                          required
                        />
                      </div>
                      <div class="flex space-x-3">
                        <button type="button" class="btn btn-primary w-full" @click="initializeWaypoints">Directions</button>
                        <button type="button" class="btn btn-primary w-full" @click="handleClear">Clear</button>
                        <button type="button" class="btn btn-primary w-full" @click="getCurrentLocation">GPS Location</button>
                      </div>
                      <div>
                        <button type="button" class="btn btn-secondary w-full" @click="openGoogleMapsLink">Open in Google Maps</button>
                      </div>
                    </div>
                  </form>
                </div>

          <!--
                <div v-if="Task3_Timestamp_values.length > 0" class="panel h-full">
                          <div class="flex items-center">
                            <h5 class="font-semibold text-lg dark:text-white-light">
                              <span class="text-primary ml-2">Tariff Price of Vironas</span>
                            </h5>
                          </div>
                          <div class="relative">
                            <apexchart height="325" :options="Task3_areaChart" :series="Task3_areaChartSeries" class="bg-white dark:bg-black rounded-lg overflow-hidden">
                              <div class="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                                <span class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
                              </div>
                            </apexchart>
                          </div>
                        </div>
            -->
              </div>
            </div>
          </div>
          <div class="panel h-full  gap-6 mb-6" style="height: 10; overflow-y: auto;">
            <p class="text-lg dark:text-white-light/90"> <span class="text-primary ml-2">Real-time Charging Session Visualization for Operators</span></p>
            <div class="table-responsive">
              <table class="table-hover">
                <thead>
                  <tr>
                    <th>Id_Tag</th>
                    <th>Start_Time</th>
                    <th>Start_Wh</th>
                    <th>Last_Time</th>
                    <th>Last_Wh</th>
                    <th class="text-center">Transaction Status</th>
                    <th>Connector Standard</th>
                    <th>Connector Power Type</th>
                    <th>Connector Charepoint Name</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="data in mergedDataRef" :key="data.connector">
                    <tr>
                      <td class="whitespace-nowrap">{{ data.id_tag  }}</td>
                      <td>{{ data.start_transaction_timestamp  }}</td>
                      <td>{{ data.wh_meter_start  }}</td>
                      <td>{{ data.wh_meter_last_timestamp  }}</td>
                      <td>{{ data.wh_meter_last }}</td>
                      <td
                        class="text-center whitespace-nowrap"
                        :class="{
                          'text-success': data.transaction_status === 'Started',
                          'text-secondary': data.transaction_status === 'Finished',
                          //'text-info': data.transaction_status === 'In Progress',
                          'text-danger': data.transaction_status === 'Unauthorized',
                        }"
                      >
                        {{ data.transaction_status }}
                      </td>
                      <td>{{ data.connector__standard }}</td>
                      <td>{{ data.connector__power_type }}</td>
                      <td>{{ data.connector__chargepoint }}</td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>

            <!-- TASK 3 -->
            <div class="panel h-full gap-6 mb-6" style="height: 400px; overflow-y: auto;">
              <p class="text-lg dark:text-white-light/90">
                <span class="text-primary ml-2">Real-time Meter Values Display: Current, Unit, and Info</span>
              </p>
              <!--<button type="submit" id="ClearMeterValuesdButton" @click="ClearMeterValues" class="btn btn-primary absolute top-0 right-0 m-4">Download CSV</button>-->
              <!-- Dropdown Selection Lists -->
              <div class="flex gap-8 mb-4"> <!-- Increased the gap between elements -->
                <!-- Transaction ID Dropdown -->
                <div>
                  <label for="transactionDropdown" class="block text-sm font-medium text-gray-700 dark:text-white-light">
                    Transaction ID
                  </label>
                  <select v-model="selectedTransaction" id="transactionDropdown" class="form-select w-3/4 mr-4" @change="updateParameters">
                    <option v-for="transaction in Task_3_response" :key="transaction.transaction_id" :value="transaction.transaction_id">
                      {{ transaction.transaction_id }}
                    </option>
                  </select>
                </div>

                <!-- Unit Dropdown -->
                <div>
                  <label for="unitDropdown" class="block text-sm font-medium text-gray-700 dark:text-white-light">
                    Type
                  </label>
                  <select v-model="selectedUnit" id="unitDropdown" class="form-select w-7/8 mr-4" @change="updateParameters">
                    <option value="V">Voltage</option>
                    <option value="W">Energy</option>
                    <option value="A">Current</option>
                    <option value="Wh">Energy Hours</option>
                  </select>
                </div>
              </div>

              <div class="table-responsive">
                <table class="table-hover">
                  <thead>
                    <tr>
                      <th>Transaction_Id</th>
                      <th>Unit</th>
                      <th>Timestamp</th>
                      <th>Value</th>
                      <!--
                      <th>Context</th>
                      <th>Measurand</th>
                      -->
                    </tr>
                  </thead>
                  <tbody>
                    <template v-for="data in Task_3_updated_mergedDataRef" :key="data.uuid">
                      <tr>
                        <td class="whitespace-nowrap">{{ data.transaction }}</td>
                        <td>{{ data.unit }}</td>
                        <td>{{ data.timestamp }}</td>
                        <td>{{ data.value }}</td>
                        <!--
                        <td>{{ data.context }}</td>
                        <td>{{ data.measurand }}</td>
                        -->
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Task 3 GRaph test -->
            <!-- Conditionally render the graph if Task3_Timestamp_values is not empty -->
            <div v-if="Task3_Timestamp_values.length > 0" class="panel h-full">
              <div class="flex items-center">
                <h5 class="font-semibold text-lg dark:text-white-light">
                  <span class="text-primary ml-2">Graph</span>
                </h5>
              </div>
              <div class="relative">
                <apexchart height="325" :options="Task3_areaChart" :series="Task3_areaChartSeries" class="bg-white dark:bg-black rounded-lg overflow-hidden">
                  <div class="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                    <span class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
                  </div>
                </apexchart>
              </div>
            </div>

            <!-- TASK 9 -->
            <div class="panel h-full gap-6 mb-6" style="height: 300px; overflow-y: auto;">
              <p class="text-lg dark:text-white-light/90">
                <span class="text-primary ml-2">Charging Station Diagnostics</span>
              </p>
              <div class="table-responsive">
                <table class="table-hover">
                  <thead>
                    <tr>
                      <th>Chargepoint_Id                      </th>
                      <th>City / Country</th>
                      <th>Chargepoint_model</th>
                      <th>Chargepoint_vendor</th>
                      <th>Websocket_port</th>
                      <th class="text-center">Connected</th>
                      <th class="text-center">Chargepoint_status</th>
                      <th>Ocpp_version</th>
                    </tr>
                  </thead>
                  <tbody> 
                    <template v-for="data in Task_9_response" :key="data.connector">
                      <tr>
                        <td class="whitespace-nowrap">{{ data.chargepoint_id }}</td>
                        <td>{{ data.location__city + " " + data.location__country }}</td>
                        <td>{{ data.chargepoint_model }}</td>
                        <td>{{ data.chargepoint_vendor }}</td>
                        <td>{{ data.websocket_port }}</td>
                        <td class="text-center whitespace-nowrap" :class="{ 'text-success': data.connected === true, 'text-danger': data.connected === false }">
                          {{ data.connected }}
                        </td>
                        <td class="text-center whitespace-nowrap" :class="{ 'text-success': data.chargepoint_status === 'Available', 'text-secondary': data.chargepoint_status === 'Unavailable', 'text-danger': data.chargepoint_status === 'Faulted' }">
                          {{ data.chargepoint_status }}
                        </td>
                        <td>{{ data.ocpp_version }}</td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Task 11 -->
            <div class="panel h-full gap-6 mb-6" style="height: 10; overflow-y: auto;">
              <p class="text-lg dark:text-white-light/90 gap-3 mb-3">
                <span class="text-primary ml-2">Charging Session Time and Energy Data: Detailed and Downloadable</span>
              </p>
              <button type="submit" id="downloadButton" @click="downloadCSV" class="btn btn-primary absolute top-0 right-0 m-4">Download CSV</button>
              <div class="table-responsive">
                <table class="table-hover">
                  <thead>
                    <tr>
                      <th>Id_Tag</th>
                      <th>Start_Time</th>
                      <th>Start_Wh</th>
                      <th>Last_Time</th>
                      <th>Last_Wh</th>
                      <th class="text-center">Transaction Status</th>
                      <th>Connector Standard</th>
                      <th>Connector Power Type</th>
                      <th>Connector Charepoint Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-for="data in mergedDataRef" :key="data.connector">
                      <tr>
                        <td class="whitespace-nowrap">{{ data.id_tag }}</td>
                        <td>{{ data.start_transaction_timestamp }}</td>
                        <td>{{ data.wh_meter_start }}</td>
                        <td>{{ data.wh_meter_last_timestamp }}</td>
                        <td>{{ data.wh_meter_last }}</td>
                        <td
                          class="text-center whitespace-nowrap"
                          :class="{
                            'text-success': data.transaction_status === 'Started',
                            'text-secondary': data.transaction_status === 'Finished',
                            //'text-info': data.transaction_status === 'In Progress',
                            'text-danger': data.transaction_status === 'Unauthorized',
                          }"
                        >
                          {{ data.transaction_status }}
                        </td>
                        <td>{{ data.connector__standard }}</td>
                        <td>{{ data.connector__power_type }}</td>
                        <td>{{ data.connector__chargepoint }}</td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="panel h-full">
              <div class="flex items-center">
                <h5 class="font-semibold text-lg dark:text-white-light">
                  <span class="text-primary ml-2">Daily Capacity Schedule for</span> 15/5/2024
                </h5>
              </div>
              <div class="relative">
                <apexchart height="325" :options="columnChart" :series="columnChartSeries" class="bg-white dark:bg-black rounded-lg overflow-hidden">
                  <!-- loader areaChart areaChartSeries columnChart columnChartSeries-->
                  <div class="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                    <span class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
                  </div>
                </apexchart>
              </div>
            </div>
          </TabPanel>
       

          <TabPanel>
                <div>
                    <form class="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-[#0e1726]">
                        <h6 class="text-lg font-bold mb-5">General Information</h6>
                        <div class="flex flex-col sm:flex-row">
                            <div class="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5">
                                <img src="/assets/images/user-profile.jpeg" alt="" class="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto" />
                            </div>
                            <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label for="first-name">First Name</label>
                                    <span class="text-primary ml-2">{{ Task_14_response[0].user__first_name }}</span>
                                </div>
                                <div>
                                    <label for="last-name">Last Name</label>
                                    <span class="text-primary ml-2">{{ Task_14_response[0].user__last_name }}</span>
                                </div>
                                <div>
                                    <label for="email">Email</label>
                                    <span class="text-primary ml-2">{{ Task_14_response[0].user__email }}</span>
                                </div>
                                <div>
                                    <label for="username">User Name</label>
                                    <span class="text-primary ml-2">{{ Task_14_response[0].user__username }}</span>
                                </div>
                                
                                <div>
                                    <label for="Power_Type">Socket type</label>
                                    <div class="relative text-white-dark">
                                      <select id="Power_Type" class="form-input ps-10 placeholder:text-white-dark w-1/2 mr-4">
                                        <option value="" disabled selected>CCS2</option>
                                        <option value="AC_1_PHASE">AC 1 Phase</option>
                                        <option value="AC_3_PHASE">AC 3 Phase</option>
                                        <option value="DC">DC</option>
                                      </select>
                                      <span class="text-primary ml-2"></span>
                                    </div>
                                  </div>


                                
                                <div>
                                  <label for="Tariff">Tariff Preference</label>
                                    <div class="relative text-white-dark">
                                        <input  id="Tariff" type="number" placeholder="0.08" step="any"  class="form-input ps-10 placeholder:text-white-dark w-1/2 mr-4" />
                                        <span class="text-primary ml-2"></span>
                                       
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </TabPanel>
          <!--============================================================ ADMINISTATOR TOOLS ============================================================-->
          
            <TabPanel>


<!-- ######################################################################################################################################################################-->


  <div  class="panel h-full gap-6 mb-6">
   <TabGroup>

      <TabList class="flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">

              <Tab as="template" v-slot="{ selected }" >
                <a href="javascript:;" class="flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary !outline-none" :class="{ '!border-primary text-primary': selected }">
                  <icon-home />
                  Location Declaration
                </a>
              </Tab>
              <Tab as="template" v-slot="{ selected }" id="profile-overview">
                <a href="javascript:;" class="flex gap-2 p-4 border-b border-transparent hover:border-red-500 hover:text-orange-500 !outline-none" :class="{ '!border-red-500 text-orange-500': selected }">
                  <icon-user />
                  Chargepoint Declaration
                </a>
              </Tab>

    </TabList>

      <TabPanels>

        <TabPanel>

                      <div class="max-h-144 overflow-y-auto p-4 bg-gray-200 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                        <form class="space-y-5" @submit.prevent="submitLocation_inputs()">
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                                <div>
                                  <label for="timeZone" class="block text-sm font-medium text-gray-700 dark:text-white-light">
                                      Time Zone
                                  </label>
                                  <select v-model="Location_inputs.timeZone" id="timeZone" class="form-select w-7/8 mr-4" required>
                                    <option value="Europe/Copenhagen">Europe/Copenhagen</option>
                                    <option value="Pacific/Easter">Pacific/Easter</option>
                                    <option value="Asia/Jerusalem">Asia/Jerusalem</option>
                                    <option value="Europe/Monaco">Europe/Monaco</option>
                                    <option value="Asia/Kolkata">Asia/Kolkata</option>
                                    <option value="America/Argentina/Jujuy">America/Argentina/Jujuy</option>
                                    <option value="America/Dawson_Creek">America/Dawson_Creek</option>
                                    <option value="America/Virgin">America/Virgin</option>
                                    <option value="America/Santiago">America/Santiago</option>
                                    <option value="America/Cordoba">America/Cordoba</option>
                                    <option value="America/Anguilla">America/Anguilla</option>
                                    <option value="Africa/Mogadishu">Africa/Mogadishu</option>
                                    <option value="Asia/Aden">Asia/Aden</option>
                                    <option value="Asia/Dacca">Asia/Dacca</option>
                                    <option value="Etc/GMT+3">Etc/GMT+3</option>
                                    <option value="America/Costa_Rica">America/Costa_Rica</option>
                                    <option value="America/Fort_Nelson">America/Fort_Nelson</option>
                                    <option value="America/Porto_Acre">America/Porto_Acre</option>
                                    <option value="Africa/Brazzaville">Africa/Brazzaville</option>
                                    <option value="Pacific/Saipan">Pacific/Saipan</option>
                                    <option value="Africa/Monrovia">Africa/Monrovia</option>
                                    <option value="Europe/Busingen">Europe/Busingen</option>
                                    <option value="EET">EET</option>
                                    <option value="Europe/Zurich">Europe/Zurich</option>
                                    <option value="Pacific/Kwajalein">Pacific/Kwajalein</option>
                                    <option value="Etc/GMT+10">Etc/GMT+10</option>
                                    <option value="Asia/Qyzylorda">Asia/Qyzylorda</option>
                                    <option value="Europe/Brussels">Europe/Brussels</option>
                                    <option value="Europe/Kirov">Europe/Kirov</option>
                                    <option value="Asia/Ulan_Bator">Asia/Ulan_Bator</option>
                                    <option value="EST">EST</option>
                                    <option value="Pacific/Bougainville">Pacific/Bougainville</option>
                                    <option value="Asia/Saigon">Asia/Saigon</option>
                                    <option value="Asia/Yekaterinburg">Asia/Yekaterinburg</option>
                                    <option value="Africa/Juba">Africa/Juba</option>
                                    <option value="Africa/Lusaka">Africa/Lusaka</option>
                                    <option value="America/Buenos_Aires">America/Buenos_Aires</option>
                                    <option value="Pacific/Pago_Pago">Pacific/Pago_Pago</option>
                                    <option value="Etc/GMT-12">Etc/GMT-12</option>
                                    <option value="US/Mountain">US/Mountain</option>
                                    <option value="Asia/Gaza">Asia/Gaza</option>
                                    <option value="America/Creston">America/Creston</option>
                                    <option value="Asia/Srednekolymsk">Asia/Srednekolymsk</option>
                                    <option value="America/North_Dakota/Beulah">America/North_Dakota/Beulah</option>
                                    <option value="Pacific/Gambier">Pacific/Gambier</option>
                                    <option value="Brazil/DeNoronha">Brazil/DeNoronha</option>
                                    <option value="Africa/Bangui">Africa/Bangui</option>
                                    <option value="Mexico/BajaSur">Mexico/BajaSur</option>
                                    <option value="Hongkong">Hongkong</option>
                                    <option value="Pacific/Pohnpei">Pacific/Pohnpei</option>
                                    <option value="Pacific/Fakaofo">Pacific/Fakaofo</option>
                                    <option value="Asia/Irkutsk">Asia/Irkutsk</option>
                                    <option value="America/Argentina/Cordoba">America/Argentina/Cordoba</option>
                                    <option value="Pacific/Guadalcanal">Pacific/Guadalcanal</option>
                                    <option value="UCT">UCT</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Asia/Hovd">Asia/Hovd</option>
                                    <option value="Etc/Universal">Etc/Universal</option>
                                    <option value="America/Fort_Wayne">America/Fort_Wayne</option>
                                    <option value="America/Cuiaba">America/Cuiaba</option>
                                    <option value="Canada/Yukon">Canada/Yukon</option>
                                    <option value="Europe/Kyiv">Europe/Kyiv</option>
                                    <option value="Africa/Bissau">Africa/Bissau</option>
                                    <option value="America/Resolute">America/Resolute</option>
                                    <option value="Asia/Kuching">Asia/Kuching</option>
                                    <option value="America/New_York">America/New_York</option>
                                    <option value="America/Noronha">America/Noronha</option>
                                    <option value="Europe/Ulyanovsk">Europe/Ulyanovsk</option>
                                    <option value="GMT0">GMT0</option>
                                    <option value="US/East-Indiana">US/East-Indiana</option>
                                    <option value="America/Whitehorse">America/Whitehorse</option>
                                    <option value="Universal">Universal</option>
                                    <option value="Australia/Darwin">Australia/Darwin</option>
                                    <option value="Africa/Lome">Africa/Lome</option>
                                    <option value="America/Rainy_River">America/Rainy_River</option>
                                    <option value="America/Atikokan">America/Atikokan</option>
                                    <option value="Asia/Karachi">Asia/Karachi</option>
                                    <option value="Africa/Accra">Africa/Accra</option>
                                    <option value="Etc/GMT-6">Etc/GMT-6</option>
                                    <option value="Africa/Malabo">Africa/Malabo</option>
                                    <option value="Asia/Choibalsan">Asia/Choibalsan</option>
                                    <option value="America/Moncton">America/Moncton</option>
                                    <option value="Europe/Helsinki">Europe/Helsinki</option>
                                    <option value="CST6CDT">CST6CDT</option>
                                    <option value="Etc/GMT+5">Etc/GMT+5</option>
                                    <option value="America/Indiana/Winamac">America/Indiana/Winamac</option>
                                    <option value="Eire">Eire</option>
                                    <option value="Indian/Mahe">Indian/Mahe</option>
                                    <option value="America/Iqaluit">America/Iqaluit</option>
                                    <option value="America/Scoresbysund">America/Scoresbysund</option>
                                    <option value="Australia/Lindeman">Australia/Lindeman</option>
                                    <option value="America/Santo_Domingo">America/Santo_Domingo</option>
                                    <option value="Asia/Magadan">Asia/Magadan</option>
                                    <option value="America/Managua">America/Managua</option>
                                    <option value="America/Guadeloupe">America/Guadeloupe</option>
                                    <option value="America/Chicago">America/Chicago</option>
                                    <option value="America/Inuvik">America/Inuvik</option>
                                    <option value="Antarctica/Macquarie">Antarctica/Macquarie</option>
                                    <option value="Pacific/Auckland">Pacific/Auckland</option>
                                    <option value="Pacific/Chatham">Pacific/Chatham</option>
                                    <option value="Etc/Greenwich">Etc/Greenwich</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="America/Regina">America/Regina</option>
                                    <option value="Australia/Adelaide">Australia/Adelaide</option>
                                    <option value="America/Godthab">America/Godthab</option>
                                    <option value="Canada/Newfoundland">Canada/Newfoundland</option>
                                    <option value="America/Port-au-Prince">America/Port-au-Prince</option>
                                    <option value="Australia/Canberra">Australia/Canberra</option>
                                    <option value="America/Cambridge_Bay">America/Cambridge_Bay</option>
                                    <option value="America/Indiana/Tell_City">America/Indiana/Tell_City</option>
                                    <option value="Asia/Samarkand">Asia/Samarkand</option>
                                    <option value="Asia/Khandyga">Asia/Khandyga</option>
                                    <option value="America/Louisville">America/Louisville</option>
                                    <option value="Indian/Mauritius">Indian/Mauritius</option>
                                    <option value="Etc/GMT">Etc/GMT</option>
                                    <option value="Asia/Seoul">Asia/Seoul</option>
                                    <option value="Asia/Oral">Asia/Oral</option>
                                    <option value="America/Nipigon">America/Nipigon</option>
                                    <option value="Asia/Brunei">Asia/Brunei</option>
                                    <option value="Asia/Ulaanbaatar">Asia/Ulaanbaatar</option>
                                    <option value="Asia/Harbin">Asia/Harbin</option>
                                    <option value="Africa/Harare">Africa/Harare</option>
                                    <option value="Africa/Freetown">Africa/Freetown</option>
                                    <option value="Indian/Cocos">Indian/Cocos</option>
                                    <option value="Asia/Singapore">Asia/Singapore</option>
                                    <option value="America/Bogota">America/Bogota</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Europe/Belgrade">Europe/Belgrade</option>
                                    <option value="America/Monterrey">America/Monterrey</option>
                                    <option value="Europe/Budapest">Europe/Budapest</option>
                                    <option value="America/Nome">America/Nome</option>
                                    <option value="Asia/Pyongyang">Asia/Pyongyang</option>
                                    <option value="Pacific/Kanton">Pacific/Kanton</option>
                                    <option value="Etc/GMT+0">Etc/GMT+0</option>
                                    <option value="Australia/Eucla">Australia/Eucla</option>
                                    <option value="Asia/Yerevan">Asia/Yerevan</option>
                                    <option value="America/Guyana">America/Guyana</option>
                                    <option value="Pacific/Tahiti">Pacific/Tahiti</option>
                                    <option value="Europe/Uzhgorod">Europe/Uzhgorod</option>
                                    <option value="Chile/Continental">Chile/Continental</option>
                                    <option value="Pacific/Wallis">Pacific/Wallis</option>
                                    <option value="America/Argentina/Salta">America/Argentina/Salta</option>
                                    <option value="Asia/Jayapura">Asia/Jayapura</option>
                                    <option value="Europe/Vilnius">Europe/Vilnius</option>
                                    <option value="Africa/Nouakchott">Africa/Nouakchott</option>
                                    <option value="America/Adak">America/Adak</option>
                                    <option value="America/Argentina/Mendoza">America/Argentina/Mendoza</option>
                                    <option value="Australia/Hobart">Australia/Hobart</option>
                                    <option value="America/Punta_Arenas">America/Punta_Arenas</option>
                                    <option value="America/Guatemala">America/Guatemala</option>
                                    <option value="Indian/Reunion">Indian/Reunion</option>
                                    <option value="Pacific/Apia">Pacific/Apia</option>
                                    <option value="America/St_Kitts">America/St_Kitts</option>
                                    <option value="Asia/Baku">Asia/Baku</option>
                                    <option value="Africa/Bujumbura">Africa/Bujumbura</option>
                                    <option value="America/Campo_Grande">America/Campo_Grande</option>
                                    <option value="Asia/Ust-Nera">Asia/Ust-Nera</option>
                                    <option value="Etc/GMT-0">Etc/GMT-0</option>
                                    <option value="America/Lower_Princes">America/Lower_Princes</option>
                                    <option value="Asia/Dili">Asia/Dili</option>
                                    <option value="Asia/Chungking">Asia/Chungking</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="Asia/Kathmandu">Asia/Kathmandu</option>
                                    <option value="Asia/Katmandu">Asia/Katmandu</option>
                                    <option value="Asia/Baghdad">Asia/Baghdad</option>
                                    <option value="America/Goose_Bay">America/Goose_Bay</option>
                                    <option value="America/Kentucky/Monticello">America/Kentucky/Monticello</option>
                                    <option value="America/Rankin_Inlet">America/Rankin_Inlet</option>
                                    <option value="America/Belize">America/Belize</option>
                                    <option value="Indian/Antananarivo">Indian/Antananarivo</option>
                                    <option value="America/Knox_IN">America/Knox_IN</option>
                                    <option value="CET">CET</option>
                                    <option value="Europe/Rome">Europe/Rome</option>
                                    <option value="Asia/Anadyr">Asia/Anadyr</option>
                                    <option value="Australia/Tasmania">Australia/Tasmania</option>
                                    <option value="America/Araguaina">America/Araguaina</option>
                                    <option value="Pacific/Tongatapu">Pacific/Tongatapu</option>
                                    <option value="Pacific/Funafuti">Pacific/Funafuti</option>
                                    <option value="WET">WET</option>
                                    <option value="Asia/Qostanay">Asia/Qostanay</option>
                                    <option value="Australia/Sydney">Australia/Sydney</option>
                                    <option value="America/Belem">America/Belem</option>
                                    <option value="W-SU">W-SU</option>
                                    <option value="Asia/Pontianak">Asia/Pontianak</option>
                                    <option value="Asia/Shanghai">Asia/Shanghai</option>
                                    <option value="Europe/Andorra">Europe/Andorra</option>
                                    <option value="Pacific/Palau">Pacific/Palau</option>
                                    <option value="Africa/Tripoli">Africa/Tripoli</option>
                                    <option value="Europe/Riga">Europe/Riga</option>
                                    <option value="Europe/Podgorica">Europe/Podgorica</option>
                                    <option value="Antarctica/DumontDUrville">Antarctica/DumontDUrville</option>
                                    <option value="America/Grand_Turk">America/Grand_Turk</option>
                                    <option value="Factory">Factory</option>
                                    <option value="Africa/Douala">Africa/Douala</option>
                                    <option value="Europe/Paris">Europe/Paris</option>
                                    <option value="Asia/Tel_Aviv">Asia/Tel_Aviv</option>
                                    <option value="Asia/Phnom_Penh">Asia/Phnom_Penh</option>
                                    <option value="Pacific/Galapagos">Pacific/Galapagos</option>
                                    <option value="America/Toronto">America/Toronto</option>
                                    <option value="Pacific/Port_Moresby">Pacific/Port_Moresby</option>
                                    <option value="Africa/Libreville">Africa/Libreville</option>
                                    <option value="Europe/Belfast">Europe/Belfast</option>
                                    <option value="Pacific/Enderbury">Pacific/Enderbury</option>
                                    <option value="Europe/Kiev">Europe/Kiev</option>
                                    <option value="America/Indiana/Knox">America/Indiana/Knox</option>
                                    <option value="America/Nassau">America/Nassau</option>
                                    <option value="Africa/El_Aaiun">Africa/El_Aaiun</option>
                                    <option value="America/Barbados">America/Barbados</option>
                                    <option value="Asia/Thimphu">Asia/Thimphu</option>
                                    <option value="Pacific/Niue">Pacific/Niue</option>
                                    <option value="Canada/Central">Canada/Central</option>
                                    <option value="Europe/Guernsey">Europe/Guernsey</option>
                                    <option value="Pacific/Guam">Pacific/Guam</option>
                                    <option value="Europe/Kaliningrad">Europe/Kaliningrad</option>
                                    <option value="Indian/Chagos">Indian/Chagos</option>
                                    <option value="Africa/Algiers">Africa/Algiers</option>
                                    <option value="Atlantic/Jan_Mayen">Atlantic/Jan_Mayen</option>
                                    <option value="Asia/Bishkek">Asia/Bishkek</option>
                                    <option value="Etc/GMT+7">Etc/GMT+7</option>
                                    <option value="GMT+0">GMT+0</option>
                                    <option value="America/Cayenne">America/Cayenne</option>
                                    <option value="Etc/GMT-4">Etc/GMT-4</option>
                                    <option value="Canada/Atlantic">Canada/Atlantic</option>
                                    <option value="America/Thunder_Bay">America/Thunder_Bay</option>
                                    <option value="America/Pangnirtung">America/Pangnirtung</option>
                                    <option value="Etc/GMT-1">Etc/GMT-1</option>
                                    <option value="America/Los_Angeles">America/Los_Angeles</option>
                                    <option value="America/Rio_Branco">America/Rio_Branco</option>
                                    <option value="Africa/Windhoek">Africa/Windhoek</option>
                                    <option value="Europe/Jersey">Europe/Jersey</option>
                                    <option value="Asia/Bangkok">Asia/Bangkok</option>
                                    <option value="America/Jamaica">America/Jamaica</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="America/Argentina/San_Luis">America/Argentina/San_Luis</option>
                                    <option value="Africa/Khartoum">Africa/Khartoum</option>
                                    <option value="Asia/Riyadh">Asia/Riyadh</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="America/Eirunepe">America/Eirunepe</option>
                                    <option value="America/Montreal">America/Montreal</option>
                                    <option value="Asia/Tbilisi">Asia/Tbilisi</option>
                                    <option value="America/Montserrat">America/Montserrat</option>
                                    <option value="America/Denver">America/Denver</option>
                                    <option value="Australia/NSW">Australia/NSW</option>
                                    <option value="America/Indiana/Petersburg">America/Indiana/Petersburg</option>
                                    <option value="America/Porto_Velho">America/Porto_Velho</option>
                                    <option value="Asia/Vientiane">Asia/Vientiane</option>
                                    <option value="America/Guayaquil">America/Guayaquil</option>
                                    <option value="MST7MDT">MST7MDT</option>
                                    <option value="Asia/Qatar">Asia/Qatar</option>
                                    <option value="Asia/Makassar">Asia/Makassar</option>
                                    <option value="Asia/Sakhalin">Asia/Sakhalin</option>
                                    <option value="US/Michigan">US/Michigan</option>
                                    <option value="America/Argentina/Rio_Gallegos">America/Argentina/Rio_Gallegos</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Etc/GMT-9">Etc/GMT-9</option>
                                    <option value="America/Catamarca">America/Catamarca</option>
                                    <option value="Europe/Warsaw">Europe/Warsaw</option>
                                    <option value="Africa/Porto-Novo">Africa/Porto-Novo</option>
                                    <option value="America/Panama">America/Panama</option>
                                    <option value="Africa/Mbabane">Africa/Mbabane</option>
                                    <option value="Greenwich">Greenwich</option>
                                    <option value="US/Alaska">US/Alaska</option>
                                    <option value="Europe/Bratislava">Europe/Bratislava</option>
                                    <option value="Africa/Blantyre">Africa/Blantyre</option>
                                    <option value="Indian/Comoro">Indian/Comoro</option>
                                    <option value="Pacific/Majuro">Pacific/Majuro</option>
                                    <option value="localtime">localtime</option>
                                    <option value="Asia/Macau">Asia/Macau</option>
                                    <option value="America/Merida">America/Merida</option>
                                    <option value="America/Lima">America/Lima</option>
                                    <option value="America/Matamoros">America/Matamoros</option>
                                    <option value="America/Havana">America/Havana</option>
                                    <option value="Asia/Kuwait">Asia/Kuwait</option>
                                    <option value="America/Yellowknife">America/Yellowknife</option>
                                    <option value="Australia/ACT">Australia/ACT</option>
                                    <option value="Arctic/Longyearbyen">Arctic/Longyearbyen</option>
                                    <option value="Asia/Almaty">Asia/Almaty</option>
                                    <option value="Asia/Colombo">Asia/Colombo</option>
                                    <option value="UTC">UTC</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Antarctica/Vostok">Antarctica/Vostok</option>
                                    <option value="Europe/Simferopol">Europe/Simferopol</option>
                                    <option value="Pacific/Wake">Pacific/Wake</option>
                                    <option value="Pacific/Fiji">Pacific/Fiji</option>
                                    <option value="Europe/Vaduz">Europe/Vaduz</option>
                                    <option value="America/Menominee">America/Menominee</option>
                                    <option value="America/Santarem">America/Santarem</option>
                                    <option value="Asia/Chita">Asia/Chita</option>
                                    <option value="America/Yakutat">America/Yakutat</option>
                                    <option value="MET">MET</option>
                                    <option value="Europe/Zaporozhye">Europe/Zaporozhye</option>
                                    <option value="Etc/GMT+8">Etc/GMT+8</option>
                                    <option value="America/Ensenada">America/Ensenada</option>
                                    <option value="Europe/Lisbon">Europe/Lisbon</option>
                                    <option value="Etc/GMT+2">Etc/GMT+2</option>
                                    <option value="America/Mazatlan">America/Mazatlan</option>
                                    <option value="Europe/Mariehamn">Europe/Mariehamn</option>
                                    <option value="America/Sitka">America/Sitka</option>
                                    <option value="Africa/Lubumbashi">Africa/Lubumbashi</option>
                                    <option value="Navajo">Navajo</option>
                                    <option value="Asia/Taipei">Asia/Taipei</option>
                                    <option value="America/Fortaleza">America/Fortaleza</option>
                                    <option value="GB-Eire">GB-Eire</option>
                                    <option value="US/Indiana-Starke">US/Indiana-Starke</option>
                                    <option value="America/Dawson">America/Dawson</option>
                                    <option value="America/Glace_Bay">America/Glace_Bay</option>
                                    <option value="Africa/Kinshasa">Africa/Kinshasa</option>
                                    <option value="America/Manaus">America/Manaus</option>
                                    <option value="Antarctica/Davis">Antarctica/Davis</option>
                                    <option value="Etc/GMT-7">Etc/GMT-7</option>
                                    <option value="NZ-CHAT">NZ-CHAT</option>
                                    <option value="Asia/Calcutta">Asia/Calcutta</option>
                                    <option value="Australia/Yancowinna">Australia/Yancowinna</option>
                                    <option value="Europe/Sarajevo">Europe/Sarajevo</option>
                                    <option value="Etc/UCT">Etc/UCT</option>
                                    <option value="Africa/Kigali">Africa/Kigali</option>
                                    <option value="Europe/Amsterdam">Europe/Amsterdam</option>
                                    <option value="Asia/Ashgabat">Asia/Ashgabat</option>
                                    <option value="Africa/Banjul">Africa/Banjul</option>
                                    <option value="Atlantic/South_Georgia">Atlantic/South_Georgia</option>
                                    <option value="Asia/Krasnoyarsk">Asia/Krasnoyarsk</option>
                                    <option value="Indian/Mayotte">Indian/Mayotte</option>
                                    <option value="Antarctica/Syowa">Antarctica/Syowa</option>
                                    <option value="GMT">GMT</option>
                                    <option value="Europe/Malta">Europe/Malta</option>
                                    <option value="Asia/Vladivostok">Asia/Vladivostok</option>
                                    <option value="Asia/Muscat">Asia/Muscat</option>
                                    <option value="Asia/Macao">Asia/Macao</option>
                                    <option value="America/Boise">America/Boise</option>
                                    <option value="Africa/Ouagadougou">Africa/Ouagadougou</option>
                                    <option value="Asia/Atyrau">Asia/Atyrau</option>
                                    <option value="Asia/Tehran">Asia/Tehran</option>
                                    <option value="America/Kralendijk">America/Kralendijk</option>
                                    <option value="Antarctica/South_Pole">Antarctica/South_Pole</option>
                                    <option value="Europe/Nicosia">Europe/Nicosia</option>
                                    <option value="Asia/Ujung_Pandang">Asia/Ujung_Pandang</option>
                                    <option value="Australia/Brisbane">Australia/Brisbane</option>
                                    <option value="Africa/Maseru">Africa/Maseru</option>
                                    <option value="Asia/Aqtobe">Asia/Aqtobe</option>
                                    <option value="America/Shiprock">America/Shiprock</option>
                                    <option value="Brazil/West">Brazil/West</option>
                                    <option value="Asia/Istanbul">Asia/Istanbul</option>
                                    <option value="Atlantic/Madeira">Atlantic/Madeira</option>
                                    <option value="America/St_Thomas">America/St_Thomas</option>
                                    <option value="America/Detroit">America/Detroit</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Australia/Queensland">Australia/Queensland</option>
                                    <option value="Africa/Bamako">Africa/Bamako</option>
                                    <option value="America/Grenada">America/Grenada</option>
                                    <option value="America/Atka">America/Atka</option>
                                    <option value="Pacific/Marquesas">Pacific/Marquesas</option>
                                    <option value="US/Central">US/Central</option>
                                    <option value="Asia/Hebron">Asia/Hebron</option>
                                    <option value="Asia/Urumqi">Asia/Urumqi</option>
                                    <option value="America/Indianapolis">America/Indianapolis</option>
                                    <option value="Etc/GMT+9">Etc/GMT+9</option>
                                    <option value="Europe/Berlin">Europe/Berlin</option>
                                    <option value="Europe/Luxembourg">Europe/Luxembourg</option>
                                    <option value="Africa/Ndjamena">Africa/Ndjamena</option>
                                    <option value="Antarctica/McMurdo">Antarctica/McMurdo</option>
                                    <option value="Libya">Libya</option>
                                    <option value="America/North_Dakota/Center">America/North_Dakota/Center</option>
                                    <option value="America/North_Dakota/New_Salem">America/North_Dakota/New_Salem</option>
                                    <option value="America/Indiana/Vevay">America/Indiana/Vevay</option>
                                    <option value="Asia/Dubai">Asia/Dubai</option>
                                    <option value="Pacific/Kiritimati">Pacific/Kiritimati</option>
                                    <option value="Australia/Victoria">Australia/Victoria</option>
                                    <option value="America/Jujuy">America/Jujuy</option>
                                    <option value="Africa/Cairo">Africa/Cairo</option>
                                    <option value="Pacific/Truk">Pacific/Truk</option>
                                    <option value="Asia/Famagusta">Asia/Famagusta</option>
                                    <option value="Etc/GMT+1">Etc/GMT+1</option>
                                    <option value="Europe/Saratov">Europe/Saratov</option>
                                    <option value="Africa/Casablanca">Africa/Casablanca</option>
                                    <option value="Australia/LHI">Australia/LHI</option>
                                    <option value="Asia/Dhaka">Asia/Dhaka</option>
                                    <option value="Mexico/General">Mexico/General</option>
                                    <option value="America/Maceio">America/Maceio</option>
                                    <option value="Australia/North">Australia/North</option>
                                    <option value="America/Ciudad_Juarez">America/Ciudad_Juarez</option>
                                    <option value="Europe/Vatican">Europe/Vatican</option>
                                    <option value="Europe/Volgograd">Europe/Volgograd</option>
                                    <option value="America/Asuncion">America/Asuncion</option>
                                    <option value="Europe/Prague">Europe/Prague</option>
                                    <option value="America/Indiana/Indianapolis">America/Indiana/Indianapolis</option>
                                    <option value="America/Swift_Current">America/Swift_Current</option>
                                    <option value="ROC">ROC</option>
                                    <option value="America/Bahia">America/Bahia</option>
                                    <option value="Antarctica/Palmer">Antarctica/Palmer</option>
                                    <option value="America/Tortola">America/Tortola</option>
                                    <option value="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh</option>
                                    <option value="America/Kentucky/Louisville">America/Kentucky/Louisville</option>
                                    <option value="Asia/Thimbu">Asia/Thimbu</option>
                                    <option value="Asia/Yangon">Asia/Yangon</option>
                                    <option value="America/Antigua">America/Antigua</option>
                                    <option value="Africa/Maputo">Africa/Maputo</option>
                                    <option value="America/St_Barthelemy">America/St_Barthelemy</option>
                                    <option value="Zulu">Zulu</option>
                                    <option value="Etc/GMT-11">Etc/GMT-11</option>
                                    <option value="America/St_Vincent">America/St_Vincent</option>
                                    <option value="Europe/Bucharest">Europe/Bucharest</option>
                                    <option value="Asia/Nicosia">Asia/Nicosia</option>
                                    <option value="Antarctica/Rothera">Antarctica/Rothera</option>
                                    <option value="Europe/Gibraltar">Europe/Gibraltar</option>
                                    <option value="Europe/Chisinau">Europe/Chisinau</option>
                                    <option value="US/Eastern">US/Eastern</option>
                                    <option value="Asia/Novokuznetsk">Asia/Novokuznetsk</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="Pacific/Chuuk">Pacific/Chuuk</option>
                                    <option value="GMT-0">GMT-0</option>
                                    <option value="Europe/Tallinn">Europe/Tallinn</option>
                                    <option value="US/Aleutian">US/Aleutian</option>
                                    <option value="US/Pacific">US/Pacific</option>
                                    <option value="Australia/South">Australia/South</option>
                                    <option value="Asia/Kashgar">Asia/Kashgar</option>
                                    <option value="America/Puerto_Rico">America/Puerto_Rico</option>
                                    <option value="America/Aruba">America/Aruba</option>
                                    <option value="Antarctica/Troll">Antarctica/Troll</option>
                                    <option value="Pacific/Ponape">Pacific/Ponape</option>
                                    <option value="Europe/Athens">Europe/Athens</option>
                                    <option value="America/Martinique">America/Martinique</option>
                                    <option value="US/Hawaii">US/Hawaii</option>
                                    <option value="Asia/Manila">Asia/Manila</option>
                                    <option value="Indian/Maldives">Indian/Maldives</option>
                                    <option value="America/St_Lucia">America/St_Lucia</option>
                                    <option value="Indian/Christmas">Indian/Christmas</option>
                                    <option value="Kwajalein">Kwajalein</option>
                                    <option value="Europe/Oslo">Europe/Oslo</option>
                                    <option value="Asia/Chongqing">Asia/Chongqing</option>
                                    <option value="Atlantic/Reykjavik">Atlantic/Reykjavik</option>
                                    <option value="Asia/Hong_Kong">Asia/Hong_Kong</option>
                                    <option value="America/Boa_Vista">America/Boa_Vista</option>
                                    <option value="Brazil/Acre">Brazil/Acre</option>
                                    <option value="Asia/Jakarta">Asia/Jakarta</option>
                                    <option value="Atlantic/Faroe">Atlantic/Faroe</option>
                                    <option value="Asia/Beirut">Asia/Beirut</option>
                                    <option value="America/Tegucigalpa">America/Tegucigalpa</option>
                                    <option value="Asia/Novosibirsk">Asia/Novosibirsk</option>
                                    <option value="Etc/GMT-2">Etc/GMT-2</option>
                                    <option value="Australia/Melbourne">Australia/Melbourne</option>
                                    <option value="America/Ojinaga">America/Ojinaga</option>
                                    <option value="Europe/Minsk">Europe/Minsk</option>
                                    <option value="Canada/Saskatchewan">Canada/Saskatchewan</option>
                                    <option value="America/Caracas">America/Caracas</option>
                                    <option value="Africa/Djibouti">Africa/Djibouti</option>
                                    <option value="America/Blanc-Sablon">America/Blanc-Sablon</option>
                                    <option value="America/Curacao">America/Curacao</option>
                                    <option value="Europe/Skopje">Europe/Skopje</option>
                                    <option value="Europe/Stockholm">Europe/Stockholm</option>
                                    <option value="Etc/GMT+11">Etc/GMT+11</option>
                                    <option value="America/La_Paz">America/La_Paz</option>
                                    <option value="Europe/Madrid">Europe/Madrid</option>
                                    <option value="Asia/Amman">Asia/Amman</option>
                                    <option value="Asia/Dushanbe">Asia/Dushanbe</option>
                                    <option value="America/Paramaribo">America/Paramaribo</option>
                                    <option value="Asia/Kamchatka">Asia/Kamchatka</option>
                                    <option value="America/Winnipeg">America/Winnipeg</option>
                                    <option value="Pacific/Kosrae">Pacific/Kosrae</option>
                                    <option value="Asia/Kabul">Asia/Kabul</option>
                                    <option value="Australia/West">Australia/West</option>
                                    <option value="America/Santa_Isabel">America/Santa_Isabel</option>
                                    <option value="Europe/Tiraspol">Europe/Tiraspol</option>
                                    <option value="Etc/GMT-8">Etc/GMT-8</option>
                                    <option value="Canada/Mountain">Canada/Mountain</option>
                                    <option value="America/Dominica">America/Dominica</option>
                                    <option value="Africa/Lagos">Africa/Lagos</option>
                                    <option value="America/Mexico_City">America/Mexico_City</option>
                                    <option value="Pacific/Pitcairn">Pacific/Pitcairn</option>
                                    <option value="Pacific/Rarotonga">Pacific/Rarotonga</option>
                                    <option value="Asia/Bahrain">Asia/Bahrain</option>
                                    <option value="Europe/Isle_of_Man">Europe/Isle_of_Man</option>
                                    <option value="Pacific/Midway">Pacific/Midway</option>
                                    <option value="US/Arizona">US/Arizona</option>
                                    <option value="America/Argentina/Catamarca">America/Argentina/Catamarca</option>
                                    <option value="America/Argentina/Ushuaia">America/Argentina/Ushuaia</option>
                                    <option value="Europe/Sofia">Europe/Sofia</option>
                                    <option value="Asia/Yakutsk">Asia/Yakutsk</option>
                                    <option value="ROK">ROK</option>
                                    <option value="Pacific/Noumea">Pacific/Noumea</option>
                                    <option value="Etc/GMT-10">Etc/GMT-10</option>
                                    <option value="America/Hermosillo">America/Hermosillo</option>
                                    <option value="America/Miquelon">America/Miquelon</option>
                                    <option value="Africa/Niamey">Africa/Niamey</option>
                                    <option value="Etc/GMT-13">Etc/GMT-13</option>
                                    <option value="Brazil/East">Brazil/East</option>
                                    <option value="Europe/San_Marino">Europe/San_Marino</option>
                                    <option value="Atlantic/Canary">Atlantic/Canary</option>
                                    <option value="Africa/Kampala">Africa/Kampala</option>
                                    <option value="Europe/London">Europe/London</option>
                                    <option value="America/Phoenix">America/Phoenix</option>
                                    <option value="Africa/Gaborone">Africa/Gaborone</option>
                                    <option value="Africa/Abidjan">Africa/Abidjan</option>
                                    <option value="Africa/Ceuta">Africa/Ceuta</option>
                                    <option value="Atlantic/Stanley">Atlantic/Stanley</option>
                                    <option value="America/Thule">America/Thule</option>
                                    <option value="MST">MST</option>
                                    <option value="America/Argentina/La_Rioja">America/Argentina/La_Rioja</option>
                                    <option value="EST5EDT">EST5EDT</option>
                                    <option value="Pacific/Tarawa">Pacific/Tarawa</option>
                                    <option value="Canada/Pacific">Canada/Pacific</option>
                                    <option value="Pacific/Johnston">Pacific/Johnston</option>
                                    <option value="Europe/Istanbul">Europe/Istanbul</option>
                                    <option value="Asia/Ashkhabad">Asia/Ashkhabad</option>
                                    <option value="Pacific/Yap">Pacific/Yap</option>
                                    <option value="Etc/GMT-5">Etc/GMT-5</option>
                                    <option value="America/Indiana/Vincennes">America/Indiana/Vincennes</option>
                                    <option value="America/Argentina/Buenos_Aires">America/Argentina/Buenos_Aires</option>
                                    <option value="Asia/Tomsk">Asia/Tomsk</option>
                                    <option value="America/Rosario">America/Rosario</option>
                                    <option value="America/Chihuahua">America/Chihuahua</option>
                                    <option value="Africa/Sao_Tome">Africa/Sao_Tome</option>
                                    <option value="America/Nuuk">America/Nuuk</option>
                                    <option value="Etc/UTC">Etc/UTC</option>
                                    <option value="Australia/Currie">Australia/Currie</option>
                                    <option value="Etc/Zulu">Etc/Zulu</option>
                                    <option value="America/El_Salvador">America/El_Salvador</option>
                                    <option value="Africa/Asmara">Africa/Asmara</option>
                                    <option value="America/Anchorage">America/Anchorage</option>
                                    <option value="America/Argentina/Tucuman">America/Argentina/Tucuman</option>
                                    <option value="Atlantic/Faeroe">Atlantic/Faeroe</option>
                                    <option value="America/Vancouver">America/Vancouver</option>
                                    <option value="America/St_Johns">America/St_Johns</option>
                                    <option value="America/Recife">America/Recife</option>
                                    <option value="Africa/Nairobi">Africa/Nairobi</option>
                                    <option value="Africa/Luanda">Africa/Luanda</option>
                                    <option value="America/Argentina/San_Juan">America/Argentina/San_Juan</option>
                                    <option value="America/Cayman">America/Cayman</option>
                                    <option value="PRC">PRC</option>
                                    <option value="Indian/Kerguelen">Indian/Kerguelen</option>
                                    <option value="Asia/Tokyo">Asia/Tokyo</option>
                                    <option value="GB">GB</option>
                                    <option value="Australia/Lord_Howe">Australia/Lord_Howe</option>
                                    <option value="Asia/Rangoon">Asia/Rangoon</option>
                                    <option value="Mexico/BajaNorte">Mexico/BajaNorte</option>
                                    <option value="Africa/Conakry">Africa/Conakry</option>
                                    <option value="America/Bahia_Banderas">America/Bahia_Banderas</option>
                                    <option value="Australia/Perth">Australia/Perth</option>
                                    <option value="Europe/Astrakhan">Europe/Astrakhan</option>
                                    <option value="America/Montevideo">America/Montevideo</option>
                                    <option value="Etc/GMT+12">Etc/GMT+12</option>
                                    <option value="Atlantic/Azores">Atlantic/Azores</option>
                                    <option value="US/Samoa">US/Samoa</option>
                                    <option value="Asia/Kuala_Lumpur">Asia/Kuala_Lumpur</option>
                                    <option value="HST">HST</option>
                                    <option value="Antarctica/Mawson">Antarctica/Mawson</option>
                                    <option value="Pacific/Efate">Pacific/Efate</option>
                                    <option value="Europe/Zagreb">Europe/Zagreb</option>
                                    <option value="Asia/Damascus">Asia/Damascus</option>
                                    <option value="America/Danmarkshavn">America/Danmarkshavn</option>
                                    <option value="America/Edmonton">America/Edmonton</option>
                                    <option value="Pacific/Nauru">Pacific/Nauru</option>
                                    <option value="Atlantic/St_Helena">Atlantic/St_Helena</option>
                                    <option value="Etc/GMT-14">Etc/GMT-14</option>
                                    <option value="Africa/Johannesburg">Africa/Johannesburg</option>
                                    <option value="Africa/Asmera">Africa/Asmera</option>
                                    <option value="Australia/Broken_Hill">Australia/Broken_Hill</option>
                                    <option value="Africa/Tunis">Africa/Tunis</option>
                                    <option value="Europe/Samara">Europe/Samara</option>
                                    <option value="Europe/Dublin">Europe/Dublin</option>
                                    <option value="Antarctica/Casey">Antarctica/Casey</option>
                                    <option value="America/Tijuana">America/Tijuana</option>
                                    <option value="Etc/GMT+4">Etc/GMT+4</option>
                                    <option value="Pacific/Honolulu">Pacific/Honolulu</option>
                                    <option value="Canada/Eastern">Canada/Eastern</option>
                                    <option value="Africa/Dakar">Africa/Dakar</option>
                                    <option value="Asia/Aqtau">Asia/Aqtau</option>
                                    <option value="Pacific/Norfolk">Pacific/Norfolk</option>
                                    <option value="Atlantic/Cape_Verde">Atlantic/Cape_Verde</option>
                                    <option value="America/Mendoza">America/Mendoza</option>
                                    <option value="Etc/GMT0">Etc/GMT0</option>
                                    <option value="Etc/GMT-3">Etc/GMT-3</option>
                                    <option value="Etc/GMT+6">Etc/GMT+6</option>
                                    <option value="America/Halifax">America/Halifax</option>
                                    <option value="Asia/Barnaul">Asia/Barnaul</option>
                                    <option value="Europe/Tirane">Europe/Tirane</option>
                                    <option value="Africa/Timbuktu">Africa/Timbuktu</option>
                                    <option value="PST8PDT">PST8PDT</option>
                                    <option value="Africa/Dar_es_Salaam">Africa/Dar_es_Salaam</option>
                                    <option value="America/Argentina/ComodRivadavia">America/Argentina/ComodRivadavia</option>
                                    <option value="Europe/Moscow">Europe/Moscow</option>
                                    <option value="Europe/Vienna">Europe/Vienna</option>
                                    <option value="America/Port_of_Spain">America/Port_of_Spain</option>
                                    <option value="Asia/Tashkent">Asia/Tashkent</option>
                                    <option value="America/Sao_Paulo">America/Sao_Paulo</option>
                                    <option value="America/Cancun">America/Cancun</option>
                                    <option value="Asia/Omsk">Asia/Omsk</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Africa/Addis_Ababa">Africa/Addis_Ababa</option>
                                    <option value="Europe/Ljubljana">Europe/Ljubljana</option>
                                    <option value="America/Juneau">America/Juneau</option>
                                    <option value="NZ">NZ</option>
                                    <option value="America/Marigot">America/Marigot</option>
                                    <option value="Atlantic/Bermuda">Atlantic/Bermuda</option>
                                    <option value="America/Metlakatla">America/Metlakatla</option>
                                    <option value="America/Indiana/Marengo">America/Indiana/Marengo</option>
                                    <option value="Chile/EasterIsland">Chile/EasterIsland</option>
                                    <option value="Pacific/Samoa">Pacific/Samoa</option>
                                    <option value="America/Coral_Harbour">America/Coral_Harbour</option>
                                  </select>
                                </div>
                                <div>
                                    <label for="latitude">Latitude</label>
                                    <input id="latitude" type="number" placeholder="Enter Latitude" v-model="Location_inputs.latitude" class="form-input"  step="any" required /><!-- required -->
                                </div>
                                <div>
                                    <label for="longitude">Longitude</label>
                                    <input id="longitude" type="number" placeholder="Enter Longitude" v-model="Location_inputs.longitude" class="form-input"  step="any" required/><!-- required -->
                                </div>
                                <div>
                                    <label for="countryCode">Country Code</label>
                                    <input id="countryCode" type="text" placeholder="Enter Country Code" v-model="Location_inputs.countryCode" maxlength="2" minlength="2"  pattern="[A-Za-z]{2}" class="form-input" /><!-- required -->
                                </div>
                                <div>
                                    <label for="partyId">Party ID</label>
                                    <input id="partyId" type="text" placeholder="Enter Party ID" v-model="Location_inputs.partyId" class="form-input"  />
                                </div>
                                <div>
                                    <label for="name">Name</label>
                                    <input id="name" type="text" placeholder="Enter Name" v-model="Location_inputs.name" class="form-input"  /><!-- required -->
                                </div>
                                <div>
                                    <label for="address">Address</label>
                                    <input id="address" type="text" placeholder="Enter Address" v-model="Location_inputs.address" class="form-input"  /><!-- required -->
                                </div>
                                <div>
                                    <label for="city">City</label>
                                    <input id="city" type="text" placeholder="Enter City" v-model="Location_inputs.city" class="form-input"  /><!-- required -->
                                </div>
                                <div>
                                    <label for="postalCode">Postal Code</label>
                                    <input id="postalCode" type="text" placeholder="Enter Postal Code" v-model="Location_inputs.postalCode" class="form-input"  /><!-- required -->
                                </div>
                                <div>
                                    <label for="state">State</label>
                                    <input id="state" type="text" placeholder="Enter State" v-model="Location_inputs.state" class="form-input"  />
                                </div>

                                <div>
                                  <label for="country" class="block text-sm font-medium text-gray-700 dark:text-white-light">
                                    Country
                                  </label>
                                  <select v-model="Location_inputs.country" id="country" class="form-select w-7/8 mr-4" ><!-- required -->
                                    <option value="AF">AF</option>
                                    <option value="AX">AX</option>
                                    <option value="AL">AL</option>
                                    <option value="DZ">DZ</option>
                                    <option value="AS">AS</option>
                                    <option value="AD">AD</option>
                                    <option value="AO">AO</option>
                                    <option value="AI">AI</option>
                                    <option value="AQ">AQ</option>
                                    <option value="AG">AG</option>
                                    <option value="AR">AR</option>
                                    <option value="AM">AM</option>
                                    <option value="AW">AW</option>
                                    <option value="AU">AU</option>
                                    <option value="AT">AT</option>
                                    <option value="AZ">AZ</option>
                                    <option value="BS">BS</option>
                                    <option value="BH">BH</option>
                                    <option value="BD">BD</option>
                                    <option value="BB">BB</option>
                                    <option value="BY">BY</option>
                                    <option value="BE">BE</option>
                                    <option value="BZ">BZ</option>
                                    <option value="BJ">BJ</option>
                                    <option value="BM">BM</option>
                                    <option value="BT">BT</option>
                                    <option value="BO">BO</option>
                                    <option value="BQ">BQ</option>
                                    <option value="BA">BA</option>
                                    <option value="BW">BW</option>
                                    <option value="BV">BV</option>
                                    <option value="BR">BR</option>
                                    <option value="IO">IO</option>
                                    <option value="BN">BN</option>
                                    <option value="BG">BG</option>
                                    <option value="BF">BF</option>
                                    <option value="BI">BI</option>
                                    <option value="CV">CV</option>
                                    <option value="KH">KH</option>
                                    <option value="CM">CM</option>
                                    <option value="CA">CA</option>
                                    <option value="KY">KY</option>
                                    <option value="CF">CF</option>
                                    <option value="TD">TD</option>
                                    <option value="CL">CL</option>
                                    <option value="CN">CN</option>
                                    <option value="CX">CX</option>
                                    <option value="CC">CC</option>
                                    <option value="CO">CO</option>
                                    <option value="KM">KM</option>
                                    <option value="CG">CG</option>
                                    <option value="CD">CD</option>
                                    <option value="CK">CK</option>
                                    <option value="CR">CR</option>
                                    <option value="CI">CI</option>
                                    <option value="HR">HR</option>
                                    <option value="CU">CU</option>
                                    <option value="CW">CW</option>
                                    <option value="CY">CY</option>
                                    <option value="CZ">CZ</option>
                                    <option value="DK">DK</option>
                                    <option value="DJ">DJ</option>
                                    <option value="DM">DM</option>
                                    <option value="DO">DO</option>
                                    <option value="EC">EC</option>
                                    <option value="EG">EG</option>
                                    <option value="SV">SV</option>
                                    <option value="GQ">GQ</option>
                                    <option value="ER">ER</option>
                                    <option value="EE">EE</option>
                                    <option value="SZ">SZ</option>
                                    <option value="ET">ET</option>
                                    <option value="FK">FK</option>
                                    <option value="FO">FO</option>
                                    <option value="FJ">FJ</option>
                                    <option value="FI">FI</option>
                                    <option value="FR">FR</option>
                                    <option value="GF">GF</option>
                                    <option value="PF">PF</option>
                                    <option value="TF">TF</option>
                                    <option value="GA">GA</option>
                                    <option value="GM">GM</option>
                                    <option value="GE">GE</option>
                                    <option value="DE">DE</option>
                                    <option value="GH">GH</option>
                                    <option value="GI">GI</option>
                                    <option value="GR">GR</option>
                                    <option value="GL">GL</option>
                                    <option value="GD">GD</option>
                                    <option value="GP">GP</option>
                                    <option value="GU">GU</option>
                                    <option value="GT">GT</option>
                                    <option value="GG">GG</option>
                                    <option value="GN">GN</option>
                                    <option value="GW">GW</option>
                                    <option value="GY">GY</option>
                                    <option value="HT">HT</option>
                                    <option value="HM">HM</option>
                                    <option value="VA">VA</option>
                                    <option value="HN">HN</option>
                                    <option value="HK">HK</option>
                                    <option value="HU">HU</option>
                                    <option value="IS">IS</option>
                                    <option value="IN">IN</option>
                                    <option value="ID">ID</option>
                                    <option value="IR">IR</option>
                                    <option value="IQ">IQ</option>
                                    <option value="IE">IE</option>
                                    <option value="IM">IM</option>
                                    <option value="IL">IL</option>
                                    <option value="IT">IT</option>
                                    <option value="JM">JM</option>
                                    <option value="JP">JP</option>
                                    <option value="JE">JE</option>
                                    <option value="JO">JO</option>
                                    <option value="KZ">KZ</option>
                                    <option value="KE">KE</option>
                                    <option value="KI">KI</option>
                                    <option value="KW">KW</option>
                                    <option value="KG">KG</option>
                                    <option value="LA">LA</option>
                                    <option value="LV">LV</option>
                                    <option value="LB">LB</option>
                                    <option value="LS">LS</option>
                                    <option value="LR">LR</option>
                                    <option value="LY">LY</option>
                                    <option value="LI">LI</option>
                                    <option value="LT">LT</option>
                                    <option value="LU">LU</option>
                                    <option value="MO">MO</option>
                                    <option value="MG">MG</option>
                                    <option value="MW">MW</option>
                                    <option value="MY">MY</option>
                                    <option value="MV">MV</option>
                                    <option value="ML">ML</option>
                                    <option value="MT">MT</option>
                                    <option value="MH">MH</option>
                                    <option value="MQ">MQ</option>
                                    <option value="MR">MR</option>
                                    <option value="MU">MU</option>
                                    <option value="YT">YT</option>
                                    <option value="MX">MX</option>
                                    <option value="FM">FM</option>
                                    <option value="MD">MD</option>
                                    <option value="MC">MC</option>
                                    <option value="MN">MN</option>
                                    <option value="ME">ME</option>
                                    <option value="MS">MS</option>
                                    <option value="MA">MA</option>
                                    <option value="MZ">MZ</option>
                                    <option value="MM">MM</option>
                                    <option value="NA">NA</option>
                                    <option value="NR">NR</option>
                                    <option value="NP">NP</option>
                                    <option value="NL">NL</option>
                                    <option value="NC">NC</option>
                                    <option value="NZ">NZ</option>
                                    <option value="NI">NI</option>
                                    <option value="NE">NE</option>
                                    <option value="NG">NG</option>
                                    <option value="NU">NU</option>
                                    <option value="NF">NF</option>
                                    <option value="KP">KP</option>
                                    <option value="MK">MK</option>
                                    <option value="MP">MP</option>
                                    <option value="NO">NO</option>
                                    <option value="OM">OM</option>
                                    <option value="PK">PK</option>
                                    <option value="PW">PW</option>
                                    <option value="PS">PS</option>
                                    <option value="PA">PA</option>
                                    <option value="PG">PG</option>
                                    <option value="PY">PY</option>
                                    <option value="PE">PE</option>
                                    <option value="PH">PH</option>
                                    <option value="PN">PN</option>
                                    <option value="PL">PL</option>
                                    <option value="PT">PT</option>
                                    <option value="PR">PR</option>
                                    <option value="QA">QA</option>
                                    <option value="RE">RE</option>
                                    <option value="RO">RO</option>
                                    <option value="RU">RU</option>
                                    <option value="RW">RW</option>
                                    <option value="BL">BL</option>
                                    <option value="SH">SH</option>
                                    <option value="KN">KN</option>
                                    <option value="LC">LC</option>
                                    <option value="MF">MF</option>
                                    <option value="PM">PM</option>
                                    <option value="VC">VC</option>
                                    <option value="WS">WS</option>
                                    <option value="SM">SM</option>
                                    <option value="ST">ST</option>
                                    <option value="SA">SA</option>
                                    <option value="SN">SN</option>
                                    <option value="RS">RS</option>
                                    <option value="SC">SC</option>
                                    <option value="SL">SL</option>
                                    <option value="SG">SG</option>
                                    <option value="SX">SX</option>
                                    <option value="SK">SK</option>
                                    <option value="SI">SI</option>
                                    <option value="SB">SB</option>
                                    <option value="SO">SO</option>
                                    <option value="ZA">ZA</option>
                                    <option value="GS">GS</option>
                                    <option value="KR">KR</option>
                                    <option value="SS">SS</option>
                                    <option value="ES">ES</option>
                                    <option value="LK">LK</option>
                                    <option value="SD">SD</option>
                                    <option value="SR">SR</option>
                                    <option value="SJ">SJ</option>
                                    <option value="SE">SE</option>
                                    <option value="CH">CH</option>
                                    <option value="SY">SY</option>
                                    <option value="TW">TW</option>
                                    <option value="TJ">TJ</option>
                                    <option value="TZ">TZ</option>
                                    <option value="TH">TH</option>
                                    <option value="TL">TL</option>
                                    <option value="TG">TG</option>
                                    <option value="TK">TK</option>
                                    <option value="TO">TO</option>
                                    <option value="TT">TT</option>
                                    <option value="TN">TN</option>
                                    <option value="TR">TR</option>
                                    <option value="TM">TM</option>
                                    <option value="TC">TC</option>
                                    <option value="TV">TV</option>
                                    <option value="UG">UG</option>
                                    <option value="UA">UA</option>
                                    <option value="AE">AE</option>
                                    <option value="GB">GB</option>
                                    <option value="UM">UM</option>
                                    <option value="US">US</option>
                                    <option value="UY">UY</option>
                                    <option value="UZ">UZ</option>
                                    <option value="VU">VU</option>
                                    <option value="VE">VE</option>
                                    <option value="VN">VN</option>
                                    <option value="VG">VG</option>
                                    <option value="VI">VI</option>
                                    <option value="WF">WF</option>
                                    <option value="EH">EH</option>
                                    <option value="YE">YE</option>
                                    <option value="ZM">ZM</option>
                                    <option value="ZW">ZW</option>

                                  </select>
                                </div>

                                <div>
                                  <label for="parkingType" class="block text-sm font-medium text-gray-700 dark:text-white-light">
                                    Parking Type
                                  </label>
                                  <select v-model="Location_inputs.parkingType" id="parkingType" class="form-select w-7/8 mr-4" > <!-- required -->
                                    <option value="ALONG_MOTORWAY">ALONG_MOTORWAY</option>
                                    <option value="PARKING_GARAGE">PARKING_GARAGE</option>
                                    <option value="PARKING_LOT">PARKING_LOT</option>
                                    <option value="ON_DRIVEWAY">ON_DRIVEWAY</option>
                                    <option value="ON_STREET">ON_STREET</option>
                                    <option value="UNDERGROUND_GARAGE">UNDERGROUND_GARAGE</option>

                                  </select>
                                </div>


                                <div>
                                    <label for="substationId">Substation ID</label>
                                    <input id="substationId" type="text" placeholder="Enter Substation ID" v-model="Location_inputs.substationId" class="form-input" />
                                </div>
                            </div>
                            <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                

        </TabPanel>

        <TabPanel>


                      <div class="max-h-144 overflow-y-auto p-4 bg-gray-200 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                          <form class="space-y-5" @submit.prevent="submitChargepoint_inputs()"><!--@submit.prevent="submitLocation_inputs()"-->
                              <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                                  <div>
                                      <label for="chargepointId">Chargepoint ID</label>
                                      <input id="chargepointId" type="text" placeholder="Enter Chargepoint ID" v-model="Chargepoint_inputs.chargepointId" class="form-input" required />
                                  </div>
                                  <div>
                                      <label for="ChargepointModel">ChargepointModel</label>
                                      <input id="ChargepointModel" type="text" placeholder="Enter Chargepoint ID" v-model="Chargepoint_inputs.chargepoint_model" class="form-input" />
                                  </div>
                                  <div>
                                      <label for="chargepointVendor">Chargepoint Vendor</label>
                                      <input id="chargepointVendor" type="text" placeholder="Enter Chargepoint Vendor" v-model="Chargepoint_inputs.chargepointVendor" class="form-input" />
                                  </div>
                                  <div>
                                      <label for="chargeboxSerialNumber">Chargebox Serial Number</label>
                                      <input id="chargeboxSerialNumber" type="text" placeholder="Enter Chargebox Serial Number" v-model="Chargepoint_inputs.chargeboxSerialNumber" class="form-input"  />
                                  </div>
                                  <div>
                                      <label for="chargepointSerialNumber">Serial Number</label>
                                      <input id="chargepointSerialNumber" type="text" placeholder="Enter Chargepoint Serial Number" v-model="Chargepoint_inputs.chargepointSerialNumber" class="form-input"  />
                                  </div>
                                  <div>
                                      <label for="IpAddress">Ip Address</label>
                                      <input id="IpAddress" type="text" placeholder="Enter Chargepoint Serial Number" v-model="Chargepoint_inputs.ipaddress" class="form-input"  required />
                                  </div>
                                  <div>
                                      <label for="WebsocketPort">Websocket Port</label>
                                      <input id="WebsocketPort" type="number" placeholder="Enter Chargepoint Serial Number" v-model="Chargepoint_inputs.websocketport" class="form-input"  required />
                                  </div>
                                  <div>
                                      <label for="firmwareVersion">Firmware Version</label>
                                      <input id="firmwareVersion" type="text" placeholder="Enter Firmware Version" v-model="Chargepoint_inputs.firmwareVersion" class="form-input"  />
                                  </div>
                                  <div>
                                    <label for="ChargepointStatus" class="block text-sm font-medium text-gray-700 dark:text-white-light">
                                      Chargepoint Status
                                    </label>
                                    <select v-model="Chargepoint_inputs.chargepoint_status" id="ChargepointStatus" class="form-select w-7/8 mr-4" > <!-- required -->
                                      <option value="Available">Available</option>
                                      <option value="Unavailable">Unavailable</option>
                                      <option value="Faulted">Faulted</option>
                                    </select>
                                  </div>
                                  <div>
                                    <label for="ocppVersion" class="block text-sm font-medium text-gray-700 dark:text-white-light">
                                      OCPP Version
                                    </label>
                                    <select v-model="Chargepoint_inputs.ocppVersion" id="ocppVersion" class="form-select w-7/8 mr-4" > <!-- required -->
                                      <option value="ocpp16">ocpp16</option>
                                      <option value="ocpp201">ocpp201</option>
                                    </select>
                                  </div>
                              </div>
                              <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                  <button type="submit" class="btn btn-primary">Submit</button>
                              </div>
                          </form>
                      </div>
                  


        </TabPanel>
      </TabPanels>
    </Tabgroup>
</div>

                    <!--============================================================ Tarrif ============================================================-->

                    <div  class="panel h-full gap-6 mb-6">
   <TabGroup>

      <TabList class="flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">

              <Tab as="template" v-slot="{ selected }" >
                <a href="javascript:;" class="flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary !outline-none" :class="{ '!border-primary text-primary': selected }">
                  <icon-home />
                  Create Tariff 
                </a>
              </Tab>
              <Tab as="template" v-slot="{ selected }" id="profile-overview">
                <a href="javascript:;" @click="Task_7_Get_Functions" class="flex gap-2 p-4 border-b border-transparent hover:border-red-500 hover:text-orange-500 !outline-none" :class="{ '!border-red-500 text-orange-500': selected }">
                  <icon-user />
                  Update Tariff 
                </a>
              </Tab>

    </TabList>

      <TabPanels>

        <TabPanel>

                      <div class="max-h-144 overflow-y-auto p-4 bg-white dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]" >
                        <form class="space-y-5" @submit.prevent="submitTarriffElement_inputs()" > <!--@submit.prevent="submitTarriffElement_inputs()"-->
                          <div>
                                <label for="use_existing_tarriff_element">Use Existing TarriffElement</label>
                                <input id="use_existing_tarriff_element" type="checkbox" v-model="use_existing_tarriff_element" class="form-checkbox" @change="existing_tarriff_case"/>
                                
                              </div>

                                <div class="table-responsive gap-6 mb-6 max-h-72 overflow-y-auto" v-if="use_existing_tarriff_element">
                                    <table class="table-hover">
                                      <thead>
                                        <tr>
                                          <th>Tariff Element ID</th>
                                          <th>Vat</th>
                                          <th>Type</th>
                                          <th>Price</th>
                                          <th>Step Size</th>
                                          <th>Restrictions</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <template v-for="data in processedData" :key="data.id">
                                          <tr>
                                            <td class="whitespace-nowrap">{{ data.Tarrif_id }}</td>
                                            <td>
                                              <template v-if="data.price_components.length > 1">
                                                <ul>
                                                  <li v-for="(component, index) in data.price_components" :key="index">
                                                    {{ component.vat }}
                                                  </li>
                                                </ul>
                                              </template>
                                              <template v-else>
                                                {{ data.price_components[0].vat }}
                                              </template>
                                            </td>
                                            <td>
                                              <template v-if="data.price_components.length > 1">
                                                <ul>
                                                  <li v-for="(component, index) in data.price_components" :key="index">
                                                    {{ component.type }}
                                                  </li>
                                                </ul>
                                              </template>
                                              <template v-else>
                                                {{ data.price_components[0].type }}
                                              </template>
                                            </td>
                                            <td>
                                              <template v-if="data.price_components.length > 1">
                                                <ul>
                                                  <li v-for="(component, index) in data.price_components" :key="index">
                                                    {{ component.price }}
                                                  </li>
                                                </ul>
                                              </template>
                                              <template v-else>
                                                {{ data.price_components[0].price }}
                                              </template>
                                            </td>
                                            <td>
                                              <template v-if="data.price_components.length > 1">
                                                <ul>
                                                  <li v-for="(component, index) in data.price_components" :key="index">
                                                    {{ component.step_size }}
                                                  </li>
                                                </ul>
                                              </template>
                                              <template v-else>
                                                {{ data.price_components[0].step_size }}
                                              </template>
                                            </td>
                                            <td>{{ data.Restrictions }}</td>
                                          </tr>
                                        </template>
                                      </tbody>
                                    </table>
                                  </div>

                    <!--#####################################################################################################################################################-->
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5" v-if="!use_existing_tarriff_element"><!-- If case statement here-->
                              
                                <div>
                                  <label for="Price_Component_Type" class="block text-sm font-medium text-gray-700 dark:text-white-light">
                                      Price Component Type
                                  </label>
                                  <select  id="timeZone" class="form-select w-7/8 mr-4" v-model="TarriffElement_inputs.type" required>
                                    <option value="ENERGY">ENERGY</option>
                                    <option value="FLAT">FLAT</option>
                                    <option value="PARKING_TIME">PARKING_TIME</option>
                                    <option value="TIME ">TIME </option>
                                  </select>
                                </div>
                                <div>
                                    <label for="Price">Price</label>
                                    <input id="Price" type="number" placeholder="Enter Price"  class="form-input"  step="any" v-model="TarriffElement_inputs.price" required /><!-- required -->
                                </div>
                                <div>
                                    <label for="Vat">Vat</label>
                                    <input id="Vat" type="number" placeholder="Enter Vat"  class="form-input"  step="any" v-model="TarriffElement_inputs.vat" required/><!-- required -->
                                </div>
                                <div>
                                  <label for="Step_Size">Step Size</label>
                                  <input id="Step_Size" type="number" placeholder="Enter Step_Size"  class="form-input"  step="any"  v-model="TarriffElement_inputs.step_size"  required/><!-- required -->
                              </div>
                              <div>
                                <label for="Restrictions">Restrictions</label>
                                <input id="Restrictions" type="checkbox" v-model="Restrictions" class="form-checkbox" />
                                
                              </div>
                              
                            </div>
                            <hr class="my-4 border-t border-gray-300 dark:border-gray-700">
                            <!-- Here I put the if case statement-->
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 bg-blue-100 p-4 rounded-md" v-if="Restrictions">
                              <div>
                                  <label for="Start_time">Start time</label>
                                  <input id="Start_time" type="text" placeholder="Start time" class="form-input" v-model="TarriffElement_inputs.start_time" />
                              </div>
                                <div>
                                  <label for="End_time">End time</label>
                                  <input id="End_time" type="text" placeholder="End time" class="form-input" v-model="TarriffElement_inputs.end_time"/>
                                </div>
                                <div>
                                  <label for="Start_date">Start date</label>
                                  <input id="Start_date" type="text" placeholder="Start date" class="form-input" v-model="TarriffElement_inputs.start_date"/>
                                </div>
                                <div>
                                  <label for="End_date">End date</label>
                                  <input id="End_date" type="text" placeholder="End date" class="form-input" v-model="TarriffElement_inputs.end_date" />
                                </div>
                                <div>
                                  <label for="Min_kwh">Min kWh</label>
                                  <input id="Min_kwh" type="number" step="any" placeholder="Min kWh" class="form-input" v-model="TarriffElement_inputs.min_kwh"/>
                                </div>
                                <div>
                                  <label for="Max_kwh">Max kWh</label>
                                  <input id="Max_kwh" type="number" step="any" placeholder="Max kWh" class="form-input" v-model="TarriffElement_inputs.max_kwh"/>
                                </div>
                                <div>
                                  <label for="Min_current">Min current</label>
                                  <input id="Min_current" type="number" step="any" placeholder="Min current" class="form-input" v-model="TarriffElement_inputs.min_current"/>
                                </div>
                                <div>
                                  <label for="Max_current">Max current</label>
                                  <input id="Max_current" type="number" step="any" placeholder="Max current" class="form-input" v-model="TarriffElement_inputs.max_current"/>
                                </div>
                                <div>
                                  <label for="Min_power">Min power</label>
                                  <input id="Min_power" type="number" step="any" placeholder="Min power" class="form-input" v-model="TarriffElement_inputs.min_power"/>
                                </div>
                                <div>
                                  <label for="Max_power">Max power</label>
                                  <input id="Max_power" type="number" step="any" placeholder="Max power" class="form-input" v-model="TarriffElement_inputs.max_power"/>
                                </div>
                                <div>
                                  <label for="Min_duration">Min duration</label>
                                  <input id="Min_duration" type="number" step="any" placeholder="Min duration" class="form-input" v-model="TarriffElement_inputs.min_duration"/>
                                </div>
                                <div>
                                  <label for="Max_duration">Max duration</label>
                                  <input id="Max_duration" type="number" step="any" placeholder="Max duration" class="form-input" v-model="TarriffElement_inputs.max_duration"/>
                                </div>
                                <div>
                                  <label for="day_of_week" class="block text-sm font-medium text-gray-700 dark:text-white-light">
                                      Day of Week
                                  </label>
                                  <select  id="day_of_week" class="form-select w-7/8 mr-4" v-model="TarriffElement_inputs.day_of_week" required>
                                    <option value="MONDAY">MONDAY</option>
                                    <option value="TUESDAY">TUESDAY</option>
                                    <option value="WEDNESDAY">WEDNESDAY</option>
                                    <option value="THURSDAY ">THURSDAY </option>
                                    <option value="FRIDAY ">FRIDAY </option>
                                    <option value="SATURDAY ">SATURDAY </option>
                                    <option value="SUNDAY  ">SUNDAY  </option>
                                  </select>
                                </div>
                                <div>
                                  <label for="Reservation" class="block text-sm font-medium text-gray-700 dark:text-white-light">
                                      Reservation
                                  </label>
                                  <select  id="Reservation" class="form-select w-7/8 mr-4" v-model="TarriffElement_inputs.reservation" required>
                                    <option value="RESERVATION">RESERVATION</option>
                                    <option value="RESERVATION_EXPIRES ">RESERVATION_EXPIRES </option>
                                  </select>
                                </div>

                            </div>
                            <hr class="my-4 border-t border-gray-300 dark:border-gray-700" v-if="Restrictions">
                            






                          <!-- Tarriff Declaration BODY -->
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">

                              <div v-if="use_existing_tarriff_element">
                                <label for="tariffDropdown" class="block text-sm font-medium text-gray-700 dark:text-white-light">
                                  Tariff Element ID
                                </label>
                                <select v-model="selectedTariff" id="tariffDropdown" class="form-select w-3/4 mr-4" >
                                  <option v-for="tariff in Task_7_Tarriff" :key="tariff.id" :value="tariff.id">
                                    {{ tariff.id }}
                                  </option>
                                </select>
                              </div>
                              <div>
                                <label for="tariff_alt_text_language">Tariff Alt Language</label>
                                 <select id="tariff_alt_text_language" class="form-select w-7/8 mr-4" v-model="TarriffElement_inputs.tariff_alt_text_language" >
                                    <!-- List of languages -->
                                    <option value="en">English</option>
                                    <option value="en">Greek</option>
                                    <option value="es">Spanish</option>
                                    <option value="fr">French</option>
                                    <option value="de">German</option>
                                    <option value="zh">Chinese</option>
                                    <option value="ja">Japanese</option>
                                    <option value="ru">Russian</option>
                                    <option value="ar">Arabic</option>
                                    <!-- Add more languages as needed -->
                                </select>
                            </div>
                            <div>
                                  <label for="tariff_alt_text_text">Tariff Alt Text</label>
                                  <input id="tariff_alt_text_text" type="text" placeholder="Tariff Text" class="form-input" v-model="TarriffElement_inputs.tariff_alt_text_text" />
                            </div>
                            <div>
                              <label for="min_price_excl_vat">Min Price Excl Vat</label>
                              <input id="min_price_excl_vat" type="number" placeholder="Minimum Price Excluding Vat" class="form-input" step="any" v-model="TarriffElement_inputs.min_price_excl_vat" />
                            </div>
                            <div>
                              <label for="min_price_incl_vat">Min Price Incl Vat</label>
                              <input id="min_price_incl_vat" type="number" placeholder="Minimum Price Including Vat" class="form-input" step="any" v-model="TarriffElement_inputs.min_price_incl_vat" />
                            </div>
                            <div>
                              <label for="max_price_excl_vat">Max Price Excl Vat</label>
                              <input id="max_price_excl_vat" type="number" placeholder="Maximum Price Excluding Vat" class="form-input" step="any" v-model="TarriffElement_inputs.max_price_excl_vat" />
                            </div>
                            <div>
                              <label for="max_price_incl_vat">Max Price Incl Vat</label>
                              <input id="max_price_incl_vat" type="number" placeholder="Maximum Price Including Vat" class="form-input" step="any" v-model="TarriffElement_inputs.max_price_incl_vat"/>
                            </div>
                            <div>
                                <label for="tarriff_countrycode">Country Code</label>
                                <input id="tarriff_countrycode" type="text" placeholder="Enter Country Code" maxlength="2" minlength="2"  pattern="[A-Za-z]{2}" class="form-input" v-model="TarriffElement_inputs.tarriff_countrycode"/><!-- required -->
                            </div>
                            <div>
                                <label for="tarriff_party_id">Party ID</label>
                                <input id="tarriff_party_id" type="text" placeholder="Enter Party ID"  maxlength="3" minlength="3"  pattern="[A-Za-z]{2}" class="form-input" v-model="TarriffElement_inputs.tarriff_party_id"/><!-- required -->
                            </div>
                            <div>
                              <label for="currency">Currency</label>
                                <select id="currency" class="form-select w-7/8 mr-4" v-model="TarriffElement_inputs.currency" >
                                <option value="EUR">Euro (EUR)</option>
                                <option value="USD">United States Dollar (USD)</option>
                                <option value="JPY">Japanese Yen (JPY)</option>
                                <option value="GBP">British Pound (GBP)</option>
                                <option value="AUD">Australian Dollar (AUD)</option>
                                <option value="CAD">Canadian Dollar (CAD)</option>
                                <option value="CHF">Swiss Franc (CHF)</option>
                                <option value="CNY">Chinese Yuan (CNY)</option>
                                <option value="SEK">Swedish Krona (SEK)</option>
                                <option value="NZD">New Zealand Dollar (NZD)</option>
                                <option value="MXN">Mexican Peso (MXN)</option>
                                <option value="SGD">Singapore Dollar (SGD)</option>
                                <option value="HKD">Hong Kong Dollar (HKD)</option>
                                <option value="NOK">Norwegian Krone (NOK)</option>
                                <option value="KRW">South Korean Won (KRW)</option>
                                <option value="TRY">Turkish Lira (TRY)</option>
                                <option value="INR">Indian Rupee (INR)</option>
                                <option value="RUB">Russian Ruble (RUB)</option>
                                <option value="BRL">Brazilian Real (BRL)</option>
                                <option value="ZAR">South African Rand (ZAR)</option>
                              </select>
                            </div>
                            <div>
                              <label for="tarrif_type">Type</label>
                                <select id="tarrif_type" class="form-select w-7/8 mr-4" v-model="TarriffElement_inputs.tarrif_type">
                                <option value="AD_HOC_PAYMENT">AD_HOC_PAYMENT</option>
                                <option value="PROFILE_CHEAP">PROFILE_CHEAP</option>
                                <option value="PROFILE_FAST">PROFILE_FAST</option>
                                <option value="PROFILE_GREEN">PROFILE_GREEN</option>
                                <option value="REGULAR">REGULAR</option>
                              </select>
                            </div>
                            <div>
                              <label for="start_date_time">Start Date-Time:</label>
                              <input id="start_date_time" type="datetime-local" v-model="TarriffElement_inputs.start_date_time">
                            </div>

                            <div>
                              <label for="end_date_time">End Date-Time:</label>
                              <input id="end_date_time" type="datetime-local" v-model="TarriffElement_inputs.end_date_time">
                            </div>

                        </div>
                        <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                

        </TabPanel>

        <TabPanel>

          <div class="max-h-144 overflow-y-auto p-4 bg-white dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
            <form class="space-y-5" @submit.prevent="submitForm"> <!--@submit.prevent="submitTarriffElement_inputs()"-->

                  <div class="table-responsive gap-6 mb-6 max-h-72 overflow-y-auto" >
                        <table class="table-hover">
                          <thead>
                            <tr>
                              <th>Tariff Element ID</th>
                              <th>Vat</th>
                              <th>Type</th>
                              <th>Price</th>
                              <th>Step Size</th>
                              <th>Restrictions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <template v-for="data in processedData" :key="data.id">
                              <tr>
                                <td class="whitespace-nowrap">{{ data.Tarrif_id }}</td>
                                <td>
                                  <template v-if="data.price_components.length > 1">
                                    <ul>
                                      <li v-for="(component, index) in data.price_components" :key="index">
                                        {{ component.vat }}
                                      </li>
                                    </ul>
                                  </template>
                                  <template v-else>
                                    {{ data.price_components[0].vat }}
                                  </template>
                                </td>
                                <td>
                                  <template v-if="data.price_components.length > 1">
                                    <ul>
                                      <li v-for="(component, index) in data.price_components" :key="index">
                                        {{ component.type }}
                                      </li>
                                    </ul>
                                  </template>
                                  <template v-else>
                                    {{ data.price_components[0].type }}
                                  </template>
                                </td>
                                <td>
                                  <template v-if="data.price_components.length > 1">
                                    <ul>
                                      <li v-for="(component, index) in data.price_components" :key="index">
                                        {{ component.price }}
                                      </li>
                                    </ul>
                                  </template>
                                  <template v-else>
                                    {{ data.price_components[0].price }}
                                  </template>
                                </td>
                                <td>
                                  <template v-if="data.price_components.length > 1">
                                    <ul>
                                      <li v-for="(component, index) in data.price_components" :key="index">
                                        {{ component.step_size }}
                                      </li>
                                    </ul>
                                  </template>
                                  <template v-else>
                                    {{ data.price_components[0].step_size }}
                                  </template>
                                </td>
                                <td>{{ data.Restrictions }}</td>
                              </tr>
                            </template>
                          </tbody>
                        </table>
                      </div>

                  <!-- ===================================================================TARIFF MAIN=======================================================================-->
                  <hr class="my-4 border-t border-gray-300 dark:border-gray-700">


                      <div class="table-responsive gap-6 mb-6 max-h-96 overflow-y-auto">
                        <table class="table-hover">
                          <thead>
                            <tr>
                              <th>Tariff ID</th>
                              <th>Tariff Alt Text</th>
                              <th>Tariff Alt Language</th>
                              <th>Min Price (Excl VAT)</th>
                              <th>Min Price (Incl VAT)</th>
                              <th>Max Price (Excl VAT)</th>
                              <th>Max Price (Incl VAT)</th>
                              <th>Tariff Element ID</th>
                              <th>Country Code</th>
                              <th>Party ID</th>
                              <th>Currency</th>
                              <th>Type</th>
                              <th>Start Date Time</th>
                              <th>End Date Time</th>
                              <th>Last Updated</th>
                            </tr>
                          </thead>
                          <tbody>
                            <template v-for="(tariff, index) in Task_7_Tarriff_Main" :key="tariff.id">
                              <tr>
                                <td>{{ `Tariff_ID#${index + 1}` }}</td><!--<td>{{ tariff.id }}</td>-->
                                <td>{{ tariff.tariff_alt_text[0].text }}</td>
                                <td>{{ tariff.tariff_alt_text[0].language }}</td>
                                <td>{{ tariff.min_price.excl_vat }}</td>
                                <td>{{ tariff.min_price.incl_vat }}</td>
                                <td>{{ tariff.max_price.excl_vat }}</td>
                                <td>{{ tariff.max_price.incl_vat }}</td>
                                <td>{{ tariff.elements}}</td>
                                <td>{{ tariff.country_code }}</td>
                                <td>{{ tariff.party_id }}</td>
                                <td>{{ tariff.currency }}</td>
                                <td>{{ tariff.type }}</td>
                                <td>{{ tariff.start_date_time }}</td>
                                <td>{{ tariff.end_date_time }}</td>
                                <td>{{ tariff.last_updated }}</td>
                              </tr>
                            </template>
                          </tbody>
                        </table>
                      </div>


                      <hr class="my-4 border-t border-gray-300 dark:border-gray-700">
                        <!-- Tarriff Declaration BODY -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                          <div>
                            <label for="tariffDropdown" class="block text-sm font-medium text-gray-700 dark:text-white-light">
                              Tariff Selection ID
                            </label>
                            <select v-model="selectedMainTariffId" id="tariffDropdown" class="form-select w-3/4 mr-4" required @change="onTariffSelect">
                              <option disabled value="">Please select a tariff</option>
                              <option v-for="(tariff, index) in Task_7_Tarriff_Main" :key="tariff.id" :value="tariff.id">
                                {{ `Tariff_ID#${index + 1}` }}
                              </option>
                            </select>
                          </div>


                        <!-- FOR LOOP -->
                        <div v-for="(altText, index) in TarriffElement_inputs_Patch.tariff_alt_text" :key="index">
                          <div>
                            <label :for="'tariff_alt_text_language_' + index">Tariff Alt Language</label>
                            <select :id="'tariff_alt_text_language_' + index" class="form-select w-7/8 mr-4" v-model="altText.language">
                              <option value="EN">English</option>
                              <option value="GR">Greek</option>
                              <option value="ES">Spanish</option>
                              <option value="FR">French</option>
                              <option value="DE">German</option>
                              <option value="ZH">Chinese</option>
                              <option value="JA">Japanese</option>
                              <option value="RU">Russian</option>
                              <option value="AR">Arabic</option>
                            </select>
                          </div>
                          <div>
                            <label :for="'tariff_alt_text_text_' + index">Tariff Alt Text</label>
                            <input :id="'tariff_alt_text_text_' + index" type="text" placeholder="Tariff Text" class="form-input" v-model="altText.text" />
                          </div>
                        </div>

                        <div>
                          <label for="min_price_excl_vat">Min Price Excl Vat</label>
                          <input id="min_price_excl_vat" type="number" placeholder="Minimum Price Excluding Vat" class="form-input" step="any" v-model="TarriffElement_inputs_Patch.min_price_excl_vat" />
                        </div>
                        <div>
                          <label for="min_price_incl_vat">Min Price Incl Vat</label>
                          <input id="min_price_incl_vat" type="number" placeholder="Minimum Price Including Vat" class="form-input" step="any" v-model="TarriffElement_inputs_Patch.min_price_incl_vat" />
                        </div>
                        <div>
                          <label for="max_price_excl_vat">Max Price Excl Vat</label>
                          <input id="max_price_excl_vat" type="number" placeholder="Maximum Price Excluding Vat" class="form-input" step="any" v-model="TarriffElement_inputs_Patch.max_price_excl_vat" />
                        </div>
                        <div>
                          <label for="max_price_incl_vat">Max Price Incl Vat</label>
                          <input id="max_price_incl_vat" type="number" placeholder="Maximum Price Including Vat" class="form-input" step="any" v-model="TarriffElement_inputs_Patch.max_price_incl_vat"/>
                        </div>
                        <div>
                          <label for="tarriff_countrycode">Country Code</label>
                          <input id="tarriff_countrycode" type="text" placeholder="Enter Country Code" maxlength="2" minlength="2" pattern="[A-Za-z]{2}" class="form-input" v-model="TarriffElement_inputs_Patch.tarriff_countrycode"/>
                        </div>
                        <div>
                          <label for="tarriff_party_id">Party ID</label>
                          <input id="tarriff_party_id" type="text" placeholder="Enter Party ID" maxlength="3" minlength="3" pattern="[A-Za-z]{2}" class="form-input" v-model="TarriffElement_inputs_Patch.tarriff_party_id"/>
                        </div>
                        <div>
                          <label for="currency">Currency</label>
                          <select id="currency" class="form-select w-7/8 mr-4" v-model="TarriffElement_inputs_Patch.currency">
                            <option value="EUR">Euro (EUR)</option>
                            <option value="USD">United States Dollar (USD)</option>
                            <option value="JPY">Japanese Yen (JPY)</option>
                            <option value="GBP">British Pound (GBP)</option>
                            <option value="AUD">Australian Dollar (AUD)</option>
                            <option value="CAD">Canadian Dollar (CAD)</option>
                            <option value="CHF">Swiss Franc (CHF)</option>
                            <option value="CNY">Chinese Yuan (CNY)</option>
                            <option value="SEK">Swedish Krona (SEK)</option>
                            <option value="NZD">New Zealand Dollar (NZD)</option>
                            <option value="MXN">Mexican Peso (MXN)</option>
                            <option value="SGD">Singapore Dollar (SGD)</option>
                            <option value="HKD">Hong Kong Dollar (HKD)</option>
                            <option value="NOK">Norwegian Krone (NOK)</option>
                            <option value="KRW">South Korean Won (KRW)</option>
                            <option value="TRY">Turkish Lira (TRY)</option>
                            <option value="INR">Indian Rupee (INR)</option>
                            <option value="RUB">Russian Ruble (RUB)</option>
                            <option value="BRL">Brazilian Real (BRL)</option>
                            <option value="ZAR">South African Rand (ZAR)</option>
                          </select>
                        </div>
                        <div>
                          <label for="tarrif_type">Type</label>
                          <select id="tarrif_type" class="form-select w-7/8 mr-4" v-model="TarriffElement_inputs_Patch.tarrif_type">
                            <option value="AD_HOC_PAYMENT">AD_HOC_PAYMENT</option>
                            <option value="PROFILE_CHEAP">PROFILE_CHEAP</option>
                            <option value="PROFILE_FAST">PROFILE_FAST</option>
                            <option value="PROFILE_GREEN">PROFILE_GREEN</option>
                            <option value="REGULAR">REGULAR</option>
                          </select>
                        </div>
                        <div>
                          
                          <label for="start_date_time">Start Date-Time:</label>
                          <label for="start_date_time">{{TarriffElement_inputs_Patch.start_date_time}}</label>

                          <label for="start_date_time_check">Update Start Date Time <input id="start_date_time_check" type="checkbox" v-model="start_date_time_check" class="form-checkbox" /></label>
                          <!--@change="start_date_time_check_function"-->

                          <input v-if="start_date_time_check"  id="start_date_time" type="datetime-local" v-model="TarriffElement_inputs_Patch.start_date_time" @change="StartDateChange">
                                
                              
                        </div>

                        <div>
                          <label for="end_date_time">End Date-Time:</label>
                          <label for="end_date_time_check">{{TarriffElement_inputs_Patch.end_date_time}}</label>

                          <label for="end_date_time_check">Update End Date Time <input id="end_date_time_check" type="checkbox" v-model="end_date_time_check" class="form-checkbox"/></label>
                          <!-- @change="existing_tarriff_case"-->

                          <input v-if="end_date_time_check" id="end_date_time_check" type="datetime-local" v-model="TarriffElement_inputs_Patch.end_date_time" @change="EndDateChange">
                        </div>


                        <!-- <div>
                          <label for="end_date_time">End Date-Time Value</label>
                          <input id="end_date_time" type="text" v-model="end_time">
                        </div>

                        <div>
                          <label for="last_updated_date_time">Last Updated Date-Time:</label>
                          <input id="last_updated_date_time" type="datetime-local" v-model="TarriffElement_inputs_Patch.last_updated_date_time">
                        </div>-->
                        
                        <div>
                          <label for="last_updated_date_time">Last_Updated Date:</label>
                          <label for="last_updated_date_time">{{TarriffElement_inputs_Patch.last_updated_date_time}}</label>
                        </div>

          </div>
                            <!-- ===================================================================TARIFF MAIN=======================================================================-->









                  
                
                <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <button type="submit" class="btn btn-danger">Delete</button>
                </div>
                
            </form>
        </div>
    

</TabPanel>
      </TabPanels>
    </Tabgroup>
</div>

                </TabPanel>
          </TabPanels> 
    </TabGroup>

</div>









                            




</template>

<script  setup>
import { ref, onMounted, computed } from 'vue';
import L from "leaflet";
import "leaflet-routing-machine";

// Import Font Awesome core and the icon components
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import apexchart from 'vue3-apexcharts';
import { LMap, LTileLayer, LMarker, LPopup  } from '@vue-leaflet/vue-leaflet';
import { useAppStore } from '@/stores/index';
import axios from 'axios';
import { useRoute } from 'vue-router';
import CryptoJS from 'crypto-js';
import IconHome from '@/components/icon/icon-home.vue';
import IconUser from '@/components/icon/icon-user.vue';
import LRoutingMachine from './routing_map/LRoutingMachine.vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email, sameAs } from '@vuelidate/validators';
import { faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';
import IconMenu from '@/components/icon/icon-menu.vue';
import IconSun from '@/components/icon/icon-sun.vue';
import IconMoon from '@/components/icon/icon-moon.vue';
import IconLaptop from '@/components/icon/icon-laptop.vue';
import IconLogout from '@/components/icon/icon-logout.vue';
import { IRouter, IGeocoder, LineOptions } from 'leaflet-routing-machine';
import "leaflet/dist/leaflet.css"

const store = useAppStore();


// Add the icons to the library
library.add(faArrowLeft,faArrowLeftRotate);

const mapId = 'map';
const mapObject = ref(null);
const routingControl = ref(null);
const zoom = 10;
const center = L.latLng(37.9838096,  23.7275388);
const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const currentLocationMarker = ref(null);

const startLat = ref('');
const startLng = ref('');
const endLat = ref('');
const endLng = ref('');
//const flag=ref(0);

const startAddress = ref('');
const destinationAddress = ref('');

const Task_5_locations = ref([]);

L.Popup.prototype._animateZoom = function (e) {
  if (!this._map) {
    return
  }
  var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center),
    anchor = this._getAnchor()
  L.DomUtil.setPosition(this._container, pos.add(anchor))
}
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

const Task_5 = async () => {
  try {

  //Connection with BackEnd
  // Define the API URL and query parameters

  const apiUrl = 'http://localhost:5173/api/chargepoint/';
  
  const query = {   // Key-value pair for the query parameter
                   fields: ['location__coordinates,location__city,chargepoint_status,location__address']};
  
  const queryString = new URLSearchParams(query).toString();
      const fullApiUrl = `${apiUrl}?${queryString}`;
      console.log('Task5 URL:',fullApiUrl)

  
      const requestOptions = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token.value}`,
          },
      };

      const response = await fetch(fullApiUrl, requestOptions);
      const data = await response.json(); // Parse response body as JSON
      Task_5_locations.value=data
      console.log("Task5_values",Task_5_locations);
    

  } catch (error) {
      console.error('HEY! An error occurred:', error.message);
      return null; // Return null in case of error
  }
};


const initializeMap = async () => {
  try {
    mapObject.value = L.map(mapId, {
      zoom: zoom,
      center: center,
    });

    L.tileLayer(osmUrl, {
      attribution: attribution,
    }).addTo(mapObject.value);

    console.log("Task5_test: oUtsie");

    // Render initial markers
    Task_5_locations.value.forEach((location, index) => {
      const markerIcon = getMarkerIcon(location.chargepoint_status);
      const coords = location.location__coordinates;
      
      
        if (typeof coords.latitude === 'number' && typeof coords.longitude === 'number') {
          console.log(`Task5_Initialize[${index}]: OK`);

          const marker = L.marker([coords.latitude, coords.longitude], { icon: markerIcon })
            .addTo(mapObject.value)
            .bindPopup(`<div>
                        <strong>City:</strong> ${location.location__city}<br>
                        <strong>Address:</strong> ${location.location__address}<br>
                        <strong>Number of Sockets </strong>4<br>
                        <strong>Sockets Power </strong>22kW<br>

                      </div>
                    `);//.bindPopup(location.location__city);


            
    
          marker.on('click', (e) => {
            updateInputFields(e.latlng);
          });
        } else {
          console.error(`Task5_Initialize[${index}]: Error - Coordinates are not valid numbers:`, coords);
        }
    });

    // Listen for clicks on the map
    mapObject.value.on('click', (e) => {
      updateInputFields(e.latlng);
    });
  } catch (error) {
    console.error("An error occurred during map initialization:", error);
  }
};


const clearRouting = () => {
  if (routingControl.value) {
    mapObject.value.removeControl(routingControl.value);
    routingControl.value = null;
  }

  mapObject.value.eachLayer(layer => {
    if (layer instanceof L.Marker && !layer._icon.classList.contains('current-location-marker')) {
      mapObject.value.removeLayer(layer);
    }
  });

  // Reset input values
  startLat.value = '';
  startLng.value = '';
  endLat.value = '';
  endLng.value = '';

  // Re-render initial markers
  Task_5_locations.value.forEach(location => {
    const markerIcon = getMarkerIcon(location.chargepoint_status);
    const coords = location.location__coordinates;
    const marker = L.marker([coords.latitude, coords.longitude], { icon: markerIcon })
      .addTo(mapObject.value)
      .bindPopup(location.location__city);

    marker.on('click', (e) => {
      updateInputFields(e.latlng);
    });
  });

  // Re-render the current location marker
  if (currentLocationMarker.value) {
    currentLocationMarker.value.addTo(mapObject.value);
  }
};

const updateInputFields = (latlng) => {
  if (!startLat.value) {
    startLat.value = latlng.lat.toString();
    startLng.value = latlng.lng.toString();
    getAddress(startLat.value, startLng.value, 'start');
  } else if (!endLat.value) {
    endLat.value = latlng.lat.toString();
    endLng.value = latlng.lng.toString();
    getAddress(endLat.value, endLng.value, 'end');
  } else {
    // If both fields are filled, reset and start over
    startLat.value = latlng.lat.toString();
    startLng.value = latlng.lng.toString();
    endLat.value = '';
    endLng.value = '';
    getAddress(startLat.value, startLng.value, 'start');
    destinationAddress.value = '';
    
  }
};

const initializeWaypoints = async () => {
  
  // Clear existing markers
  mapObject.value.eachLayer(layer => {
    if (layer instanceof L.Marker) {
      mapObject.value.removeLayer(layer);
    }
  });

  // Get coordinates for start and destination addresses
  await getCoordinates(startAddress.value, 'start');
  await getCoordinates(destinationAddress.value, 'end');
  await new Promise(resolve => setTimeout(resolve, 1000));
  //await delay(5000)

  // Define waypoints using the coordinates obtained from the addresses
  const startWaypoint = {
    
    latLng: L.latLng(parseFloat(startLat.value), parseFloat(startLng.value)),
    chargepointStatus: 'Available' // or fetch from Task_5_locations
  };

  const endWaypoint = {
    latLng: L.latLng(parseFloat(endLat.value), parseFloat(endLng.value)),
    chargepointStatus: 'Unavailable' // or fetch from Task_5_locations
  };

  const waypoints = [startWaypoint, endWaypoint];

  // Perform routing with the obtained waypoints
  if (routingControl.value) {
    routingControl.value.setWaypoints(waypoints);
  } else {
    routingControl.value = L.Routing.control({
      waypoints: waypoints,
      routeWhileDragging: true,
      lineOptions: {
        styles: [{
          color: '#FF0000', // Default color for the route
          opacity: 0.6,
          weight: 5
        }]
      },
      createMarker: (i, waypoint, n) => {
        let markerIcon;
        if (i === 0) { // Starting waypoint
          markerIcon = new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          });
        } else if (i === n - 1) { // Destination waypoint
          markerIcon = new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
          });
        } else { // Intermediate waypoints
          markerIcon = getMarkerIcon(waypoint.chargepointStatus);
        }
        console.log("Returning ",[waypoint.latLng, { icon: markerIcon }])
        return L.marker(waypoint.latLng, { icon: markerIcon });
      }
    }).addTo(mapObject.value);
  }
};



const handleClear = () => {
  clearRouting();
  startAddress.value = '';
  destinationAddress.value = '';
};

const getCurrentLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const latLng = L.latLng(lat, lng);

      // Create marker
      const marker = L.marker(latLng, {
        icon: new L.Icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
      }).addTo(mapObject.value).bindPopup('Current Location').openPopup();

      // Update input fields with coordinates when marker is clicked
      marker.on('click', () => {
        if (!startLat.value) {
          startLat.value = lat.toString();
          startLng.value = lng.toString();
          getAddress(lat, lng, 'start');
        } else if (!endLat.value && startLat.value) {
          endLat.value = lat.toString();
          endLng.value = lng.toString();
          getAddress(lat, lng, 'end');
        } else if (endLat.value && startLat.value) {
          startLat.value = lat.toString();
          startLng.value = lng.toString();
          endLat.value = "";
          endLng.value = "";
          getAddress(lat, lng, 'start');
        }
        // Call reverse geocoding function to get address
        
      });

      // Optionally set as start or end point
      if (!startLat.value) {
        startLat.value = lat.toString();
        startLng.value = lng.toString();
        getAddress(lat, lng, 'start');
      } else if (!endLat.value && startLat.value) {
        endLat.value = lat.toString();
        endLng.value = lng.toString();
        getAddress(lat, lng, 'end');
      }else if (endLat.value && startLat.value) {
          startLat.value = lat.toString();
          startLng.value = lng.toString();
          endLat.value = "";
          endLng.value = "";
          getAddress(lat, lng, 'start');
        }
    }, error => {
      console.error(error);
      alert('Error retrieving location');
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
};

// Function to perform reverse geocoding and update addresses using OpenStreetMap's Nominatim API
const getAddress = async (lat, lng, type) => {
  const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.display_name) {
      const address = data.display_name;
      if (type === 'start') {
        startAddress.value = address;
      } else if (type === 'end') {
        destinationAddress.value = address;
      }
    }
  } catch (error) {
    console.error('Error fetching address:', error);
  }
};

const getCoordinates = async  (address, type) => {
  const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${address}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data && data.length > 0) {
        const firstResult = data[0];
        const lat = parseFloat(firstResult.lat);
        const lon = parseFloat(firstResult.lon);
        console.log("lat",lat);
        console.log("lat",lon);
        if (type === 'start') {
          startLat.value = lat;
          startLng.value = lon;
          
        } else if (type === 'end') {
          endLat.value = lat;
          endLng.value = lon;
          
        }
        
      } else {
        
        console.error('No coordinates found for the address:', address);
      }
    })
    .catch(error => {
      console.error('Error fetching coordinates:', error);
    });
};
const swapAddresses = async (direction) => {
  if (direction === 'backward') {
    [startAddress.value, destinationAddress.value] = [destinationAddress.value, startAddress.value];
    [startLat.value, endLat.value] = [endLat.value, startLat.value];
    [startLng.value, endLng.value] = [endLng.value, startLng.value];
  }
  clearRouting();
  //await initializeWaypoints();
};

//==================================ADMIN TOOLS======================================================


const location_id=ref([]);

const Location_inputs = ref({
  timeZone: "",
  latitude: 0.0,
  longitude: 0.0,
  countryCode: "",
  partyId: "",

  name: "",
  address: "",
  city: "",
  postalCode: "",
  state: "",
  country: "",
  parkingType: "",
  substationId: ""
  });
  

  const submitLocation_inputs = async () => {
    //console.log("Location1 values",Location_inputs)
      //console.log("Location2 values",Location_inputs.value)
    try {


            const query = { 
            time_zone: Location_inputs.value.timeZone,
            countryCode: Location_inputs.value.countryCode,

            coordinates:{latitude: Location_inputs.value.latitude,
                         longtitude: Location_inputs.value.longitude},
            partyId: Location_inputs.value.partyId,
            name: Location_inputs.value.name,
            address: Location_inputs.value.address,
            city: Location_inputs.value.city,
            postal_code: Location_inputs.value.postalCode,
            state: Location_inputs.value.state,
            country: Location_inputs.value.country,
            parking_type: Location_inputs.value.parkingType,
            substation_id: Location_inputs.value.substationId
        };
        console.log("query",query)
        const apiUrl = `http://localhost:5173/api/location/`;

        
            console.log('Task LOCATIONS URL:', apiUrl);

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token.value}`,
                },
                body: JSON.stringify(query) // Send query parameters in the request body
            };

            console.log("Options",requestOptions)
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.json(); // Parse response body as JSON
            location_id.value=data.id;
            console.log("Location_inputs",location_id.value)
        } catch (error) {
            console.error('An error occurred:', error.message);
            return null; // Return null in case of error
        }
    }
//================================== Chargepoint ======================================================
const Chargepoint_inputs = ref({
  chargepointId: "",
  chargepoint_model: "",
  chargepointVendor: "",
  chargeboxSerialNumber: "",
  chargepointSerialNumber: "",

  ipaddress: "",
  websocketport: 0,
  firmwareVersion: "",
  chargepoint_status: "",
  ocppVersion: ""
  });
  

  const submitChargepoint_inputs = async () => {
    //console.log("Location1 values",Location_inputs)
      //console.log("Location2 values",Location_inputs.value)
    try {


            const query = { 
              chargepoint_id: Chargepoint_inputs.value.chargepointId,
              location: location_id.value,
              chargepoint_model: Chargepoint_inputs.value.chargepoint_model,
              chargepoint_vendor: Chargepoint_inputs.value.chargepointVendor,
              chargebox_serial_number: Chargepoint_inputs.value.chargeboxSerialNumber,
              chargepoint_serial_number: Chargepoint_inputs.value.chargepointSerialNumber,
              firmware_version: Chargepoint_inputs.value.firmwareVersion,
              ip_address: Chargepoint_inputs.value.ipaddress,
              websocket_port: Chargepoint_inputs.value.websocketport,
              chargepoint_status: Chargepoint_inputs.value.chargepoint_status,
              ocpp_version: Chargepoint_inputs.value.ocppVersion
        };
        console.log("query",query)
        const apiUrl = `http://localhost:5173/api/chargepoint/`;

        
            console.log('Task Chargepoints URL:', apiUrl);

            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token.value}`,
                },
                body: JSON.stringify(query) // Send query parameters in the request body
            };

            console.log("Chargepoint Options",requestOptions)
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.json(); // Parse response body as JSON
        } catch (error) {
            console.error('An error occurred:', error.message);
            return null; // Return null in case of error
        }
    }


  //===============================Tarriff Declaration========================================================

  const use_existing_tarriff_element=ref(false);
  const Restrictions=ref(false);


const existing_tarriff_case = () => {
  
  if (use_existing_tarriff_element.value){

    use_existing_tarriff_element.value= true;
    Restrictions.value= false;
    Task_7_Tarriff_get_info();
    //alert("True,False")

  }else{
    use_existing_tarriff_element.value= false;
    Restrictions.value= false;
    //alert("False,False")
  }

}

const Task_7_Tarriff=ref([]);
const selectedTariff=ref([]);

const Task_7_Tarriff_Main=ref([]);

const flag_case=ref([]);
const selectedMainTariffId=ref('');//in the Patch tab
const Task_7_selected_Main_Tariff_Id=ref([]);//It is trigerred when I chosse specific Tariff in the patch tab

const Task_7_Tarriff_get_info= async () => {
  try {

      //const apiUrl = `http://localhost:5173/api/user/?username=${username.value}`;
      const apiUrl = `http://localhost:5173/api/tariffelement/`;

      // Construct the URL with query parameters if provided
      //const queryString = new URLSearchParams(query || {}).toString();
      //const fullApiUrl = `${apiUrl}${queryString}/`; // Append query parameters

      //const queryString = new URLSearchParams(query).toString();
      //const fullApiUrl = `${apiUrl}?${queryString}`;
      const fullApiUrl = `${apiUrl}`;
      console.log('Task7 URL:',fullApiUrl)

  
      const requestOptions = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token.value}`,
          },
      };

      const response = await fetch(fullApiUrl, requestOptions);
      const data = await response.json(); // Parse response body as JSON
      Task_7_Tarriff.value=data
      console.log("Task_7_Tarriff",Task_7_Tarriff.value)
  } catch (error) {
      console.error('An error occurred:', error.message);
      return null; // Return null in case of error
  }
};

const processedData = computed(() => {
  return Task_7_Tarriff.value.map(tariff => ({
    Tarrif_id: tariff.id,
    price_components: tariff.price_components,
    Restrictions: tariff.restrictions.length > 0 ? "Yes" : "No"
  }));
});


const Task_7_Tarriff_MAIN_get_info= async () => {
  try {

      const query = {
                      
                      fields: ['id,tariff_alt_text,min_price,max_price,elements,country_code,party_id,currency,type,start_date_time,end_date_time,last_updated'],
                      }
      //const apiUrl = `http://localhost:5173/api/user/?username=${username.value}`;
      const apiUrl = `http://localhost:5173/api/tariff/`;

      // Construct the URL with query parameters if provided
      //const queryString = new URLSearchParams(query || {}).toString();
      //const fullApiUrl = `${apiUrl}${queryString}/`; // Append query parameters

      const queryString = new URLSearchParams(query).toString();
      const fullApiUrl = `${apiUrl}?${queryString}`;
      //const fullApiUrl = `${apiUrl}`;
      console.log('Task7_MAIN URL:',fullApiUrl)

  
      const requestOptions = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token.value}`,
          },
      };

      const response = await fetch(fullApiUrl, requestOptions);
      const data = await response.json(); // Parse response body as JSON
      Task_7_Tarriff_Main.value=data
      console.log("Task_7_Tarriff_Main",Task_7_Tarriff_Main.value)
  } catch (error) {
      console.error('An error occurred:', error.message);
      return null; // Return null in case of error
  }
};



const Task_7_Get_Functions= async () => {
  Task_7_Tarriff_get_info();
  Task_7_Tarriff_MAIN_get_info();

}

//const end_time=ref('');
//const EndDateChange= async () => {
//  end_time.value=formatDateForInput(TarriffElement_inputs_Patch.value.end_date_time)
//
//}

                        //<div>
                          
                          //<label for="start_date_time">Start Date-Time:</label>
                          //<label for="start_date_time">{{TarriffElement_inputs_Patch.start_date_time}}</label>

                          //<label for="start_date_time_check">Update Start Date TIme</label>
                          //<input id="start_date_time_check" type="checkbox" v-model="start_date_time_check" class="form-checkbox" @change="start_date_time_check_function"/>


                          //<input id="start_date_time" type="datetime-local" v-model="TarriffElement_inputs_Patch.start_date_time" @change="StartDateChange">
                                
                              
                        //</div>

                        //<div>
                        //  <label for="end_date_time">End Date-Time:</label>
                        //  <label for="start_date_time">{{TarriffElement_inputs_Patch.end_date_time}}</label>

                         // <label for="use_existing_tarriff_element">Update End Date TIme</label>
                       //   <input id="use_existing_tarriff_element" type="checkbox" v-model="use_existing_tarriff_element" class="form-checkbox" @change="existing_tarriff_case"/>


                        //  <input id="end_date_time" type="datetime-local" v-model="TarriffElement_inputs_Patch.end_date_time" @change="EndDateChange">
                        //</div>

const start_date_time_check=ref(false);

const StartDateChange = () => {

  TarriffElement_inputs_Patch.value.start_date_time=formatDateForStart_END(TarriffElement_inputs_Patch.value.start_date_time);

}

const end_date_time_check=ref(false);
const EndDateChange = () => {

TarriffElement_inputs_Patch.value.end_date_time=formatDateForStart_END(TarriffElement_inputs_Patch.value.end_date_time);

}


const start_date_time_check_function = () => {
  
  if (start_date_time_check.value===true){
    alert("ON!")
    //start_date_time_check.value= false;
  }else{
    alert("OFF!")
    //start_date_time_check.value= true;

  }

}



const TarriffElement_inputs = ref({
  // TarriffElement  
  type: "",
  price: 0.0,
  vat: 0.0,
  step_size: 0.0,

  start_time: "",
  end_time: "",
  start_date: "",
  end_date: "",

  min_kwh: 0.0,
  max_kwh: 0.0,

  min_current: 0.0,
  max_current: 0.0,

  min_power: 0.0,
  max_power: 0.0,

  min_duration: 0.0,
  max_duration: 0.0,

  day_of_week: "",
  reservation: "",
// Tarriff main Body

  tariff_alt_text_language: "",
  tariff_alt_text_text: "",

  min_price_excl_vat: 0.0,
  min_price_incl_vat: 0.0,

  max_price_excl_vat: 0.0,
  max_price_incl_vat: 0.0,

  tarriff_countrycode: "",
  tarriff_party_id: "",
  currency: "",
  tarrif_type: "",
  start_date_time: "",
  end_date_time: ""
  });

const TarriffElement_inputs_Patch = ref({
  tariff_alt_text: [],
  min_price_excl_vat: "",
  min_price_incl_vat: "",
  max_price_excl_vat: "",
  max_price_incl_vat: "",
  tarriff_countrycode: "",
  tarriff_party_id: "",
  currency: "",
  tarrif_type: "",
  start_date_time: "",
  end_date_time: "",
  last_updated_date_time: ""
  });

const submitTarriffElement_inputs = async () => {
    //console.log("Location1 values",Location_inputs)
      //console.log("Location2 values",Location_inputs.value)
    
          console.log("use_existing_tarriff_element",use_existing_tarriff_element)
      //==================== CASE 2 ===================================================================
          if(use_existing_tarriff_element.value===false){
            console.log("Restrictions2",Restrictions)
            
            if(Restrictions.value===true){
              alert("Case 2 ");
              try {
                const priceComponents = {};
                const restrictions = {};
                
                // Helper function to add non-empty values
                const addIfValid = (obj, key, value) => {
                    if (typeof value === 'string' && value.trim() !== "") {
                        obj[key] = value;
                    } else if (typeof value === 'number' && value !== 0) {
                        obj[key] = value;
                    }
                };

                // Collect price component inputs
                addIfValid(priceComponents, 'type', TarriffElement_inputs.value.type);
                addIfValid(priceComponents, 'price', TarriffElement_inputs.value.price);
                addIfValid(priceComponents, 'vat', TarriffElement_inputs.value.vat);
                addIfValid(priceComponents, 'step_size', TarriffElement_inputs.value.step_size);

                // Collect restrictions inputs
                addIfValid(restrictions, 'start_time', TarriffElement_inputs.value.start_time);
                addIfValid(restrictions, 'end_time', TarriffElement_inputs.value.end_time);
                addIfValid(restrictions, 'start_date', TarriffElement_inputs.value.start_date);
                addIfValid(restrictions, 'end_date', TarriffElement_inputs.value.end_date);
                addIfValid(restrictions, 'min_kwh', TarriffElement_inputs.value.min_kwh);
                addIfValid(restrictions, 'max_kwh', TarriffElement_inputs.value.max_kwh);
                addIfValid(restrictions, 'min_current', TarriffElement_inputs.value.min_current);
                addIfValid(restrictions, 'max_current', TarriffElement_inputs.value.max_current);
                addIfValid(restrictions, 'min_power', TarriffElement_inputs.value.min_power);
                addIfValid(restrictions, 'max_power', TarriffElement_inputs.value.max_power);
                addIfValid(restrictions, 'min_duration', TarriffElement_inputs.value.min_duration);
                addIfValid(restrictions, 'max_duration', TarriffElement_inputs.value.max_duration);
                addIfValid(restrictions, 'day_of_week', TarriffElement_inputs.value.day_of_week);
                addIfValid(restrictions, 'reservation', TarriffElement_inputs.value.reservation);

                const query_tarriff_element = {
                    price_components: [priceComponents],
                    restrictions: restrictions
                };

              console.log("query_tarriff_element",query_tarriff_element);

              //Destination
              const apiUrl = `http://localhost:5173/api/tariffelement/`;
              const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token.value}`,
                },
                body: JSON.stringify(query_tarriff_element) // Send query parameters in the request body
              };
              
              console.log("TarriffElement Options",requestOptions);
              const response = await fetch(apiUrl, requestOptions);
              const data = await response.json(); // Parse response body as JSON
              //console.log("TarriffElement Data",data)
              flag_case.value=2;
              submitTarriff_case(data.id);

              } catch (error) {
                  console.error('An error occurred:', error.message);
                  return null; // Return null in case of error
              }
            }
          }

      /// CASE 1 ==================================================================================================================
        if(use_existing_tarriff_element.value===false){
            
            if(Restrictions.value===false){
              alert("Case 1 ");
              try {
                const priceComponents = {};
                
                
                // Helper function to add non-empty values
                const addIfValid = (obj, key, value) => {
                    if (typeof value === 'string' && value.trim() !== "") {
                        obj[key] = value;
                    } else if (typeof value === 'number' && value !== 0) {
                        obj[key] = value;
                    }
                };

                // Collect price component inputs
                addIfValid(priceComponents, 'type', TarriffElement_inputs.value.type);
                addIfValid(priceComponents, 'price', TarriffElement_inputs.value.price);
                addIfValid(priceComponents, 'vat', TarriffElement_inputs.value.vat);
                addIfValid(priceComponents, 'step_size', TarriffElement_inputs.value.step_size);


                const query_tarriff_element = {
                    price_components: [priceComponents]
                };
              console.log("query_tarriff_element",query_tarriff_element);

              //Destination
              const apiUrl = `http://localhost:5173/api/tariffelement/`;
              const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token.value}`,
                },
                body: JSON.stringify(query_tarriff_element) // Send query parameters in the request body
              };
              
              console.log("TarriffElement Options",requestOptions);
              const response = await fetch(apiUrl, requestOptions);
              const data = await response.json(); // Parse response body as JSON
              //console.log("TarriffElement Data",data)
              flag_case.value=1;
              submitTarriff_case(data.id);

              } catch (error) {
                  console.error('An error occurred:', error.message);
                  return null; // Return null in case of error
              }
            }
          }

            /// CASE 3 ==================================================================================================================
        if(use_existing_tarriff_element.value===true){
              alert("Case 3 ");
            
              flag_case.value=3;
              submitTarriff_case(selectedTariff.value);
            
          }
          
    }

        //=================== Tarrif Submission Cases ==========================================================

const submitTarriff_case = async (id_value) => {
  
  console.log("flag_case",flag_case.value);
    if(flag_case.value===2 || flag_case.value===1 || flag_case.value===3){
      try{
        const query_tarriff_main = {};

                // Helper function to add non-empty values
                const addIfValid = (obj, key, value) => {
                    if (typeof value === 'string' && value.trim() !== "") {
                        obj[key] = value;
                    } else if (typeof value === 'number' && value !== 0) {
                        obj[key] = value;
                    }
                };

                // Collect tariff_alt_text inputs
                const tariff_alt_text = {};
                addIfValid(tariff_alt_text, 'language', TarriffElement_inputs.value.tariff_alt_text_language);
                addIfValid(tariff_alt_text, 'text', TarriffElement_inputs.value.tariff_alt_text_text);

                if (Object.keys(tariff_alt_text).length > 0) {
                    query_tarriff_main.tariff_alt_text = [tariff_alt_text];
                }

                // Collect min_price inputs
                const min_price = {};
                addIfValid(min_price, 'excl_vat', TarriffElement_inputs.value.min_price_excl_vat);
                addIfValid(min_price, 'incl_vat', TarriffElement_inputs.value.min_price_incl_vat);

                if (Object.keys(min_price).length > 0) {
                    query_tarriff_main.min_price = min_price;
                }

                // Collect max_price inputs
                const max_price = {};
                addIfValid(max_price, 'excl_vat', TarriffElement_inputs.value.max_price_excl_vat);
                addIfValid(max_price, 'incl_vat', TarriffElement_inputs.value.max_price_incl_vat);

                if (Object.keys(max_price).length > 0) {
                    query_tarriff_main.max_price = max_price;
                }

                // Collect elements
                if (id_value) {
                    query_tarriff_main.elements = [{ id: id_value }];
                }

                // Collect other fields
                addIfValid(query_tarriff_main, 'country_code', TarriffElement_inputs.value.tarriff_countrycode);
                addIfValid(query_tarriff_main, 'party_id', TarriffElement_inputs.value.tarriff_party_id);
                addIfValid(query_tarriff_main, 'currency', TarriffElement_inputs.value.currency);
                addIfValid(query_tarriff_main, 'type', TarriffElement_inputs.value.tarrif_type);
                addIfValid(query_tarriff_main, 'start_date_time', TarriffElement_inputs.value.start_date_time);
                addIfValid(query_tarriff_main, 'end_date_time', TarriffElement_inputs.value.end_date_time);

                console.log("query_tarriff_main", query_tarriff_main);

                //Destination
                const apiUrl = `http://localhost:5173/api/tariff/`;
                const requestOptions = {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json',
                      'Authorization': `Bearer ${token.value}`,
                  },
                  body: JSON.stringify(query_tarriff_main) // Send query parameters in the request body
                };
                
                console.log("query_tarriff_main Options",requestOptions);
                const response = await fetch(apiUrl, requestOptions);
                const data = await response.json(); // Parse response body as JSON
                console.log("Tarriff Data",data)
              } catch (error) {
                  console.error('An error occurred:', error.message);
                  return null; // Return null in case of error
              }
      }

          // Reset TarriffElement_inputs to default values
          TarriffElement_inputs.value = {
            type: "",
            price: 0.0,
            vat: 0.0,
            step_size: 0.0,

            start_time: "",
            end_time: "",
            start_date: "",
            end_date: "",

            min_kwh: 0.0,
            max_kwh: 0.0,

            min_current: 0.0,
            max_current: 0.0,

            min_power: 0.0,
            max_power: 0.0,

            min_duration: 0.0,
            max_duration: 0.0,

            day_of_week: "",
            reservation: "",

            tariff_alt_text_language: "",
            tariff_alt_text_text: "",

            min_price_excl_vat: 0.0,
            min_price_incl_vat: 0.0,

            max_price_excl_vat: 0.0,
            max_price_incl_vat: 0.0,

            tarriff_countrycode: "",
            tarriff_party_id: "",
            currency: "",
            tarrif_type: "",
            start_date_time: "",
            end_date_time: ""
          };


  }

//===================== Tarrif Adjustment Tools===============================================================

function formatDateForInput(isoString) {

    const date = new Date(isoString);


    // Extract the components in UTC
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // getUTCMonth() returns month from 0-11
    const day = String(date.getUTCDate()).padStart(2, '0');
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, '0'); // 24-hour format in UTC
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');





    console.log("Actual string",isoString)
    console.log("date",date)
    console.log("month",month)
    console.log("day",day)
    console.log("year",year)
    console.log("hours",hours)
    console.log("minutes",minutes)

    const dateInput = `${month}/${day}/${year}`;
    const timeInput  = `${hours}:${minutes}`;
  return `${dateInput} ${timeInput}`
}

function formatDateForStart_END(isoString) {

const date = new Date(isoString);


  const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns month from 0-11
  const day = String(date.getDate()).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0'); // 24-hour format
  const minutes = String(date.getMinutes()).padStart(2, '0');


const dateInput = `${month}/${day}/${year}`;
const timeInput  = `${hours}:${minutes}`;
return `${dateInput} ${timeInput}`
}

const onTariffSelect = async () => {
  try {
    const query = {
      id: selectedMainTariffId.value,
      fields: ['tariff_alt_text', 'min_price', 'max_price', 'elements', 'country_code', 'party_id', 'currency', 'type', 'start_date_time', 'end_date_time', 'last_updated']
    };
    const apiUrl = `http://localhost:5173/api/tariff/`;
    const queryString = new URLSearchParams(query).toString();
    const fullApiUrl = `${apiUrl}?${queryString}`;
    console.log('Task7_Update URL:', fullApiUrl);

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token.value}`,
      },
    };

    const response = await fetch(fullApiUrl, requestOptions);
    const data = await response.json();

    //function parseDateTime(dateStr, timeStr) {
    //  if (!dateStr || !timeStr) return null;

      // Convert dateStr (MM/DD/YYYY) and timeStr (hh:mm AM/PM) to ISO format
   //   const dateParts = dateStr.split('/');
   //   const timeParts = timeStr.split(/[: ]/);
   //   const hours = timeParts[2] === 'PM' ? parseInt(timeParts[0]) + 12 : parseInt(timeParts[0]);

//      const isoString = new Date(
  //      `${dateParts[2]}-${dateParts[0]}-${dateParts[1]}T${hours}:${timeParts[1]}:00`
    //  ).toISOString();

      //return isoString;
    //}

    
    
    
    
    //const formatDateForInput = (dateString) => {
    //  
    //      const date = new Date(dateString);
    //      const year = date.getFullYear();
    //      const month = String(date.getMonth() + 1).padStart(2, '0');
    //      const day = String(date.getDate()).padStart(2, '0');
    //      const hours = String(date.getHours()).padStart(2, '0');
    //      const minutes = String(date.getMinutes()).padStart(2, '0');
    //
    //      return `${month}/${day}/${year} ${hours}:${minutes} PM`;
    //    };


    console.log("data", data[0]);

    TarriffElement_inputs_Patch.value = {
      tariff_alt_text: data[0].tariff_alt_text ? data[0].tariff_alt_text.map(item => ({ language: item.language, text: item.text })) : [],
      min_price_excl_vat: data[0].min_price ? data[0].min_price.excl_vat : "",
      min_price_incl_vat: data[0].min_price ? data[0].min_price.incl_vat : "",
      max_price_excl_vat: data[0].max_price ? data[0].max_price.excl_vat : "",
      max_price_incl_vat: data[0].max_price ? data[0].max_price.incl_vat : "",
      tarriff_countrycode: data[0].country_code || "",
      tarriff_party_id: data[0].party_id || "",
      currency: data[0].currency || "",
      tarrif_type: data[0].type || "",
      start_date_time: formatDateForStart_END(data[0].start_date_time) || "",
      end_date_time: formatDateForStart_END(data[0].end_date_time) || "",
      last_updated_date_time: formatDateForInput(data[0].last_updated)  || ""
    };
    
    // Format start_date_time for datetime-local input
    //if (data[0].last_updated_date_time) {
     // TarriffElement_inputs_Patch.value.last_updated_date_time = data[0].last_updated_date_time.slice(0, 16); // Extract YYYY-MM-DDTHH:MM from "2024-05-04T23:29:53.474000Z"
    //}

    console.log("TarriffElement_inputs_Patch", TarriffElement_inputs_Patch.value);
  } catch (error) {
    console.error('An error occurred:', error.message);
    return null;
  }
};

const submitForm = async () => {
  try {
    const updatedData = {};
    const inputs = TarriffElement_inputs_Patch.value;

    // Include only non-empty fields
    if (inputs.tariff_alt_text && inputs.tariff_alt_text.length) {
      updatedData.tariff_alt_text = inputs.tariff_alt_text.filter(item => item.text);
    }
    if (inputs.min_price_excl_vat) updatedData.min_price_excl_vat = inputs.min_price_excl_vat;
    if (inputs.min_price_incl_vat) updatedData.min_price_incl_vat = inputs.min_price_incl_vat;
    if (inputs.max_price_excl_vat) updatedData.max_price_excl_vat = inputs.max_price_excl_vat;
    if (inputs.max_price_incl_vat) updatedData.max_price_incl_vat = inputs.max_price_incl_vat;
    if (inputs.tarriff_countrycode) updatedData.tarriff_countrycode = inputs.tarriff_countrycode;
    if (inputs.tarriff_party_id) updatedData.tarriff_party_id = inputs.tarriff_party_id;
    if (inputs.currency) updatedData.currency = inputs.currency;
    if (inputs.tarrif_type) updatedData.tarrif_type = inputs.tarrif_type;
    if (inputs.start_date_time) updatedData.start_date_time = inputs.start_date_time;
    if (inputs.end_date_time) updatedData.end_date_time = inputs.end_date_time;
    if (inputs.last_updated_date_time) updatedData.last_updated_date_time = inputs.last_updated_date_time;

    const apiUrl = `http://localhost:5173/api/tariff/${selectedMainTariffId.value}/`;
    console.log('PATCH URL:', apiUrl);
    console.log('Updated Data:', updatedData);

    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token.value}`,
      },
      body: JSON.stringify(updatedData),
    };

    const response = await fetch(apiUrl, requestOptions);
    const result = await response.json();
    console.log('PATCH Response:', result);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};


//==================================ADMIN TOOLS======================================================
  // Header
  const route = useRoute();
  const username = ref('');
  const token = ref('');

  // State for handling loading and errors
  const loading = ref(true);
  const error = ref(null);

  const mergedDataRef = ref([]);
  const Task_1_response = ref([]);
  const Task_3_mergedDataRef = ref([]);
  const Task_3_updated_mergedDataRef= ref([]);
  const Task3_values=ref([]);
  const Task3_Timestamp_values=ref([]);
  // Define reactive references

  const Task_3_response=ref([]);
  const Task_9_response=ref([]);
  const Task_14_response=ref([]);
  const Task_18_response=ref([]);
  const Task_18_mergedDataRef=ref([]);
  const values=ref([]);
  
const selectedTransaction = ref(null);
const selectedUnit = ref('');

const parameters = ref({});

  const selectedLocation = ref(null);


  // Function to check if a user exists
  const Task_1 = async () => {
  try {
      //const query = { transaction_status: 'Finished', // Filter by status
      //                fields: ['id_tag','start_transaction_timestamp','wh_meter_start', 'wh_meter_last_timestamp','wh_meter_last','transaction_status','connector'], // Key-value pair for the query parameter
       //           };

      const query = {
                      transaction_status: 'Finished',//Started //Finished
                      fields: ['id_tag,start_transaction_timestamp,wh_meter_start,wh_meter_last_timestamp,wh_meter_last,transaction_status,connector','connector__standard','connector__power_type','connector__chargepoint'],
                      }
      //const apiUrl = `http://localhost:5173/api/user/?username=${username.value}`;
      const apiUrl = `http://localhost:5173/api/transaction/`;
      
      // Construct the URL with query parameters if provided
      //const queryString = new URLSearchParams(query || {}).toString();
      //const fullApiUrl = `${apiUrl}${queryString}/`; // Append query parameters

      const queryString = new URLSearchParams(query).toString();
      const fullApiUrl = `${apiUrl}?${queryString}`;
      console.log('Task1 URL:',fullApiUrl)

  
      const requestOptions = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token.value}`,
          },
      };

      const response = await fetch(fullApiUrl, requestOptions);
      const data = await response.json(); // Parse response body as JSON
      mergedDataRef.value=data

  } catch (error) {
      console.error('An error occurred:', error.message);
      return null; // Return null in case of error
  }
};

const Task_18 = async () => {
  try {
      const query = { username: "admin",   //username.value, // Filter by status
                      fields: ['idToken'], // Key-value pair for the query parameter
                  };
              
      //alert(username.value)
      //const apiUrl = `http://localhost:5173/api/user/?username=${username.value}`;
      const apiUrl = `http://localhost:5173/api/idtag/`;
     
      // Construct the URL with query parameters if provided
      //const queryString = new URLSearchParams(query || {}).toString();
      //const fullApiUrl = `${apiUrl}${queryString}/`; // Append query parameters

      const queryString = new URLSearchParams(query).toString();
      const fullApiUrl = `${apiUrl}?${queryString}`;
  
      const requestOptions = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token.value}`,
          },
      };

      const response = await fetch(fullApiUrl, requestOptions);
      const data = await response.json(); // Parse response body as JSON
      

      Task_18_response.value=data

      
      const mergedData = await FetchTransactionValue(Task_18_response.value);
      Task_18_mergedDataRef.value = mergedData;

      console.log('Task_18_mergedDataRef ??:',Task_18_mergedDataRef.value)

      const whMeterLast = Task_18_mergedDataRef.value.map(item => item.wh_meter_last);
      values.value=whMeterLast;


  
  } catch (error) {
      console.error('An error occurred:', error.message);
      return null; // Return null in case of error
  }
};

const FetchTransactionValue = async (data) => {
  const apiUrl_connector = `http://localhost:5173/api/transaction/`;
  const connectorPromises18 = [];
  
  //alert(data.length)
  for (let ii = 0; ii < data.length; ii++) {
     // alert(ii)
      const query_connector = {
          transaction_id : data[ii].idToken,//,
          fields: ['wh_meter_last', 'wh_meter_last_timestamp'],
      };

      const queryString_connector = new URLSearchParams(query_connector).toString();
      //const fullApiUrl_connector = `${apiUrl_connector}?${queryString_connector}`;
      const fullApiUrl_connector = `${apiUrl_connector}?${queryString_connector}`;

      const requestOptions_connector = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token.value}`,
          },
      };

      const fetchConnectorData18 = fetch(fullApiUrl_connector, requestOptions_connector)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Failed to fetch connector data');
              }
              return response.json();
          });

          connectorPromises18.push(fetchConnectorData18);
  }
  
  const connectorDataArray18 = await Promise.all(connectorPromises18);
  console.log('connectorDataArray 18:',connectorDataArray18)

  return connectorDataArray18[0];
};


const Task_14 = async () => {
  try {
      const query = { username: username.value, // Filter by status
                      fields: ['user__username','user__first_name','user__last_name', 'user__email','user__is_superuser'], // Key-value pair for the query parameter
                  };
              
      //alert(username.value)
      //const apiUrl = `http://localhost:5173/api/user/?username=${username.value}`;
      const apiUrl = `http://localhost:5173/api/user`;
     
      // Construct the URL with query parameters if provided
      //const queryString = new URLSearchParams(query || {}).toString();
      //const fullApiUrl = `${apiUrl}${queryString}/`; // Append query parameters

      const queryString = new URLSearchParams(query).toString();
      const fullApiUrl = `${apiUrl}?${queryString}`;
      console.log(fullApiUrl)
  
      const requestOptions = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token.value}`,
          },
      };

      const response = await fetch(fullApiUrl, requestOptions);
      const data = await response.json(); // Parse response body as JSON
      Task_14_response.value=data

      console.log('Task14 fetched:',Task_14_response.value)


  
  } catch (error) {
      console.error('An error occurred:', error.message);
      return null; // Return null in case of error
  }
};


const Task_3 = async () => {
  try {
      //const query = { transaction_status: 'Finished', // Filter by status
      //                fields: ['id_tag','start_transaction_timestamp','wh_meter_start', 'wh_meter_last_timestamp','wh_meter_last','transaction_status','connector'], // Key-value pair for the query parameter
       //           };

      const query = {
                      transaction_status: 'Finished',
                      fields: ['transaction_id'],
                      }
      //const apiUrl = `http://localhost:5173/api/user/?username=${username.value}`;
      const apiUrl = `http://localhost:5173/api/transaction/`;
      
      // Construct the URL with query parameters if provided
      //const queryString = new URLSearchParams(query || {}).toString();
      //const fullApiUrl = `${apiUrl}${queryString}/`; // Append query parameters

      const queryString = new URLSearchParams(query).toString();
      const fullApiUrl = `${apiUrl}?${queryString}`;
      console.log('Task3 URL:',fullApiUrl)

  
      const requestOptions = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token.value}`,
          },
      };

      const response = await fetch(fullApiUrl, requestOptions);
      const data = await response.json(); // Parse response body as JSON
      Task_3_response.value=data

      console.log('Task3 fetched:',Task_3_response.value)


      const mergedData = await FetchSampledValue(Task_3_response.value);
      Task_3_mergedDataRef.value = mergedData;

      //// Check if the response is successful
      //if (response.ok) {
      //    console.log('Successful response:', data);
      //    return data; // Return the data if successful
      //} else {
      //    // Handle error response
      //    console.error('Error response:', data);
      //    throw new Error('Failed to fetch data');
     // }
  } catch (error) {
      console.error('An error occurred:', error.message);
      return null; // Return null in case of error
  }
};


// Method to update and log parameters
const updateParameters = () => {
  if (selectedTransaction.value && selectedUnit.value) {
      parameters.value = {
          transaction: selectedTransaction.value,
          unit: selectedUnit.value
      };

      // Fetch data based on updated parameters
      FetchSampledValue2(parameters.value.transaction).then(mergedData => {
          Task_3_updated_mergedDataRef.value = mergedData;
          console.log('Updated Task_3_mergedDataRef:', Task_3_updated_mergedDataRef.value);

          // Reset selected values
          selectedTransaction.value = null;
          selectedUnit.value = null;
      });
  } else {
      console.warn('Both selectedTransaction and selectedUnit must have values.');
  }
};

// FetchSampledValue2 function
const FetchSampledValue2 = async (transactionId) => {
  const apiUrl_connector = `http://localhost:5173/api/sampledvalue/`;

  if (selectedUnit.value) {
      const query_connector = {
          unit: selectedUnit.value,
          fields: ['timestamp', 'value', 'transaction','unit']
      };

      const queryString_connector = new URLSearchParams(query_connector).toString();
      const fullApiUrl_connector = `${apiUrl_connector}${transactionId}/?${queryString_connector}`;

      const requestOptions_connector = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token.value}`,
          },
      };

      try {
          const response = await fetch(fullApiUrl_connector, requestOptions_connector);
          if (!response.ok) {
              throw new Error('Failed to fetch connector data');
          }
          const data = await response.json();

          
          if (Array.isArray(data)) {
              Task3_values.value = data.map(item => item.value);
              Task3_Timestamp_values.value = data.map(item => item.timestamp);

              console.log("Task3_data.value",data);

          } else {
              console.warn('Expected data.value to be an array, but it was not.');
          }

          return data;
      } catch (error) {
          console.error('An error occurred while fetching sampled values:', error);
          return null;
      }
  }
};



const FetchSampledValue = async (data) => {
  const apiUrl_connector = `http://localhost:5173/api/sampledvalue/`;
  const connectorPromises3 = [];


  
  //alert(data.length)
  for (let ii = 0; ii < data.length; ii++) {
     // alert(ii)
     const  query_connector = {
          transaction_id : data[ii].transaction_id//,
          //fields: ['standard', 'power_type', 'chargepoint'],
      };
      const queryString_connector = new URLSearchParams(query_connector).toString();
      //const fullApiUrl_connector = `${apiUrl_connector}?${queryString_connector}`;
      const fullApiUrl_connector = `${apiUrl_connector}${data[ii].transaction_id}/`;
      
      const requestOptions_connector = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token.value}`,
          },
      };

      const fetchConnectorData3 = fetch(fullApiUrl_connector, requestOptions_connector)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Failed to fetch connector data');
              }
              return response.json();
          });

          connectorPromises3.push(fetchConnectorData3);
  }
  
  const connectorDataArray3 = await Promise.all(connectorPromises3);
  console.log('connectorDataArray:',connectorDataArray3)
  const extractedData3 = connectorDataArray3.map(array => array.map(connectorData =>({
      transaction: connectorData.transaction,
      timestamp: connectorData.timestamp,
      value: connectorData.value,
      context: connectorData.context,
      measurand: connectorData.measurand,
      unit: connectorData.unit
  })));

  console.log('Task3 extractedData:',extractedData3)

  
  return extractedData3;
};



const Task_9 = async () => {
  try {
      //const query = { transaction_status: 'Finished', // Filter by status
      //                fields: ['id_tag','start_transaction_timestamp','wh_meter_start', 'wh_meter_last_timestamp','wh_meter_last','transaction_status','connector'], // Key-value pair for the query parameter
       //           };

      const query = {
                      fields: ['chargepoint_id,location__city,location__country,chargepoint_model,chargepoint_vendor,websocket_port,connected,chargepoint_status,ocpp_version'],
                      }
      //const apiUrl = `http://localhost:5173/api/user/?username=${username.value}`;
      const apiUrl = `http://localhost:5173/api/chargepoint/`;
      
      // Construct the URL with query parameters if provided
      //const queryString = new URLSearchParams(query || {}).toString();
      //const fullApiUrl = `${apiUrl}${queryString}/`; // Append query parameters

      const queryString = new URLSearchParams(query).toString();
      const fullApiUrl = `${apiUrl}?${queryString}`;
      console.log('Task9 URL:',fullApiUrl)

  
      const requestOptions = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token.value}`,
          },
      };

      const response = await fetch(fullApiUrl, requestOptions);
      const data = await response.json(); // Parse response body as JSON
      Task_9_response.value=data



      console.log('Task9 fetched:',Task_9_response.value)

  
  } catch (error) {
      console.error('An error occurred:', error.message);
      return null; // Return null in case of error
  }
};

// Define the downloadCSV function
const downloadCSV = () => {
  // Prepare table data as CSV format
  const csvContent = mergedDataRef.value.map(row => {
    // Format connectorData values
    const standard = row.connectorData ? `"${row.connectorData.standard || ''}"` : '';
    const powerType = row.connectorData ? `"${row.connectorData.power_type || ''}"` : '';
    const chargepoint = row.connectorData ? `"${row.connectorData.chargepoint || ''}"` : '';

    // Create row values array
    const rowValues = [
      row.id_tag,
      row.start_transaction_timestamp,
      row.wh_meter_start,
      row.wh_meter_last_timestamp,
      row.wh_meter_last,
      row.transaction_status,
      standard,
      powerType,
      chargepoint
    ];

    // Join row values with tabs
    return rowValues.join(',');
  }).join('\n');

  // Convert CSV content to data URI
  const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);

  // Create temporary link element
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "data.csv");

  // Append link to document body and trigger click event
  document.body.appendChild(link);
  link.click();

  // Cleanup
  document.body.removeChild(link);
};


function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${month}/${day}/${year} ${hours}:${minutes}`;
}


const Task3_areaChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode;
  const isRtl = store.rtlClass === 'rtl';

  // Map timestamps to formatted dates
  const whMeterLastLabels = Task3_Timestamp_values.value.map(timestamp => formatDate(timestamp));

  return {
      chart: {
          type: 'area',
          height: 300,
          zoom: { enabled: false },
          toolbar: { show: false },
      },
      colors: ['#805dca'],
      dataLabels: { enabled: false },
      stroke: { width: 2, curve: 'smooth' },
      xaxis: {
          axisBorder: { color: isDark ? '#191e3a' : '#e0e6ed' },
      },
      yaxis: {
          opposite: isRtl,
          labels: { offsetX: isRtl ? -40 : 0 },
      },
      labels: whMeterLastLabels,
      legend: { horizontalAlign: 'left' },
      grid: { borderColor: isDark ? '#191e3a' : '#e0e6ed' },
      tooltip: { theme: isDark ? 'dark' : 'light' },
  };
});


// Computed property for chart series
const Task3_areaChartSeries = computed(() => [
  {
      name: 'Meter Value',
      data: Task3_values.value
  }
]);


const areaChart = computed(() => {

const isDark = store.theme === 'dark' || store.isDarkMode ? true : false;
const isRtl = store.rtlClass === 'rtl' ? true : false;

  // Extract wh_meter_last values
  const whMeterLastLabels = Task_18_mergedDataRef.value.map(item => formatDate(item.wh_meter_last_timestamp));
  
  //console.log('Timestamp:',whMeterLastLabels)
return {
  chart: {
    type: 'area',
    height: 300,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ['#805dca'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: isDark ? '#191e3a' : '#e0e6ed',
    },
  },
  yaxis: {
    opposite: isRtl ? true : false,
    labels: {
      offsetX: isRtl ? -40 : 0,
    },
  },
  labels: whMeterLastLabels,//["0:00","1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],//whMeterLastLabels,//['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  legend: {
    horizontalAlign: 'left',
  },
  grid: {
    borderColor: isDark ? '#191e3a' : '#e0e6ed',
  },
  tooltip: {
    theme: isDark ? 'dark' : 'light',
  },
};
});


const areaChartSeries = ref([
      {
          name: 'Capacity Amount kW',
          data: values//[22,22,22,22,22,22,22,22,22,22,22,15,15,11,11,11,11,22,22,22,22,22,22,22]//values//[16800, 16800, 15500] //whMeterLast//whMeterLastLabels//[16800, 16800, 15500] 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
      },
      ]);


const columnChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode ? true : false;
  const isRtl = store.rtlClass === 'rtl' ? true : false;

  const whMeterLastLabels = Task_18_mergedDataRef.value.map(item => formatDate(item.wh_meter_last_timestamp));
  
  


  return {
    chart: {
      height: 300,
      type: 'bar',
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ['#805dca'],//['#805dca', '#e7515a'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    grid: {
      borderColor: isDark ? '#191e3a' : '#e0e6ed',
    },
    xaxis: {
      categories: whMeterLastLabels,//['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      axisBorder: {
        color: isDark ? '#191e3a' : '#e0e6ed',
      },
    },
    yaxis: {
      opposite: isRtl ? true : false,
      labels: {
        offsetX: isRtl ? -10 : 0,
      },
    },
    tooltip: {
      theme: isDark ? 'dark' : 'light',
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
};
});

const columnChartSeries = ref([
        {
          name: 'kWh Amount',
          data: values//[16800, 16800, 15500] //whMeterLast//whMeterLastLabels//[16800, 16800, 15500] 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
      },
      ]);



const handleDashboardClick = () => {
  // future map render save
    mapObject.value.remove();
    Task_5().then(() => {
    initializeMap();
  });
};

const openGoogleMapsLink = () => {
  if (startLat.value && startLng.value && endLat.value && endLng.value) {
    const startCoords = `${startLat.value},${startLng.value}`;
    const destinationCoords = `${endLat.value},${endLng.value}`;
    const url = `https://www.google.com/maps/dir/?api=1&origin=${startCoords}&destination=${destinationCoords}&travelmode=driving`;
    window.open(url, '_blank');
  } else {
    alert('Please enter both start and destination coordinates.');
  }
};




onMounted(() => {
  username.value =  CryptoJS.AES.decrypt(route.query.username , "U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=").toString(CryptoJS.enc.Utf8);
  token.value =  CryptoJS.AES.decrypt(route.query.token , "U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=").toString(CryptoJS.enc.Utf8);

  console.log("Updated username:", username.value);
  console.log("Updated token:", token.value);

    Task_1();
    Task_18();
    Task_14();
    Task_3();
    Task_9();
    
    Task_5().then(() => {
    initializeMap();
  });


});
</script>


<style>
html,
body,
#app {
  height: 100%;
  margin: 0;

  
}
.map-container {
  position: relative; /* Updated positioning */
  width: 100%; /* Adjust the width as needed */
  height: 500px; /* Increased height for the map container */
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.map {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
}
.panel {
  display: flex;
  flex-direction: column;
}

input[type="datetime-local"] {
  width: 300px;
  padding: 10px;
  font-size: 16px;
}

</style>
