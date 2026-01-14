<!--==================================================================-->
<!--==================================================================-->
<!--==========================SIGN IN =================================-->
<!--==================================================================-->
<!--==================================================================-->

<template>

  <!-- Sign In Content -->
<template v-if="signed_in_flag == 5">
  <div>
    <div class="absolute inset-0">
      <img src="/assets/images/auth/background_ev4eu.png" alt="image" class="h-full w-full object-cover" />
    </div>

    <div class="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
      <div class="relative w-full max-w-[400px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
        <div class="relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 py-8">
          
          <!-- EV4EU Logo -->
          <div class="flex justify-center mb-6">
            <img src="/assets/images/auth/ev4eu_logo_trasparent.png" alt="EV4EU Logo" class="h-12" />
          </div>

          <div class="mb-6 text-center">
            <h1 class="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">Sign In</h1>
            <p class="text-base font-bold leading-normal text-white-dark">Enter your credentials to Log in</p>
          </div>

          <form class="space-y-4 dark:text-white" @submit.prevent="handleSignIn">
            <div>
              <label for="sign_in_username" class="mb-2 block">Username</label>
              <div class="relative text-white-dark">
                <input v-model="sign_in_username" id="sign_in_username" type="text" placeholder="Enter Username" class="form-input ps-10 placeholder:text-white-dark" />
                <span class="absolute start-4 top-1/2 -translate-y-1/2">
                  <icon-user :fill="true" />
                </span>
              </div>
            </div>

            <div>
              <label for="sign_in_password" class="mb-2 block">Password</label>
              <div class="relative text-white-dark">
                <input v-model="sign_in_password" id="sign_in_password" type="password" placeholder="Enter Password" class="form-input ps-10 placeholder:text-white-dark" />
                <span class="absolute start-4 top-1/2 -translate-y-1/2">
                  <icon-lock-dots :fill="true" />
                </span>
              </div>
            </div>

            <button type="submit" class="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
              Sign In
            </button>

            <!-- Forgot Password Button -->
            <div class="flex justify-end">
              <router-link to="">
                <button type="button" class="bg-purple-400 text-white px-2 py-1 rounded-md" @click="forgot_redirect">Forgot Password?</button>
              </router-link>
            </div>

            <!-- Register Button -->
            <div class="flex justify-start">
              <router-link to="" class="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
                <button type="button" @click="sign_up_redirect" class="bg-purple-400 text-white px-2 py-1 rounded-md">REGISTER</button>
              </router-link>
            </div>
          </form>

          <!-- Error message -->
          <div v-if="errorMessage" class="text-center dark:text-white mt-4">
            {{ errorMessage }}
          </div>

          <!-- Disclaimer Text -->
          <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600 text-xs text-gray-700 dark:text-gray-300 flex items-center">
            <img src="/assets/images/auth/eu-logo.jpg" alt="EU Logo" class="h-8 mr-2 flex-shrink-0" />
            <p class="text-[10px] leading-tight">
              This document has been produced in the context of the EV4EU project. 
              Views and opinions expressed in this document are however those of the authors only and do not necessarily reflect those of the European Union or the European Climate, 
              Infrastructure and Environment Executive Agency (CINEA). Neither the European Union nor the granting authority can be held responsible for them.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<!-- Sign Up Content -->
<template v-if="signed_in_flag == 15">
  <div>
    <div class="absolute inset-0">
      <img src="/assets/images/auth/background_ev4eu.png" alt="image" class="h-full w-full object-cover" />
    </div>

    <div class="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
      <div class="relative w-full max-w-[400px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
        <div class="relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 py-8">
          
          <!-- EV4EU Logo -->
          <div class="flex justify-center mb-6">
            <img src="/assets/images/auth/ev4eu_logo_trasparent.png" alt="EV4EU Logo" class="h-12" />
          </div>

          <div class="mb-6 text-center">
            <h1 class="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">Sign Up</h1>
            <p class="text-base font-bold leading-normal text-white-dark">Enter your credentials to register</p>
          </div>

          <form class="space-y-4 dark:text-white" @submit.prevent="handleSignUp">
            <div>
              <label for="sign_up_username" class="mb-2 block">Username</label>
              <div class="relative text-white-dark">
                <input v-model="sign_up_username" id="sign_up_username" type="text" placeholder="Enter Username" class="form-input ps-10 placeholder:text-white-dark" />
                <span class="absolute start-4 top-1/2 -translate-y-1/2">
                  <icon-user :fill="true" />
                </span>
              </div>
            </div>

            <div>
              <label for="sign_up_password" class="mb-2 block">Password</label>
              <div class="relative text-white-dark">
                <input v-model="sign_up_password" id="sign_up_password" type="password" placeholder="Enter Password" class="form-input ps-10 placeholder:text-white-dark" />
                <span class="absolute start-4 top-1/2 -translate-y-1/2">
                  <icon-lock-dots :fill="true" />
                </span>
              </div>
            </div>

            <div>
              <label for="sign_up_firstName" class="mb-2 block">First Name</label>
              <div class="relative text-white-dark">
                <input v-model="sign_up_firstName" id="sign_up_firstName" type="text" placeholder="Enter First Name" class="form-input ps-10 placeholder:text-white-dark" />
                <span class="absolute start-4 top-1/2 -translate-y-1/2">
                  <IconTag :fill="true" />
                </span>
              </div>
            </div>

            <div>
              <label for="sign_up_lastName" class="mb-2 block">Last Name</label>
              <div class="relative text-white-dark">
                <input v-model="sign_up_lastName" id="sign_up_lastName" type="text" placeholder="Enter Last Name" class="form-input ps-10 placeholder:text-white-dark" />
                <span class="absolute start-4 top-1/2 -translate-y-1/2">
                  <IconTag :fill="true" />
                </span>
              </div>
            </div>

            <div>
              <label for="sign_up_tariff" class="mb-2 block">Tariff Preference</label>
              <div class="relative text-white-dark">
                <input v-model="sign_up_tariff" id="sign_up_tariff" type="number" placeholder="Tariff preference" step="0.05" class="form-input ps-14 placeholder:text-white-dark" />
                <span class="absolute start-4 top-1/2 -translate-y-1/2">
                  <IconDollar :fill="true" />
                </span>
              </div>
            </div>

            <div>
              <label for="sign_up_powerType" class="mb-2 block">Power Type of Vehicle</label>
              <div class="relative text-white-dark">
                <select v-model="sign_up_powerType" id="sign_up_powerType" class="form-input ps-10 placeholder:text-white-dark">
                  <option value="" disabled selected>Select Power Type</option>
                  <option value="CHADEMO">CHADEMO</option>
                  <option value="DOMESTIC_A">DOMESTIC_A</option>
                  <option value="IEC_60309_2_single_16">IEC_60309_2_single_16</option>
                  <option value="IEC_62196_T1_COMBO">IEC_62196_T1_COMBO</option>
                </select>
                <span class="absolute start-4 top-1/2 -translate-y-1/2">
                  <IconPlus :fill="true" />
                </span>
              </div>
            </div>

            <div>
              <label for="sign_up_email" class="mb-2 block">Email</label>
              <div class="relative text-white-dark">
                <input v-model="sign_up_email" id="sign_up_email" type="email" placeholder="Enter Email" class="form-input ps-10 placeholder:text-white-dark" />
                <span class="absolute start-4 top-1/2 -translate-y-1/2">
                  <icon-mail :fill="true" />
                </span>
              </div>
            </div>

            <button type="submit" class="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
              Sign Up
            </button>
          </form>

          <!-- Error message and account check -->
          <div v-if="errorMessage" class="text-center dark:text-white mt-4">
            {{ errorMessage }}
          </div>

          <!-- Sign-in link -->
          <div v-else class="text-center dark:text-white mt-4">
            Already have an account?
            <router-link to="" class="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
              <button type="button" @click="sign_in_redirect" class="bg-purple-400 text-white px-2 py-1 rounded-md">SIGN IN</button>
            </router-link>
          </div>

          <!-- Disclaimer Text -->
          <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600 text-xs text-gray-700 dark:text-gray-300 flex items-center">
            <img src="/assets/images/auth/eu-logo.jpg" alt="EU Logo" class="h-8 mr-2 flex-shrink-0" />
            <p class="text-[10px] leading-tight">
              This document has been produced in the context of the EV4EU project. 
              Views and opinions expressed in this document are however those of the authors only and do not necessarily reflect those of the European Union or the European Climate, 
              Infrastructure and Environment Executive Agency (CINEA). Neither the European Union nor the granting authority can be held responsible for them.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<!-- Forgot Password Content -->
<template v-if="signed_in_flag == 20">
  <div>
    <div class="absolute inset-0">
      <img src="/assets/images/auth/background_ev4eu.png" alt="image" class="h-full w-full object-cover" />
    </div>

    <div class="relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
      <div class="relative w-full max-w-[400px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
        <div class="relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 py-8">
          
          <!-- EV4EU Logo -->
          <div class="flex justify-center mb-6">
            <img src="/assets/images/auth/ev4eu_logo_trasparent.png" alt="EV4EU Logo" class="h-12" />
          </div>

          <div class="mb-6 text-center">
            <h1 class="mb-3 text-2xl font-bold !leading-snug dark:text-white">Password Reset</h1>
            <p class="dark:text-white">Enter your email to recover your ID</p>
          </div>

          <form class="space-y-4" @submit.prevent="Reset_password_email_send">
            <div>
              <label for="reset_email" class="dark:text-white mb-2 block">Email</label>
              <div class="relative text-white-dark">
                <input v-model="reset_email" id="reset_email" type="email" placeholder="Enter Email" class="form-input ps-10 placeholder:text-white-dark" />
                <span class="absolute start-4 top-1/2 -translate-y-1/2">
                  <icon-mail :fill="true" />
                </span>
              </div>
            </div>

            <button type="submit" class="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
              RECOVER
            </button>
          </form>

          <!-- Sign-in link -->
          <div class="text-center dark:text-white mt-4">
            {{ Forgot_legend }}
            <router-link to="" class="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
              <button type="button" @click="sign_in_redirect" class="bg-purple-400 text-white px-2 py-1 rounded-md">SIGN IN</button>
            </router-link>
          </div>

          <!-- Disclaimer Text -->
          <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600 text-xs text-gray-700 dark:text-gray-300 flex items-center">
            <img src="/assets/images/auth/eu-logo.jpg" alt="EU Logo" class="h-8 mr-2 flex-shrink-0" />
            <p class="text-[10px] leading-tight">
              This document has been produced in the context of the EV4EU project. 
              Views and opinions expressed in this document are however those of the authors only and do not necessarily reflect those of the European Union or the European Climate, 
              Infrastructure and Environment Executive Agency (CINEA). Neither the European Union nor the granting authority can be held responsible for them.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <!-- ALL the content of the Header-->
    <header  v-if="signed_in_flag == 10" class="z-40" :class="{ dark: store.semidark && store.menu === 'horizontal' }">
      <div class="shadow-sm">
        <div class="relative bg-white flex w-full items-center px-4 py-2.5 dark:bg-[#0e1726]">
          <div class="horizontal-logo flex justify-between items-center ltr:mr-2 rtl:ml-2">
  
            <img src="/assets/images/auth/ev4eu_logo_trasparent.png" alt="EV4EU Logo" class="h-12" /> 
            <img src="/assets/images/PPC_logo.png" alt="Logo"  class="h-10 ml-[12px]" />
            <span
              class="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle hidden md:inline dark:text-white-light transition-all duration-300"></span>
  
  
          </div>





          <div
            class="sm:flex-1 ltr:sm:ml-0 ltr:ml-auto sm:rtl:mr-0 rtl:mr-auto flex items-center space-x-1.5 lg:space-x-2 rtl:space-x-reverse dark:text-[#d0d2d6]">
            <div class="sm:ltr:mr-auto sm:rtl:ml-auto"></div>
            <!-- <div class="dropdown">
              <a href="javascript:;" v-show="store.theme === 'light'"
                class="flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                @click="store.toggleTheme('dark')">
                <icon-sun />
              </a>
              <a href="javascript:;" v-show="store.theme === 'dark'"
                class="flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                @click="store.toggleTheme('system')">
                <icon-moon />
              </a>
              <a href="javascript:;" v-show="store.theme === 'system'"
                class="flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                @click="store.toggleTheme('light')">
                <icon-laptop />
              </a>
            </div> -->
  
  
  
  
  
  
 <!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
  <!----------------------------------------------NOTIFICATIONS START------------------------------------------------------------------------------------------------------------------------------------------------------>
  <!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
            <div class="dropdown">
              <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-end' : 'bottom-start'" offsetDistance="8"
                      class="!block">
                <!-- SVG Notification Icon with Counter -->
                <div @click="toggleNotificationDropdown(); resetCounter();" class="relative cursor-pointer">
                  <!-- SVG Icon -->
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                  >
                    <path
                      d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                    ></path>
                    <path
                      d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M12 6V10"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>
                  </svg>
  
                  <!-- Counter Badge -->
                  <div
                    v-if="counter > 0"
                    class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center"
                  >
                    {{ counter }}
                  </div>
                </div>
  
                      <template #content="{ close }">
                        <ul class="top-11 !py-0 text-dark dark:text-white-dark w-[300px] sm:w-[450px] text-xs max-h-[500px] overflow-y-auto">
                          <!-- Header -->
                          <li class="mb-5">
                            <div class="overflow-hidden relative rounded-t-md !p-5 text-white">
                              <div
                                class="absolute h-full w-full bg-[url('/assets/images/menu-heade.jpg')] bg-no-repeat bg-center bg-cover inset-0"
                              ></div>
                              <h4 class="font-semibold relative z-10 text-lg">Notifications</h4>
                            </div>
                          </li>

                          <!-- Messages List -->
                          <template v-for="(notification, index) in [...websocekt_notification].reverse()" :key="index">
                            <li class="border-b border-gray-200 dark:border-gray-700">
                              <div class="py-3 px-5">
                                <!-- Main Notification Header -->
                                <div class="flex items-start justify-between mb-2">
                                  <div class="flex-1">
                                    <div class="font-semibold text-sm dark:text-white-light/90 mb-1">
                                      {{ notification.message.uuName }}
                                    </div>
                                    
                                    <!-- NEW: Current Date/Time when notification was received -->
                                    <div class="text-xs text-primary dark:text-primary-light font-semibold mb-1">
                                      {{ notification.receivedAt || formatCurrentDateTime() }}
                                    </div>
                                    
                                    <div class="text-xs text-gray-600 dark:text-gray-400">
                                      <div>
                                        From <span class="font-bold">{{ formatTimestamp(notification.message.timeslot_start) }}</span>
                                        to <span class="font-bold">{{ formatTimestamp(notification.message.timeslot_end) }}</span>
                                      </div>
                                      <div>
                                        Location: <span class="font-bold">{{ formatPartyIds(notification.message.location_party_id) }}</span>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <!-- Expand/Collapse Button -->
                                  <button 
                                    v-if="hasChanges(notification.message)"
                                    @click="toggleExpand(index)"
                                    class="ml-2 p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                  >
                                    <svg 
                                      :class="['w-4 h-4 transition-transform', { 'rotate-180': expandedNotifications[index] }]"
                                      fill="none" 
                                      stroke="currentColor" 
                                      viewBox="0 0 24 24"
                                    >
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                  </button>
                                </div>

                                <!-- Expandable Details Section -->
                                <transition name="expand">
                                  <div v-if="expandedNotifications[index]" class="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                                    
                                    <!-- Tariff Changes Section -->
                                    <div v-if="notification.message.tariff_changes && notification.message.tariff_changes.length > 0" class="mb-3">
                                      <div class="font-semibold text-xs text-blue-600 dark:text-blue-400 mb-2 flex items-center">
                                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Tariff Changes:
                                      </div>
                                      <ul class="space-y-1 ml-5">
                                        <li 
                                          v-for="(change, changeIndex) in notification.message.tariff_changes" 
                                          :key="changeIndex"
                                          class="text-xs flex items-start"
                                        >
                                          <span :class="getChangeColor(change)">{{ change }}</span>
                                        </li>
                                      </ul>
                                    </div>

                                    <!-- Capacity Changes Section -->
                                    <div v-if="notification.message.capacity_changes && notification.message.capacity_changes.length > 0">
                                      <div class="font-semibold text-xs text-green-600 dark:text-green-400 mb-2 flex items-center">
                                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        Capacity Changes:
                                      </div>
                                      <ul class="space-y-1 ml-5">
                                        <li 
                                          v-for="(change, changeIndex) in notification.message.capacity_changes" 
                                          :key="changeIndex"
                                          class="text-xs flex items-start"
                                        >

                                          <span :class="getChangeColor(change)">{{ change }}</span>
                                        </li>
                                      </ul>
                                    </div>

                                    <!-- No Changes Message -->
                                    <div v-if="!hasChanges(notification.message)" class="text-xs text-gray-500 dark:text-gray-400 italic">
                                      No detailed changes available
                                    </div>
                                  </div>
                                </transition>
                              </div>
                            </li>
                          </template>

                          <!-- Footer -->
                          <template v-if="websocekt_notification.length">
                            <li class="border-t border-white-light text-center dark:border-white/10 mt-5">
                              <div
                                class="flex items-center py-4 px-5 text-primary font-semibold group dark:text-gray-400 justify-center cursor-pointer"
                                @click="clearNotifications(close)"
                              >
                                <span class="group-hover:underline ltr:mr-1 rtl:ml-1">CLEAR ALL</span>
                                <icon-arrow-left class="group-hover:translate-x-1 transition duration-300 ltr:ml-1 rtl:mr-1" />
                              </div>
                            </li>
                          </template>
                          
                          <!-- Empty State -->
                          <template v-if="!websocekt_notification.length">
                            <li class="mb-5">
                              <div class="!grid place-content-center hover:!bg-transparent text-lg min-h-[200px]">
                                <div class="mx-auto ring-4 ring-primary/30 rounded-full mb-4 text-primary">
                                  <icon-info-circle :fill="true" class="w-10 h-10" />
                                </div>
                                No notifications available.
                              </div>
                            </li>
                          </template>
                        </ul>
                      </template>
              </Popper>
            </div>
   <!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
  <!-----------------------------------------------------NOTIFICATIONS END----------------------------------------------------------------------------------------------------------------------------------------------->
  <!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
  
  
  
          <div class="dropdown">
            <div class="sm:ltr:mr-auto sm:rtl:ml-auto">
              <div class="dropdown">
                <a class="flex items-center p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:hover:bg-white-light/90 dark:hover:bg-dark/60 text-l bg-success-light rounded text-success" href="javascript:;">
                  Credits: {{ Task_14_response && Task_14_response.length > 0 ? Number(Task_14_response[0].credit_balance).toFixed(2) : '0.00' }}
                </a>

            </div>
            </div>
          </div>
                    <!-- Replace the dropdown section with this modal trigger button -->
                    <div class="dropdown">
                      <button type="button" class="relative group block" @click="showProfileModal = true">
                        <img class="w-9 h-9 rounded-full object-cover saturate-50 group-hover:saturate-100"
                          src="/assets/images/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt="User Profile" />
                      </button>
                    </div>

                    <!-- Add this modal anywhere in your template (preferably near the end, before closing </div>) -->
                      <!-- Update the modal's z-index -->
                      <div v-if="showProfileModal" 
                          class="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50" 
                          @click.self="showProfileModal = false">
                        <div class="relative w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 m-4">
                          <!-- Close button -->
                          <button 
                            @click="showProfileModal = false"
                            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          >
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                          </button>

                          <!-- Profile content -->
                          <div v-if="Task_14_response.length > 0" class="text-center">
                            <!-- Profile image -->
                            <div class="mb-4">
                              <img class="w-24 h-24 rounded-full object-cover mx-auto"
                                src="/assets/images/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                                alt="User Profile" />
                            </div>

                            <!-- User info -->
                            <div class="mb-6">
                              <h4 class="text-xl font-semibold dark:text-white mb-2">
                                {{ Task_14_response[0].user__first_name }}
                              </h4>
                              <span class="inline-block px-3 py-1 text-xs bg-success-light rounded text-success">
                                {{ Task_14_response[0].user__is_superuser ? 'Admin' : 'User' }}
                              </span>
                            </div>

                            <!-- Sign out button -->
                            <button 
                              @click="handleSignOut(); showProfileModal = false"
                              class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                            >
                              <icon-logout class="w-5 h-5 rotate-90" />
                              <span class="font-semibold">Sign Out</span>
                            </button>
                          </div>
                        </div>
                      </div>
          </div>
        </div>
      </div>
    </header>
  
  <!-- All the conent of the Features-->
    <div v-if="signed_in_flag == 10">
  
  
      <!-- NOTIFICATION START CHARGING START-->
      <div v-if="notificationVisible" class="notification-popup">
        <div class="flex items-center p-6 rounded text-white bg-success text-3xl">
          <span class="ltr:pr-3 rtl:pl-3">
            <span class="text-xl">{{ notificationMessage }}</span>
          </span>
          <button type="button" @click="notificationVisible = false" class="ltr:ml-auto rtl:mr-auto hover:opacity-80">
          </button>
        </div>
      </div>
      <!-- NOTIFICATION START CHARGING END-->
  
  
  
    <!-- NOTIFICATION STOP CHARGING START-->
    <div v-if="stopNotificationVisible" class="notification-popup">
      <div class="flex items-center p-6 rounded text-white bg-info text-3xl">
        <span class="ltr:pr-3 rtl:pl-3">
          <span class="text-xl">{{ stopNotificationMessage }}</span>
        </span>
        <button type="button" @click="stopNotificationVisible = false" class="ltr:ml-auto rtl:mr-auto hover:opacity-80">
        </button>
      </div>
    </div>
    <!-- NOTIFICATION STOP CHARGING END-->
  
      <TabGroup>
  
        <TabList
          class="flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
  
          <Tab as="template" v-slot="{ selected }">
            <a href="javascript:;" @click="handleDashboardClick"
              class="flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary !outline-none"
              :class="{ '!border-primary text-primary': selected }">
              <icon-home />
              Dashboard
            </a>
          </Tab>
  
          <Tab as="template" v-slot="{ selected }" id="profile-overview">
            <a href="javascript:;" @click="load_details"
              class="flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary !outline-none"
              :class="{ '!border-primary text-primary': selected }">
              <icon-user />
              Profile Overview
            </a>
          </Tab>

            <!-- In the TabList section, add this new tab (only for non-admin users) -->
            <Tab v-if="Task_14_response && Task_14_response.length > 0 && !Task_14_response[0].user__is_superuser"
              as="template" v-slot="{ selected }" id="my-sessions">
              <a href="javascript:;" @click="middleware_my_sessions"
                class="flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary !outline-none"
                :class="{ '!border-primary text-primary': selected }">
                <icon-user />
                My Sessions
                <!-- Combined notification indicator -->
                <span v-if="hasActiveSessionNotification || hasNewMeterDataNotification" 
                      class="ml-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"
                      :title="hasNewMeterDataNotification ? 'New meter data available' : 'Active session detected'"></span>
              </a>
            </Tab>

          <Tab v-if="Task_14_response && Task_14_response.length > 0 && Task_14_response[0].user__is_superuser"
            as="template" v-slot="{ selected }" id="profile-overview">
            <a href="javascript:;"
              class="flex gap-2 p-4 border-b border-transparent hover:border-red-500 hover:text-orange-500 !outline-none"
              :class="{ '!border-red-500 text-orange-500': selected }">
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
                  <!--<input type="checkbox" id="toggle-css" v-model="isChecked" @change="toggleCSS">-->
                  <TabGroup>
                    <TabList class="flex">
                      <Tab as="template" v-slot="{ selected }" id="chargepoint-map">
                        <a href="javascript:;" @click="showMap('chargepoint')"
                          class="flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary !outline-none"
                          :class="{ '!border-primary text-primary': selected }">
                          Chargepoint Map
                          <img class="w-7 ml-[5px] flex-none" src="/assets/images/maps/charger.png" />
  
                        </a>
                      </Tab>
                      <Tab as="template" v-slot="{ selected }" id="weather-map">
                        <a href="javascript:;" @click="showMap('weather')"
                          class="flex gap-2 p-4 border-b border-transparent hover:border-primary hover:text-primary !outline-none"
                          :class="{ '!border-primary text-primary': selected }">
                          Weather Map
                          <img class="w-7 ml-[5px] flex-none" src="/assets/images/maps/weather.png" alt="Logo" />
  
                        </a>
                      </Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel v-show="selectedTab === 'chargepoint'">
                        <div class="map-container"  style="position: relative; z-index: 1;">
                          <div id="map" class="map"></div>
                        </div>
                      </TabPanel>
                      <TabPanel v-show="selectedTab === 'weather'">
                        <div class="map-container"  style="position: relative; z-index: 1;">
                          <div id="windy" class="windy"></div>
                        </div>
                      </TabPanel>
                    </TabPanels>
                  </TabGroup>
                </div>
  
                <div class="panel h-full">
                  <div class="max-h-120 overflow-y-auto">
                    <form class="space-y-5" @submit.prevent="initializeWaypoints">
                      <div class="grid grid-cols-1 gap-5">
                        <div>
                          <label for="startAddress">Start Address</label>
                          <div class="input-container">
                            <input id="startAddress" type="text" placeholder="Enter Start Address" v-model="startAddress"
                              class="form-input w-full" required />
                            <button type="button" @click="clearStartInput()" class="clear-button">x</button>
                          </div>
                          <ul v-if="startAddressResults.length > 0" class="dropdown">
                            <li v-for="address in startAddressResults" :key="address.label"
                              @click="select_Start_Address(address)" class="dropdown-item">
                              <span class="arrow-icon">➔ </span>
                              <span>{{ address.label }}</span>
  
                            </li>
                          </ul>
                        </div>
  
  
                        <div class="arrow-icons flex justify-center my-2">
                          <button type="button">
                            <FontAwesomeIcon :icon="['fas', 'arrow-rotate-left']" size="2xl" style="color: #B197FC;"
                              @click="swapAddresses('backward')" />
                          </button>
                        </div>
  
                        <div>
                          <label for="destinationAddress">Destination Address</label>
                          <div class="input-container">
                            <input id="destinationAddress" type="text" placeholder="Enter Destination Address"
                              v-model="destinationAddress" class="form-input w-full" required />
                            <button type="button" @click="clearDestinationInput()" class="clear-button">x</button>
                          </div>
                          <ul v-if="destinationAddressResults.length > 0" class="dropdown">
                            <li v-for="address in destinationAddressResults" :key="address.label"
                              @click="select_Destination_Address(address)" class="dropdown-item">
                              <span class="arrow-icon">➔ </span>
                              <span>{{ address.label }}</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <label for="range_checkbox">See chargepoints near you <input id="range_checkbox" type="checkbox"
                              v-model="range_checkbox" class="form-checkbox" @change="range_check_function" /></label>
  
                          <label v-if="range_checkbox" for="Range">Chargepoint Range {{chargepoint_distance}} km</label>
                          <input v-if="range_checkbox" type="range" v-model="chargepoint_distance"
                            @input="onDistanceChanged" min="0" max="200" step="1" class="distance-slider">
  
                        </div>
  
                        <div>
                          <label for="kw_checkbox">Set Charging amount in kW<input id="kw_checkbox" type="checkbox"
                              v-model="kw_checkbox" class="form-checkbox" @change="kw_check_function" /></label>
  
                          <label v-if="kw_checkbox" for="Range">kW Amount {{kW_amount}}kW</label>
                          <input v-if="kw_checkbox" type="range" v-model="kW_amount" min="30" max="200" step="1"
                            class="distance-slider"><!--@input="onkWChanged"-->
  
                        </div>
  
                        <div class="flex space-x-3">
                          <button type="submit" class="btn btn-primary w-full">Directions</button>
                          <button type="button" class="btn btn-primary w-full"
                            @click="handleClear_extended">Clear</button>
                          <button type="button" class="btn btn-primary w-full" @click="getCurrentLocation">GPS
                            Location</button>
                        </div>
                        <div>
                          <button type="button" class="btn btn-secondary w-full" @click="openGoogleMapsLink">Open in
                            Google Maps</button>
                        </div>
                      </div>
                    </form>
  
  
                    <!-- Routes -->
                    <div v-if="routes_info.length > 0" class="container py-6">
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div v-for="(route, index) in routes_info" :key="index" class="panel">
                          <div class="mb-4">
                            <h5 class="font-semibold text-lg dark:text-white-light">
                              <span class="text-danger ml-1">Route {{ index + 1 }}:</span>
                            </h5>
                            <h5 class="font-semibold text-lg dark:text-white-light">
                              <span class="text-primary">{{ route.name }}</span>
                            </h5>
                          </div>
                          <div class="mb-2">
                            <p><strong>Distance time:</strong></p>
                            <p>{{ calculateDistanceTime(route.summary.totalTime) }}</p>
                          </div>
                          <div v-if="kw_checkbox" class="mb-2">
                            <p><strong>Charging time for {{kW_amount}} kW:</strong>
                              <!--{{ calculateChargingTime(route) }}-->
                            </p>
                            <p>{{ calculateChargingTime(kW_amount) }}</p>
                          </div>
                          <div v-if="kw_checkbox">
                            <p><strong>Total time: {{ calculateTotalTime(route.summary.totalTime, kW_amount) }}</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
  
                    
      <!-- WebSocket Button 
                    <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                      <button type="button" class="btn btn-info" @click="connectWebSocket_DSS">WebSocket Test</button>
                      <button class="btn btn-success" @click="resetCounter"> Notifications ({{ counter }})  </button>
                    </div>
                    
                    <div  v-if="notification_dropdown"  class="message-list">
                      <h3>Received Messages:</h3>
                      <ul>
                        <li v-for="(message) in websocekt_notification" :key="message">
                          • {{ message.message }}
                        </li>
                      </ul>
                    </div>
        
                  <div v-if="Task_14_response && Task_14_response.length > 0 && !Task_14_response[0].user__is_superuser"
                        class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                      <button type="button" class="btn btn-info" @click="send_email">Send Email</button>
                    </div>
  
  -->
  
  
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
<!--  
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6" style="height: 10; overflow-y: auto;">
              <div v-if="dataToUse.length > 0 " class="panel">
                <button type="submit" @click="hide_tariff_graph"
                  class="btn btn-info absolute top-0 right-0 m-2">Hide</button>
                <div class="flex items-center">
                  <h5 class="font-semibold text-lg dark:text-white-light">
                    <span class="text-primary ml-2">24h Tariff Schedule in {{markerAddress}}</span>
                  </h5>
                </div>
                <div class="relative">
                  <apexchart height="325" :options="areaChart" :series="areaChartSeries"
                    class="bg-white dark:bg-black rounded-lg overflow-hidden">
                    <div
                      class="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                      <span
                        class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
                    </div>
                  </apexchart>
                </div>
              </div>
  
              <div v-if="dataToUse_Capacity.length > 0" class="panel">
                <button type="submit" @click="hide_capacity_graph"
                  class="btn btn-info absolute top-0 right-0 m-2">Hide</button>
                <div class="flex items-center">
                  <h5 class="font-semibold text-lg dark:text-white-light">
                    <span class="text-primary ml-2">24h Capacity Schedule in {{markerAddress}}</span>
                  </h5>
                </div>
                <div class="relative">
                  <apexchart height="325" :options="areaChart_Capacity" :series="areaChartSeries_Capacity"
                    class="bg-white dark:bg-black rounded-lg overflow-hidden">
                    <div
                      class="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                      <span
                        class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
                    </div>
                  </apexchart>
                </div>
              </div>
  
  
            </div>
            -->

<!-- Full width container with vertical stacking -->
<div class="flex flex-col gap-6 w-full" style="overflow-y: auto;">
  
  <!-- Tariff Chart - Full Width -->
  <div v-if="dataToUse.length > 0" class="panel w-full">
    <button type="submit" @click="hide_tariff_graph" 
            class="btn btn-info absolute top-0 right-0 m-2 z-10">Hide</button>
    <div class="flex items-center mb-4">
      <h5 class="font-semibold text-lg dark:text-white-light">
        <span class="text-primary ml-2">24h Tariff Schedule in {{markerAddress}}</span>
      </h5>
    </div>
    <div class="relative w-full">
      <apexchart 
        height="400" 
        :options="areaChart" 
        :series="areaChartSeries"
        class="bg-white dark:bg-black rounded-lg overflow-hidden w-full">
        <div class="min-h-[400px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
          <span class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
        </div>
      </apexchart>
    </div>
  </div>

  <!-- Capacity Chart - Full Width -->
  <div v-if="dataToUse_Capacity.length > 0" class="panel w-full">
    <button type="submit" @click="hide_capacity_graph" 
            class="btn btn-info absolute top-0 right-0 m-2 z-10">Hide</button>
    <div class="flex items-center mb-4">
      <h5 class="font-semibold text-lg dark:text-white-light">
        <span class="text-primary ml-2">24h Capacity Schedule in {{markerAddress}}</span>
      </h5>
    </div>
    <div class="relative w-full">
      <apexchart 
        height="400" 
        :options="areaChart_Capacity" 
        :series="areaChartSeries_Capacity"
        class="bg-white dark:bg-black rounded-lg overflow-hidden w-full">
        <div class="min-h-[400px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
          <span class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
        </div>
      </apexchart>
    </div>
  </div>

</div>
  
  <!--
            <div v-if="Task_14_response && Task_14_response.length > 0 && !Task_14_response[0].user__is_superuser"
              class="panel h-full">
              <div class="flex items-center">
                <h5 class="font-semibold text-lg dark:text-white-light">
                  <span class="text-primary ml-2">Transaction History Graph</span>
                </h5>
              </div>
              <div class="relative">
                <apexchart height="325" :options="columnChart" :series="columnChartSeries"
                  class="bg-white dark:bg-black rounded-lg overflow-hidden">

                  <div
                    class="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                    <span
                      class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
                  </div>
                </apexchart>
              </div>
            </div>
  -->
            <!-- Prediction Table -->
            <div v-if="Task_14_response && Task_14_response.length > 0 && Task_14_response[0].user__is_superuser"
              class="panel h-full gap-6 mb-6" style="height: 10; overflow-y: auto;">
  
              <div class="table-responsive">
                <p class="text-lg dark:text-white-light/90 gap-3 mb-3">
                  <span class="text-primary ml-2">Prediction Table</span>
                </p>
                <div>
                  <label for="prediction_name">Prediction of Charger: </label>
                  <!--<span class="text-primary ml-2">{{socket_type_selection}}</span>-->
                  <div class="relative text-white-dark">
                    <select id="prediction_name" class="form-select ps-10 placeholder:text-white-dark w-1/6 mr-2"
                      v-model="Task_Prediction_name" @change="prediction_trigger"> <!-- Show Save button on change -->
                      <option value="Aggelaki 15 Daily.xlsx">Charger 1</option>
                      <option value="Andrea Papandreou 21 Daily.xlsx">Charger 2</option>
                      <option value="Attiki odos 21 Daily.xlsx">Charger 3</option>
                      <option value="Ethniki Odos 12o Km Ethnikis Thessalonikis Pereas Daily.xlsx">Charger 4</option>
                      <option value="Lazaraki 59 Daily.xlsx">Charger 5</option>
                      <option value="Leoforos Mesogeion 299 Daily.xlsx">Charger 6</option>
                      <option value="Plateia Nymfon Daily.xlsx">Charger 7</option>
                      <option value="Zefirou 111 Daily.xlsx">Charger 8</option>
                    </select>
  
                  </div>
                </div>
              </div>
  
              <div class="relative">
                <apexchart height="325" :options="Task_Prediction_areaChart" :series="Task_Prediction_areaChartSeries"
                  class="bg-white dark:bg-black rounded-lg overflow-hidden">
                  <div
                    class="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                    <span
                      class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
                  </div>
                </apexchart>
              </div>
            </div>
  
  
  
            
  
  
          </TabPanel>
  
  
          <TabPanel> <!--General Information-->
            <div>
              <form class="border border-[#ebedf2] dark:border-[#191e3a] rounded-md p-4 mb-5 bg-white dark:bg-[#0e1726]">
                <h6 class="text-primary font-bold mb-5">General Information</h6>
                <div class="flex flex-col sm:flex-row">
                  <div class="ltr:sm:mr-4 rtl:sm:ml-4 w-full sm:w-2/12 mb-5 flex flex-col items-center">
                    <img src="/assets/images/default-avatar-profile-icon-of-social-media-user-vector.jpg" alt=""
                      class="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover mx-auto" />
                    <button v-if="profile_save_button" @click="saveChanges" type="button"
                      class="btn btn-primary mt-5 bg-purple-500 text-white">
                      Save changes
                    </button>
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
                      <label for="Power_Type">Socket type: {{Task_14_response[0].chargepoint_sockets[0]}} </label>
                      <!--<span class="text-primary ml-2">{{socket_type_selection}}</span>-->
                      <div class="relative text-white-dark">
                        <select id="Power_Type" class="form-select ps-10 placeholder:text-white-dark w-1/2 mr-4"
                          v-model="socket_type_selection" @change="showSaveButton"> <!-- Show Save button on change -->
                          <option value="CHADEMO">CHADEMO</option>
                          <option value="DOMESTIC_A">DOMESTIC_A</option>
                          <option value="IEC_60309_2_single_16">IEC_60309_2_single_16</option>
                          <option value="IEC_62196_T1_COMBO">IEC_62196_T1_COMBO</option>
                        </select>
  
                      </div>
                    </div>
  
  
                    <div>
                      <label for="Tariff">Tariff Preference: {{Task_14_response[0].tariff_preference}}</label>
                      <div class="relative text-white-dark">
                        <input id="Tariff" type="number" placeholder="the preference " step="0.001"
                          class="form-input ps-10 placeholder:text-white-dark w-1/2 mr-4" v-model=" tariff_amount"
                          @change="showSaveButton" />
                        <span class="text-primary ml-2"></span>
  
                      </div>
                    </div>
                    <!-- Show Save button when changes are made -->
                    <!---->
                  </div>
                </div>
              </form>
            
              <hr class="my-4 border-t border-gray-300 dark:border-gray-700">
               <!--<div v-if="Task_14_response && Task_14_response.length > 0 && Task_14_response[0].user__is_superuser">-->
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-6" style="overflow-y: auto;">
    
                    <!-- First Div: Charging Tags (smaller width) -->
                    <div class="grid grid-cols-1 gap-5">
                      <p class="text-lg dark:text-white-light/90">
                        <span class="text-primary ml-2">Charging Tags</span>
                      </p>
                      <div class="table-responsive">
                        <table class="table-hover border border-gray-300 w-full text-left">
                          <thead>
                            <tr>
                              <th class="border border-gray-300 px-4 py-2">Tag Name</th>
                              <th class="border border-gray-300 px-4 py-2">Expiry Date</th>                          
                            </tr>
                          </thead>
                          <tbody>
                            <template v-for="data in Tag_response" :key="data.value">
                              <tr>
                                <td class="border border-gray-300 px-4 py-2">{{ data.friendly_name }}</td>
                                <td class="border border-gray-300 px-4 py-2">{{ data.expiry_date }}</td>
                              </tr>
                            </template>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
  
                    <!-- Second Div: Form with four text fields (larger width) -->
                    <div v-if="Task_14_response && Task_14_response.length > 0 && Task_14_response[0].user__is_superuser" class="w-full">
                      <TabGroup>
  
                        <TabList class="flex">
                            <Tab as="template" v-slot="{ selected }" id="Post_ID_Tag">
                              <a href="javascript:;"
                                class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                                :class="{ '!border-green-500 text-green-500': selected }">
                                Create Charging Tag
                              </a>
                            </Tab>
  
                            <Tab as="template" v-slot="{ selected }" id="Patch_ID_Tag">
                                <a href="javascript:;"
                                  class="flex gap-2 p-4 border-b border-transparent hover:border-orange-500 hover:text-orange-500 !outline-none"
                                  :class="{ '!border-orange-500 text-orange-500': selected }">
                                  Update Charging Tag
                                </a>
                              </Tab>
  
                            <Tab as="template" v-slot="{ selected }" id="Delete_ID_Tag">
                                <a href="javascript:;"
                                  class="flex gap-2 p-4 border-b border-transparent hover:border-red-500 hover:text-red-500 !outline-none"
                                  :class="{ '!border-red-500 text-red-500': selected }">
                                  Delete Charging Tag
                                </a>
                              </Tab> 
  
                          </TabList>
  
                        <TabPanels>
  
                          <TabPanel> <!-- ID_Tag POST START-->
                               
                               <form class="space-y-5" @submit.prevent="create_Id_Tag">
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-5
                                p-4 bg-blue-200 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
  
                                  <!-- Friendly Name -->
                                  <div>
                                    <label for="create_friendly_name" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                      Friendly Name
                                    </label>
  
                                    <input type="text"
                                          id="create_friendly_name"
                                          v-model="createTagData.friendly_name"
                                          class="form-input w-full"
                                        />
                                  </div>
  
                                  
                                  <div>
                                    <label for="create_expiry_date" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                      Expiry Date
                                    </label>
                                    <input type="datetime-local"
                                      id="create_expiry_date"
                                      v-model="createTagData.expiry_date"
                                      class="form-input w-full"
                                    />
                                  </div>
  
                                </div>
                                <!-- Submit Button -->
                                <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                  <button type="submit" class="btn btn-primary">Create</button>
                                </div>
  
                              </form>
                          </TabPanel> <!-- ID_Tag POST END-->
  
                          <TabPanel> <!-- PATCH ID TAG START-->
                               
                               <form class="space-y-5" @submit.prevent="update_Id_Tag">
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-5
                                p-4 bg-blue-200 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                                  <!-- Id_Tag Selection ID -->
                                  <div>
                                    <label for="IdTagDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                      Charging Tag Selection
                                    </label>
                                    <select v-model="id_tag_fetch_selection" id="id_tag_fetch_selection" class="form-select w-3/4 mr-4"
                                            required @change="tag_selected_fetch">
                                      
                                      <option disabled value="">Please select a Tag Name</option>
                                      <option v-for="(data) in Tag_response" :key="data.friendly_name">
                                                    {{data.friendly_name}}
                                                  </option>
                                    </select>
                                  </div>
  
  
                                </div>
  
                                <!-- Patching Fields -->
                              <div class="grid grid-cols-1 md:grid-cols-3 gap-5
                                p-4 bg-blue-200 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                                  <div>
                                    <label for="create_friendly_name" class="block text-sm font-large text-black-700 dark:text-white-light">
                                      Friendly Name
                                    </label>
  
                                    <input type="text"
                                          id="create_friendly_name"
                                          class="form-input w-full"
                                          v-model="id_tag_selected_data.friendly_name"
                                          
                                        />
                                  </div>
  <!--
                                  <div>
                                  <label for="tarriff_countrycode">Country Code</label>
                                  <input id="tarriff_countrycode" type="text" placeholder="Enter Country Code" maxlength="2" minlength="2"
                                    pattern="[A-Za-z]{2}" class="form-input" v-model="TarriffElement_inputs_Patch.tarriff_countrycode" />
                                </div>
  -->
                                  <!-- Connector Number -->
                                  <div>
                                    <label for="create_expiry_date" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                      Expiry Date : {{id_tag_selected_data.expiry_date}}
                                    </label>
  
                                    <input type="datetime-local"
                                      id="create_expiry_date"
                                      v-model="id_tag_selected_data.expiry_date"
                                      class="form-input w-full"
                                    />
                                  </div>
  
                                </div>
  
                                <!-- Submit Button -->
                                <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                  <button type="submit" class="btn btn-primary">Update</button>
                                </div>
  
                              </form>
                          </TabPanel> <!-- PATCH ID TAG END-->
  
                            <TabPanel><!-- DELETE ID TAG START-->
                              
                              <form class="space-y-5" @submit.prevent="deleteChargingTag">
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-5
                                p-4 bg-blue-200 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                                  <!-- Id_Tag Selection ID -->
                                  <div>
                                    <label for="IdTagDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                      Charging Tag Selection
                                    </label>
                                    <select v-model="id_tag_fetch_delete_selection" id="id_tag_fetch_delete_selection" class="form-select w-3/4 mr-4"
                                            required @change="tag_selected_for_delete_fetch">
                                      
                                      <option disabled value="">Please select a Tag Name</option>
                                      <option v-for="(data) in Tag_response" :key="data.friendly_name">
                                                    {{data.friendly_name}}
                                                  </option>
                                    </select>
                                  </div>
                                </div>
  
                                <!-- Submit Button -->
                                <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                  <button type="submit" class="btn btn-danger">Delete</button>
                                </div>
  
                              </form>
  
  
  
  
  
                            </TabPanel><!-- DELETE ID TAG END-->
  
                        </TabPanels>
  
                        </TabGroup>
                    </div>
  
                  </div>
                  <hr class="my-4 border-t border-gray-300 dark:border-gray-700">
  
                
          </div>
  
  
          </TabPanel> <!-- General Information-->

          <!-- Add this new TabPanel after the Profile Overview TabPanel -->
<TabPanel v-if="Task_14_response && Task_14_response.length > 0 && !Task_14_response[0].user__is_superuser">





          <!-- Survey Modal - Add this to your Vue template -->
          <div v-if="showSurveyModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
              <!-- Header -->
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-semibold text-blue-600">
                  🔌 Charging Session Completed!
                </h3>
                <button 
                  @click="closeSurveyModal"
                  class="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>

              <!-- Content -->
              <div class="text-center mb-6">
                <p class="text-gray-700 mb-4 leading-relaxed">
                  Thank you for using EV4EU charging services! 
                </p>
                <p class="text-gray-600 mb-6">
                  Please share your experience to help us improve our services:
                </p>
                
                  <!-- Survey Button -->
                    <div class="space-y-2">
                      <button 
                        @click="openSurvey"
                        class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 w-full"
                      >
                        📝 Share Your <span class="font-bold text-red-500">Charging</span> and <span class="font-bold text-purple-300">Dashboard</span> Experience
                      </button>
                      
                      <p class="text-sm text-gray-600 dark:text-gray-400 text-center">
                        ⚠️ Note: This will open <span class="font-bold text-orange-500 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded">TWO</span> separate survey tabs.
                      </p>
                    </div>
              </div>

              <!-- Footer Buttons -->
              <div class="flex gap-3">
                <button 
                  @click="closeSurveyModal"
                  class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>









  <!-- My Active Sessions Content -->
  <div class="pt-5">
    <div class="panel gap-6 mb-6">
      <h5 class="font-semibold text-lg dark:text-white-light mb-4">
        <span class="text-primary ml-2">My Active Charging Session</span>
      </h5>
      
      <!-- Active Session Display -->
      <div v-if="myActiveSession" class="space-y-6">
        <!-- Session Info Panel -->
        <div class="panel">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h6 class="font-semibold text-blue-600 dark:text-blue-400">Transaction ID</h6>
              <p class="text-lg font-bold">{{ myActiveSession.transaction_id }}</p>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h6 class="font-semibold text-green-600 dark:text-green-400">Chargepoint</h6>
              <p class="text-m font-bold">{{ myActiveSession.connector__chargepoint }}</p>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
              <h6 class="font-semibold text-purple-600 dark:text-purple-400">Connector</h6>
              <p class="text-lg font-bold">{{ myActiveSession.connector__connectorid }}</p>
            </div>
            <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <h6 class="font-semibold text-red-600 dark:text-red-400">Current Tariff</h6>
              <p class="text-lg font-bold"> {{ myCurrentTariff.price ? `€${myCurrentTariff.price}/kWh` : 'N/A' }} </p>
            </div>
          </div>
          
          <!-- Session Status and Controls -->
          <div class="border-t pt-4 mt-4">
            <div class="flex justify-between items-center">
              <div class="flex items-center space-x-4">
                <div class="flex items-center space-x-2">
                  <span class="text-sm font-medium">Status:</span>
                  <span class="px-3 py-1 rounded-full text-sm font-medium"
                        :class="{
                          'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400': 
                            myActiveSession.connector__connector_status === 'Charging',
                          'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400': 
                            myActiveSession.connector__connector_status === 'Preparing',
                          'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400': 
                            myActiveSession.connector__connector_status === 'Available'
                        }">
                    {{ myActiveSession.connector__connector_status }}
                  </span>
                </div>
                <div class="text-sm text-gray-600 dark:text-gray-400">
                  Started: {{ formatDate(myActiveSession.start_transaction_timestamp) }}
                </div>
              </div>
              
              <!-- Stop Transaction Button -->
              <button 
                @click="stopMyTransaction"
                class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Stop Charging
              </button>
            </div>
          </div>
        </div>

        <!-- Energy Consumption Charts -->
        <div class="grid xl:grid-cols-2 gap-6">
          <!-- Energy (W) Chart -->
          <div class="panel" style="height: 400px;">
            <div class="flex items-center mb-4">
              <h5 class="font-semibold text-lg dark:text-white-light">
                <span class="text-green-500 ml-2">Real-time Energy (W)</span>
              </h5>
            </div>
            <div class="relative" style="height: 300px;">
              <apexchart height="300" :options="mySessionEnergyChart" :series="mySessionEnergyChartSeries"
                class="bg-white dark:bg-black rounded-lg overflow-hidden">
                <div class="min-h-[300px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                  <span class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
                </div>
              </apexchart>
            </div>
          </div>

          <!-- Energy Hours (Wh) Chart -->
          <div class="panel" style="height: 400px;">
            <div class="flex items-center mb-4">
              <h5 class="font-semibold text-lg dark:text-white-light">
                <span class="text-purple-500 ml-2">Total Energy Consumed (Wh)</span>
              </h5>
            </div>
            <div class="relative" style="height: 300px;">
              <apexchart height="300" :options="mySessionEnergyHoursChart" :series="mySessionEnergyHoursChartSeries"
                class="bg-white dark:bg-black rounded-lg overflow-hidden">
                <div class="min-h-[300px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                  <span class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
                </div>
              </apexchart>
            </div>
          </div>
        </div>
      </div>

      <!-- No Active Session Message -->
      <div v-else class="text-center py-12">
        <div class="mx-auto ring-4 ring-primary/30 rounded-full mb-4 text-primary w-16 h-16 flex items-center justify-center">
          <icon-info-circle :fill="true" class="w-8 h-8" />
        </div>
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">No Active Session</h3>
        <p class="text-gray-600 dark:text-gray-400">You don't have any active charging sessions at the moment.</p>
        <p class="text-gray-600 dark:text-gray-400 text-sm mt-2">Start charging from the map to see real-time data here.</p>
      </div>
    </div>

    <!-- My Sessions History Table -->
    <div class="panel gap-6 mb-6">
      <div class="flex justify-between items-center mb-4">
        <h5 class="font-semibold text-lg dark:text-white-light">
          <span class="text-primary ml-2">My Charging Sessions History</span>
        </h5>
      </div>
            <!-- Sessions Summary -->
      <div v-if="mySessions && mySessions.length > 0" class="border-t pt-4 mt-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
            <p class="text-sm text-blue-600 dark:text-blue-400 font-medium">Total Sessions</p>
            <p class="text-xl font-bold text-blue-800 dark:text-blue-300">{{ mySessions.length }}</p>
          </div>
          <div class="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
            <p class="text-sm text-green-600 dark:text-green-400 font-medium">Total Spent</p>
            <p class="text-xl font-bold text-green-800 dark:text-green-300">€{{ formatCurrency(totalSpent) }}</p>
          </div>
          <div class="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
            <p class="text-sm text-purple-600 dark:text-purple-400 font-medium">Total Energy</p>
            <p class="text-xl font-bold text-purple-800 dark:text-purple-300">{{ formatEnergy(totalEnergy) }} kWh</p>
          </div>
          <div class="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
            <p class="text-sm text-orange-600 dark:text-orange-400 font-medium">Avg. Session</p>
            <p class="text-xl font-bold text-orange-800 dark:text-orange-300">€{{ formatCurrency(averageSessionCost) }}</p>
          </div>
        </div>
      </div>
      <!-- Sessions Table -->
      <div class="table-responsive" style="overflow-y: auto; max-height: 500px;">
        <table class="table-hover w-full">
          <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
            <tr>
              <th class="text-left py-3 px-4 font-semibold text-sm">Session Date</th>
              <th class="text-left py-3 px-4 font-semibold text-sm">Total Cost (€)</th>
              <th class="text-left py-3 px-4 font-semibold text-sm">Energy (kWh)</th>
              <th class="text-left py-3 px-4 font-semibold text-sm">Duration</th>
              <th class="text-left py-3 px-4 font-semibold text-sm">Fixed Cost (€)</th>
              <th class="text-left py-3 px-4 font-semibold text-sm">Energy Cost (€)</th>
              <th class="text-left py-3 px-4 font-semibold text-sm">Time Cost (€)</th>
            </tr>
          </thead>
          <tbody>
            <!-- Loading State -->
            <tr v-if="loadingSessions">
              <td colspan="7" class="text-center py-8">
                <div class="flex items-center justify-center">
                  <span class="animate-spin border-2 border-primary !border-l-transparent rounded-full w-6 h-6 mr-3"></span>
                  Loading your sessions...
                </div>
              </td>
            </tr>

            <!-- Sessions Data -->
            <template v-else-if="mySessions && mySessions.length > 0">
              <tr v-for="session in mySessions" :key="session.id" class="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                <td class="py-3 px-4 text-sm">
                  {{ formatSessionDate(session.start_date_time) }}
                </td>
                <td class="py-3 px-4 text-sm font-semibold text-green-600 dark:text-green-400">
                  €{{ formatCurrency(session.total_cost__incl_vat) }}
                </td>
                <td class="py-3 px-4 text-sm">
                  {{ formatEnergy(session.total_energy) }} kWh
                </td>
                <td class="py-3 px-4 text-sm">
                  {{ formatDuration(session.total_time) }}
                </td>
                <td class="py-3 px-4 text-sm text-blue-600 dark:text-blue-400">
                  €{{ formatCurrency(session.total_fixed_cost__incl_vat) }}
                </td>
                <td class="py-3 px-4 text-sm text-purple-600 dark:text-purple-400">
                  €{{ formatCurrency(session.total_energy_cost__incl_vat) }}
                </td>
                <td class="py-3 px-4 text-sm text-orange-600 dark:text-orange-400">
                  €{{ formatCurrency(session.total_time_cost__incl_vat) }}
                </td>
              </tr>
            </template>

            <!-- No Sessions Message -->
            <tr v-else>
              <td colspan="7" class="text-center py-8">
                <div class="text-gray-500 dark:text-gray-400">
                  <div class="mx-auto w-12 h-12 text-gray-300 dark:text-gray-600 mb-3">
                    <icon-info-circle class="w-full h-full" />
                  </div>
                  <p class="font-medium">No charging sessions found</p>
                  <p class="text-sm mt-1">Your charging history will appear here after you complete sessions.</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  </div>
</TabPanel>

          <!--============================================================ ADMINISTATOR TOOLS ============================================================-->
  
          <TabPanel v-if="Task_14_response && Task_14_response.length > 0 && Task_14_response[0].user__is_superuser">
  
  
            <!-- ######################################################################################################################################################################-->
              <div>
                <TabGroup>
  
                    <TabList
                      class="flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
  
                      <Tab as="template" v-slot="{ selected }">
                        <a href="javascript:;"
                          class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                          :class="{ '!border-green-500 text-green-500': selected }">
  
  
                          Chargepoint Tools
                        </a>
                      </Tab>
                        <Tab as="template" v-slot="{ selected }">
                          <a href="javascript:;"
                            class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                            :class="{ '!border-green-500 text-green-500': selected }">
  
  
                            Tariff Tools
                          </a>
                      </Tab>
                      <Tab as="template" v-slot="{ selected }">
                        <a href="javascript:;" @click="Task_7_Get_Functions(); connector_chargepoint_name_fetch(); Test_Charging_Operation();"
                          class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                          :class="{ '!border-green-500 text-green-500': selected }">
  
  
                            Connector Tools
                          </a>
  
                          
                      </Tab>
                      <Tab as="template" v-slot="{ selected }">
                          <a href="javascript:;"
                            class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                            :class="{ '!border-green-500 text-green-500': selected }">
  
  
                            Transaction Tools
                          </a>
  
                          
                      </Tab>
  
                      <Tab as="template" v-slot="{ selected }">
                          <a href="javascript:;" @click="Test_Charging_Operation(); chargingProfile_response_function();"
                            class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                            :class="{ '!border-green-500 text-green-500': selected }">
  
  
                            Charging Tools
                          </a>
  
                          
                      </Tab>
  
  
                      <Tab as="template" v-slot="{ selected }">
                          <a href="javascript:;" @click="Account_response_function();"
                            class="flex gap-2 p-4 border-b border-transparent hover:border-blue-500 hover:text-blue-500 !outline-none"
                            :class="{ '!border-blue-500 text-blue-500': selected }">
  
  
                            Account Profiles Tools
                          </a>
  
                          
                      </Tab>



                        <!-- NEW: DSO Signal Tab -->
                      <Tab as="template" v-slot="{ selected }">
                        <a href="javascript:;" class="flex gap-2 p-4 border-b border-transparent hover:border-purple-500 hover:text-purple-500 !outline-none"
                          :class="{ '!border-purple-500 text-purple-500': selected }">

                          DSO Signal Submission

                        </a>
                      </Tab>

  
                    </TabList>
  
                    <TabPanels>
                      <TabPanel><!-- Chargepoint Tools ALL START-->
  
  
                        <div class="panel h-full gap-6 mb-6">
  
                                  <TabGroup>
  
                                    <TabList
                                      class="flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
  
                                      <Tab as="template" v-slot="{ selected }">
                                        <a href="javascript:;" @click="get_locations_info"
                                          class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                                          :class="{ '!border-green-500 text-green-500': selected }">
  
                                          Create Location
                                        </a>
                                      </Tab>
                                      <Tab as="template" v-slot="{ selected }" id="profile-overview">
                                        <a href="javascript:;" @click="get_locations_info"
                                          class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                                          :class="{ '!border-green-500 text-green-500': selected }">
  
                                          Create Chargepoint
                                        </a>
                                      </Tab>
                                      <Tab as="template" v-slot="{ selected }" id="profile-overview">
                                        <a href="javascript:;" @click="get_locations_info"
                                          class="flex gap-2 p-4 border-b border-transparent hover:border-orange-500 hover:text-orange-500 !outline-none"
                                          :class="{ '!border-orange-500 text-orange-500': selected }">
  
                                          Update Location
                                        </a>
                                      </Tab>
                                      <Tab as="template" v-slot="{ selected }" id="profile-overview">
                                        <a href="javascript:;" @click="get_locations_info"
                                          class="flex gap-2 p-4 border-b border-transparent hover:border-orange-500 hover:text-orange-500 !outline-none"
                                          :class="{ '!border-orange-500 text-orange-500': selected }">
  
                                          Update Chargepoint
                                        </a>
                                      </Tab>
                                      <Tab as="template" v-slot="{ selected }" id="profile-overview">
                                        <a href="javascript:;" @click="get_locations_info"
                                          class="flex gap-2 p-4 border-b border-transparent hover:border-red-500 hover:text-red-500 !outline-none"
                                          :class="{ '!border-orange-500 text-red-500': selected }">
  
                                          Delete Location
                                        </a>
                                      </Tab>
                                      <Tab as="template" v-slot="{ selected }" id="profile-overview">
                                        <a href="javascript:;" @click="get_locations_info"
                                          class="flex gap-2 p-4 border-b border-transparent hover:border-red-500 hover:text-red-500 !outline-none"
                                          :class="{ '!border-orange-500 text-red-500': selected }">
  
                                          Delete Chargepoint
                                        </a>
                                      </Tab>
  
                                    </TabList>
  
                                    <TabPanels>
  
                                      <TabPanel> <!-- Location CREATE START-->
  
                                        <div
                                          class="max-h-144 overflow-y-auto p-4 bg-gray-30 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
  
                                          <div>
                                            <label for="see_existing_locations">See Locations <input id="see_existing_locations" type="checkbox"
                                                v-model="see_existing_locations" class="form-checkbox " @change="existing_locations" /> </label>
                                          </div>

                                          <div v-if="see_existing_locations" class="table-responsive" style="overflow-y: auto; max-height: 450px;" >
                                            <table class="table-hover w-full">
                                              <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                                
                                                <tr>
                                                  <th>Location ID</th>
                                                  <th>Country - Time Zone</th>
                                                  <th>Address</th>
                                                  <th>Parking Type</th>
                                                  <th>Substation Id</th>
                                                  <th>Last Updated</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <template v-for="(location_item, index) in locations_table" :key="location_item.id">
                                                  <tr>
                                                    <td>{{ `Location Id #${index + 1}` }}</td>
                                                    <td>{{ location_item.country}} - {{ location_item.time_zone}}</td>
                                                    <td>{{ location_item.address}}, {{ location_item.city}}, {{ location_item.postal_code}}
                                                    </td>
                                                    <td>{{ location_item.parking_type}}</td>
                                                    <td>{{ location_item.substation_id }}</td>
                                                    <td>{{ location_item.last_updated }}</td>
                                                  </tr>
                                                </template>
                                              </tbody>
                                            </table>
                                          </div>
                                          <hr class="my-4 border-t border-gray-300 dark:border-gray-700">
  
                                          <form class="space-y-5" @submit.prevent="submitLocation_inputs()">
  
                                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
  
                                              <div>
                                                <label for="timeZone" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Time Zone
                                                </label>
                                                <select v-model="Location_inputs.timeZone" id="timeZone" class="form-select w-7/8 mr-4" required>
                                                      <option value="Europe/Amsterdam">Europe/Amsterdam</option>
                                                      <option value="Europe/Andorra">Europe/Andorra</option>
                                                      <option value="Europe/Athens">Europe/Athens</option>
                                                      <option value="Europe/Bratislava">Europe/Bratislava</option>
                                                      <option value="Europe/Brussels">Europe/Brussels</option>
                                                      <option value="Europe/Bucharest">Europe/Bucharest</option>
                                                      <option value="Europe/Budapest">Europe/Budapest</option>
                                                      <option value="Europe/Copenhagen">Europe/Copenhagen</option>
                                                      <option value="Europe/Dublin">Europe/Dublin</option>
                                                      <option value="Europe/Helsinki">Europe/Helsinki</option>
                                                      <option value="Europe/Lisbon">Europe/Lisbon</option>
                                                      <option value="Europe/Ljubljana">Europe/Ljubljana</option>
                                                      <option value="Europe/Luxembourg">Europe/Luxembourg</option>
                                                      <option value="Europe/Madrid">Europe/Madrid</option>
                                                      <option value="Europe/Malta">Europe/Malta</option>
                                                      <option value="Europe/Paris">Europe/Paris</option>
                                                      <option value="Europe/Prague">Europe/Prague</option>
                                                      <option value="Europe/Riga">Europe/Riga</option>
                                                      <option value="Europe/Rome">Europe/Rome</option>
                                                      <option value="Europe/Sofia">Europe/Sofia</option>
                                                      <option value="Europe/Stockholm">Europe/Stockholm</option>
                                                      <option value="Europe/Tallinn">Europe/Tallinn</option>
                                                      <option value="Europe/Vienna">Europe/Vienna</option>
                                                      <option value="Europe/Vilnius">Europe/Vilnius</option>
                                                      <option value="Europe/Warsaw">Europe/Warsaw</option>
                                                      <option value="Europe/Zagreb">Europe/Zagreb</option>
                                                    </select>
  
  
                                              </div>
                                              <div>
                                                <label for="latitude">Latitude</label>
                                                <input id="latitude" type="number" placeholder="Enter Latitude" v-model="Location_inputs.latitude"
                                                  class="form-input" step="any" required /><!-- required -->
                                              </div>
                                              <div>
                                                <label for="longitude">Longitude</label>
                                                <input id="longitude" type="number" placeholder="Enter longitude" v-model="Location_inputs.longitude"
                                                  class="form-input" step="any" required /><!-- required -->
                                              </div>
                                              <div>
                                                <label for="countryCode">Country Code</label>
                                                <input id="countryCode" type="text" placeholder="Enter Country Code"
                                                  v-model="Location_inputs.countryCode" maxlength="2" minlength="2" pattern="[A-Za-z]{2}"
                                                  class="form-input" /><!-- required -->
                                              </div>
                                              <div>
                                                <label for="partyId">Party ID</label>
                                                <input id="partyId" type="text" placeholder="Enter Party ID" v-model="Location_inputs.partyId"
                                                  class="form-input" />
                                              </div>
                                              <div>
                                                <label for="name">Name</label>
                                                <input id="name" type="text" placeholder="Enter Name" v-model="Location_inputs.name"
                                                  class="form-input" /><!-- required -->
                                              </div>
                                              <div>
                                                <label for="address">Address</label>
                                                <input id="address" type="text" placeholder="Enter Address" v-model="Location_inputs.address"
                                                  class="form-input" /><!-- required -->
                                              </div>
                                              <div>
                                                <label for="city">City</label>
                                                <input id="city" type="text" placeholder="Enter City" v-model="Location_inputs.city"
                                                  class="form-input" /><!-- required -->
                                              </div>
                                              <div>
                                                <label for="postalCode">Postal Code</label>
                                                <input id="postalCode" type="text" placeholder="Enter Postal Code" v-model="Location_inputs.postalCode"
                                                  class="form-input" /><!-- required -->
                                              </div>
                                              <div>
                                                <label for="state">State</label>
                                                <input id="state" type="text" placeholder="Enter State" v-model="Location_inputs.state"
                                                  class="form-input" />
                                              </div>
  
                                              <div>
                                                <label for="country" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Country
                                                </label>
                                                <select v-model="Location_inputs.country" id="country" class="form-select w-7/8 mr-4">
                                                    <option value="AT">AT</option>
                                                    <option value="BE">BE</option>
                                                    <option value="BG">BG</option>
                                                    <option value="HR">HR</option>
                                                    <option value="CY">CY</option>
                                                    <option value="CZ">CZ</option>
                                                    <option value="DK">DK</option>
                                                    <option value="EE">EE</option>
                                                    <option value="FI">FI</option>
                                                    <option value="FR">FR</option>
                                                    <option value="DE">DE</option>
                                                    <option value="GR">GR</option>
                                                    <option value="HU">HU</option>
                                                    <option value="IE">IE</option>
                                                    <option value="IT">IT</option>
                                                    <option value="LV">LV</option>
                                                    <option value="LT">LT</option>
                                                    <option value="LU">LU</option>
                                                    <option value="MT">MT</option>
                                                    <option value="NL">NL</option>
                                                    <option value="PL">PL</option>
                                                    <option value="PT">PT</option>
                                                    <option value="RO">RO</option>
                                                    <option value="SK">SK</option>
                                                    <option value="SI">SI</option>
                                                    <option value="ES">ES</option>
                                                    <option value="SE">SE</option>
                                                  </select>
  
                                              </div>
  
                                              <div>
                                                <label for="parkingType" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Parking Type
                                                </label>
                                                <select v-model="Location_inputs.parkingType" id="parkingType" class="form-select w-7/8 mr-4">
                                                  <!-- required -->
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
                                                <input id="substationId" type="text" placeholder="Enter Substation ID"
                                                  v-model="Location_inputs.substationId" class="form-input" />
                                              </div>
                                            </div>
                                            <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                              <button type="submit" class="btn btn-primary">Submit</button>
                                            </div>
                                          </form>
                                        </div>
  
  
                                      </TabPanel> <!-- Location CREATE END-->
  
                                      <TabPanel><!-- Chargpoint POST START-->
  
                                        
                                        <div
                                          class="max-h-144 overflow-y-auto p-4 bg-gray-30 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                                          <div>
                                            <label for="see_existing_locations">See Locations <input id="see_existing_locations" type="checkbox"
                                                v-model="see_existing_locations" class="form-checkbox " @change="existing_locations" /> </label>
                                          </div>
  
  
                                          <div v-if="see_existing_locations" class="table-responsive" style="overflow-y: auto; max-height: 450px;" >
                                            <table class="table-hover w-full">
                                              <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                                <tr>
                                                  <th>Location ID</th>
                                                  <th>Country - Time Zone</th>
                                                  <th>Address</th>
                                                  <th>Parking Type</th>
                                                  <th>Substation Id</th>
                                                  <th>Last Updated</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <template v-for="(location_item, index) in locations_table" :key="location_item.id">
                                                  <tr>
                                                    <td>{{ location_item.id }}</td>
                                                    <td>{{ location_item.country}} - {{ location_item.time_zone}}</td>
                                                    <td>{{ location_item.address}}, {{ location_item.city}}, {{ location_item.postal_code}}
                                                    </td>
                                                    <td>{{ location_item.parking_type}}</td>
                                                    <td>{{ location_item.substation_id }}</td>
                                                    <td>{{ location_item.last_updated }}</td>
                                                  </tr>
                                                </template>
                                              </tbody>
                                            </table>
                                          </div>
                                          <hr class="my-4 border-t border-gray-300 dark:border-gray-700">
                                          <!-- Chargepoints -->
                                          <div>
                                            <label for="see_existing_chargepoints">See Chargepoints <input id="see_existing_chargepoints"
                                                type="checkbox" v-model="see_existing_chargepoints" class="form-checkbox "
                                                @change="existing_chargepoints" /> </label>
                                          </div>
                                          <div v-if="see_existing_chargepoints" class="table-responsive" style="overflow-y: auto; max-height: 450px;" >
                                            <table class="table-hover w-full">
                                              <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                                <tr>
                                                  <th>Chargepoint Id</th>
                                                  <th>City / Country</th>
                                                  <th>Location Id</th>
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
                                                    <td>{{ data.location__id }}</td>
                                                    <td>{{ data.chargepoint_model }}</td>
                                                    <td>{{ data.chargepoint_vendor }}</td>
                                                    <td>{{ data.websocket_port }}</td>
                                                    <td class="text-center whitespace-nowrap"
                                                      :class="{ 'text-success': data.connected === true, 'text-danger': data.connected === false }">
                                                      {{ data.connected }}
                                                    </td>
                                                    <td class="text-center whitespace-nowrap"
                                                      :class="{ 'text-success': data.chargepoint_status === 'Available', 'text-secondary': data.chargepoint_status === 'Unavailable', 'text-danger': data.chargepoint_status === 'Faulted' }">
                                                      {{ data.chargepoint_status }}
                                                    </td>
                                                    <td>{{ data.ocpp_version }}</td>
                                                  </tr>
                                                </template>
                                              </tbody>
                                            </table>
                                          </div>
  
                                          <hr class="my-4 border-t border-gray-300 dark:border-gray-700">
  
                                          <form class="space-y-5" @submit.prevent="submitChargepoint_inputs()">
                                            <!--@submit.prevent="submitLocation_inputs()"-->
                                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                                              <div>
                                                <label for="chargepointId">Chargepoint ID</label>
                                                <input id="chargepointId" type="text" placeholder="Enter Chargepoint ID"
                                                  v-model="Chargepoint_inputs.chargepointId" class="form-input" required />
                                              </div>
  
                                              <div>
                                                <label for="LocationDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Location ID
                                                </label>
                                                <select v-model="locations_selection_option" id="LocationDropdown" class="form-select w-3/4 mr-4"
                                                  required @change="locations_selection_option_function">
                                                  <option disabled value="">Please select a Location</option>
                                                  <option v-for="(location_item, index) in locations_table" :key="location_item.id"
                                                    :value="location_item.id">
                                                    {{ location_item.id }}
                                                  </option>
                                                </select>
                                              </div>
  
                                              <div>
                                                <label for="ChargepointModel">ChargepointModel</label>
                                                <input id="ChargepointModel" type="text" placeholder="Enter Chargepoint ID"
                                                  v-model="Chargepoint_inputs.chargepoint_model" class="form-input" />
                                              </div>
                                              <div>
                                                <label for="chargepointVendor">Chargepoint Vendor</label>
                                                <input id="chargepointVendor" type="text" placeholder="Enter Chargepoint Vendor"
                                                  v-model="Chargepoint_inputs.chargepointVendor" class="form-input" />
                                              </div>
                                              <div>
                                                <label for="chargeboxSerialNumber">Chargebox Serial Number</label>
                                                <input id="chargeboxSerialNumber" type="text" placeholder="Enter Chargebox Serial Number"
                                                  v-model="Chargepoint_inputs.chargeboxSerialNumber" class="form-input" />
                                              </div>
                                              <div>
                                                <label for="chargepointSerialNumber">Serial Number</label>
                                                <input id="chargepointSerialNumber" type="text" placeholder="Enter Chargepoint Serial Number"
                                                  v-model="Chargepoint_inputs.chargepointSerialNumber" class="form-input" />
                                              </div>
                                              <div>
                                                <label for="IpAddress">Ip Address</label>
                                                <input id="IpAddress" type="text" placeholder="Enter Chargepoint Serial Number"
                                                  v-model="Chargepoint_inputs.ipaddress" class="form-input" required />
                                              </div>
                                              <div>
                                                <label for="WebsocketPort">Websocket Port</label>
                                                <input id="WebsocketPort" type="number" placeholder="Enter Chargepoint Serial Number"
                                                  v-model="Chargepoint_inputs.websocketport" class="form-input" required />
                                              </div>
                                              <div>
                                                <label for="firmwareVersion">Firmware Version</label>
                                                <input id="firmwareVersion" type="text" placeholder="Enter Firmware Version"
                                                  v-model="Chargepoint_inputs.firmwareVersion" class="form-input" />
                                              </div>
                                              <div>
                                                <label for="ChargepointStatus" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Chargepoint Status
                                                </label>
                                                <select v-model="Chargepoint_inputs.chargepoint_status" id="ChargepointStatus"
                                                  class="form-select w-7/8 mr-4"> <!-- required -->
                                                  <option value="Available">Available</option>
                                                  <option value="Unavailable">Unavailable</option>
                                                  <option value="Faulted">Faulted</option>
                                                </select>
                                              </div>
                                              <div>
                                                <label for="ocppVersion" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  OCPP Version
                                                </label>
                                                <select v-model="Chargepoint_inputs.ocppVersion" id="ocppVersion" class="form-select w-7/8 mr-4">
                                                  <!-- required -->
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
  
  
  
                                      </TabPanel><!-- Chargpoint POST END-->
  
                                      <TabPanel> <!--Location Update START-->
  
                                        <div
                                          class="max-h-144 overflow-y-auto p-4 bg-gray-30 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
  
                                          <div>
                                            <label for="see_existing_locations">See Locations <input id="see_existing_locations" type="checkbox"
                                                v-model="see_existing_locations" class="form-checkbox " @change="existing_locations" /> </label>
                                          </div>
  
                                          <div v-if="see_existing_locations" class="table-responsive" style="overflow-y: auto; max-height: 450px;" >
                                            <table class="table-hover w-full">
                                              <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                                <tr>
                                                  <th>Location ID</th>
                                                  <th>Country - Time Zone</th>
                                                  <th>Address</th>
                                                  <th>Parking Type</th>
                                                  <th>Substation Id</th>
                                                  <th>Last Updated</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <template v-for="(location_item, index) in locations_table" :key="location_item.id">
                                                  <tr>
                                                    <td>{{ location_item.id }}</td>
                                                    <td>{{ location_item.country}} - {{ location_item.time_zone}}</td>
                                                    <td>{{ location_item.address}}, {{ location_item.city}}, {{ location_item.postal_code}}
                                                    </td>
                                                    <td>{{ location_item.parking_type}}</td>
                                                    <td>{{ location_item.substation_id }}</td>
                                                    <td>{{ location_item.last_updated }}</td>
                                                  </tr>
                                                </template>
                                              </tbody>
                                            </table>
                                          </div>
                                          <hr class="my-4 border-t border-gray-300 dark:border-gray-700">
                                          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                                            <div>
                                              <label for="LocationDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                Location ID
                                              </label>
                                              <select v-model="locations_selection_option" id="LocationDropdown" class="form-select w-3/4 mr-4" required
                                                @change="locations_selection_option_function">
                                                <option disabled value="">Please select a Location ID</option>
                                                <option v-for="(location_item, index) in locations_table" :key="location_item.id"
                                                  :value="location_item.id">
                                                  {{ location_item.id }}
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                          <form class="space-y-5" @submit.prevent="PatchLocation_inputs()">
  
                                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
  
                                              <div>
                                                <label for="timeZone" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Time Zone
                                                </label>
                                                <select v-model="selected_locition_patch.time_zone" id="timeZone" class="form-select w-7/8 mr-4"
                                                  required>
                                                  <option value="Europe/Amsterdam">Europe/Amsterdam</option>
                                                      <option value="Europe/Andorra">Europe/Andorra</option>
                                                      <option value="Europe/Athens">Europe/Athens</option>
                                                      <option value="Europe/Bratislava">Europe/Bratislava</option>
                                                      <option value="Europe/Brussels">Europe/Brussels</option>
                                                      <option value="Europe/Bucharest">Europe/Bucharest</option>
                                                      <option value="Europe/Budapest">Europe/Budapest</option>
                                                      <option value="Europe/Copenhagen">Europe/Copenhagen</option>
                                                      <option value="Europe/Dublin">Europe/Dublin</option>
                                                      <option value="Europe/Helsinki">Europe/Helsinki</option>
                                                      <option value="Europe/Lisbon">Europe/Lisbon</option>
                                                      <option value="Europe/Ljubljana">Europe/Ljubljana</option>
                                                      <option value="Europe/Luxembourg">Europe/Luxembourg</option>
                                                      <option value="Europe/Madrid">Europe/Madrid</option>
                                                      <option value="Europe/Malta">Europe/Malta</option>
                                                      <option value="Europe/Paris">Europe/Paris</option>
                                                      <option value="Europe/Prague">Europe/Prague</option>
                                                      <option value="Europe/Riga">Europe/Riga</option>
                                                      <option value="Europe/Rome">Europe/Rome</option>
                                                      <option value="Europe/Sofia">Europe/Sofia</option>
                                                      <option value="Europe/Stockholm">Europe/Stockholm</option>
                                                      <option value="Europe/Tallinn">Europe/Tallinn</option>
                                                      <option value="Europe/Vienna">Europe/Vienna</option>
                                                      <option value="Europe/Vilnius">Europe/Vilnius</option>
                                                      <option value="Europe/Warsaw">Europe/Warsaw</option>
                                                      <option value="Europe/Zagreb">Europe/Zagreb</option>
                                                </select>
                                              </div>
                                              <div>
                                                <label for="latitude">Latitude</label>
                                                <input id="latitude" type="number" placeholder="Enter Latitude"
                                                  v-model="selected_locition_patch.coordinates.latitude" class="form-input" step="any"
                                                  required /><!-- required -->
                                              </div>
                                              <div>
                                                <label for="longitude">Longitude</label>
                                                <input id="longitude" type="number" placeholder="Enter Longitude"
                                                  v-model="selected_locition_patch.coordinates.longitude" class="form-input" step="any"
                                                  required /><!-- required  maxlength="2" minlength="2" -->
                                              </div>
                                              <div>
                                                <label for="countryCode">Country Code</label>
                                                <input id="countryCode" type="text" placeholder="Enter Country Code"
                                                  v-model="selected_locition_patch.country_code" maxlength="2" minlength="2" pattern="[A-Za-z]{2}"
                                                  class="form-input" /><!-- required -->
                                              </div>
                                              <div>
                                                <label for="partyId">Party ID</label>
                                                <input id="partyId" type="text" placeholder="Enter Party ID" v-model="selected_locition_patch.party_id"
                                                  class="form-input" />
                                              </div>
                                              <div>
                                                <label for="name">Name</label>
                                                <input id="name" type="text" placeholder="Enter Name" v-model="selected_locition_patch.name"
                                                  class="form-input" /><!-- required -->
                                              </div>
                                              <div>
                                                <label for="address">Address</label>
                                                <input id="address" type="text" placeholder="Enter Address" v-model="selected_locition_patch.address"
                                                  class="form-input" /><!-- required -->
                                              </div>
                                              <div>
                                                <label for="city">City</label>
                                                <input id="city" type="text" placeholder="Enter City" v-model="selected_locition_patch.city"
                                                  class="form-input" /><!-- required -->
                                              </div>
                                              <div>
                                                <label for="postalCode">Postal Code</label>
                                                <input id="postalCode" type="text" placeholder="Enter Postal Code"
                                                  v-model="selected_locition_patch.postal_code" class="form-input" /><!-- required -->
                                              </div>
                                              <div>
                                                <label for="state">State</label>
                                                <input id="state" type="text" placeholder="Enter State" v-model="selected_locition_patch.state"
                                                  class="form-input" />
                                              </div>
  
                                              <div>
                                                <label for="country" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Country
                                                </label>
                                                <select v-model="selected_locition_patch.country" id="country"
                                                  class="form-select w-7/8 mr-4"><!-- required -->
                                                  <option value="AT">AT</option>
                                                    <option value="BE">BE</option>
                                                    <option value="BG">BG</option>
                                                    <option value="HR">HR</option>
                                                    <option value="CY">CY</option>
                                                    <option value="CZ">CZ</option>
                                                    <option value="DK">DK</option>
                                                    <option value="EE">EE</option>
                                                    <option value="FI">FI</option>
                                                    <option value="FR">FR</option>
                                                    <option value="DE">DE</option>
                                                    <option value="GR">GR</option>
                                                    <option value="HU">HU</option>
                                                    <option value="IE">IE</option>
                                                    <option value="IT">IT</option>
                                                    <option value="LV">LV</option>
                                                    <option value="LT">LT</option>
                                                    <option value="LU">LU</option>
                                                    <option value="MT">MT</option>
                                                    <option value="NL">NL</option>
                                                    <option value="PL">PL</option>
                                                    <option value="PT">PT</option>
                                                    <option value="RO">RO</option>
                                                    <option value="SK">SK</option>
                                                    <option value="SI">SI</option>
                                                    <option value="ES">ES</option>
                                                    <option value="SE">SE</option>
  
                                                </select>
                                              </div>
  
                                              <div>
                                                <label for="parkingType" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Parking Type
                                                </label>
                                                <select v-model="selected_locition_patch.parking_type" id="parkingType" class="form-select w-7/8 mr-4">
                                                  <!-- required -->
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
                                                <input id="substationId" type="text" placeholder="Enter Substation ID"
                                                  v-model="selected_locition_patch.substation_id" class="form-input" />
                                              </div>
                                            </div>
                                            <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                              <button type="submit" class="btn btn-primary">Submit</button>
                                            </div>
                                          </form>
  
                                        </div>
  
  
                                      </TabPanel> <!--Location Update END-->
  
                                      <TabPanel><!-- Chargpoint PATCH START-->
                                        
                                        <div
                                          class="max-h-144 overflow-y-auto p-4 bg-gray-30 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                                          <div>
                                            <label for="see_existing_locations">See Locations <input id="see_existing_locations" type="checkbox"
                                                v-model="see_existing_locations" class="form-checkbox " @change="existing_locations" /> </label>
                                          </div>
  
  
                                          <div v-if="see_existing_locations" class="table-responsive" style="overflow-y: auto; max-height: 450px;" >
                                            <table class="table-hover w-full">
                                              <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                                <tr>
                                                  <th>Location ID</th>
                                                  <th>Country - Time Zone</th>
                                                  <th>Address</th>
                                                  <th>Parking Type</th>
                                                  <th>Substation Id</th>
                                                  <th>Last Updated</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <template v-for="(location_item, index) in locations_table" :key="location_item.id">
                                                  <tr>
                                                    <td>{{ location_item.id }}</td>
                                                    <td>{{ location_item.country}} - {{ location_item.time_zone}}</td>
                                                    <td>{{ location_item.address}}, {{ location_item.city}}, {{ location_item.postal_code}}
                                                    </td>
                                                    <td>{{ location_item.parking_type}}</td>
                                                    <td>{{ location_item.substation_id }}</td>
                                                    <td>{{ location_item.last_updated }}</td>
                                                  </tr>
                                                </template>
                                              </tbody>
                                            </table>
                                          </div>
                                          <hr class="my-4 border-t border-gray-300 dark:border-gray-700">
                                          <!-- Chargepoints -->
                                          <div>
                                            <label for="see_existing_chargepoints">See Chargepoints <input id="see_existing_chargepoints"
                                                type="checkbox" v-model="see_existing_chargepoints" class="form-checkbox "
                                                @change="existing_chargepoints" /> </label>
                                          </div>
                                          <div v-if="see_existing_chargepoints" class="table-responsive" style="overflow-y: auto; max-height: 450px;" >
                                            <table class="table-hover w-full">
                                              <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                                <tr>
                                                  <th>Chargepoint Id</th>
                                                  <th>City / Country</th>
                                                  <th>Location Id</th>
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
                                                    <td>{{ data.location__id }}</td>
                                                    <td>{{ data.chargepoint_model }}</td>
                                                    <td>{{ data.chargepoint_vendor }}</td>
                                                    <td>{{ data.websocket_port }}</td>
                                                    <td class="text-center whitespace-nowrap"
                                                      :class="{ 'text-success': data.connected === true, 'text-danger': data.connected === false }">
                                                      {{ data.connected }}
                                                    </td>
                                                    <td class="text-center whitespace-nowrap"
                                                      :class="{ 'text-success': data.chargepoint_status === 'Available', 'text-secondary': data.chargepoint_status === 'Unavailable', 'text-danger': data.chargepoint_status === 'Faulted' }">
                                                      {{ data.chargepoint_status }}
                                                    </td>
                                                    <td>{{ data.ocpp_version }}</td>
                                                  </tr>
                                                </template>
                                              </tbody>
                                            </table>
                                          </div>
  
                                          <hr class="my-4 border-t border-gray-300 dark:border-gray-700">
  
                                          <form class="space-y-5" @submit.prevent="PatchChargepoint_inputs()">
                                            <!--@submit.prevent="submitLocation_inputs()"-->
                                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                                              <div>
                                                <label for="LocationDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Chargepoint ID
                                                </label>
                                                <select v-model="chargepoint_selection_option" id="LocationDropdown" class="form-select w-3/4 mr-4"
                                                  @change="chargepoint_selection_option_function" required>
                                                  <option disabled value="">Please select a Chargepoint</option>
                                                  <option v-for="data in Task_9_response" :key="data.connector">
                                                    {{ data.chargepoint_id }}
                                                  </option>
                                                </select>
                                              </div>
                                            </div>
                                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
  
  
                                              <div>
                                                <label for="chargepointId">Chargepoint ID</label>
                                                <input id="chargepointId" type="text" placeholder="Enter Chargepoint ID"
                                                  v-model="Chargepoint_inputs_patch.chargepoint_id" class="form-input" required />
                                              </div>
  
                                              <div>
  
                                                <label for="LocationDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Location ID
                                                </label>
  
                                                <select v-model="locations_selection_option" id="tariffDropdown" class="form-select w-3/4 mr-4">
                                                  <option v-for="location_item in locations_table" :key="location_item.id" :value="location_item.id">
                                                    {{ location_item.id }}
                                                  </option>
  
                                                </select>
                                              </div>
                                              <div>
                                                <label for="ChargepointModel">ChargepointModel</label>
                                                <input id="ChargepointModel" type="text" placeholder="Enter Chargepoint ID"
                                                  v-model="Chargepoint_inputs_patch.chargepoint_model" class="form-input" />
                                              </div>
                                              <div>
                                                <label for="chargepointVendor">Chargepoint Vendor</label>
                                                <input id="chargepointVendor" type="text" placeholder="Enter Chargepoint Vendor"
                                                  v-model="Chargepoint_inputs_patch.chargepoint_vendor" class="form-input" />
                                              </div>
                                              <div>
                                                <label for="chargeboxSerialNumber">Chargebox Serial Number</label>
                                                <input id="chargeboxSerialNumber" type="text" placeholder="Enter Chargebox Serial Number"
                                                  v-model="Chargepoint_inputs_patch.chargebox_serial_number" class="form-input" />
                                              </div>
                                              <div>
                                                <label for="chargepointSerialNumber">Serial Number</label>
                                                <input id="chargepointSerialNumber" type="text" placeholder="Enter Chargepoint Serial Number"
                                                  v-model="Chargepoint_inputs_patch.chargepoint_serial_number" class="form-input" />
                                              </div>
                                              <div>
                                                <label for="IpAddress">Ip Address</label>
                                                <input id="IpAddress" type="text" placeholder="Enter Chargepoint Serial Number"
                                                  v-model="Chargepoint_inputs_patch.ip_address" class="form-input" required />
                                              </div>
                                              <div>
                                                <label for="WebsocketPort">Websocket Port</label>
                                                <input id="WebsocketPort" type="number" placeholder="Enter Chargepoint Serial Number"
                                                  v-model="Chargepoint_inputs_patch.websocket_port" class="form-input" required />
                                              </div>
                                              <div>
                                                <label for="firmwareVersion">Firmware Version</label>
                                                <input id="firmwareVersion" type="text" placeholder="Enter Firmware Version"
                                                  v-model="Chargepoint_inputs_patch.firmware_version" class="form-input" />
                                              </div>
                                              <div>
                                                <label for="ChargepointStatus" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Chargepoint Status
                                                </label>
                                                <select v-model="Chargepoint_inputs_patch.chargepoint_status" id="ChargepointStatus"
                                                  class="form-select w-7/8 mr-4"> <!-- required -->
                                                  <option value="Available">Available</option>
                                                  <option value="Unavailable">Unavailable</option>
                                                  <option value="Faulted">Faulted</option>
                                                </select>
                                              </div>
                                              <div>
                                                <label for="ocppVersion" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  OCPP Version
                                                </label>
                                                <select v-model="Chargepoint_inputs_patch.ocpp_version" id="ocppVersion" class="form-select w-7/8 mr-4">
                                                  <!-- required -->
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
  
                                      </TabPanel> <!-- Chargpoint PATCH END-->
  
                                      <TabPanel> <!-- DELETE Location START-->
                                        
                                        <div
                                          class="max-h-144 overflow-y-auto p-4 bg-gray-30 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
  
                                          <!-- Toggle to See Existing Locations -->
                                          <div>
                                            <label for="see_existing_locations">
                                              See Locations
                                              <input id="see_existing_locations" type="checkbox" v-model="see_existing_locations" class="form-checkbox"
                                                @change="existing_locations" />
                                            </label>
                                          </div>
  
                                          <!-- Locations Table -->
                                          <div v-if="see_existing_locations" class="table-responsive" style="overflow-y: auto; max-height: 450px;" >
                                            <table class="table-hover w-full">
                                              <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                                <tr>
                                                  <th>Location ID</th>
                                                  <th>Country - Time Zone</th>
                                                  <th>Address</th>
                                                  <th>Parking Type</th>
                                                  <th>Substation Id</th>
                                                  <th>Last Updated</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <template v-for="(location_item, index) in locations_table" :key="location_item.id">
                                                  <tr>
                                                    <td>{{ location_item.id }}</td>
                                                    <td>{{ location_item.country }} - {{ location_item.time_zone }}</td>
                                                    <td>{{ location_item.address }}, {{ location_item.city }}, {{ location_item.postal_code }}
                                                    </td>
                                                    <td>{{ location_item.parking_type }}</td>
                                                    <td>{{ location_item.substation_id }}</td>
                                                    <td>{{ location_item.last_updated }}</td>
                                                  </tr>
                                                </template>
                                              </tbody>
                                            </table>
                                          </div>
  
                                          <hr class="my-4 border-t border-gray-300 dark:border-gray-700">
  
                                          <!-- Form to Delete Location -->
                                          <form class="space-y-5" @submit.prevent="DeleteLocation_inputs">
                                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                                              <div>
                                                <label for="LocationDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Location ID
                                                </label>
                                                <select v-model="locations_selection_option" id="LocationDropdown" class="form-select w-3/4 mr-4"
                                                  required>
                                                  <option disabled value="">Please select a Location ID</option>
                                                  <option v-for="(location_item, index) in locations_table" :key="location_item.id"
                                                    :value="location_item.id">
                                                    {{ location_item.id }}
                                                  </option>
                                                </select>
                                              </div>
                                            </div>
                                            <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                              <button type="submit" class="btn btn-danger">Delete</button>
                                            </div>
                                          </form>
                                        </div>
                                      </TabPanel> <!-- DELETE Location END-->
   
                                      <TabPanel> <!-- Chargpoint DELETE START -->
                                        
                                        <div
                                          class="max-h-144 overflow-y-auto p-4 bg-gray-30 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
  
                                          <!-- Chargepoints -->
                                          <div>
                                            <label for="see_existing_chargepoints">See Chargepoints <input id="see_existing_chargepoints"
                                                type="checkbox" v-model="see_existing_chargepoints" class="form-checkbox "
                                                @change="existing_chargepoints" /> </label>
                                          </div>

                                          <div v-if="see_existing_chargepoints" class="table-responsive" style="overflow-y: auto; max-height: 450px;" >
                                            <table class="table-hover w-full">
                                              <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">

                                                <tr>
                                                  <th>Chargepoint Id</th>
                                                  <th>City / Country</th>
                                                  <th>Location Id</th>
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
                                                    <td>{{ data.location__id }}</td>
                                                    <td>{{ data.chargepoint_model }}</td>
                                                    <td>{{ data.chargepoint_vendor }}</td>
                                                    <td>{{ data.websocket_port }}</td>
                                                    <td class="text-center whitespace-nowrap"
                                                      :class="{ 'text-success': data.connected === true, 'text-danger': data.connected === false }">
                                                      {{ data.connected }}
                                                    </td>
                                                    <td class="text-center whitespace-nowrap"
                                                      :class="{ 'text-success': data.chargepoint_status === 'Available', 'text-secondary': data.chargepoint_status === 'Unavailable', 'text-danger': data.chargepoint_status === 'Faulted' }">
                                                      {{ data.chargepoint_status }}
                                                    </td>
                                                    <td>{{ data.ocpp_version }}</td>
                                                  </tr>
                                                </template>
                                              </tbody>
                                            </table>
                                          </div>
  
                                          <hr class="my-4 border-t border-gray-300 dark:border-gray-700">
  
                                          <form class="space-y-5" @submit.prevent="DeleteChargepoint_inputs()">
                                            <!--@submit.prevent="submitLocation_inputs()"-->
                                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                                              <div>
                                                <label for="LocationDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Chargepoint ID
                                                </label>
                                                <select v-model="chargepoint_selection_option" id="LocationDropdown" class="form-select w-3/4 mr-4"
                                                  required>
                                                  <option disabled value="">Please select a Chargepoint</option>
                                                  <option v-for="data in Task_9_response" :key="data.connector">
                                                    {{ data.chargepoint_id }}
                                                  </option>
                                                </select>
                                              </div>
                                            </div>
  
                                            <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                              <button type="submit" class="btn btn-danger">Delete</button>
                                            </div>
  
                                          </form>
  
                                        </div>
                                      </TabPanel> <!-- Chargpoint DELETE END -->
  
                                    </TabPanels> <!-- Charegepoint Tools-->
                                  </Tabgroup>
                                  </div>
  
  
                              <!-- TASK 9 -->
                                        <div v-if="Task_14_response && Task_14_response.length > 0 && Task_14_response[0].user__is_superuser"
                                          class="panel h-full gap-6 mb-6" style="height: 300px; overflow-y: auto;">
                                          <p class="text-lg dark:text-white-light/90">
                                            <span class="text-primary ml-2">Charging Station Diagnostics</span>
                                          </p>
                                          <div class="table-responsive" style="overflow-y: auto; max-height: 450px;" >
                                            <table class="table-hover w-full">
                                              <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                                <tr>
                                                  <th>Chargepoint_Id</th>
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
                                                    <td class="text-center whitespace-nowrap"
                                                      :class="{ 'text-success': data.connected === true, 'text-danger': data.connected === false }">
                                                      {{ data.connected }}
                                                    </td>
                                                    <td class="text-center whitespace-nowrap"
                                                      :class="{ 'text-success': data.chargepoint_status === 'Available', 'text-secondary': data.chargepoint_status === 'Unavailable', 'text-danger': data.chargepoint_status === 'Faulted' }">
                                                      {{ data.chargepoint_status }}
                                                    </td>
                                                    <td>{{ data.ocpp_version }}</td>
                                                  </tr>
                                                </template>
                                              </tbody>
                                            </table>
                                          </div>
                                        </div>
                                        
                                        
                      </TabPanel> <!-- Chargepoint Tools ALL END-->
  
                                  <!--============================================================ Tarrif ============================================================-->
                      <TabPanel><!-- Tariff TOOLS ALL START-->
                                  <div class="panel h-full gap-6 mb-6">
                                  <TabGroup>
  
                                    <TabList
                                      class="flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
  
                                      <Tab as="template" v-slot="{ selected }">
                                        <a href="javascript:;"
                                          class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                                          :class="{ '!border-green-500 text-green-500': selected }">
  
  
                                          Create Tariff/Tariff Element
                                        </a>
                                      </Tab>
                                      <Tab as="template" v-slot="{ selected }" id="profile-overview">
                                        <a href="javascript:;" @click="Task_7_Get_Functions"
                                          class="flex gap-2 p-4 border-b border-transparent hover:border-orange-500 hover:text-orange-500 !outline-none"
                                          :class="{ '!border-orange-500 text-orange-500': selected }">
  
  
                                          Update/Delete Tariff
                                        </a>
                                      </Tab>
                                      <Tab as="template" v-slot="{ selected }" id="profile-overview">
                                        <a href="javascript:;" @click="Task_7_Tarriff_get_info"
                                          class="flex gap-2 p-4 border-b border-transparent hover:border-red-500 hover:text-red-500 !outline-none"
                                          :class="{ '!border-red-500 text-red-500': selected }">
  
                                          Update/Delete Tariff Element
                                        </a>
                                      </Tab>
  
                                    </TabList>
  
                                    <TabPanels>
  
                                      <TabPanel>
  
                                        <div
                                          class="max-h-144 overflow-y-auto p-4 bg-gray-30 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                                          <form class="space-y-5" @submit.prevent="Tarriff_Post_function()">
                                            <!--@submit.prevent="submitTarriffElement_inputs()"-->
                                            <div>
                                              <label for="use_existing_tarriff_element">Use Existing TarriffElement <input
                                                  id="use_existing_tarriff_element" type="checkbox" v-model="use_existing_tarriff_element"
                                                  class="form-checkbox " @change="existing_tarriff_case" /> </label>
                                            </div>
                                            <div>
                                              <label for="Restrictions">Restrictions <input id="Restrictions" type="checkbox" v-model="Restrictions"
                                                  class="form-checkbox" /> </label>
                                            </div>
                                            <button type="button" class="btn btn-success" @click="addPriceComponent">Add Price
                                              Component</button>
                                            <button type="button" class="btn btn-info" @click="submitTarriffElement_inputs">Tariff Element
                                              Submission</button><!--v-if="TarriffElement_inputs_Patch_Delete.price_components.every(component => component.type.length && component.price !== 0 && component.vat !== 0 && component.step_size !== 0)"-->
                                            <div class="  bg-white -500 dark:bg-[#0e1726] table-responsive gap-6 mb-6 max-h-72 overflow-y-auto"
                                              v-if="use_existing_tarriff_element">
                                              <table class="table-hover">
                                                <thead class="thead-white-bg">
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
                                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5" v-if="!use_existing_tarriff_element">
                                              <!-- If case statement here-->
  
                                              <div id="price-components-container" v-for="(component, index) in TarriffElement_inputs.price_components"
                                                :key="index" class="price-component border p-4 bg-white dark:bg-gray-800">
  
  
                                                <div>
                                                  <label :for="'type_' + index"
                                                    class="block text-sm font-medium text-black-700 dark:text-white-light">Price Component
                                                    Type</label>
                                                  <select :id="'type_' + index" class="form-select w-7/8 mr-4" v-model="component.type" required>
                                                    <option value="ENERGY">ENERGY</option>
                                                    <option value="FLAT">FLAT</option>
                                                    <option value="PARKING_TIME">PARKING_TIME</option>
                                                    <option value="TIME">TIME</option>
                                                  </select>
                                                </div>
  
                                                <div>
                                                  <label :for="'price_' + index"
                                                    class="block text-sm font-medium text-black-700 dark:text-white-light">Price</label>
                                                  <input :id="'price_' + index" type="number" step="any" class="form-input" v-model="component.price" />
                                                </div>
  
                                                <div>
                                                  <label :for="'vat_' + index"
                                                    class="block text-sm font-medium text-black-700 dark:text-white-light">VAT</label>
                                                  <input :id="'vat_' + index" type="number" step="any" class="form-input" v-model="component.vat" />
                                                </div>
  
                                                <div>
                                                  <label :for="'step_size_' + index"
                                                    class="block text-sm font-medium text-black-700 dark:text-white-light">Step Size</label>
                                                  <input :id="'step_size_' + index" type="number" step="any" class="form-input"
                                                    v-model="component.step_size" />
                                                </div>
  
  
  
                                                <button type="button" class="btn btn-danger" @click="removePriceComponent(index)">Remove</button>
  
  
                                              </div>
  
  
  
  
  
                                            </div>
                                            <hr class="my-4 border-t border-gray-300 dark:border-gray-700">
                                            <!-- Here I put the if case statement-->
                                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 bg-blue-100 p-4 rounded-md" v-if="Restrictions">
                                              <div>
                                                <label for="Start_time">Start time</label>
                                                <input id="Start_time" type="text" placeholder="Start time" class="form-input"
                                                  v-model="TarriffElement_inputs.start_time" />
                                              </div>
                                              <div>
                                                <label for="End_time">End time</label>
                                                <input id="End_time" type="text" placeholder="End time" class="form-input"
                                                  v-model="TarriffElement_inputs.end_time" />
                                              </div>
                                              <div>
                                                <label for="Start_date">Start date</label>
                                                <input id="Start_date" type="text" placeholder="Start date" class="form-input"
                                                  v-model="TarriffElement_inputs.start_date" />
                                              </div>
                                              <div>
                                                <label for="End_date">End date</label>
                                                <input id="End_date" type="text" placeholder="End date" class="form-input"
                                                  v-model="TarriffElement_inputs.end_date" />
                                              </div>
                                              <div>
                                                <label for="Min_kwh">Min kWh</label>
                                                <input id="Min_kwh" type="number" step="any" placeholder="Min kWh" class="form-input"
                                                  v-model="TarriffElement_inputs.min_kwh" />
                                              </div>
                                              <div>
                                                <label for="Max_kwh">Max kWh</label>
                                                <input id="Max_kwh" type="number" step="any" placeholder="Max kWh" class="form-input"
                                                  v-model="TarriffElement_inputs.max_kwh" />
                                              </div>
                                              <div>
                                                <label for="Min_current">Min current</label>
                                                <input id="Min_current" type="number" step="any" placeholder="Min current" class="form-input"
                                                  v-model="TarriffElement_inputs.min_current" />
                                              </div>
                                              <div>
                                                <label for="Max_current">Max current</label>
                                                <input id="Max_current" type="number" step="any" placeholder="Max current" class="form-input"
                                                  v-model="TarriffElement_inputs.max_current" />
                                              </div>
                                              <div>
                                                <label for="Min_power">Min power</label>
                                                <input id="Min_power" type="number" step="any" placeholder="Min power" class="form-input"
                                                  v-model="TarriffElement_inputs.min_power" />
                                              </div>
                                              <div>
                                                <label for="Max_power">Max power</label>
                                                <input id="Max_power" type="number" step="any" placeholder="Max power" class="form-input"
                                                  v-model="TarriffElement_inputs.max_power" />
                                              </div>
                                              <div>
                                                <label for="Min_duration">Min duration</label>
                                                <input id="Min_duration" type="number" step="any" placeholder="Min duration" class="form-input"
                                                  v-model="TarriffElement_inputs.min_duration" />
                                              </div>
                                              <div>
                                                <label for="Max_duration">Max duration</label>
                                                <input id="Max_duration" type="number" step="any" placeholder="Max duration" class="form-input"
                                                  v-model="TarriffElement_inputs.max_duration" />
                                              </div>
                                              <div>
                                                <label for="day_of_week" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Day of Week
                                                </label>
                                                <select id="day_of_week" class="form-select w-7/8 mr-4" v-model="TarriffElement_inputs.day_of_week"
                                                  required>
                                                  <option value="MONDAY">MONDAY</option>
                                                  <option value="TUESDAY">TUESDAY</option>
                                                  <option value="WEDNESDAY">WEDNESDAY</option>
                                                  <option value="THURSDAY ">THURSDAY </option>
                                                  <option value="FRIDAY ">FRIDAY </option>
                                                  <option value="SATURDAY ">SATURDAY </option>
                                                  <option value="SUNDAY  ">SUNDAY </option>
                                                </select>
                                              </div>
                                              <div>
                                                <label for="Reservation" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Reservation
                                                </label>
                                                <select id="Reservation" class="form-select w-7/8 mr-4" v-model="TarriffElement_inputs.reservation"
                                                  required>
                                                  <option value="RESERVATION">RESERVATION</option>
                                                  <option value="RESERVATION_EXPIRES ">RESERVATION_EXPIRES </option>
                                                </select>
                                              </div>
  
                                            </div>
  
  
  
                                            <hr class="my-4 border-t border-gray-300 dark:border-gray-700" v-if="Restrictions">
  
  
  
  
  
  
  
                                            <!-- Tarriff Declaration BODY -->
                                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
  
                                              <div v-if="use_existing_tarriff_element">
                                                <label for="tariffDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Tariff Element ID
                                                </label>
                                                <select v-model="selectedTariff" id="tariffDropdown" class=" form-select w-3/4 mr-4">
                                                  <option v-for="tariff in Task_7_Tarriff" :key="tariff.id" :value="tariff.id">
                                                    {{ tariff.id }}
                                                  </option>
                                                </select>
                                              </div>
                                              <div>
                                                <label for="tariff_alt_text_language">Tariff Alt Language</label>
                                                <select id="tariff_alt_text_language" class="form-select w-7/8 mr-4"
                                                  v-model="TarriffElement_inputs.tariff_alt_text_language">
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
                                                <input id="tariff_alt_text_text" type="text" placeholder="Tariff Text" class="form-input"
                                                  v-model="TarriffElement_inputs.tariff_alt_text_text" />
                                              </div>
                                              <div>
                                                <label for="min_price_excl_vat">Min Price Excl Vat</label>
                                                <input id="min_price_excl_vat" type="number" placeholder="Minimum Price Excluding Vat"
                                                  class="form-input" step="any" v-model="TarriffElement_inputs.min_price_excl_vat" />
                                              </div>
                                              <div>
                                                <label for="min_price_incl_vat">Min Price Incl Vat</label>
                                                <input id="min_price_incl_vat" type="number" placeholder="Minimum Price Including Vat"
                                                  class="form-input" step="any" v-model="TarriffElement_inputs.min_price_incl_vat" />
                                              </div>
                                              <div>
                                                <label for="max_price_excl_vat">Max Price Excl Vat</label>
                                                <input id="max_price_excl_vat" type="number" placeholder="Maximum Price Excluding Vat"
                                                  class="form-input" step="any" v-model="TarriffElement_inputs.max_price_excl_vat" />
                                              </div>
                                              <div>
                                                <label for="max_price_incl_vat">Max Price Incl Vat</label>
                                                <input id="max_price_incl_vat" type="number" placeholder="Maximum Price Including Vat"
                                                  class="form-input" step="any" v-model="TarriffElement_inputs.max_price_incl_vat" />
                                              </div>
                                              <div>
                                                <label for="tarriff_countrycode">Country Code</label>
                                                <input id="tarriff_countrycode" type="text" placeholder="Enter Country Code" maxlength="2" minlength="2"
                                                  pattern="[A-Za-z]{2}" class="form-input"
                                                  v-model="TarriffElement_inputs.tarriff_countrycode" /><!-- required -->
                                              </div>
                                              <div>
                                                <label for="tarriff_party_id">Party ID</label>
                                                <input id="tarriff_party_id" type="text" placeholder="Enter Party ID" maxlength="4" minlength="4"
                                                  class="form-input" v-model="TarriffElement_inputs.tarriff_party_id" /><!-- required -->
                                              </div>
                                              <div>
                                                <label for="currency">Currency</label>
                                                <select id="currency" class="form-select w-7/8 mr-4" v-model="TarriffElement_inputs.currency">
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
  
                                        <div
                                          class="max-h-144 overflow-y-auto p-4 bg-white dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                                          <form class="space-y-5" @submit.prevent="Patch_Tariff">
                                            <!--@submit.prevent="submitTarriffElement_inputs()"-->
  
                                            <div class="table-responsive gap-6 mb-6 max-h-72 overflow-y-auto">
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
                                                  <template v-for="(tariff) in Task_7_Tarriff_Main" :key="tariff.id">
                                                    <tr>
                                                      <td>{{ tariff.id }}</td><!--<td>{{ tariff.id }}</td>-->
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
                                                <label for="tariffDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Tariff Selection ID
                                                </label>
                                                <select v-model="selectedMainTariffId" id="tariffDropdown" class="form-select w-3/4 mr-4" required
                                                  @change="onTariffSelect($event)">
                                                  <option disabled value="">Please select a tariff</option>
                                                  <option v-for="(tariff, index) in Task_7_Tarriff_Main" :key="tariff.id"
                                                    :value="{ id: tariff.id}">
                                                    {{ `Tariff_ID: ${tariff.id}` }}
                                                  </option>
                                                </select>
                                              </div>
  
                                              <div>
                                                <label for="tariffDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Tariff Element ID
                                                </label>
                                                <select v-model="TarriffElement_inputs_Patch.tariff_element_id" id="tariffDropdown"
                                                  class="form-select w-3/4 mr-4">
                                                  <option v-for="tariff in Task_7_Tarriff" :key="tariff.id" :value="tariff.id">
                                                    {{ tariff.id }}
                                                  </option>
                                                </select>
                                              </div>
                                              <!-- FOR LOOP -->
                                              <div v-for="(altText, index) in TarriffElement_inputs_Patch.tariff_alt_text" :key="index">
                                                <div>
                                                  <label :for="'tariff_alt_text_language_' + index">Tariff Alt Language</label>
                                                  <select :id="'tariff_alt_text_language_' + index" class="form-select w-7/8 mr-4"
                                                    v-model="altText.language">
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
                                                  <input :id="'tariff_alt_text_text_' + index" type="text" placeholder="Tariff Text" class="form-input"
                                                    v-model="altText.text" />
                                                </div>
                                              </div>
  
                                              <div>
                                                <label for="min_price_excl_vat">Min Price Excl Vat</label>
                                                <input id="min_price_excl_vat" type="number" placeholder="Minimum Price Excluding Vat"
                                                  class="form-input" step="any" v-model="TarriffElement_inputs_Patch.min_price_excl_vat" />
                                              </div>
                                              <div>
                                                <label for="min_price_incl_vat">Min Price Incl Vat</label>
                                                <input id="min_price_incl_vat" type="number" placeholder="Minimum Price Including Vat"
                                                  class="form-input" step="any" v-model="TarriffElement_inputs_Patch.min_price_incl_vat" />
                                              </div>
                                              <div>
                                                <label for="max_price_excl_vat">Max Price Excl Vat</label>
                                                <input id="max_price_excl_vat" type="number" placeholder="Maximum Price Excluding Vat"
                                                  class="form-input" step="any" v-model="TarriffElement_inputs_Patch.max_price_excl_vat" />
                                              </div>
                                              <div>
                                                <label for="max_price_incl_vat">Max Price Incl Vat</label>
                                                <input id="max_price_incl_vat" type="number" placeholder="Maximum Price Including Vat"
                                                  class="form-input" step="any" v-model="TarriffElement_inputs_Patch.max_price_incl_vat" />
                                              </div>
                                              <div>
                                                <label for="tarriff_countrycode">Country Code</label>
                                                <input id="tarriff_countrycode" type="text" placeholder="Enter Country Code" maxlength="2" minlength="2"
                                                  pattern="[A-Za-z]{2}" class="form-input" v-model="TarriffElement_inputs_Patch.tarriff_countrycode" />
                                              </div>
                                              <div>
                                                <label for="tarriff_party_id">Party ID</label>
                                                <input id="tarriff_party_id" type="text" placeholder="Enter Party ID" class="form-input"
                                                  v-model="TarriffElement_inputs_Patch.tarriff_party_id" />
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
                                                <select id="tarrif_type" class="form-select w-7/8 mr-4"
                                                  v-model="TarriffElement_inputs_Patch.tarrif_type">
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
  
                                                <label for="start_date_time_check">Update Start Date Time <input id="start_date_time_check"
                                                    type="checkbox" v-model="start_date_time_check" class="form-checkbox" /></label>
                                                <!--@change="start_date_time_check_function"-->
  
                                                <input v-if="start_date_time_check" id="start_date_time" type="datetime-local"
                                                  v-model="TarriffElement_inputs_Patch.start_date_time" @change="StartDateChange">
  
  
                                              </div>
  
                                              <div>
                                                <label for="end_date_time">End Date-Time:</label>
                                                <label for="end_date_time_check">{{TarriffElement_inputs_Patch.end_date_time}}</label>
  
                                                <label for="end_date_time_check">Update End Date Time <input id="end_date_time_check" type="checkbox"
                                                    v-model="end_date_time_check" class="form-checkbox" /></label>
                                                <!-- @change="existing_tarriff_case"-->
  
                                                <input v-if="end_date_time_check" id="end_date_time_check" type="datetime-local"
                                                  v-model="TarriffElement_inputs_Patch.end_date_time" @change="EndDateChange">
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
                                              <button type="button" class="btn btn-danger" @click="deleteTariff">Delete</button>
                                            </div>
  
                                          </form>
                                        </div>
  
  
                                      </TabPanel>
                                      <TabPanel>
                                        <div
                                          class="max-h-144 overflow-y-auto p-4 bg-white dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                                          <form class="space-y-5" @submit.prevent="Patch_Tariff_Element">
                                            <!--@submit.prevent="submitTarriffElement_inputs()"-->
  
                                            <div class="table-responsive gap-6 mb-6 max-h-72 overflow-y-auto">
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
                                            <!-- Tarriff Declaration BODY -->
                                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                                              <div>
                                                <label for="tariffDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                  Tariff Element ID
                                                </label>
                                                <select v-model="TarriffElement_inputs_Patch.tariff_element_id" id="tariffDropdown"
                                                  class="form-select w-3/4 mr-4" @change="onTariffElementSelect">
                                                  <option v-for="tariff in Task_7_Tarriff" :key="tariff.id" :value="tariff.id">
                                                    {{ tariff.id }}
                                                  </option>
                                                </select>
                                              </div>
                                            </div>
                                            <button id="Patch1" v-if="TarriffElement_inputs_Patch.tariff_element_id" type="button"
                                              class="btn btn-success" @click="addPriceComponent_Element">Add Price Component</button>
  
                                            <div id="Patch1div" v-if="TarriffElement_inputs_Patch.tariff_element_id"
                                              class="grid grid-cols-1 md:grid-cols-3 gap-5">
  
                                              <!-- Price Components -->
                                              <div id="price-components-container"
                                                v-for="(component, index) in TarriffElement_inputs_Patch_Delete.price_components" :key="index"
                                                class="price-component border p-4 bg-white dark:bg-gray-800">
  
  
                                                <div>
                                                  <label :for="'type_' + index"
                                                    class="block text-sm font-medium text-black-700 dark:text-white-light">Price Component
                                                    Type</label>
                                                  <select :id="'type_' + index" class="form-select w-7/8 mr-4" v-model="component.type" required>
                                                    <option value="ENERGY">ENERGY</option>
                                                    <option value="FLAT">FLAT</option>
                                                    <option value="PARKING_TIME">PARKING_TIME</option>
                                                    <option value="TIME">TIME</option>
                                                  </select>
                                                </div>
                                                <div>
                                                  <label :for="'price_' + index"
                                                    class="block text-sm font-medium text-black-700 dark:text-white-light">Price</label>
                                                  <input :id="'price_' + index" type="number" step="any" class="form-input" v-model="component.price"
                                                    required />
                                                </div>
                                                <div>
                                                  <label :for="'vat_' + index"
                                                    class="block text-sm font-medium text-black-700 dark:text-white-light">VAT</label>
                                                  <input :id="'vat_' + index" type="number" step="any" class="form-input" v-model="component.vat"
                                                    required />
                                                </div>
                                                <div>
                                                  <label :for="'step_size_' + index"
                                                    class="block text-sm font-medium text-black-700 dark:text-white-light">Step Size</label>
                                                  <input :id="'step_size_' + index" type="number" step="any" class="form-input"
                                                    v-model="component.step_size" required />
                                                </div>
                                                <button type="button" class="btn btn-danger"
                                                  @click="removePriceComponent_Element(index)">Remove</button>
  
                                              </div>
  
                                              <!-- Restrictions -->
                                              <div class="grid grid-cols-1 md:grid-cols-3 gap-5 bg-blue-100 p-4 rounded-md">
                                                <div>
                                                  <label for="Start_time">Start time</label>
                                                  <input id="Start_time" type="text" placeholder="Start time" class="form-input"
                                                    v-model="TarriffElement_inputs_Patch_Delete.restrictions.start_time" />
                                                </div>
                                                <div>
                                                  <label for="End_time">End time</label>
                                                  <input id="End_time" type="text" placeholder="End time" class="form-input"
                                                    v-model="TarriffElement_inputs_Patch_Delete.restrictions.end_time" />
                                                </div>
                                                <div>
                                                  <label for="Start_date">Start date</label>
                                                  <input id="Start_date" type="text" placeholder="Start date" class="form-input"
                                                    v-model="TarriffElement_inputs_Patch_Delete.restrictions.start_date" />
                                                </div>
                                                <div>
                                                  <label for="End_date">End date</label>
                                                  <input id="End_date" type="text" placeholder="End date" class="form-input"
                                                    v-model="TarriffElement_inputs_Patch_Delete.restrictions.end_date" />
                                                </div>
                                                <div>
                                                  <label for="Min_kwh">Min kWh</label>
                                                  <input id="Min_kwh" type="number" step="any" placeholder="Min kWh" class="form-input"
                                                    v-model="TarriffElement_inputs_Patch_Delete.restrictions.min_kwh" />
                                                </div>
                                                <div>
                                                  <label for="Max_kwh">Max kWh</label>
                                                  <input id="Max_kwh" type="number" step="any" placeholder="Max kWh" class="form-input"
                                                    v-model="TarriffElement_inputs_Patch_Delete.restrictions.max_kwh" />
                                                </div>
                                                <div>
                                                  <label for="Min_current">Min current</label>
                                                  <input id="Min_current" type="number" step="any" placeholder="Min current" class="form-input"
                                                    v-model="TarriffElement_inputs_Patch_Delete.restrictions.min_current" />
                                                </div>
                                                <div>
                                                  <label for="Max_current">Max current</label>
                                                  <input id="Max_current" type="number" step="any" placeholder="Max current" class="form-input"
                                                    v-model="TarriffElement_inputs_Patch_Delete.restrictions.max_current" />
                                                </div>
                                                <div>
                                                  <label for="Min_power">Min power</label>
                                                  <input id="Min_power" type="number" step="any" placeholder="Min power" class="form-input"
                                                    v-model="TarriffElement_inputs_Patch_Delete.restrictions.min_power" />
                                                </div>
                                                <div>
                                                  <label for="Max_power">Max power</label>
                                                  <input id="Max_power" type="number" step="any" placeholder="Max power" class="form-input"
                                                    v-model="TarriffElement_inputs_Patch_Delete.restrictions.max_power" />
                                                </div>
                                                <div>
                                                  <label for="Min_duration">Min duration</label>
                                                  <input id="Min_duration" type="number" step="any" placeholder="Min duration" class="form-input"
                                                    v-model="TarriffElement_inputs_Patch_Delete.restrictions.min_duration" />
                                                </div>
                                                <div>
                                                  <label for="Max_duration">Max duration</label>
                                                  <input id="Max_duration" type="number" step="any" placeholder="Max duration" class="form-input"
                                                    v-model="TarriffElement_inputs_Patch_Delete.restrictions.max_duration" />
                                                </div>
                                                <div>
                                                  <label for="day_of_week" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                    Day of Week
                                                  </label>
                                                  <select id="day_of_week" class="form-select w-7/8 mr-4"
                                                    v-model="TarriffElement_inputs_Patch_Delete.restrictions.day_of_week">
                                                    <option value="MONDAY">MONDAY</option>
                                                    <option value="TUESDAY">TUESDAY</option>
                                                    <option value="WEDNESDAY">WEDNESDAY</option>
                                                    <option value="THURSDAY">THURSDAY</option>
                                                    <option value="FRIDAY">FRIDAY</option>
                                                    <option value="SATURDAY">SATURDAY</option>
                                                    <option value="SUNDAY">SUNDAY</option>
                                                  </select>
                                                </div>
                                                <div>
                                                  <label for="Reservation" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                    Reservation
                                                  </label>
                                                  <select id="Reservation" class="form-select w-7/8 mr-4"
                                                    v-model="TarriffElement_inputs_Patch_Delete.restrictions.reservation">
                                                    <option value="RESERVATION">RESERVATION</option>
                                                    <option value="RESERVATION_EXPIRES">RESERVATION_EXPIRES</option>
                                                  </select>
                                                </div>
                                                <button type="button" class="btn btn-danger" @click="deleteRestrictions">Delete
                                                  Restrictions</button>
                                              </div>
  
  
                                            </div>
                                            <!-- ===================================================================TARIFF MAIN=======================================================================-->
  
                                            <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                              <button type="submit" class="btn btn-primary">Submit</button>
                                              <button type="button" class="btn btn-danger" @click="deleteTariff_Element">Delete</button>
                                            </div>
  
                                          </form>
                                        </div>
                                      </TabPanel>
                                    </TabPanels>
                                  </Tabgroup>
                                  </div>
  
  
                      </TabPanel> <!-- Tariff TOOLS ALL END-->
  
  
                      <TabPanel><!-- Connector Tools ALL START-->
  
                            <!-- Real-time transaction -->
                              <div v-if="Task_14_response && Task_14_response.length > 0 && Task_14_response[0].user__is_superuser"
                                  class="panel gap-6 mb-6 overflow-hidden" style="height: 500px;">
                                <p class="text-lg dark:text-white-light/90">
                                  <span class="text-primary ml-2">Connectors Table</span>
                                </p>
                                <div class="table-responsive" style="overflow-y: auto; max-height: 450px;">
                                  <table class="table-hover w-full">
                                    <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                      <tr>
                                        <th>Connector Chargepoint Name</th>
                                        <th>Connector Number in Chargepoint</th>
                                        <th>Connector ID</th>
                                        <th>Tariff IDs</th>
                                        <th>Availability Status</th>
                                        <th>Connector Status</th>
                                        <th>Standard</th>
                                        <th>#Charging Profile</th>
                                        <th>Format</th>
                                        <th>Power Type</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <template v-for="data in uniqueConnectors" :key="data.uuid">
                                        <tr>
                                          <td class="whitespace-nowrap">{{ data.chargepoint }}</td>
                                          <td>{{ data.connectorid }}</td>
                                          <td>{{ data.uuid }}</td>
                                          <td>
                                            <!-- Display tariff IDs as a styled list -->
                                            <div v-if="data.tariff_ids && data.tariff_ids.length > 0" class="flex flex-wrap gap-1">
                                              <span 
                                                v-for="tariffId in data.tariff_ids" 
                                                :key="tariffId"
                                                class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                                                {{ tariffId }}
                                              </span>
                                            </div>
                                            <span v-else class="text-gray-500 text-sm">No tariffs</span>
                                          </td>
                                          <td>{{ data.availability_status }}</td>
                                          <td>{{ data.connector_status }}</td>
                                          <td>{{ data.standard }}</td>
                                          <td>
                                            <!-- Display charging profiles as a list if multiple -->
                                            <div v-if="data.charging_profile && data.charging_profile.length > 0" class="flex flex-wrap gap-1">
                                              <span 
                                                v-for="profileId in data.charging_profile" 
                                                :key="profileId"
                                                class="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                                                {{ profileId }}
                                              </span>
                                            </div>
                                            <span v-else class="text-gray-500 text-sm">No profiles</span>
                                          </td>
                                          <td>{{ data.format }}</td>
                                          <td>{{ data.power_type }}</td>
                                        </tr>
                                      </template>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
  
                              
  
  
                              <hr class="my-4 border-t border-gray-300 dark:border-gray-700">
  
  
                            <div class="table-responsive" style="overflow-y: auto; max-height: 450px;" >
                                  <p class="text-lg dark:text-white-light/90">
                                  <span class="text-primary ml-2">Tariff IDs table</span>
                                </p>
                                  <table class="table-hover w-full">
                                    <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
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
                                      <template v-for="(tariff) in Task_7_Tarriff_Main" :key="tariff.id">
                                        <tr>
                                          <td>{{ tariff.id }}</td><!--<td>{{ tariff.id }}</td>-->
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
                            <div class="panel h-full max-h-96 overflow-y-auto">
                              <p class="text-lg dark:text-white-light/90">
                                <span class="text-primary ml">Connector Update</span>
                              </p>
  
                              <!-- Connector PATCH Body -->
                              <form class="space-y-5" @submit.prevent="Patch_Connector_inputs">
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
  
                                  <!-- Chargepoint Name -->
                                  <div>
                                    <label for="LocationDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                      Chargepoint Name
                                    </label>
                                    <select v-model="Connector_chargepoint_selection" id="LocationDropdown" class="form-select w-3/4 mr-4"
                                      @change="connector_ID_fetching_function" required>
                                      <option disabled value="">Please select a Chargepoint</option>
                                      <option v-for="data in connector_chargepoint_name_data" :key="data.chargepoint">
                                        {{ data.chargepoint }}
                                      </option>
                                    </select>
                                  </div>
  
                                  <!-- Connector Number -->
                                  <div>
                                    <label for="Connector_ID_selection" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                      Connector Number
                                    </label>
                                    <select v-model="Connector_ID_selection" id="Connector_ID_selection" class="form-select w-3/4 mr-4"
                                      @change="connector_data_loading_functions" required>
                                      <option disabled value="">Please select a Connector</option>
                                      <option v-for="data in connector_id_data_table" :key="data.connectorid">
                                        {{ data.connectorid }}
                                      </option>
                                    </select>
                                  </div>
  
                                </div>
  
                                <!-- Other Input Fields -->
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
  
                                  <!-- Tariff Selection ID -->
                                  <div>
                                    <label for="tariffDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                      Tariff Selection ID
                                    </label>
                                    <select v-model="connector_data_load_and_patch.tariff_ids" id="tariffDropdown" class="form-select w-3/4 mr-4"><!--connector_data_load_and_patch.tariff_ids-->
                                      <option disabled value="">Please select a tariff</option>
                                      <option v-for="(tariff) in Task_7_Tarriff_Main" :key="tariff.id">
                                                    {{tariff.id}}
                                                  </option>
                                      <option value="0">No Tariff</option><!---->
                                    </select>
                                  </div>
  
                                  <!-- Availability Status -->
                                  <div>
                                    <label for="availabilityStatus" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                      Availability Status
                                    </label>
                                    <select v-model="connector_data_load_and_patch.availability_status" id="availabilityStatus"
                                      class="form-select w-7/8 mr-4">
                                      <option value="Inoperative">Inoperative</option>
                                      <option value="Operative">Operative</option>
                                    </select>
                                  </div>
  
                                  <!-- Connector Status -->
                                  <div>
                                    <label for="connectorStatus" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                      Connector Status
                                    </label>
                                    <select v-model="connector_data_load_and_patch.connector_status" id="connectorStatus"
                                      class="form-select w-7/8 mr-4">
                                      <option value="Available">Available</option>
                                      <option value="Preparing">Preparing</option>
                                      <option value="Charging">Charging</option>
                                      <option value="SuspendedEVSE">SuspendedEVSE</option>
                                      <option value="SuspendedEV">SuspendedEV</option>
                                      <option value="Finishing">Finishing</option>
                                      <option value="Reserved">Reserved</option>
                                      <option value="Unavailable">Unavailable</option>
                                      <option value="Faulted">Faulted</option>
                                    </select>
                                  </div>
  
                                  <!-- Standard -->
                                  <div>
                                    <label for="standard" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                      Standard
                                    </label>
                                    <select v-model="connector_data_load_and_patch.standard" id="standard" class="form-select w-7/8 mr-4">
                                      <option value="CHADEMO">CHADEMO</option>
                                      <option value="DOMESTIC_A">DOMESTIC_A</option>
                                      <option value="IEC_60309_2_single_16">IEC_60309_2_single_16</option>
                                      <option value="IEC_62196_T1_COMBO">IEC_62196_T1_COMBO</option>
                                    </select>
                                  </div>
  
                                  <!-- Format -->
                                  <div>
                                    <label for="format" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                      Format
                                    </label>
                                    <select v-model="connector_data_load_and_patch.format" id="format" class="form-select w-7/8 mr-4">
                                      <option value="SOCKET">SOCKET</option>
                                      <option value="CABLE">CABLE</option>
                                    </select>
                                  </div>
  
                                  <!-- Power Type -->
                                  <div>
                                    <label for="powerType" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                      Power Type
                                    </label>
                                    <select v-model="connector_data_load_and_patch.power_type" id="powerType" class="form-select w-7/8 mr-4">
                                      <option value="AC_1_PHASE">AC_1_PHASE</option>
                                      <option value="AC_3_PHASE">AC_3_PHASE</option>
                                      <option value="DC">DC</option>
                                    </select>
                                  </div>
  
                                </div>
  
                                <!-- Submit Button -->
                                <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                  <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
  
                              </form>
                            </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
                      </TabPanel> <!-- Connector Tools ALL END-->
  
                      <TabPanel><!-- Transaction Tools ALL START-->
  
                        <div class="panel h-full gap-6">
                          <TabGroup>
                            <TabList class="flex">
                              <Tab as="template" v-slot="{ selected }">
                                <a href="javascript:;" @click="Transaction_Options"
                                  class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                                  :class="{ '!border-green-500 text-green-500': selected }">
  
  
                                  Real-time Transaction Options
                                </a>
                              </Tab>
                              <Tab as="template" v-slot="{ selected }">
                                <a href="javascript:;"
                                  class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                                  :class="{ '!border-green-500 text-green-500': selected }">
  
  
                                  Finished Transactions
                                </a>
                              </Tab>
                            </TabList>
  
  
                            <TabPanels>
  
  
                              <TabPanel> <!-- Real time transactions-->
                              <!-- KEEP EXISTING: Active-time Charging Session Visualization for Operators -->
                              <div v-if="Task_14_response && Task_14_response.length > 0 && Task_14_response[0].user__is_superuser"
                                class="panel gap-6 mb-6 overflow-hidden" 
                                style="height: 500px;">
                                <p class="text-lg dark:text-white-light/90">
                                  <span class="text-primary ml-2">Active-time Charging Session Visualization for Operators</span>
                                </p>
                                <div class="table-responsive" style="overflow-y: auto; max-height: 450px;">
                                  <table class="table-hover w-full">
                                    <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                      <tr>
                                        <th>Id_Tag</th>
                                        <th>Start_Time</th>
                                        <th>Start_Wh</th>
                                        <th>Last_Time</th>
                                        <th>Last_Wh</th>
                                        <th class="text-center">Transaction Status</th>
                                        <th>Transaction ID</th>
                                        <th>Connector Status</th>
                                        <th>Connector Standard</th>
                                        <th>Connector ID</th>
                                        <th>Connector Power Type</th>
                                        <th>Connector Chargepoint Name</th>
                                        <th>Options</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <template v-for="data in Task_1_response_active" :key="data.connector">
                                        <tr>
                                          <td class="whitespace-nowrap">{{ data.id_tag }}</td>
                                          <td>{{ data.start_transaction_timestamp }}</td>
                                          <td>{{ data.wh_meter_start }}</td>
                                          <td>{{ data.wh_meter_last_timestamp }}</td>
                                          <td>{{ data.wh_meter_last }}</td>
                                          <td class="text-center whitespace-nowrap" :class="{
                                                    'text-success': data.transaction_status === 'Started',
                                                    'text-secondary': data.transaction_status === 'Finished',
                                                    'text-danger': data.transaction_status === 'Unauthorized',
                                                  }">
                                            {{ data.transaction_status }}
                                          </td>
                                          <td>{{ data.transaction_id}}</td>
                                          <td>{{ data.connector__connector_status }}</td>
                                          <td>{{ data.connector__standard }}</td>
                                          <td>{{ data.connector__connectorid }}</td>
                                          <td>{{ data.connector__power_type }}</td>
                                          <td>{{ data.connector__chargepoint }}</td>

                                          <td class="flex space-x-2">
                                              <button 
                                                class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                                                @click="stopTransaction(data.transaction_id, data.connector__chargepoint)">
                                                STOP
                                              </button>
                                              <button 
                                                class="bg-yellow-500 text-black py-1 px-2 rounded hover:bg-yellow-600"
                                                @click="ResetChargepoint(data.connector__chargepoint)">
                                                RESET
                                              </button>
                                          </td>

                                        </tr>
                                      </template>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <!-- NEW: Multi-Unit Meter Values Analysis Section -->
                              <div v-if="Task_14_response && Task_14_response.length > 0 && Task_14_response[0].user__is_superuser"
                                class="panel gap-6 mb-6" style="height: auto;">
                                <p class="text-lg dark:text-white-light/90">
                                  <span class="text-primary ml-2">Real-time Meter Values Analysis: Multi-Unit Display</span>
                                </p>
                                
                                <!-- Main Transaction ID Selection -->
                                <div class="mb-4">
                                  <div class="flex items-center space-x-4">
                                    <div>
                                      <label for="mainTransactionDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                        Main Transaction ID
                                      </label>
                                      <select v-model="selectedMainTransaction" id="mainTransactionDropdown" 
                                        class="form-select w-64 py-2 px-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                        @change="updateAllUnitsData">
                                        <option value="">Select Transaction ID</option>
                                        <option v-for="transaction in Task_3_response" :key="transaction.transaction_id"
                                          :value="transaction.transaction_id">
                                          {{ transaction.transaction_id }}
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                </div>

                                <!-- 4 Units Layout: 2x2 Grid -->
                                <div class="grid xl:grid-cols-2 gap-6 mb-6">
                                  
                                  <!-- Voltage (V) Section -->
                                  <div class="grid grid-cols-1 gap-4" style="height: 500px;">
                                    <div class="panel" style="height: 250px; overflow-y: auto;">
                                      <h5 class="font-semibold text-lg dark:text-white-light mb-3">
                                        <span class="text-blue-500 ml-2">Voltage (V) Data</span>
                                      </h5>
                                      <div class="table-responsive">
                                        <table class="table-hover">
                                          <thead>
                                            <tr>
                                              <th>Transaction_Id</th>
                                              <th>Timestamp</th>
                                              <th>Value (V)</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <template v-for="data in voltageData" :key="data.uuid">
                                              <tr>
                                                <td class="whitespace-nowrap">{{ data.transaction }}</td>
                                                <td>{{ data.timestamp }}</td>
                                                <td>{{ data.value }}</td>
                                              </tr>
                                            </template>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    
                                    <div class="panel" style="height: 250px;">
                                      <div class="flex items-center">
                                        <h5 class="font-semibold text-lg dark:text-white-light">
                                          <span class="text-blue-500 ml-2">Voltage Graph</span>
                                        </h5>
                                      </div>
                                      <div class="relative">
                                        <apexchart height="200" :options="voltageChart" :series="voltageChartSeries"
                                          class="bg-white dark:bg-black rounded-lg overflow-hidden">
                                          <div class="min-h-[200px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                                            <span class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
                                          </div>
                                        </apexchart>
                                      </div>
                                    </div>
                                  </div>

                                  <!-- Energy (W) Section -->
                                  <div class="grid grid-cols-1 gap-4" style="height: 500px;">
                                    <div class="panel" style="height: 250px; overflow-y: auto;">
                                      <h5 class="font-semibold text-lg dark:text-white-light mb-3">
                                        <span class="text-green-500 ml-2">Energy (W) Data</span>
                                      </h5>
                                      <div class="table-responsive">
                                        <table class="table-hover">
                                          <thead>
                                            <tr>
                                              <th>Transaction_Id</th>
                                              <th>Timestamp</th>
                                              <th>Value (W)</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <template v-for="data in energyData" :key="data.uuid">
                                              <tr>
                                                <td class="whitespace-nowrap">{{ data.transaction }}</td>
                                                <td>{{ data.timestamp }}</td>
                                                <td>{{ data.value }}</td>
                                              </tr>
                                            </template>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    
                                    <div class="panel" style="height: 250px;">
                                      <div class="flex items-center">
                                        <h5 class="font-semibold text-lg dark:text-white-light">
                                          <span class="text-green-500 ml-2">Energy Graph</span>
                                        </h5>
                                      </div>
                                      <div class="relative">
                                        <apexchart height="200" :options="energyChart" :series="energyChartSeries"
                                          class="bg-white dark:bg-black rounded-lg overflow-hidden">
                                          <div class="min-h-[200px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                                            <span class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
                                          </div>
                                        </apexchart>
                                      </div>
                                    </div>
                                  </div>

                                  <!-- Current (A) Section -->
                                  <div class="grid grid-cols-1 gap-4" style="height: 500px;">
                                    <div class="panel" style="height: 250px; overflow-y: auto;">
                                      <h5 class="font-semibold text-lg dark:text-white-light mb-3">
                                        <span class="text-orange-500 ml-2">Current (A) Data</span>
                                      </h5>
                                      <div class="table-responsive">
                                        <table class="table-hover">
                                          <thead>
                                            <tr>
                                              <th>Transaction_Id</th>
                                              <th>Timestamp</th>
                                              <th>Value (A)</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <template v-for="data in currentData" :key="data.uuid">
                                              <tr>
                                                <td class="whitespace-nowrap">{{ data.transaction }}</td>
                                                <td>{{ data.timestamp }}</td>
                                                <td>{{ data.value }}</td>
                                              </tr>
                                            </template>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    
                                    <div class="panel" style="height: 250px;">
                                      <div class="flex items-center">
                                        <h5 class="font-semibold text-lg dark:text-white-light">
                                          <span class="text-orange-500 ml-2">Current Graph</span>
                                        </h5>
                                      </div>
                                      <div class="relative">
                                        <apexchart height="200" :options="currentChart" :series="currentChartSeries"
                                          class="bg-white dark:bg-black rounded-lg overflow-hidden">
                                          <div class="min-h-[200px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                                            <span class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
                                          </div>
                                        </apexchart>
                                      </div>
                                    </div>
                                  </div>

                                  <!-- Energy Hours (Wh) Section -->
                                  <div class="grid grid-cols-1 gap-4" style="height: 500px;">
                                    <div class="panel" style="height: 250px; overflow-y: auto;">
                                      <h5 class="font-semibold text-lg dark:text-white-light mb-3">
                                        <span class="text-purple-500 ml-2">Energy Hours (Wh) Data</span>
                                      </h5>
                                      <div class="table-responsive">
                                        <table class="table-hover">
                                          <thead>
                                            <tr>
                                              <th>Transaction_Id</th>
                                              <th>Timestamp</th>
                                              <th>Value (Wh)</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <template v-for="data in energyHoursData" :key="data.uuid">
                                              <tr>
                                                <td class="whitespace-nowrap">{{ data.transaction }}</td>
                                                <td>{{ data.timestamp }}</td>
                                                <td>{{ data.value }}</td>
                                              </tr>
                                            </template>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                    
                                    <div class="panel" style="height: 250px;">
                                      <div class="flex items-center">
                                        <h5 class="font-semibold text-lg dark:text-white-light">
                                          <span class="text-purple-500 ml-2">Energy Hours Graph</span>
                                        </h5>
                                      </div>
                                      <div class="relative">
                                        <apexchart height="200" :options="energyHoursChart" :series="energyHoursChartSeries"
                                          class="bg-white dark:bg-black rounded-lg overflow-hidden">
                                          <div class="min-h-[200px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08]">
                                            <span class="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-5 h-5 inline-flex"></span>
                                          </div>
                                        </apexchart>
                                      </div>
                                    </div>
                                  </div>

                                </div>
                              </div>
                                </TabPanel>
                                <TabPanel> <!-- Finished Transactions-->
                                  <!-- Task 11 -->
                                  <div v-if="Task_14_response && Task_14_response.length > 0 && Task_14_response[0].user__is_superuser"
                                    class="panel gap-6 mb-6 overflow-hidden" 
                                    style="height: 500px;">
                                    <p class="text-lg dark:text-white-light/90 gap-3 mb-3">
                                      <span class="text-primary ml-2">Charging Session Time and Energy Data: Detailed and Downloadable</span>
                                    </p>
                                    <button type="submit" id="downloadButton" @click="downloadCSV"
                                      class="btn btn-primary absolute top-0 right-0 m-4">Download CSV</button>
                                      <div class="table-responsive" style="overflow-y: auto; max-height: 450px;" >
                                        <table class="table-hover w-full">
                                          <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                            <tr>
                                              <th>Id_Tag</th>
                                              <th>Start_Time</th>
                                              <th>Start_Wh</th>
                                              <th>Last_Time</th>
                                              <th>Last_Wh</th>
                                              <th class="text-center">Transaction Status</th>
                                              <th>Transaction ID</th>
                                              <th>Connector Standard</th>
                                              <th>Connector ID</th>
                                              <th>Connector Power Type</th>
                                              <th>Connector Chargepoint Name</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <template v-for="data in Task_1_response" :key="data.connector">
                                              <tr>
                                                <td class="whitespace-nowrap">{{ data.id_tag }}</td>
                                                <td>{{ data.start_transaction_timestamp }}</td>
                                                <td>{{ data.wh_meter_start }}</td>
                                                <td>{{ data.wh_meter_last_timestamp }}</td>
                                                <td>{{ data.wh_meter_last }}</td>
                                                <td class="text-center whitespace-nowrap" :class="{
                                                            'text-success': data.transaction_status === 'Started',
                                                            'text-secondary': data.transaction_status === 'Finished',
                                                            'text-danger': data.transaction_status === 'Unauthorized',
                                                          }">
                                                  {{ data.transaction_status }}
                                                </td>
                                                <td>{{ data.transaction_id}}</td>
                                                <td>{{ data.connector__standard }}</td>
                                                <td>{{ data.connector__connectorid }}</td>
                                                <td>{{ data.connector__power_type }}</td>
                                                <td>{{ data.connector__chargepoint }}</td>
                                              </tr>
                                            </template>
                                          </tbody>
                                        </table>
                                      </div>
                                  </div>
                                </TabPanel>
  
  
                            </TabPanels>
                          </TabGroup>
                        </div>
                        
  
                        
                      </TabPanel> <!-- Transaction Tools ALL END-->
  
  
                      <TabPanel><!-- Charging Tools ALL START-->
                                  <div>
                                      <TabGroup> <!-- hEADINGS OF CHARGING OPTIONS-->
  
                                          <TabList
                                            class="flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
  
                                            <Tab as="template" v-slot="{ selected }">
                                              <a href="javascript:;" 
                                                class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                                                :class="{ '!border-green-500 text-green-500': selected }">
  
  
                                                Charging Profile Development
                                              </a>
                                            </Tab>
                                              <Tab as="template" v-slot="{ selected }"> 
                                                  <a href="javascript:;" @click="chargingProfile_response_function(); connector_chargepoint_name_fetch(); Test_Charging_Operation();"
                                                    class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                                                    :class="{ '!border-green-500 text-green-500': selected }">
  
  
                                                    Connectors-Charging Profile Options
                                                  </a>
                                              </Tab>
                                              <Tab as="template" v-slot="{ selected }">
                                                <a href="javascript:;"
                                                  class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                                                  :class="{ '!border-green-500 text-green-500': selected }">
  
  
                                                  Test Charging Start-Stop
                                                </a>
                                            </Tab>
                                        </TabList>
  
                                        <TabPanels>
  
                                          <TabPanel> <!-- MENU FOR CHARHING PROFILE MANAGEMENT START-->
                                                        <div>
                                                          <TabGroup>
                                                                  <!-- heading for charging profiel options -->
                                                              <TabList
                                                                class="flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
                                                  
                                                                <Tab as="template" v-slot="{ selected }">
                                                                  <a href="javascript:; "
                                                                    class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                                                                    :class="{ '!border-green-500 text-green-500': selected }">
                                                  
                                                  
                                                                    Create Charging Profile
                                                                  </a>
                                                                </Tab>
                                                                  <Tab as="template" v-slot="{ selected }">
                                                                    <a href="javascript:;"
                                                                      class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                                                                      :class="{ '!border-green-500 text-green-500': selected }">
                                                  
                                                  
                                                                      Update Charging Profile
                                                                    </a>
                                                                </Tab>
  
                                                                <Tab as="template" v-slot="{ selected }">
                                                                  <a href="javascript:;"
                                                                    class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                                                                    :class="{ '!border-green-500 text-green-500': selected }">
                                                
                                                
                                                                    Delete Charging Profile
                                                                  </a>
                                                              </Tab>
                                                            </TabList>
  
                                                            <TabPanels> <!-- All Charging OPTIONS Actions START-->
  
                                                              <TabPanel> <!-- CREATE CHARGING PROFILE START-->
  
  
                                                                <div class="panel gap-6 mb-6 overflow-hidden" style="height: 500px;">
                                                                    <p class="text-lg dark:text-white-light/90">
                                                                      <span class="text-primary ml-2">Charging Profile Data Visualization</span>
                                                                    </p>
                                                                    <div class="table-responsive" style="overflow-y: auto; max-height: 450px;">
                                                                      <table class="table-hover w-full">
                                                                          <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                                                            <tr>
                                                                              <th>Charging Profile ID</th>
                                                                              <th>Stack Level</th>
                                                                              <th>Charging Profile Purpose</th>
                                                                              <th>Charging Profile Kind</th>
                                                                              <th>Charging Rate Unit</th>
                                                                              <th>Recurrency Kind</th>
                                                                              <th>Valid From</th>
                                                                              <th>Valid To</th>
                                                                              <th>Start Schedule</th>
                                                                              <th>Duration</th>
                                                                              <th>Min Charging Rate</th>
                                                                              <th>Charging Schedule Periods</th>
                                                                            </tr>
                                                                          </thead>
                                                                          <tbody>
                                                                            <!-- Iterate over the main profile data -->
                                                                            <tr v-for="(profile, index) in chargingProfileData_response" :key="profile.chargingprofile_id">
                                                                              <td>{{ profile.chargingprofile_id || '' }}</td>
                                                                              <td>{{ profile.stack_level || '' }}</td>
                                                                              <td>{{ profile.chargingprofile_purpose || '' }}</td>
                                                                              <td>{{ profile.chargingprofile_kind || '' }}</td>
                                                                              <td>{{ profile.charging_rate_unit || '' }}</td>
                                                                              <td>{{ profile.recurrency_kind || '' }}</td>
                                                                              <td>{{ formatDate(profile.valid_from) || '' }}</td>
                                                                              <td>{{ formatDate(profile.valid_to) || '' }}</td>
                                                                              <td>{{ formatDate(profile.start_schedule) || '' }}</td>
                                                                              <td>{{ profile.duration || '' }}</td>
                                                                              <td>{{ profile.min_charging_rate || '' }}</td>
                                                                              <td>
                                                                                <!-- Nested table for charging schedule periods -->
                                                                                <table class="table table-bordered w-full">
                                                                                  <thead>
                                                                                    <tr>
                                                                                      <th>Start Period</th>
                                                                                      <th>Limit</th>
                                                                                      <th>Number of Phases</th>
                                                                                    </tr>
                                                                                  </thead>
                                                                                  <tbody>
                                                                                    <!-- Check if there are any schedule periods -->
                                                                                    <template v-if="profile.chargingschedule_period && profile.chargingschedule_period.length > 0">
                                                                                      <tr v-for="(period, periodIndex) in profile.chargingschedule_period" :key="`period-${index}-${periodIndex}`">
                                                                                        <td>{{ period.startPeriod || '' }}</td>
                                                                                        <td>{{ period.limit || '' }}</td>
                                                                                        <td>{{ period.number_phases || '' }}</td>
                                                                                      </tr>
                                                                                    </template>
                                                                                    <!-- Show a message if no schedule periods are available -->
                                                                                    <template v-else>
                                                                                      <tr>
                                                                                        <td colspan="3" class="text-center">No schedule periods available.</td>
                                                                                      </tr>
                                                                                    </template>
                                                                                  </tbody>
                                                                                </table>
                                                                              </td>
                                                                            </tr>
  
                                                                            <!-- Show a message if no profiles are available -->
                                                                            <tr v-if="chargingProfileData_response.length === 0">
                                                                              <td colspan="12" class="text-center">No charging profile data available.</td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
  
                                                                    </div>
                                                                  </div>
  
                                                                <form @submit.prevent="createChargingProfile" class="space-y-5">
                                                                  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 bg-blue-200 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                                                                    <div>
                                                                      <label for="stackLevel" class="block text-sm font-medium text-black-700 dark:text-white-light">Stack Level</label>
                                                                      <input type="number" v-model="chargingProfileData.stack_level" id="stackLevel" class="form-input w-full" required />
                                                                    </div>
  
                                                                    <div>
                                                                      <label for="profilePurpose" class="block text-sm font-medium text-black-700 dark:text-white-light">Profile Purpose</label>
                                                                      <select v-model="chargingProfileData.chargingprofile_purpose" id="profilePurpose" class="form-select w-full">
                                                                        <option value="ChargePointMaxProfile">ChargePointMaxProfile</option>
                                                                        <option value="TxDefaultProfile">TxDefaultProfile</option>
                                                                        <option value="TxProfile">TxProfile</option>
                                                                      </select>
                                                                    </div>
  
                                                                    <div>
                                                                      <label for="profileKind" class="block text-sm font-medium text-black-700 dark:text-white-light">Profile Kind</label>
                                                                      <select v-model="chargingProfileData.chargingprofile_kind" id="profileKind" class="form-select w-full">
                                                                        <option value="Absolute">Absolute</option>
                                                                        <option value="Recurring">Recurring</option>
                                                                        <option value="Relative">Relative</option>
                                                                      </select>
                                                                    </div>
  
                                                                    <div>
                                                                      <label for="rateUnit" class="block text-sm font-medium text-black-700 dark:text-white-light">Charging Rate Unit</label>
                                                                      <select v-model="chargingProfileData.charging_rate_unit" id="rateUnit" class="form-select w-full">
                                                                        <option value="W">W</option>
                                                                        <option value="A">A</option>
                                                                      </select>
                                                                    </div>
  
                                                                    <div>
                                                                      <label for="recurrency_kind" class="block text-sm font-medium text-black-700 dark:text-white-light">Recurrency Kind</label>
                                                                      <select v-model="chargingProfileData.recurrency_kind" id="recurrency_kind" class="form-select w-full">
                                                                        <option value="Daily">Daily</option>
                                                                        <option value="Weekly">Weekly</option>
                                                                      </select>
                                                                    </div>
  
  
                                                                    <div>
                                                                        <label for="duration" class="block text-sm font-medium text-black-700 dark:text-white-light">Duration</label>
                                                                        <input type="number" v-model="chargingProfileData.duration" placeholder="Duration in Seconds" :min="-2147483648" :max="2147483647" class="form-input w-full" required />
                                                                    </div>
  
  
                                                                    <div>
                                                                      <label for="minChargingRate" class="block text-sm font-medium">Minimum Charging Rate</label>
                                                                      <input
                                                                        type="text"
                                                                        id="minChargingRate"
                                                                        v-model="chargingProfileData.min_charging_rate"
                                                                        class="form-input w-full"
                                                                        placeholder="Enter up to 4 digits and an optional decimal"
                                                                      />
                                                                    </div>
  
  
  
  
  
                                                                    <div>
                                                                        <label for="valid_from" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                                          Valid From
                                                                        </label>
                                                                        <input type="datetime-local"
                                                                          id="valid_from"
                                                                          @input="createDateTime_from('valid_from', $event.target.value)"
                                                                          class="form-input w-full"
                                                                          />
                                                                    </div>
  
                                                                    <div>
                                                                        <label for="valid_to" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                                          Valid to
                                                                        </label>
                                                                        <input type="datetime-local"
                                                                          id="valid_to"
                                                                          @input="createDateTime_to('valid_to', $event.target.value)"
                                                                          class="form-input w-full"
                                                                          />
                                                                    </div>
  
  
                                                                    <div>
                                                                        <label for="start_schedule" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                                          Start Schedule
                                                                        </label>
                                                                        <input type="datetime-local"
                                                                          id="start_schedule"
                                                                          @input="createDateTime_start('start_schedule', $event.target.value)" 
                                                                          class="form-input w-full"
                                                                          />
                                                                    </div>
  
  
  
  
  
                                                                    <div>
                                                                      <button type="button" @click="addSchedulePeriod" class="btn btn-secondary mt-4">Add Schedule Period</button>
                                                                    </div>
  
                                                                  </div>
  
                                                                  <div class="grid grid-cols-1 md:grid-cols-3">
  
                                                                      <!-- Charging Schedule Period Section -->
                                                                      <div v-for="(period, index) in chargingProfileData.chargingschedule_period" :key="index" class="mt-4 p-4 bg-blue-200 dark:bg-[#0e1726] rounded-md border">
                                                                                                                                                                      <!--"grid grid-cols-1 md:grid-cols-3 gap-5 p-4 bg-blue-200 dark:bg-[#0e1726]
                                                                                                                                                                        rounded-md border border-[#ebedf2] dark:border-[#191e3a]"-->
                                                                        <label class="block font-semibold">Charging Schedule Period {{ index + 1 }}</label>
  
                                                                        <div class="mt-2">
                                                                          <label for="startPeriod" class="block text-sm font-medium text-black-700 dark:text-white-light">Start Period</label>
                                                                          <input type="number" v-model="period.startPeriod" placeholder="Start Period" class="form-input w-full" required />
                                                                        </div>
  
                                                                        <div class="mt-2">
                                                                          <label for="limit" class="block text-sm font-medium text-black-700 dark:text-white-light">Limit</label>
                                                                          <input type="number" v-model="period.limit" placeholder="Limit" class="form-input w-full" required />
                                                                        </div>
  
                                                                        <div class="mt-2">
                                                                          <label for="numberPhases" class="block text-sm font-medium text-black-700 dark:text-white-light">Number of Phases</label>
                                                                          <input type="number" v-model="period.number_phases" placeholder="Number of Phases" class="form-input w-full" required />
                                                                        </div>
  
                                                                        <button type="button" @click="removeSchedulePeriod(index)" class="btn btn-danger mt-2">Remove Period</button>
                                                                      </div>
  
                                                                    </div>
  
                                                                  <div class="flex justify-end items-center space-x-4">
                                                                    <button type="submit" class="btn btn-primary">Create</button>
                                                                  </div>
                                                                </form>
                                                              </TabPanel>
  
  
                                                                <TabPanel><!-- Update Charging Profiles START-->
                                                                  <div class="panel gap-6 mb-6 overflow-hidden" style="height: 500px;">
                                                                    <p class="text-lg dark:text-white-light/90">
                                                                      <span class="text-primary ml-2">Charging Profile Data Visualization</span>
                                                                    </p>
                                                                    <div class="table-responsive" style="overflow-y: auto; max-height: 450px;">
                                                                      <table class="table-hover w-full">
                                                                          <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                                                            <tr>
                                                                              <th>Charging Profile ID</th>
                                                                              <th>Stack Level</th>
                                                                              <th>Charging Profile Purpose</th>
                                                                              <th>Charging Profile Kind</th>
                                                                              <th>Charging Rate Unit</th>
                                                                              <th>Recurrency Kind</th>
                                                                              <th>Valid From</th>
                                                                              <th>Valid To</th>
                                                                              <th>Start Schedule</th>
                                                                              <th>Duration</th>
                                                                              <th>Min Charging Rate</th>
                                                                              <th>Charging Schedule Periods</th>
                                                                            </tr>
                                                                          </thead>
                                                                          <tbody>
                                                                            <!-- Iterate over the main profile data -->
                                                                            <tr v-for="(profile, index) in chargingProfileData_response" :key="profile.chargingprofile_id">
                                                                              <td>{{ profile.chargingprofile_id || '' }}</td>
                                                                              <td>{{ profile.stack_level || '' }}</td>
                                                                              <td>{{ profile.chargingprofile_purpose || '' }}</td>
                                                                              <td>{{ profile.chargingprofile_kind || '' }}</td>
                                                                              <td>{{ profile.charging_rate_unit || '' }}</td>
                                                                              <td>{{ profile.recurrency_kind || '' }}</td>
                                                                              <td>{{ formatDate(profile.valid_from) || '' }}</td>
                                                                              <td>{{ formatDate(profile.valid_to) || '' }}</td>
                                                                              <td>{{ formatDate(profile.start_schedule) || '' }}</td>
                                                                              <td>{{ profile.duration || '' }}</td>
                                                                              <td>{{ profile.min_charging_rate || '' }}</td>
                                                                              <td>
                                                                                <!-- Nested table for charging schedule periods -->
                                                                                <table class="table table-bordered w-full">
                                                                                  <thead>
                                                                                    <tr>
                                                                                      <th>Start Period</th>
                                                                                      <th>Limit</th>
                                                                                      <th>Number of Phases</th>
                                                                                    </tr>
                                                                                  </thead>
                                                                                  <tbody>
                                                                                    <!-- Check if there are any schedule periods -->
                                                                                    <template v-if="profile.chargingschedule_period && profile.chargingschedule_period.length > 0">
                                                                                      <tr v-for="(period, periodIndex) in profile.chargingschedule_period" :key="`period-${index}-${periodIndex}`">
                                                                                        <td>{{ period.startPeriod || '' }}</td>
                                                                                        <td>{{ period.limit || '' }}</td>
                                                                                        <td>{{ period.number_phases || '' }}</td>
                                                                                      </tr>
                                                                                    </template>
                                                                                    <!-- Show a message if no schedule periods are available -->
                                                                                    <template v-else>
                                                                                      <tr>
                                                                                        <td colspan="3" class="text-center">No schedule periods available.</td>
                                                                                      </tr>
                                                                                    </template>
                                                                                  </tbody>
                                                                                </table>
                                                                              </td>
                                                                            </tr>
  
                                                                            <!-- Show a message if no profiles are available -->
                                                                            <tr v-if="chargingProfileData_response.length === 0">
                                                                              <td colspan="12" class="text-center">No charging profile data available.</td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
  
                                                                    </div>
                                                                  </div>
  
                                                                  <form class="space-y-5" @submit.prevent="update_ChargingProfile">
                                                                      <!-- ChargingProfile Selection -->
                                                                      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 bg-blue-200 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                                                                        <div>
                                                                          <label for="ChargingProfileDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">Charging Profile Selection</label>
                                                                          <select v-model="charging_profile_id_selection" id="ChargingProfile_fetch_selection" class="form-select w-3/4 mr-4" required @change="ChargingProfile_selected_fetch">
                                                                            <option disabled value="">Please select an Charging Profile </option>
                                                                            <option v-for="(profile) in chargingProfileData_response" :key="profile.chargingprofile_id">{{  profile.chargingprofile_id }}</option>
                                                                          </select>
                                                                        </div>
                                                                      </div>
  
                                                                      <!-- Charging Profile Data -->
                                                                      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 bg-blue-200 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                                                                        <!-- Stack Level -->
                                                                        <div>
                                                                          <label for="stackLevel" class="block text-sm font-medium text-black-700 dark:text-white-light">Stack Level</label>
                                                                          <input type="number" v-model="charging_profile_selected_data.stack_level" id="stackLevel" class="form-input w-full" required />
                                                                        </div>
  
                                                                        <!-- Profile Purpose -->
                                                                        <div>
                                                                          <label for="profilePurpose" class="block text-sm font-medium text-black-700 dark:text-white-light">Profile Purpose</label>
                                                                          <select v-model="charging_profile_selected_data.chargingprofile_purpose" id="profilePurpose" class="form-select w-full">
                                                                            <option value="ChargePointMaxProfile">ChargePointMaxProfile</option>
                                                                            <option value="TxDefaultProfile">TxDefaultProfile</option>
                                                                            <option value="TxProfile">TxProfile</option>
                                                                          </select>
                                                                        </div>
  
                                                                        <!-- Profile Kind -->
                                                                        <div>
                                                                          <label for="profileKind" class="block text-sm font-medium text-black-700 dark:text-white-light">Profile Kind</label>
                                                                          <select v-model="charging_profile_selected_data.chargingprofile_kind" id="profileKind" class="form-select w-full">
                                                                            <option value="Absolute">Absolute</option>
                                                                            <option value="Recurring">Recurring</option>
                                                                            <option value="Relative">Relative</option>
                                                                          </select>
                                                                        </div>
  
                                                                        <!-- Rate Unit -->
                                                                        <div>
                                                                          <label for="rateUnit" class="block text-sm font-medium text-black-700 dark:text-white-light">Charging Rate Unit</label>
                                                                          <select v-model="charging_profile_selected_data.charging_rate_unit" id="rateUnit" class="form-select w-full">
                                                                            <option value="W">W</option>
                                                                            <option value="A">A</option>
                                                                          </select>
                                                                        </div>
  
                                                                        <!-- Recurrency Kind -->
                                                                        <div>
                                                                          <label for="recurrency_kind" class="block text-sm font-medium text-black-700 dark:text-white-light">Recurrency Kind</label>
                                                                          <select v-model="charging_profile_selected_data.recurrency_kind" id="recurrency_kind" class="form-select w-full">
                                                                            <option value="Daily">Daily</option>
                                                                            <option value="Weekly">Weekly</option>
                                                                          </select>
                                                                        </div>
  
                                                                        <!-- Duration -->
                                                                        <div>
                                                                          <label for="duration" class="block text-sm font-medium text-black-700 dark:text-white-light">Duration</label>
                                                                          <input type="number" v-model="charging_profile_selected_data.duration" placeholder="Duration in Seconds" class="form-input w-full" :min="1" :max="2147483647" required />
                                                                        </div>
  
                                                                        <!-- Minimum Charging Rate -->
                                                                        <div>
                                                                          <label for="minChargingRate" class="block text-sm font-medium">Minimum Charging Rate</label>
                                                                          <input type="text" id="minChargingRate" v-model="charging_profile_selected_data.min_charging_rate" class="form-input w-full" placeholder="Enter up to 4 digits and an optional decimal" />
                                                                        </div>
  
                                                                          <!-- Valid From -->
                                                                          <div>
                                                                            <label for="valid_from" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                                              Valid From: {{ charging_profile_selected_data.valid_from}}
                                                                            </label>
                                                                            <input 
                                                                              type="datetime-local" 
                                                                              id="valid_from" 
                                                                              @input="updateDateTime_from('valid_from', $event.target.value)" 
                                                                              class="form-input w-full" 
                                                                            />
                                                                          </div>
  
                                                                          <!-- Valid To -->
                                                                          <div>
                                                                            <label for="valid_to" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                                              Valid To: {{ charging_profile_selected_data.valid_to }}
                                                                            </label>
                                                                            <input 
                                                                              type="datetime-local" 
                                                                              id="valid_to" 
                                                                              @input="updateDateTime_to('valid_to', $event.target.value)" 
                                                                              class="form-input w-full" 
                                                                            />
                                                                          </div>
  
                                                                          <!-- Start Schedule -->
                                                                          <div>
                                                                            <label for="start_schedule" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                                              Start Schedule: {{ charging_profile_selected_data.start_schedule }}
                                                                            </label>
                                                                            <input 
                                                                              type="datetime-local" 
                                                                              id="start_schedule" 
                                                                              @input="updateDateTime_start('start_schedule', $event.target.value)" 
                                                                              class="form-input w-full" 
                                                                            />
                                                                          </div>
  
  
                                                                        <!-- Add Schedule Period -->
                                                                        <div>
                                                                          <button type="button" @click="add_Selected_SchedulePeriod" class="btn btn-secondary mt-4">Add Schedule Period</button>
                                                                        </div>
                                                                      </div>
  
                                                                      <!-- Charging Schedule Periods -->
                                                                      <div class="grid grid-cols-1 md:grid-cols-3">
                                                                        <div v-for="(period, index) in charging_profile_selected_data.chargingschedule_period" :key="index" class="mt-4 p-4 bg-blue-200 dark:bg-[#0e1726] rounded-md border">
                                                                          <label class="block font-semibold">Charging Schedule Period {{ index + 1 }}</label>
  
                                                                          <!-- Start Period -->
                                                                          <div class="mt-2">
                                                                            <label for="startPeriod" class="block text-sm font-medium text-black-700 dark:text-white-light">Start Period</label>
                                                                            <input type="number" v-model="period.startPeriod" placeholder="Start Period" class="form-input w-full" required />
                                                                          </div>
  
                                                                          <!-- Limit -->
                                                                          <div class="mt-2">
                                                                            <label for="limit" class="block text-sm font-medium text-black-700 dark:text-white-light">Limit</label>
                                                                            <input type="number" v-model="period.limit" placeholder="Limit" class="form-input w-full" required />
                                                                          </div>
  
                                                                          <!-- Number of Phases -->
                                                                          <div class="mt-2">
                                                                            <label for="numberPhases" class="block text-sm font-medium text-black-700 dark:text-white-light">Number of Phases</label>
                                                                            <input type="number" v-model="period.number_phases" placeholder="Number of Phases" class="form-input w-full" required />
                                                                          </div>
  
                                                                          <button type="button" @click="remove_Selected_SchedulePeriod(index)" class="btn btn-danger mt-2">Remove Period</button>
                                                                        </div>
                                                                      </div>
  
                                                                      <!-- Submit Button -->
                                                                      <div class="flex justify-end items-center space-x-4">
                                                                        <button type="submit" class="btn btn-primary">Update</button>
                                                                      </div>
                                                                    </form>
  
  
                                                                </TabPanel><!-- Update Charging Profiles END-->
  
  
                                                                <TabPanel><!-- Delete Charging Profiles START-->
                                                                <div class="panel gap-6 mb-6 overflow-hidden" style="height: 500px;">
                                                                    <p class="text-lg dark:text-white-light/90">
                                                                      <span class="text-primary ml-2">Charging Profile Data Visualization</span>
                                                                    </p>
                                                                    <div class="table-responsive" style="overflow-y: auto; max-height: 450px;">
                                                                      <table class="table-hover w-full">
                                                                          <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                                                            <tr>
                                                                              <th>Charging Profile ID</th>
                                                                              <th>Stack Level</th>
                                                                              <th>Charging Profile Purpose</th>
                                                                              <th>Charging Profile Kind</th>
                                                                              <th>Charging Rate Unit</th>
                                                                              <th>Recurrency Kind</th>
                                                                              <th>Valid From</th>
                                                                              <th>Valid To</th>
                                                                              <th>Start Schedule</th>
                                                                              <th>Duration</th>
                                                                              <th>Min Charging Rate</th>
                                                                              <th>Charging Schedule Periods</th>
                                                                            </tr>
                                                                          </thead>
                                                                          <tbody>
                                                                            <!-- Iterate over the main profile data -->
                                                                            <tr v-for="(profile, index) in chargingProfileData_response" :key="profile.chargingprofile_id">
                                                                              <td>{{ profile.chargingprofile_id || '' }}</td>
                                                                              <td>{{ profile.stack_level || '' }}</td>
                                                                              <td>{{ profile.chargingprofile_purpose || '' }}</td>
                                                                              <td>{{ profile.chargingprofile_kind || '' }}</td>
                                                                              <td>{{ profile.charging_rate_unit || '' }}</td>
                                                                              <td>{{ profile.recurrency_kind || '' }}</td>
                                                                              <td>{{ formatDate(profile.valid_from) || '' }}</td>
                                                                              <td>{{ formatDate(profile.valid_to) || '' }}</td>
                                                                              <td>{{ formatDate(profile.start_schedule) || '' }}</td>
                                                                              <td>{{ profile.duration || '' }}</td>
                                                                              <td>{{ profile.min_charging_rate || '' }}</td>
                                                                              <td>
                                                                                <!-- Nested table for charging schedule periods -->
                                                                                <table class="table table-bordered w-full">
                                                                                  <thead>
                                                                                    <tr>
                                                                                      <th>Start Period</th>
                                                                                      <th>Limit</th>
                                                                                      <th>Number of Phases</th>
                                                                                    </tr>
                                                                                  </thead>
                                                                                  <tbody>
                                                                                    <!-- Check if there are any schedule periods -->
                                                                                    <template v-if="profile.chargingschedule_period && profile.chargingschedule_period.length > 0">
                                                                                      <tr v-for="(period, periodIndex) in profile.chargingschedule_period" :key="`period-${index}-${periodIndex}`">
                                                                                        <td>{{ period.startPeriod || '' }}</td>
                                                                                        <td>{{ period.limit || '' }}</td>
                                                                                        <td>{{ period.number_phases || '' }}</td>
                                                                                      </tr>
                                                                                    </template>
                                                                                    <!-- Show a message if no schedule periods are available -->
                                                                                    <template v-else>
                                                                                      <tr>
                                                                                        <td colspan="3" class="text-center">No schedule periods available.</td>
                                                                                      </tr>
                                                                                    </template>
                                                                                  </tbody>
                                                                                </table>
                                                                              </td>
                                                                            </tr>
  
                                                                            <!-- Show a message if no profiles are available -->
                                                                            <tr v-if="chargingProfileData_response.length === 0">
                                                                              <td colspan="12" class="text-center">No charging profile data available.</td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
  
                                                                    </div>
                                                                  </div>
  
                                                                  <form class="space-y-5" @submit.prevent="delete_charging_profile">
                                                                      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 bg-blue-200 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
  
                                                                        <div>
                                                                          <label for="charging_profile_Dropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">Charging Profile  Selection</label>
                                                                          <select v-model="charging_profile_delete_selection" id="charging_profile_delete_selection" class="form-select w-3/4 mr-4" required>
                                                                            <option disabled value="">Please select an Charging Profile </option>
                                                                            <option v-for="(profile) in chargingProfileData_response" :key="profile.chargingprofile_id">{{  profile.chargingprofile_id }}</option>
                                                                          </select>
                                                                        </div>
                                                                      </div>
  
                                                                      <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                                                        <button type="submit" class="btn btn-danger">Delete</button>
                                                                      </div>
                                                                    </form>
  
                                                                </TabPanel><!-- Delete Charging Profiles END-->
  
  
                                                            </TabPanels><!-- All Charging OPTIONS Actions END-->
  
                                                        </TabGroup>
                                                      </div>
  
  
                                          
                                          </TabPanel><!-- MENU FOR CHARHING PROFILE MANAGEMENT END-->
  
                                          <TabPanel><!-- MENU FOR CONNECTOR-CHARGING PROFILE OPTIONS START-->
                                            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 bg-blue-200 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                                              <form class="space-y-5" @submit.prevent="Set_Charging_Profile">
                                                  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
  
                                                    <!-- Chargepoint Name -->
                                                    <div>
                                                      <label for="LocationDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                        Chargepoint Name
                                                      </label>
                                                      <select v-model="Connector_chargepoint_selection" id="LocationDropdown" class="form-select w-3/4 mr-4"
                                                        @change="connector_ID_fetching_function" required>
                                                        <option disabled value="">Please select a Chargepoint</option>
                                                        <option v-for="data in connector_chargepoint_name_data" :key="data.chargepoint">
                                                          {{ data.chargepoint }}
                                                        </option>
                                                      </select>
                                                    </div>
  
                                                    <!-- Connector Number -->
                                                    <div>
                                                      <label for="Connector_ID_selection" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                        Connector Number
                                                      </label>
                                                      <select v-model="Connector_ID_selection" id="Connector_ID_selection" class="form-select w-3/4 mr-4"  required>
                                                        <option disabled value="">Please select a Connector</option>
                                                        <option v-for="data in connector_id_data_table" :key="data.connectorid">
                                                          {{ data.connectorid }}
                                                        </option>
                                                      </select>
                                                    </div>
  
                                                  </div>
  
  
                                                      <!-- Charging Profile -->
                                                      <div>
                                                        <label for="ChargingProfileDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">Charging Profile Selection</label>
                                                        <select v-model="charging_profile_id_selection" id="ChargingProfile_fetch_selection" class="form-select w-3/4 mr-4" required @change="ChargingProfile_selected_fetch">
                                                          <option disabled value="">Please select a Charging Profile </option>
                                                          <option v-for="(profile) in chargingProfileData_response" :key="profile.chargingprofile_id">{{  profile.chargingprofile_id }}</option>
                                                        </select>
                                                      </div>
  
                                                      <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                                        <div class="ml-auto flex space-x-4 rtl:space-x-reverse">
                                                          <button type="submit" class="btn btn-warning">Set Charging Profile</button>
                                                          <button type="button" class="btn btn-danger" @click="Clear_Charging_Profile">Clear Charging Profile</button>
                                                        </div>
                                                      </div>
  
                                                  </form>
    
                                              </div>
                                                                                                <!-- Submit Button -->
  
                                            <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-6" style="height: 500px;">
  
                                              <div class="panel gap-6 mb-6 overflow-hidden" style="height: 500px;">
                                                                    <p class="text-lg dark:text-white-light/90">
                                                                      <span class="text-primary ml-2">Charging Profile Data Visualization</span>
                                                                    </p>
                                                                    <div class="table-responsive" style="overflow-y: auto; max-height: 450px;">
                                                                      <table class="table-hover w-full">
                                                                          <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                                                            <tr>
                                                                              <th>Charging Profile ID</th>
                                                                              <th>Stack Level</th>
                                                                              <th>Charging Profile Purpose</th>
                                                                              <th>Charging Profile Kind</th>
                                                                              <th>Charging Rate Unit</th>
                                                                              <th>Recurrency Kind</th>
                                                                              <th>Valid From</th>
                                                                              <th>Valid To</th>
                                                                              <th>Start Schedule</th>
                                                                              <th>Duration</th>
                                                                              <th>Min Charging Rate</th>
                                                                              <th>Charging Schedule Periods</th>
                                                                            </tr>
                                                                          </thead>
                                                                          <tbody>
                                                                            <!-- Iterate over the main profile data -->
                                                                            <tr v-for="(profile, index) in chargingProfileData_response" :key="profile.chargingprofile_id">
                                                                              <td>{{ profile.chargingprofile_id || '' }}</td>
                                                                              <td>{{ profile.stack_level || '' }}</td>
                                                                              <td>{{ profile.chargingprofile_purpose || '' }}</td>
                                                                              <td>{{ profile.chargingprofile_kind || '' }}</td>
                                                                              <td>{{ profile.charging_rate_unit || '' }}</td>
                                                                              <td>{{ profile.recurrency_kind || '' }}</td>
                                                                              <td>{{ formatDate(profile.valid_from) || '' }}</td>
                                                                              <td>{{ formatDate(profile.valid_to) || '' }}</td>
                                                                              <td>{{ formatDate(profile.start_schedule) || '' }}</td>
                                                                              <td>{{ profile.duration || '' }}</td>
                                                                              <td>{{ profile.min_charging_rate || '' }}</td>
                                                                              <td>
                                                                                <!-- Nested table for charging schedule periods -->
                                                                                <table class="table table-bordered w-full">
                                                                                  <thead>
                                                                                    <tr>
                                                                                      <th>Start Period</th>
                                                                                      <th>Limit</th>
                                                                                      <th>Number of Phases</th>
                                                                                    </tr>
                                                                                  </thead>
                                                                                  <tbody>
                                                                                    <!-- Check if there are any schedule periods -->
                                                                                    <template v-if="profile.chargingschedule_period && profile.chargingschedule_period.length > 0">
                                                                                      <tr v-for="(period, periodIndex) in profile.chargingschedule_period" :key="`period-${index}-${periodIndex}`">
                                                                                        <td>{{ period.startPeriod || '' }}</td>
                                                                                        <td>{{ period.limit || '' }}</td>
                                                                                        <td>{{ period.number_phases || '' }}</td>
                                                                                      </tr>
                                                                                    </template>
                                                                                    <!-- Show a message if no schedule periods are available -->
                                                                                    <template v-else>
                                                                                      <tr>
                                                                                        <td colspan="3" class="text-center">No schedule periods available.</td>
                                                                                      </tr>
                                                                                    </template>
                                                                                  </tbody>
                                                                                </table>
                                                                              </td>
                                                                            </tr>
  
                                                                            <!-- Show a message if no profiles are available -->
                                                                            <tr v-if="chargingProfileData_response.length === 0">
                                                                              <td colspan="12" class="text-center">No charging profile data available.</td>
                                                                            </tr>
                                                                          </tbody>
                                                                        </table>
  
                                                                    </div>
                                              </div>
  
                                                            <div class="panel gap-6 mb-6 overflow-hidden" style="height: 500px;">
                                                              <p class="text-lg dark:text-white-light/90">
                                                                <span class="text-primary ml-2">Connector Info Table</span>
                                                              </p>
                                                              <div class="table-responsive" style="overflow-y: auto; max-height: 450px;">
                                                                <table class="table-hover w-full">
                                                                  <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
                                                                    <tr>
                                                                      <th>Connector Chargepoint Name</th>
                                                                      <th>Connector Number in Chargepoint</th>
                                                                      <th>Connector ID</th>
                                                                      <th>Tariff IDs</th>
                                                                      <th>Availability Status</th>
                                                                      <th>Connector Status</th>
                                                                      <th>Standard</th>
                                                                      <th>#Charging Profile</th>
                                                                      <th>Format</th>
                                                                      <th>Power Type</th>
                                                                    </tr>
                                                                  </thead>
                                                                  <tbody>
                                                                    <template v-for="data in uniqueConnectors" :key="data.uuid">
                                                                      <tr>
                                                                        <td class="whitespace-nowrap">{{ data.chargepoint }}</td>
                                                                        <td>{{ data.connectorid }}</td>
                                                                        <td>{{ data.uuid }}</td>
                                                                        <td>
                                                                          <!-- Display tariff IDs as a styled list -->
                                                                          <div v-if="data.tariff_ids && data.tariff_ids.length > 0" class="flex flex-wrap gap-1">
                                                                            <span 
                                                                              v-for="tariffId in data.tariff_ids" 
                                                                              :key="tariffId"
                                                                              class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                                                                              {{ tariffId }}
                                                                            </span>
                                                                          </div>
                                                                          <span v-else class="text-gray-500 text-sm">No tariffs</span>
                                                                        </td>
                                                                        <td>{{ data.availability_status }}</td>
                                                                        <td>{{ data.connector_status }}</td>
                                                                        <td>{{ data.standard }}</td>
                                                                        <td>
                                                                          <!-- Display charging profiles as a list if multiple -->
                                                                          <div v-if="data.charging_profile && data.charging_profile.length > 0" class="flex flex-wrap gap-1">
                                                                            <span 
                                                                              v-for="profileId in data.charging_profile" 
                                                                              :key="profileId"
                                                                              class="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                                                                              {{ profileId }}
                                                                            </span>
                                                                          </div>
                                                                          <span v-else class="text-gray-500 text-sm">No profiles</span>
                                                                        </td>
                                                                        <td>{{ data.format }}</td>
                                                                        <td>{{ data.power_type }}</td>
                                                                      </tr>
                                                                    </template>
                                                                  </tbody>
                                                                </table>
                                                              </div>
                                                            </div>
  
                                              </div>
  
                                          </TabPanel><!-- MENU FOR CONNECTOR-CHARGING PROFILE OPTIONS END-->
  
<TabPanel> <!-- Test Charging START-->
  <!-- Real-time transaction -->
  <div v-if="Task_14_response && Task_14_response.length > 0 && Task_14_response[0].user__is_superuser"
       class="panel h-full gap-6 mb-6 overflow-hidden" style="height: 500px;">
    <p class="text-lg dark:text-white-light/90">
      <span class="text-primary ml-2">Connector Charging Test Table</span>
    </p>
    <div class="table-responsive" style="overflow-y: auto; max-height: 450px;">
      <table class="table-hover w-full">
        <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10">
          <tr>
            <th>Connector Chargepoint Name</th>
            <th>Connector Number in Chargepoint</th>
            <th>Connector ID</th>
            <th>Tariff IDs</th>
            <th>Availability Status</th>
            <th>Connector Status</th>
            <th>Standard</th>
            <th>#Charging Profile</th>
            <th>Format</th>
            <th>Power Type</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="data in uniqueConnectors" :key="data.uuid">
            <tr>
              <td class="whitespace-nowrap">{{ data.chargepoint }}</td>
              <td>{{ data.connectorid }}</td>
              <td>{{ data.uuid }}</td>
              <td>
                <!-- Display tariff IDs as a styled list -->
                <div v-if="data.tariff_ids && data.tariff_ids.length > 0" class="flex flex-wrap gap-1">
                  <span 
                    v-for="tariffId in data.tariff_ids" 
                    :key="tariffId"
                    class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                    {{ tariffId }}
                  </span>
                </div>
                <span v-else class="text-gray-500 text-sm">No tariffs</span>
              </td>
              <td>{{ data.availability_status }}</td>
              <td>{{ data.connector_status }}</td>
              <td>{{ data.standard }}</td>
              <td>
                <!-- Display charging profiles as a list if multiple -->
                <div v-if="data.charging_profile && data.charging_profile.length > 0" class="flex flex-wrap gap-1">
                  <span 
                    v-for="profileId in data.charging_profile" 
                    :key="profileId"
                    class="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                    {{ profileId }}
                  </span>
                </div>
                <span v-else class="text-gray-500 text-sm">No profiles</span>
              </td>
              <td>{{ data.format }}</td>
              <td>{{ data.power_type }}</td>

              <td class="flex space-x-2">
                <button 
                  v-if="data && data.availability_status === 'Operative' && (data.connector_status === 'Available' || data.connector_status === 'Preparing')"
                  class="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600"
                  @click="Test_Charging_Start(data.chargepoint, data.connectorid)">
                  START
                </button>

                <!-- Show the STOP button only if connector_status is "Charging" -->
                <button 
                  v-if="data.connector_status === 'Charging'"
                  class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                  @click="Test_Charging_Stop_set_functions(data.chargepoint, data.connectorid)">
                  STOP
                </button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</TabPanel><!-- Test Charging END-->
  
                                        </TabPanels>
                                      </TabGroup>
  
                                    </div>
  
                      </TabPanel> <!-- Charging Tools ALL END-->
  
                      <TabPanel><!-- ACCOUNT Tools ALL START-->
  
                            <div>
                                <TabGroup>
                                        <!-- heading for Account profiel options -->
                                    <TabList
                                      class="flex font-semibold border-b border-[#ebedf2] dark:border-[#191e3a] mb-5 whitespace-nowrap overflow-y-auto">
  
                                      <Tab as="template" v-slot="{ selected }">
                                        <a href="javascript:;"
                                          class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                                          :class="{ '!border-green-500 text-green-500': selected }">
  
  
                                          Create Account Profile
                                        </a>
                                      </Tab>
                                        <Tab as="template" v-slot="{ selected }">
                                          <a href="javascript:;"
                                            class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                                            :class="{ '!border-green-500 text-green-500': selected }">
  
  
                                            Update Account Profile
                                          </a>
                                      </Tab>
  
                                      <Tab as="template" v-slot="{ selected }">
                                        <a href="javascript:;"
                                          class="flex gap-2 p-4 border-b border-transparent hover:border-green-500 hover:text-green-500 !outline-none"
                                          :class="{ '!border-green-500 text-green-500': selected }">
  
  
                                          Delete Account Profile
                                        </a>
                                    </Tab>
                                  </TabList>
  
                                  <TabPanels> <!-- All Account OPTIONS Actions START-->
  
                                    <TabPanel><!-- ACCOUNT POST START-->
  
  
  
  
                                      <div  v-if="Task_14_response && Task_14_response.length > 0 && Task_14_response[0].user__is_superuser"
                                          class="panel gap-6 mb-6 overflow-hidden" 
                                          style="height: 300px;">  <!-- Set fixed height for container -->
  
                                            <p class="text-lg dark:text-white-light/90">
                                              <span class="text-primary ml-2">Account Profile management Table</span>
                                            </p>
                                            <div class="table-responsive" style="overflow-y: auto; max-height: 250px;"> <!-- Table container height slightly less than the main div -->
                                              <table class="table-hover w-full">
                                                <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10"> <!-- Sticky header for scrolling -->
                                                  <tr>
                                                    <th>Username</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Email</th>
                                                    <th>Socket type</th>
                                                    <th>Superuser</th>
                                                    <th>Active State</th>
                                                    <th>Credit Balance</th>
                                                    <th>Tariff Preference</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <template v-for="data in Account_response" :key="data.user__username">
                                                    <tr>
                                                      <td class="whitespace-nowrap">{{ data.user__username }}</td>
                                                      <td>{{ data.user__first_name }}</td>
                                                      <td>{{ data.user__last_name }}</td>
                                                      <td>{{ data.user__email }}</td>
                                                      <td>{{ data.chargepoint_sockets[0]}}</td>
                                                      <td>{{ data.user__is_superuser }}</td>
                                                      <td>{{ data.user__is_active }}</td>
                                                      <td>{{ data.credit_balance }}</td>
                                                      <td>{{ data.tariff_preference }}</td>
                                                    </tr>
                                                  </template>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
  
  
  
                                      <form class="space-y-5" @submit.prevent="create_Account">
                                        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 bg-blue-200 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
  
                                          <div>
                                            <label for="Username" class="block text-sm font-medium text-black-700 dark:text-white-light">Username</label>
                                            <input type="text" id="Username" v-model="createAccountData.user__username" class="form-input w-full" />
                                          </div>
  
                                          <div>
                                            <label for="Password" class="block text-sm font-medium text-black-700 dark:text-white-light">Password</label>
                                            <input type="password" id="Password" v-model="createAccountData.user__password" class="form-input w-full" />
                                          </div>
  
                                          <div>
                                            <label for="FirstName" class="block text-sm font-medium text-black-700 dark:text-white-light">First Name</label>
                                            <input type="text" id="FirstName" v-model="createAccountData.user__first_name" class="form-input w-full" />
                                          </div>
  
                                          <div>
                                            <label for="LastName" class="block text-sm font-medium text-black-700 dark:text-white-light">Last Name</label>
                                            <input type="text" id="LastName" v-model="createAccountData.user__last_name" class="form-input w-full" />
                                          </div>
  
                                          <div>
                                            <label for="Email" class="block text-sm font-medium text-black-700 dark:text-white-light">Email</label>
                                            <input type="email" id="Email" v-model="createAccountData.user__email" class="form-input w-full" />
                                          </div>
                                            
                                           <!-- <div>
                                              <label for="Timezone" class="block text-sm font-medium text-black-700 dark:text-white-light">
                                                Timezone
                                              </label>
                                                <select v-model="createAccountData.timezone" id="Timezone" class="form-select w-7/8 mr-4" required>
                                                  <option value="Europe/Amsterdam">Europe/Amsterdam</option>
                                                  <option value="Europe/Andorra">Europe/Andorra</option>
                                                  <option value="Europe/Athens">Europe/Athens</option>
                                                  <option value="Europe/Bratislava">Europe/Bratislava</option>
                                                  <option value="Europe/Brussels">Europe/Brussels</option>
                                                  <option value="Europe/Bucharest">Europe/Bucharest</option>
                                                  <option value="Europe/Budapest">Europe/Budapest</option>
                                                  <option value="Europe/Copenhagen">Europe/Copenhagen</option>
                                                  <option value="Europe/Dublin">Europe/Dublin</option>
                                                  <option value="Europe/Helsinki">Europe/Helsinki</option>
                                                  <option value="Europe/Lisbon">Europe/Lisbon</option>
                                                  <option value="Europe/Ljubljana">Europe/Ljubljana</option>
                                                  <option value="Europe/Luxembourg">Europe/Luxembourg</option>
                                                  <option value="Europe/Madrid">Europe/Madrid</option>
                                                  <option value="Europe/Malta">Europe/Malta</option>
                                                  <option value="Europe/Paris">Europe/Paris</option>
                                                  <option value="Europe/Prague">Europe/Prague</option>
                                                  <option value="Europe/Riga">Europe/Riga</option>
                                                  <option value="Europe/Rome">Europe/Rome</option>
                                                  <option value="Europe/Sofia">Europe/Sofia</option>
                                                  <option value="Europe/Stockholm">Europe/Stockholm</option>
                                                  <option value="Europe/Tallinn">Europe/Tallinn</option>
                                                  <option value="Europe/Vienna">Europe/Vienna</option>
                                                  <option value="Europe/Vilnius">Europe/Vilnius</option>
                                                  <option value="Europe/Warsaw">Europe/Warsaw</option>
                                                  <option value="Europe/Zagreb">Europe/Zagreb</option>
                                                </select>
                                            </div>-->
  
  
                                          </div>
                                      
                                          <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                            <button type="submit" class="btn btn-primary">Create</button>
                                          </div>
                                        </form>
                                    </TabPanel><!-- ACCOUNT POST END-->
  
                                    <TabPanel><!-- PATCH ACCOUNT START-->
  
  
  
  
  
                                      <div  v-if="Task_14_response && Task_14_response.length > 0 && Task_14_response[0].user__is_superuser"
                                          class="panel gap-6 mb-6 overflow-hidden" 
                                          style="height: 300px;">  <!-- Set fixed height for container -->
  
                                            <p class="text-lg dark:text-white-light/90">
                                              <span class="text-primary ml-2">Account Profile management Table</span>
                                            </p>
                                            <div class="table-responsive" style="overflow-y: auto; max-height: 250px;"> <!-- Table container height slightly less than the main div -->
                                              <table class="table-hover w-full">
                                                <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10"> <!-- Sticky header for scrolling -->
                                                  <tr>
                                                    <th>Username</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Email</th>
                                                    <th>Socket type</th>
                                                    <th>Superuser</th>
                                                    <th>Active State</th>
                                                    <th>Credit Balance</th>
                                                    <th>Tariff Preference</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <template v-for="data in Account_response" :key="data.user__username">
                                                    <tr>
                                                      <td class="whitespace-nowrap">{{ data.user__username }}</td>
                                                      <td>{{ data.user__first_name }}</td>
                                                      <td>{{ data.user__last_name }}</td>
                                                      <td>{{ data.user__email }}</td>
                                                      <td>{{ data.chargepoint_sockets[0]}}</td>
                                                      <td>{{ data.user__is_superuser }}</td>
                                                      <td>{{ data.user__is_active }}</td>
                                                      <td>{{ data.credit_balance }}</td>
                                                      <td>{{ data.tariff_preference }}</td>
                                                    </tr>
                                                  </template>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
                                      <form class="space-y-5" @submit.prevent="update_Account">
                                        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 bg-blue-200 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                                          <div>
                                            <label for="AccountDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">Account Selection</label>
                                            <select v-model="account_fetch_selection" id="id_tag_fetch_selection" class="form-select w-3/4 mr-4" required @change="account_selected_fetch">
                                              <option disabled value="">Please select an Account Name</option>
                                              <option v-for="(data) in Account_response" :key="data.user__username">{{ data.user__username }}</option>
                                            </select>
                                          </div>
                                        </div>
  
                                        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 bg-blue-200 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
                                          <!--
                                          <div>
                                            <label for="Username" class="block text-sm font-medium text-black-700 dark:text-white-light">Username</label>
                                            <input type="text" id="Username" v-model="account_selected_data.user__username" class="form-input w-full" />
                                          </div>
                                          -->
  
                                          <div>
                                            <label for="FirstName" class="block text-sm font-medium text-black-700 dark:text-white-light">First Name</label>
                                            <input type="text" id="FirstName" v-model="account_selected_data.user__first_name" class="form-input w-full" />
                                          </div>
  
                                          <div>
                                            <label for="LastName" class="block text-sm font-medium text-black-700 dark:text-white-light">Last Name</label>
                                            <input type="text" id="LastName" v-model="account_selected_data.user__last_name" class="form-input w-full" />
                                          </div>
  
                                          <div>
                                            <label for="Email" class="block text-sm font-medium text-black-700 dark:text-white-light">Email</label>
                                            <input type="email" id="Email" v-model="account_selected_data.user__email" class="form-input w-full" />
                                          </div>
  
  
                                          <div class="relative text-white-dark">
                                            <label for="WebSocket_TypeDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">Socket type</label>
                                            <select id="WebSocket_Type" class="form-select ps-10 placeholder:text-white-dark w-1/2 mr-4" v-model="account_selected_data.chargepoint_sockets">
                                              <option value="CHADEMO">CHADEMO</option>
                                              <option value="DOMESTIC_A">DOMESTIC_A</option>
                                              <option value="IEC_60309_2_single_16">IEC_60309_2_single_16</option>
                                              <option value="IEC_62196_T1_COMBO">IEC_62196_T1_COMBO</option>
                                            </select>
                                          </div>
  
                                          <div>
                                            <label for="Superuser" class="block text-sm font-medium text-black-700 dark:text-white-light">Superuser</label>
                                            <select id="Superuser" v-model="account_selected_data.user__is_superuser" class="form-select w-full">
                                              <option :value="true">Yes</option>
                                              <option :value="false">No</option>
                                            </select>
                                          </div>
  
                                          <div>
                                            <label for="ActiveState" class="block text-sm font-medium text-black-700 dark:text-white-light">Active State</label>
                                            <select id="ActiveState" v-model="account_selected_data.user__is_active" class="form-select w-full">
                                              <option :value="true">Yes</option>
                                              <option :value="false">No</option>
                                            </select>
                                          </div>
  
                                          <div>
                                            <label for="Credit_Balance" class="block text-sm font-medium text-black-700 dark:text-white-light">Credit Balance</label>
                                            <input type="number" step="0.001"  id="Credit_Balance" v-model="account_selected_data.credit_balance" class="form-input w-full" />
                                          </div>
  
                                          <div>
                                            <label for="TariffPreference" class="block text-sm font-medium text-black-700 dark:text-white-light">Tariff Preference</label>
                                            <input type="number" step="0.001" id="TariffPreference" v-model="account_selected_data.tariff_preference" class="form-input w-full" />
                                          </div>
  
                                        </div>
  
                                        <!-- Submit Button -->
                                        <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                          <button type="submit" class="btn btn-primary">Update</button>
                                        </div>
                                      </form>
                                    </TabPanel> <!-- PATCH ACCOUNTEND-->
  
  
                                    <TabPanel><!-- DELETE ACCOUNT START-->
  
  
  
  
  
  
                                      <div  v-if="Task_14_response && Task_14_response.length > 0 && Task_14_response[0].user__is_superuser"
                                          class="panel gap-6 mb-6 overflow-hidden" 
                                          style="height: 300px;">  <!-- Set fixed height for container -->
  
                                            <p class="text-lg dark:text-white-light/90">
                                              <span class="text-primary ml-2">Account Profile management Table</span>
                                            </p>
                                            <div class="table-responsive" style="overflow-y: auto; max-height: 250px;"> <!-- Table container height slightly less than the main div -->
                                              <table class="table-hover w-full">
                                                <thead class="sticky top-0 bg-white dark:bg-gray-800 z-10"> <!-- Sticky header for scrolling -->
                                                  <tr>
                                                    <th>Username</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Email</th>
                                                    <th>Socket type</th>
                                                    <th>Superuser</th>
                                                    <th>Active State</th>
                                                    <th>Credit Balance</th>
                                                    <th>Tariff Preference</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <template v-for="data in Account_response" :key="data.user__username">
                                                    <tr>
                                                      <td class="whitespace-nowrap">{{ data.user__username }}</td>
                                                      <td>{{ data.user__first_name }}</td>
                                                      <td>{{ data.user__last_name }}</td>
                                                      <td>{{ data.user__email }}</td>
                                                      <td>{{ data.chargepoint_sockets[0]}}</td>
                                                      <td>{{ data.user__is_superuser }}</td>
                                                      <td>{{ data.user__is_active }}</td>
                                                      <td>{{ data.credit_balance }}</td>
                                                      <td>{{ data.tariff_preference }}</td>
                                                    </tr>
                                                  </template>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
                                      <form class="space-y-5" @submit.prevent="delete_Account">
                                        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-4 bg-blue-200 dark:bg-[#0e1726] rounded-md border border-[#ebedf2] dark:border-[#191e3a]">
  
                                          <div>
                                            <label for="AccountgDropdown" class="block text-sm font-medium text-black-700 dark:text-white-light">Account Selection</label>
                                            <select v-model="account_fetch_delete_selection" id="account_fetch_delete_selection" class="form-select w-3/4 mr-4" required>
                                              <option disabled value="">Please select a Tag Name</option>
                                              <option v-for="(data) in Account_response" :key="data.user__username">{{data.user__username}}</option>
                                            </select>
                                          </div>
                                        </div>
  
                                        <div class="flex justify-end items-center space-x-4 rtl:space-x-reverse">
                                          <button type="submit" class="btn btn-danger">Delete</button>
                                        </div>
                                      </form>
                                    </TabPanel><!-- DELETE ACCOUNT END-->
  
  
                                  </TabPanels><!-- All Account OPTIONS Actions END-->
  
                              </TabGroup>
                            </div>
  
  
                      </TabPanel><!-- ACCOUNT Tools ALL END-->
  




                          <TabPanel><!-- NEW: DSO Signal TabPanel START-->
                            <div class="active pt-5">
                              <div class="space-y-4">
                                <!-- Signal Configuration -->
                                <div class="panel">
                                  <h5 class="font-semibold text-lg mb-4">Signal Configuration</h5>
                                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <!-- Signal ID -->
                                    <div>
                                      <label class="font-semibold">Signal ID</label>
                                      <input 
                                        v-model.number="dsoSignal.id" 
                                        type="number" 
                                        class="form-input" 
                                        placeholder="Enter Signal ID"
                                        min="1"
                                      />
                                    </div>
                                    
                                    <!-- Event Type -->
                                    <div>
                                      <label class="font-semibold">Event Type (uuName)</label>
                                      <select v-model="dsoSignal.uuName" class="form-select">
                                        <option value="event_CapacityLimit">Capacity Limit</option>
                                        <option value="event_DUoSTarrif">DUoS Tariff</option>
                                      </select>
                                    </div>
                                    
                                    <!-- Location Name -->
                                    <div>
                                      <label class="font-semibold">Location Name</label>
                                      <input 
                                        v-model="dsoSignal.locationName" 
                                        type="text" 
                                        class="form-input" 
                                        placeholder="Enter Location Name"
                                      />
                                    </div>
                                    
                                    <!-- Transformer ID -->
                                    <div>
                                      <label class="font-semibold">Transformer ID</label>
                                      <input 
                                        v-model="dsoSignal.transformerID" 
                                        type="text" 
                                        class="form-input" 
                                        placeholder="Enter Transformer ID"
                                      />
                                    </div>
                                  </div>
                                </div>
                                
                                <!-- Location Coordinates -->
                                    <div class="panel">
                                      <h5 class="font-semibold text-lg mb-4">Location Coordinates</h5>
                                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                          <label class="font-semibold">Longitude (first in array)</label>
                                          <input 
                                            v-model="dsoSignal.longitude" 
                                            type="text" 
                                            class="form-input" 
                                            placeholder="e.g., 23.727539"
                                          />
                                        </div>
                                        <div>
                                          <label class="font-semibold">Latitude (second in array)</label>
                                          <input 
                                            v-model="dsoSignal.latitude" 
                                            type="text" 
                                            class="form-input" 
                                            placeholder="e.g., 37.983810"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                
                                      <!-- Sync Field -->
                                      <div class="md:col-span-2">
                                        <label class="flex items-center cursor-pointer">
                                          <input 
                                            v-model="dsoSignal.sync" 
                                            type="checkbox" 
                                            class="form-checkbox"
                                          />
                                          <span class="ml-2 font-semibold">Synchronous Execution</span>
                                        </label>
                                      </div>

                                <!-- Event Timestamp -->
                                <div class="panel">
                                  <h5 class="font-semibold text-lg mb-4">Event Timestamp</h5>
                                  <p class="text-sm text-info mb-2">All times are in Athens timezone (EEST/EET)</p>
                                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <label class="font-semibold">Date</label>
                                      <input 
                                        v-model="dsoSignal.eventDate" 
                                        type="date" 
                                        class="form-input"
                                      />
                                    </div>
                                    <div>
                                      <label class="font-semibold">Time</label>
                                      <input 
                                        v-model="dsoSignal.eventTime" 
                                        type="time" 
                                        class="form-input"
                                        step="1"
                                      />
                                    </div>
                                  </div>
                                </div>
                                
                                <!-- Time Periods -->
                                <div class="panel">
                                  <div class="flex justify-between items-center mb-4">
                                    <h5 class="font-semibold text-lg">Time Periods</h5>
                                    <div class="flex gap-2">
                                      <button 
                                        @click="addPeriod" 
                                        class="btn btn-primary btn-sm"
                                      >
                                        Add Period
                                      </button>
                                      <button 
                                        @click="removeLastPeriod" 
                                        class="btn btn-danger btn-sm"
                                        :disabled="dsoSignal.periods.length === 0"
                                      >
                                        Remove Last
                                      </button>
                                    </div>
                                  </div>
                                  
                                  <div class="text-info mb-4">
                                    <strong>Duration:</strong> {{ dsoSignal.periods.length }} period(s)
                                  </div>
                                  
                                  <!-- Period List -->
                                  <div class="space-y-4 max-h-96 overflow-y-auto">
                                    <div 
                                      v-for="(period, index) in dsoSignal.periods" 
                                      :key="index"
                                      class="border border-gray-200 dark:border-gray-700 rounded p-4"
                                    >
                                      <h6 class="font-semibold mb-3">Period {{ index + 1 }}</h6>
                                      
                                      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <!-- Start Time -->
                                        <div>
                                          <label class="text-sm font-semibold">Start Date</label>
                                          <input 
                                            v-model="period.startDate" 
                                            type="date" 
                                            class="form-input"
                                          />
                                        </div>
                                        <div>
                                          <label class="text-sm font-semibold">Start Time</label>
                                          <input 
                                            v-model="period.startTime" 
                                            type="time" 
                                            class="form-input"
                                            step="1"
                                          />
                                        </div>
                                        
                                        <!-- End Time -->
                                        <div>
                                          <label class="text-sm font-semibold">End Date</label>
                                          <input 
                                            v-model="period.endDate" 
                                            type="date" 
                                            class="form-input"
                                          />
                                        </div>
                                        <div>
                                          <label class="text-sm font-semibold">End Time</label>
                                          <input 
                                            v-model="period.endTime" 
                                            type="time" 
                                            class="form-input"
                                            step="1"
                                          />
                                        </div>
                                        
                                        <!-- Value -->
                                        <div class="md:col-span-2">
                                          <label class="text-sm font-semibold">Value</label>
                                          <input 
                                            v-model="period.value" 
                                            type="text" 
                                            class="form-input" 
                                            placeholder="e.g., 23.0 or [-10, 25]"
                                          />
                                          <p class="text-xs text-gray-500 mt-1">Format: Single value (23.0) or range ([-10, 25])</p>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <div v-if="dsoSignal.periods.length === 0" class="text-center text-gray-500 py-8">
                                      No periods added yet. Click "Add Period" to get started.
                                    </div>
                                  </div>
                                </div>
                                
                                <!-- Action Buttons -->
                                <div class="panel">
                                  <div class="flex gap-4 justify-end">
                                    <button 
                                      @click="validateDsoSignal" 
                                      class="btn btn-info"
                                    >
                                      Validate
                                    </button>
                                    <button 
                                      @click="submitDsoSignal" 
                                      class="btn btn-success"
                                      :disabled="!isDsoSignalValid"
                                    >
                                      Create DSO Signal
                                    </button>
                                    <button 
                                      @click="resetDsoSignal" 
                                      class="btn btn-secondary"
                                    >
                                      Reset
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TabPanel><!-- NEW: DSO Signal TabPanel END-->




                      </TabPanels>
  
  
                    </TabGroup>
                  </div>
  
          </TabPanel>
        </TabPanels>
      </TabGroup>
  
    </div>
  
  
  
  
  
  
  </template>
  
  <script setup>
    import { ref, onMounted, computed, watch,nextTick  } from 'vue';
    import { useRouter } from 'vue-router';
  
    import { OpenStreetMapProvider   } from 'leaflet-geosearch';
    // Import Font Awesome core and the icon components
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import apexchart from 'vue3-apexcharts';
    import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet';
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
    import L from "leaflet";
    import "leaflet-routing-machine";
    import "https://api.windy.com/assets/map-forecast/libBoot.js";
    const store = useAppStore();
  
  
    import IconArrowLeft from '@/components/icon/icon-arrow-left.vue';
    import IconInfoCircle from '@/components/icon/icon-info-circle.vue';
  
  import { onBeforeUnmount } from 'vue';
  
  
    
  
// Sign in Parameters Start//
  
    let signed_in_flag=ref(5);
    const AES_encryption_message=ref([]);
    AES_encryption_message.value= generateRandomString();
    let encrypted_Username=ref([]);
    let encrypted_Token=ref([]);
    // Sign in Parameters End//
    let showProfileModal = ref(false);
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign in Code =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign in Code =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign in Code =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign in Code =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
    // Sign in Libraries //
    import { useMeta } from '@/composables/use-meta';
    import IconLockDots from '@/components/icon/icon-lock-dots.vue';
    // Sign in Libraries END//
  
      //const router = useRouter();
  
      // Reactive variables for form data
      const sign_in_username = ref('');
      const sign_in_password = ref('');
      // Error message for feedback
      const errorMessage = ref('');
  
      
  
    
      // Function to check if a user exists
      const checkIfUserExists = async () => {
      try {
          console.log("username.value", sign_in_username.value)
          console.log("password.value", sign_in_password.value)
          
          // Define the payload for checking user existence
          const payload = { 
              username: sign_in_username.value, 
              password: sign_in_password.value
          };

          const apiUrl = '/api/token/';
          const requestOptions = {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
              },
              body: JSON.stringify(payload)
          };

          // Send a POST request to check if the user exists
          const response = await fetch(apiUrl, requestOptions);
          
          if (!response.ok) {
              if (response.status === 401) {
                  errorMessage.value = 'Invalid credentials. Please try again.';
              } else {
                  errorMessage.value = 'An unexpected error occurred.';
              }
              return null;
          }

          const data = await response.json();
          // Return response object similar to axios format
          return {
              status: response.status,
              data: data
          };
      
      } catch (error) {
          console.error('Authentication error:', error);
          errorMessage.value = 'An error occurred during authentication.';
          return null;
      }
      };


      // Sign-up handler
// Update your handleSignIn function to save state after successful login
// Update handleSignIn to start monitoring
const handleSignIn = async () => {
  const userExists = await checkIfUserExists();
  try {
    if (userExists && userExists.status == 200) {
      encrypted_Username.value = CryptoJS.AES.encrypt(
        sign_in_username.value,
        AES_encryption_message.value
      );
      encrypted_Token.value = CryptoJS.AES.encrypt(
        userExists.data.access,
        AES_encryption_message.value
      );

      errorMessage.value = 'This account exists!';
      signed_in_flag.value = 10;
      
      saveAuthState();
      startSessionMonitoring(); // Start monitoring after login
      
      logged_section();
    } else {
      errorMessage.value = 'Invalid credentials. Please try again.';
      signed_in_flag.value = 5;
    }
  } catch (e) {
    console.error("Sign-in error:", e);
    errorMessage.value = 'An error occurred. Please try again later.';
  }
};


  const sign_up_redirect= async () => {
          // Set signed_in_flag to 15 For Sign up 
          signed_in_flag.value = 15;
      }

  const forgot_redirect= async () => {
          // Set signed_in_flag to 20 For Forgot 
          signed_in_flag.value = 20;
      }
      
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign in Code END=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign in Code END=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign in Code END=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign in Code END=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign UP Code START=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign UP Code START=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign UP Code START=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  import IconTag from '@/components/icon/icon-tag.vue';
  import IconDollar from '@/components/icon/icon-dollar-sign-circle.vue';
  import IconPlus from '@/components/icon/icon-plus.vue';

  import IconMail from '@/components/icon/icon-mail.vue';



      // Reactive variables for form data
      const sign_up_username = ref('');
      const sign_up_password = ref('');
      const sign_up_firstName = ref('');
      const sign_up_lastName = ref('');
      const sign_up_email = ref('');

      const sign_up_tariff=ref([]);
      const sign_up_powerType=ref('');

      // Error message for feedback
      //const errorMessage = ref('');

    


// Updated Sign-up handler
const handleSignUp = async () => {
    try {
        // Add all required fields to the check
        const payload = {
            username: sign_up_username.value,
            password: sign_up_password.value,
            first_name: sign_up_firstName.value,
            last_name: sign_up_lastName.value,
            email: sign_up_email.value
        };

        const apiUrl = '/api/user/create/';
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(payload)
        };

        const response = await fetch(apiUrl, requestOptions);
        // console.log("Sign-up response status:", response.status);

        if (response.status === 200 || response.status === 201) {
            // Success - user created
            errorMessage.value = 'User Created Successfully. Redirecting to Sign-in';
            

            const userAuthData = await sign_up_token();
            if (userAuthData && userAuthData.data.access) {
                const token_sign_up = userAuthData.data.access;
                
                await sign_up_info_patch(token_sign_up);
                await create_Id_Tag_First_time(token_sign_up);

                await sign_in_redirect();
            } else {
                console.error('Failed to get authentication token');
                errorMessage.value = 'Failed to complete setup. Please try signing in manually.';
            }

        } else if (response.status === 400) {
            // Bad request - user/email already exists
            const errorData = await response.json();
            console.log("Error data:", errorData);
            errorMessage.value = 'This Username or Email already exists. Please choose different credentials.';
        } else {
            // Other errors
            errorMessage.value = 'An unexpected error occurred. Please try again later.';
        }

    } catch (error) {
        console.error('Sign-up error:', error);
        errorMessage.value = 'An error occurred. Please try again later.';
    }
};

const sign_in_redirect = async () => {
    // Set signed_in_flag to 5 For Sign in 
    signed_in_flag.value = 5;
};

// Tools for Auto-updating the User Information
const sign_up_token = async () => {
    try {
        // Define the payload for checking user existence
        const payload = { 
            username: sign_up_username.value, 
            password: sign_up_password.value
        };

        const apiUrl = '/api/token/';
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(payload)
        };

        // Send a POST request to check if the user exists
        const response = await fetch(apiUrl, requestOptions);
        
        if (!response.ok) {
            if (response.status === 401) {
                errorMessage.value = 'Invalid credentials. Please try again.';
            } else {
                errorMessage.value = 'An unexpected error occurred.';
            }
            return null;
        }

        const data = await response.json();
        // Return response object similar to axios format
        return {
            status: response.status,
            data: data
        };

    } catch (error) {
        console.error('Authentication error:', error);
        errorMessage.value = 'An error occurred during authentication.';
        return null;
    }
};

// Updates the fields      
const sign_up_info_patch = async (token_sign_up) => {
    try {
        const updatedData = {
            chargepoint_sockets: [sign_up_powerType.value],
            tariff_preference: sign_up_tariff.value,
            credit_balance: 45
        };

        const apiUrl = `/api/user/${sign_up_username.value}/`;
        
        const requestOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token_sign_up}`,
            },
            body: JSON.stringify(updatedData),
        };

        const response = await fetch(apiUrl, requestOptions);
        // console.log("body_sign_up",requestOptions)

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        // console.log('User info updated successfully:', result);
        return result;
        
    } catch (error) {
        console.error('Error updating user info:', error.message);
        throw error; // Re-throw to handle in calling function if needed
    }
};

// Improved date function with better edge case handling
function getOneYearFromNow() {
    const now = new Date();
    const oneYearLater = new Date(now);
    oneYearLater.setFullYear(now.getFullYear() + 1);
    
    // Format for datetime-local input (YYYY-MM-DDTHH:MM)
    const year = oneYearLater.getFullYear();
    const month = String(oneYearLater.getMonth() + 1).padStart(2, '0');
    const day = String(oneYearLater.getDate()).padStart(2, '0');
    const hours = String(oneYearLater.getHours()).padStart(2, '0');
    const minutes = String(oneYearLater.getMinutes()).padStart(2, '0');
    
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

const create_Id_Tag_First_time = async (token_sign_up) => {
    try {
        const query = {
            idToken: generateRandomString(),
            user: sign_up_username.value,
            friendly_name: sign_up_username.value + '_charging_card',
            expiry_date: getOneYearFromNow()
        };

        const apiUrl = `/api/idtag/`;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token_sign_up}`,
            },
            body: JSON.stringify(query)
        };

        const response = await fetch(apiUrl, requestOptions);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        // console.log('ID Tag created successfully:', result);
        return result;
        
    } catch (error) {
        console.error('Error creating ID tag:', error.message);
        throw error; // Re-throw to handle in calling function if needed
    }
};


  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign UP Code END=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign UP Code END=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign UP Code END=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  
  
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign out Code START=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign out Code START=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign out Code START=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  
  
const handleSignOut = async () => {
  signed_in_flag.value = 5;
  clearAuthState();
  close();
};
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign out Code END=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign out Code END=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-= Sign out Code END=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=-=-=--=
  
    // Add the icons to the library
    library.add(faArrowLeft, faArrowLeftRotate);
  
    const mapId = 'map';
    const mapObject = ref(null);
    const mapObjectWindy = ref(null);
    const routingControl = ref(null);
    const zoom = 10;
    const center = L.latLng(37.9838096, 23.7275388);
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
    const startAddressResults = ref([]);
    const destinationAddressResults = ref([]);
    const selectedStartOption = ref(0);  // Use ref for reactivity
    const selectedDestinationOption = ref(0);  // Use ref for reactivity
    // Create refs to store the input values
  
    //Predictions
    const predicted_data = ref([]);
    const Task_Prediction_name = ref('');
  
    const predicted_dates = ref([]);
    const predicted_actualValues = ref([]);
    const predicted_predictedValues = ref([]);
    const formattedDates = ref([]);
  
  
  
    const Task_5_locations = ref([]);
    let routes_info = ref([]);
  
  
  
  
  
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
  
//=============================== Connector MArker Implementation ==========================================================

// Fetch connectors with their location and chargepoint data
const Task_5_Connectors = async () => {
  try {
    const apiUrl = '/api/connector/';
    const query = {
      fields: ['uuid', 'connectorid', 'availability_status', 'connector_status', 'standard', 'format', 'power_type', 'charging_profile', 'tariff_history', 'capacity_history', 'evse_id', 'chargepoint', 'tariff_ids']
    };

    const queryString = new URLSearchParams(query).toString();
    const fullApiUrl = `${apiUrl}?${queryString}`;
    //console.log('Task5 Connectors URL:', fullApiUrl);

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token.value}`,
      },
    };

    const response = await fetch(fullApiUrl, requestOptions);
    const connectorsData = await response.json();
    
    // 🔧 FIX: Group connectors by UUID first to avoid duplicates
    const connectorMap = new Map();
    
    connectorsData.forEach(connector => {
      const uuid = connector.uuid;
      
      if (connectorMap.has(uuid)) {
        // Merge tariff_ids if connector already exists
        const existingConnector = connectorMap.get(uuid);
        
        // Ensure tariff_ids is always an array
        if (!Array.isArray(existingConnector.tariff_ids)) {
          existingConnector.tariff_ids = existingConnector.tariff_ids ? [existingConnector.tariff_ids] : [];
        }
        
        // Add new tariff IDs if they don't already exist
        if (connector.tariff_ids) {
          const newTariffs = Array.isArray(connector.tariff_ids) ? connector.tariff_ids : [connector.tariff_ids];
          newTariffs.forEach(tariffId => {
            if (!existingConnector.tariff_ids.includes(tariffId)) {
              existingConnector.tariff_ids.push(tariffId);
            }
          });
        }
        
        // Also merge charging_profile if present
        if (connector.charging_profile) {
          if (!Array.isArray(existingConnector.charging_profile)) {
            existingConnector.charging_profile = existingConnector.charging_profile ? [existingConnector.charging_profile] : [];
          }
          
          const newProfiles = Array.isArray(connector.charging_profile) ? connector.charging_profile : [connector.charging_profile];
          newProfiles.forEach(profileId => {
            if (!existingConnector.charging_profile.includes(profileId)) {
              existingConnector.charging_profile.push(profileId);
            }
          });
        }
      } else {
        // First time seeing this connector
        const connectorCopy = { ...connector };
        
        // Ensure tariff_ids is always an array
        if (connectorCopy.tariff_ids && !Array.isArray(connectorCopy.tariff_ids)) {
          connectorCopy.tariff_ids = [connectorCopy.tariff_ids];
        } else if (!connectorCopy.tariff_ids) {
          connectorCopy.tariff_ids = [];
        }
        
        // Ensure charging_profile is always an array
        if (connectorCopy.charging_profile && !Array.isArray(connectorCopy.charging_profile)) {
          connectorCopy.charging_profile = [connectorCopy.charging_profile];
        } else if (!connectorCopy.charging_profile) {
          connectorCopy.charging_profile = [];
        }
        
        connectorMap.set(uuid, connectorCopy);
      }
    });
    
    // Convert Map back to array - this gives us unique connectors
    const uniqueConnectors = Array.from(connectorMap.values());
    
    // Now fetch chargepoint and location data for each unique connector
    const enrichedConnectors = await Promise.all(
      uniqueConnectors.map(async (connector) => {
        try {
          // Fetch chargepoint data
          const chargepointResponse = await fetch(
            `/api/chargepoint/${connector.chargepoint}/`,
            { headers: requestOptions.headers }
          );
          const chargepointData = await chargepointResponse.json();
          //console.log("chargepointData", chargepointData);
          
          // Fetch location data
          const locationResponse = await fetch(
            `/api/location/${chargepointData.location.id}/`,
            { headers: requestOptions.headers }
          );
          const locationData = await locationResponse.json();
          
          return {
            ...connector,
            chargepoint_data: chargepointData,
            location_data: locationData
          };
        } catch (error) {
          console.error(`Error enriching connector ${connector.uuid}:`, error);
          return connector; // Return original connector if enrichment fails
        }
      })
    );

    Task_5_connectors.value = enrichedConnectors;
    //console.log("Task5_connectors_values (unique):", Task_5_connectors.value);

  } catch (error) {
    console.error('An error occurred:', error.message);
    return null;
  }
};

// Add reactive reference for connectors
const Task_5_connectors = ref([]);

// Group connectors by coordinates for clustering
const groupConnectorsByCoordinates = computed(() => {
  if (!Task_5_connectors.value || Task_5_connectors.value.length === 0) {
    return [];
  }

  const clusters = [];
  const processed = new Set();
  const threshold = 0.000100; // ±0.000100 lat/lon clustering threshold

  Task_5_connectors.value.forEach((connector, index) => {
    if (processed.has(index)) return;

    // Start a new cluster with this connector
    const cluster = {
      coordinates: connector.location_data.coordinates,
      location_data: connector.location_data,
      connectors: [connector]
    };

    // Find all other connectors within threshold
    Task_5_connectors.value.forEach((otherConnector, otherIndex) => {
      if (index !== otherIndex && !processed.has(otherIndex)) {
        const latDiff = Math.abs(
          connector.location_data.coordinates.latitude - 
          otherConnector.location_data.coordinates.latitude
        );
        const lonDiff = Math.abs(
          connector.location_data.coordinates.longitude - 
          otherConnector.location_data.coordinates.longitude
        );

        // If within threshold, add to cluster
        if (latDiff <= threshold && lonDiff <= threshold) {
          cluster.connectors.push(otherConnector);
          processed.add(otherIndex);
        }
      }
    });

    processed.add(index);
    clusters.push(cluster);
  });

  return clusters;
});


const getConnectorMarkerIcon = (connectorGroup) => {
  if (!connectorGroup || !connectorGroup.connectors || connectorGroup.connectors.length === 0) {
    // console.warn('Invalid connector group for icon generation');
    return getDefaultIcon();
  }
  
  const connectorCount = connectorGroup.connectors.length;
  
  // Count available connectors
  const availableCount = connectorGroup.connectors.filter(c => 
    c.connector_status === 'Available' && c.availability_status === 'Operative'
  ).length;
  
  // Determine marker color based on availability
  let markerColor;
  let badgeText;
  let badgeColor;
  
  if (availableCount === connectorCount) {
    // All available - green
    markerColor = '#28a745';
    badgeText = connectorCount;
    badgeColor = '#28a745';
  } else if (availableCount > 0) {
    // Some available - blue/cyan
    markerColor = '#17a2b8';
    badgeText = availableCount; // Show only available count
    badgeColor = '#28a745'; // Green badge for available
  } else {
    // None available - orange
    markerColor = '#fd7e14';
    badgeText = '0';
    badgeColor = '#fd7e14'; // Orange badge
  }
  
  // Create marker HTML
  const markerHTML = `
    <div style="position: relative; display: inline-block;">
      <svg width="32" height="42" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 8.837 16 26 16 26s16-17.163 16-26C32 7.163 24.837 0 16 0z" 
              fill="${markerColor}" stroke="#fff" stroke-width="2"/>
        <circle cx="16" cy="16" r="6" fill="#fff"/>
      </svg>
      <div style="
        position: absolute;
        top: -6px;
        right: -6px;
        background-color: ${badgeColor};
        color: white;
        border-radius: 50%;
        min-width: 22px;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: bold;
        border: 2px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.4);
        font-family: Arial, sans-serif;
        padding: 0 4px;
      ">
        ${availableCount}/${connectorCount}
      </div>
    </div>
  `;
  
  return L.divIcon({
    html: markerHTML,
    className: 'custom-cluster-marker',
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -42]
  });
};

// Helper function for default icon
const getDefaultIcon = () => {
  return new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

// Force marker update function (for debugging)
const forceUpdateAllMarkers = () => {
  //console.log('Force updating all markers...');
  renderConnectorMarkers();
};

// Debug function to check connector data
const debugConnectorData = () => {
  //console.log('Current connector data:', Task_5_connectors.value);
  //console.log('Grouped connectors:', groupConnectorsByCoordinates.value);
  //console.log('Marker references:', markerRefs.value);
};


//=============================== Connector MArker Implementation ==========================================================





    const Task_5 = async () => {
      try {
  
        //Connection with BackEnd
        // Define the API URL and query parameters
  
        const apiUrl = '/api/chargepoint/';
  
        const query = {   // Key-value pair for the query parameter
          fields: ['location__coordinates,location__city,chargepoint_status,location__address,location__id']
        };
  
        const queryString = new URLSearchParams(query).toString();
        const fullApiUrl = `${apiUrl}?${queryString}`;
        //console.log('Task5 URL:', fullApiUrl)
  
  
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
        Task_5_locations.value = data
        //console.log("Task5_values", Task_5_locations);
  
  
      } catch (error) {
        console.error('HEY! An error occurred:', error.message);
        return null; // Return null in case of error
      }
    };
  
    // Define a constant to hold the marker address
    let markerAddress = ref('');

// =========================== Initialize Map and connectors =======================================================================



    // Replace the existing initializeMap function
const initializeMap = async () => {
  try {
    // Initialize map with initial zoom and center
    mapObject.value = L.map(mapId, {
      zoom: zoom,
      center: center,
    });

    // Add OpenStreetMap tile layer
    L.tileLayer(osmUrl, {
      attribution: attribution,
    }).addTo(mapObject.value);

    //console.log("Map initialized successfully");

    // Render connector markers
    renderConnectorMarkers();

    // Listen for clicks on the map to update input fields
    mapObject.value.on('click', (e) => {
      updateInputFields(e.latlng);
    });

  } catch (error) {
    console.error("An error occurred during map initialization:", error);
  }
};


// Store marker references for updates
const markerRefs = ref(new Map());

// Render connector markers grouped by coordinates
// Enhanced renderConnectorMarkers function with better error handling

// Updated createConnectorPopupContent function
// Function to get current capacity (kW) from capacity_history
const getCurrentCapacity = (capacityHistory) => {
  if (!capacityHistory || typeof capacityHistory !== 'object') {
    //console.log('⚠️ No capacity history available');
    return null;
  }
  
  // Get current time
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  
  // Convert current time to total minutes since midnight
  const currentTotalMinutes = currentHours * 60 + currentMinutes;
  
  //console.log(`🕐 Current time: ${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}`);
  
  // Find the appropriate time slot
  for (const [timeSlot, capacity] of Object.entries(capacityHistory)) {
    // Parse time slot (e.g., "12:00-12:05")
    const [startTime, endTime] = timeSlot.split('-');
    
    // Parse start time
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const startTotalMinutes = startHours * 60 + startMinutes;
    
    // Parse end time
    const [endHours, endMinutes] = endTime.split(':').map(Number);
    const endTotalMinutes = endHours * 60 + endMinutes;
    
    // Check if current time falls within this slot
    if (currentTotalMinutes >= startTotalMinutes && currentTotalMinutes < endTotalMinutes) {
      //console.log(`⚡ Current capacity slot: ${timeSlot}, Capacity: ${capacity} kW`);
      return {
        timeSlot: timeSlot,
        capacity: capacity,
        currentTime: `${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}`
      };
    }
  }
  
  //console.log('⚠️ No matching capacity slot found for current time');
  return null;
};

const getCurrentTariff = (tariffHistory) => {
  if (!tariffHistory || typeof tariffHistory !== 'object') {
    //console.log('⚠️ No tariff history available');
    return null;
  }
  
  // Get current time
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  
  // Convert current time to total minutes since midnight
  const currentTotalMinutes = currentHours * 60 + currentMinutes;
  
  //console.log(`🕐 Current time: ${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}`);
  
  // Find the appropriate time slot
  for (const [timeSlot, tariff] of Object.entries(tariffHistory)) {
    // Parse time slot (e.g., "12:00-12:05")
    const [startTime, endTime] = timeSlot.split('-');
    
    // Parse start time
    const [startHours, startMinutes] = startTime.split(':').map(Number);
    const startTotalMinutes = startHours * 60 + startMinutes;
    
    // Parse end time
    const [endHours, endMinutes] = endTime.split(':').map(Number);
    const endTotalMinutes = endHours * 60 + endMinutes;
    
    // Check if current time falls within this slot
    if (currentTotalMinutes >= startTotalMinutes && currentTotalMinutes < endTotalMinutes) {
      //console.log(`💰 Current tariff slot: ${timeSlot}, Tariff: ${tariff} €/kWh`);
      return {
        timeSlot: timeSlot,
        tariff: tariff,
        currentTime: `${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}`
      };
    }
  }
  
  //console.log('⚠️ No matching tariff slot found for current time');
  return null;
};

// Helper function to get status emoji and description
const getStatusInfo = (status) => {
  const statusInfo = {
    'Available': { emoji: '✅', description: 'Ready to charge' },
    'Preparing': { emoji: '🔄', description: 'Preparing to charge' },
    'Charging': { emoji: '⚡', description: 'Charging in progress' },
    'SuspendedEVSE': { emoji: '⏸️', description: 'Paused by station' },
    'SuspendedEV': { emoji: '⏸️', description: 'Paused by vehicle' },
    'Finishing': { emoji: '🏁', description: 'Completing session' },
    'Reserved': { emoji: '🔒', description: 'Reserved' },
    'Unavailable': { emoji: '🚫', description: 'Not available' },
    'Faulted': { emoji: '⚠️', description: 'Error - needs attention' }
  };
  
  return statusInfo[status] || { emoji: '❓', description: 'Unknown status' };
};

// Updated createConnectorPopupContent function
const createConnectorPopupContent = (connectorGroup) => {
  const connectorCount = connectorGroup.connectors.length;
  const locationData = connectorGroup.location_data;
  
  // Calculate availability statistics
  const availableCount = connectorGroup.connectors.filter(c => 
    c.connector_status === 'Available' && c.availability_status === 'Operative'
  ).length;
  const chargingCount = connectorGroup.connectors.filter(c => 
    c.connector_status === 'Charging'
  ).length;
  const preparingCount = connectorGroup.connectors.filter(c => 
    c.connector_status === 'Preparing'
  ).length;
  const finishingCount = connectorGroup.connectors.filter(c => 
    c.connector_status === 'Finishing'
  ).length;
  const faultedCount = connectorGroup.connectors.filter(c => 
    c.connector_status === 'Faulted'
  ).length;
  
  // Check if all connectors have the same city
  const uniqueCities = [...new Set(connectorGroup.connectors.map(c => c.location_data.city))];
  const hasDifferentCities = uniqueCities.length > 1;
  
  // Determine header color based on availability
  let headerGradient;
  if (availableCount === connectorCount) {
    headerGradient = 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)'; // Green
  } else if (availableCount > 0) {
    headerGradient = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'; // Blue
  } else {
    headerGradient = 'linear-gradient(135deg, #868f96 0%, #596164 100%)'; // Gray
  }
  
  let popupHTML = `
    <div style="max-width: 360px; font-size: 12px;">
      <div style="margin-bottom: 8px; padding: 8px; background: ${headerGradient}; border-radius: 4px; color: white;">
        ${hasDifferentCities ? `

        ` : `
          <strong style="font-size: 14px; display: block; margin-bottom: 4px;">${locationData.city}</strong>
          <span style="font-size: 11px; opacity: 0.95; display: block; margin-bottom: 6px;">${locationData.address}</span>
        `}
        
        <!-- Availability summary -->
        <div style="display: flex; gap: 6px; margin-top: 8px; flex-wrap: wrap;">
          <div style="
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 3px 10px;
            background-color: ${availableCount > 0 ? 'rgba(74, 222, 128, 0.3)' : 'rgba(255, 255, 255, 0.15)'};
            border-radius: 12px;
            font-size: 11px;
            font-weight: bold;
            backdrop-filter: blur(10px);
            border: 1px solid ${availableCount > 0 ? 'rgba(74, 222, 128, 0.5)' : 'rgba(255, 255, 255, 0.3)'};
          ">
            <span style="color: ${availableCount > 0 ? '#4ade80' : '#d1d5db'};">●</span> ${availableCount} Available
          </div>
          ${chargingCount > 0 ? `
            <div style="
              display: inline-flex;
              align-items: center;
              gap: 4px;
              padding: 3px 10px;
              background-color: rgba(251, 191, 36, 0.3);
              border-radius: 12px;
              font-size: 11px;
              font-weight: bold;
              border: 1px solid rgba(251, 191, 36, 0.5);
            ">
              <span style="color: #fbbf24;">●</span> ${chargingCount} Charging
            </div>
          ` : ''}
          ${preparingCount > 0 ? `
            <div style="
              display: inline-flex;
              align-items: center;
              gap: 4px;
              padding: 3px 10px;
              background-color: rgba(96, 165, 250, 0.3);
              border-radius: 12px;
              font-size: 11px;
              font-weight: bold;
              border: 1px solid rgba(96, 165, 250, 0.5);
            ">
              <span style="color: #60a5fa;">●</span> ${preparingCount} Preparing
            </div>
          ` : ''}
          ${finishingCount > 0 ? `
            <div style="
              display: inline-flex;
              align-items: center;
              gap: 4px;
              padding: 3px 10px;
              background-color: rgba(23, 162, 184, 0.3);
              border-radius: 12px;
              font-size: 11px;
              font-weight: bold;
              border: 1px solid rgba(23, 162, 184, 0.5);
            ">
              <span style="color: #17a2b8;">●</span> ${finishingCount} Finishing
            </div>
          ` : ''}
          ${faultedCount > 0 ? `
            <div style="
              display: inline-flex;
              align-items: center;
              gap: 4px;
              padding: 3px 10px;
              background-color: rgba(239, 68, 68, 0.3);
              border-radius: 12px;
              font-size: 11px;
              font-weight: bold;
              border: 1px solid rgba(239, 68, 68, 0.5);
            ">
              <span style="color: #ef4444;">●</span> ${faultedCount} Faulted
            </div>
          ` : ''}
        </div>
      </div>
  `;

  // Individual connector details - each with its own city
  connectorGroup.connectors.forEach((connector, index) => {
    const statusColor = getStatusColor(connector.connector_status);
    const statusInfo = getStatusInfo(connector.connector_status);
    const availabilityStatusColor = getAvailabilityStatusColor(connector.availability_status);
    
    const currentCapacityInfo = getCurrentCapacity(connector.capacity_history);
    const currentCapacityDisplay = currentCapacityInfo 
      ? `<div style="color: #28a745; font-size: 13px; font-weight: bold; margin-top: 2px;">
           ⚡ ${currentCapacityInfo.capacity / 1000} kW
         </div>`
      : '';

    const currentTariffInfo = getCurrentTariff(connector.tariff_history);
    const currentTariffDisplay = currentTariffInfo
      ? `<div style="color: #007bff; font-size: 13px; font-weight: bold; margin-top: 2px;">
           💶 ${currentTariffInfo.tariff} €/kWh
          </div>`
      : '';

    popupHTML += `
      <div style="
        margin: 4px 0; 
        padding: 8px; 
        border-left: 4px solid ${statusColor};
        border-radius: 4px; 
        background-color: ${index % 2 === 0 ? '#f9f9f9' : '#ffffff'};
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      ">
        <!-- City header for each connector -->
        <div style="
          background-color: #e3f2fd;
          padding: 4px 8px;
          border-radius: 3px;
          margin-bottom: 6px;
          border-left: 3px solid #2196F3;
        ">
          <div style="font-weight: bold; font-size: 11px; color: #1976D2;">
            📍 ${connector.location_data.city}
          </div>
          <div style="font-size: 9px; color: #555; margin-top: 2px;">
            ${connector.location_data.address}
          </div>
        </div>
        
        <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
          <div style="flex: 1; min-width: 0;">
            <div style="font-weight: bold; font-size: 12px; margin-bottom: 3px;">
              Connector #${connector.connectorid}
            </div>
            <div style="font-size: 11px; margin-bottom: 2px;">
              <span style="
                display: inline-block;
                padding: 2px 8px;
                background-color: ${statusColor};
                color: white;
                border-radius: 12px;
                font-weight: 600;
                font-size: 10px;
              ">
                ${statusInfo.emoji} ${connector.connector_status}
              </span>
              <span style="
                display: inline-block;
                margin-left: 4px;
                padding: 2px 6px;
                background-color: ${availabilityStatusColor};
                color: white;
                border-radius: 12px;
                font-weight: 600;
                font-size: 9px;
              ">
                ${connector.availability_status}
              </span>
            </div>
            <div style="font-size: 10px; color: #6c757d; font-style: italic; margin-top: 2px;">
              ${statusInfo.description}
            </div>
            ${currentCapacityDisplay}
            ${currentTariffDisplay}
          </div>
          <div style="display: flex; gap: 3px; flex-shrink: 0; flex-direction: column;">
            <div style="display: flex; gap: 3px;">
              <button 
                onclick="selectConnectorForRoute('${connector.uuid}')" 
                style="
                  padding: 4px 8px; 
                  background-color: #007bff; 
                  color: white; 
                  border: none; 
                  border-radius: 3px;
                  cursor: pointer;
                  font-size: 10px;
                  white-space: nowrap;
                  font-weight: 600;
                "
                title="Select for Route"
              >
                Route
              </button>
              <button 
                onclick="showConnectorStats('${connector.uuid}')" 
                style="
                  padding: 4px 8px; 
                  background-color: #17a2b8; 
                  color: white; 
                  border: none; 
                  border-radius: 3px;
                  cursor: pointer;
                  font-size: 10px;
                  white-space: nowrap;
                  font-weight: 600;
                "
                title="Show Statistics"
              >
                Stats
              </button>
            </div>
            ${(connector.availability_status === 'Operative' && 
               (connector.connector_status === 'Available' || connector.connector_status === 'Preparing') && 
                Task_14_response.value[0].credit_balance > 0) ? 
              `<button 
                onclick="startChargingFromPopup('${connector.uuid}')"
                style="
                  padding: 4px 8px; 
                  background-color: #28a745; 
                  color: white; 
                  border: none; 
                  border-radius: 3px;
                  cursor: pointer;
                  font-size: 10px;
                  white-space: nowrap;
                  font-weight: 600;
                  width: 100%;
                "
                title="Start Charging"
              >
                Start
              </button>` : 
              `<button 
                disabled
                style="
                  padding: 4px 8px; 
                  background-color: #6c757d; 
                  color: white; 
                  border: none; 
                  border-radius: 3px;
                  cursor: not-allowed;
                  font-size: 10px;
                  white-space: nowrap;
                  font-weight: 600;
                  opacity: 0.6;
                  width: 100%;
                "
                title="Unavailable"
              >
                N/A
              </button>`
            }
          </div>
        </div>
      </div>
    `;
  });
  
  popupHTML += `</div>`;
  return popupHTML;
};



// Helper function to get availability status color
const getAvailabilityStatusColor = (availabilityStatus) => {
  switch (availabilityStatus) {
    case 'Operative': return '#28a745';
    case 'Inoperative': return '#dc3545';
    default: return '#6c757d';
  }
};

// New global function for showing connector statistics
window.showConnectorStats = (connectorUuid) => {
  const connector = Task_5_connectors.value.find(c => c.uuid === connectorUuid);
  if (connector) {
    selectedConnectorForRouting.value = connector;
    
    //console.log('Selected connector for statistics:', selectedConnectorForRouting.value);
    
    // Load historical data for statistics
    const Capacity_history_list = Object.assign({}, connector.capacity_history || {});
    const Tariff_history_list = Object.assign({}, connector.tariff_history || {});
    
    if (Object.keys(Capacity_history_list).length > 0 || Object.keys(Tariff_history_list).length > 0) {
      loadConnectorHistoricalData(Capacity_history_list, Tariff_history_list);
    }
    
    // Close the popup after selection
    mapObject.value.closePopup();
    
    //console.log(`Statistics loaded for connector ${connector.connectorid}`);
  }
};

// Helper function to get status color
const getStatusColor = (status) => {
  switch (status) {
    case 'Available': return '#28a745';      // Green - Ready for use
    case 'Preparing': return '#007bff';      // Blue - Getting ready
    case 'Charging': return '#dc3545';       // Red - Currently charging
    case 'SuspendedEVSE': return '#fd7e14';  // Orange - Paused by station
    case 'SuspendedEV': return '#ffc107';    // Yellow - Paused by vehicle
    case 'Finishing': return '#17a2b8';      // Cyan - Completing session
    case 'Reserved': return '#6f42c1';       // Purple - Reserved
    case 'Unavailable': return '#6c757d';    // Gray - Not available
    case 'Faulted': return '#343a40';        // Dark gray - Error
    default: return '#adb5bd';               // Light gray - Unknown
  }
};

// Updated handleConnectorMarkerClick - remove address input logic
const handleConnectorMarkerClick = (connectorGroup, latlng) => {
  // Only update marker address for reference, don't update input fields
  markerAddress.value = connectorGroup.location_data.city;
  
  // Clear any existing graph data when clicking on marker (not connector)
  hide_tariff_graph();
  hide_capacity_graph();
  
  //console.log('Marker clicked at:', connectorGroup.location_data.city);
  // Removed updateInputFields(latlng) call
};

// Global functions for popup buttons (need to be accessible from popup HTML)
window.selectConnectorForRoute = (connectorUuid) => {
  const connector = Task_5_connectors.value.find(c => c.uuid === connectorUuid);
  if (connector) {
    selectedConnectorForRouting.value = connector;
    
    //console.log('Selected connector for routing:', selectedConnectorForRouting.value);
    
    // Load historical data if available
    const Capacity_history_list = Object.assign({}, connector.capacity_history || {});
    const Tariff_history_list = Object.assign({}, connector.tariff_history || {});
    
    if (Object.keys(Capacity_history_list).length > 0 || Object.keys(Tariff_history_list).length > 0) {
      loadConnectorHistoricalData(Capacity_history_list, Tariff_history_list);
    }
    
    // Update routing input fields with connector location
    const coords = connector.location_data.coordinates;
    updateInputFields(L.latLng(coords.latitude, coords.longitude));
    
    // Show success message
    //console.log(`Connector ${connector.connectorid} selected for routing`);
    
    // Optional: Close the popup after selection
    mapObject.value.closePopup();
  }
};

// Updated global function for starting charging with better error handling
window.startChargingFromPopup = async (connectorUuid) => {
  const connector = Task_5_connectors.value.find(c => c.uuid === connectorUuid);
  if (connector && connector.availability_status === 'Operative' && (connector.connector_status === 'Available' || connector.connector_status === 'Preparing')) {
    try {
      //console.log(`Starting charging for connector ${connector.connectorid}`);
      

      // Get user's primary ID token
      const userIdToken = getPrimaryIdToken();
      if (!userIdToken) {
        show_Start_Charging_Notification("No valid ID token found. Please check your charging cards.");
        return;
      }

      // Use the existing Test_Charging_Start function which is proven to work
      const query = {
        chargepoint_id: connector.chargepoint_data.chargepoint_id,
        sync: true,
        connector_id: connector.connectorid,
        id_tag: userIdToken  
      };

      //console.log("Starting charging with query:", query);
      const apiUrl = `/api/ocpp16/remotestarttransaction/`;

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token.value}`,
        },
        body: JSON.stringify(query)
      };

      const response = await fetch(apiUrl, requestOptions);
      const result = await response.json();
      
      //console.log("Charging start response:", result);
      
      // Check for successful response (don't throw error if transaction actually started)
      if (result) {
        // Update UI regardless of status message
        show_Start_Charging_Notification("Charging command sent successfully!");
        Test_Charging_Operation(); // Refresh connector data
        
        // Close the popup after successful start
        mapObject.value.closePopup();
        
        //console.log("Charging initiated successfully for connector:", connector.connectorid);
      }

      //#ADMIN#
      const isAdmin = Task_14_response.value && Task_14_response.value.length > 0 && 
                       Task_14_response.value[0].user__is_superuser;
        
        if (!isAdmin){

          await loadMyActiveSessions();
        }
      
    } catch (error) {
      console.error('Failed to start charging:', error);
      show_Start_Charging_Notification("Failed to start charging. Please try again.");
    }
  } else {
    console.warn('Connector not available for charging:', connector?.connector_status);
    show_Start_Charging_Notification("Connector is not available for charging.");
  }
};


// Add reactive reference for selected connector
const selectedConnectorForRouting = ref(null);
// Enhanced render markers function with bounds filtering
// Enhanced render markers function with better error handling
const renderConnectorMarkers = () => {
  //console.log('Starting renderConnectorMarkers...');
  
  // Multiple checks for map availability
  if (!mapObject.value) {
    console.warn('Map object not available - aborting marker rendering');
    return false;
  }

  // Verify map is properly initialized
  if (!mapObject.value._container) {
    console.warn('Map container not available - aborting marker rendering');
    return false;
  }

  try {
    // Clear existing markers safely
    //console.log('Clearing existing markers...');
    markerRefs.value.forEach((markerData, key) => {
      if (markerData && markerData.marker) {
        try {
          // Double-check map still exists before removing
          if (mapObject.value && typeof mapObject.value.removeLayer === 'function') {
            mapObject.value.removeLayer(markerData.marker);
          }
        } catch (removeError) {
          console.warn(`Error removing marker ${key}:`, removeError);
        }
      }
    });
    markerRefs.value.clear();

    if (!groupConnectorsByCoordinates.value || groupConnectorsByCoordinates.value.length === 0) {
      console.warn('No connector groups available for rendering');
      return false;
    }

    //console.log(`Rendering ${groupConnectorsByCoordinates.value.length} connector groups...`);

    let successCount = 0;
    let errorCount = 0;

    groupConnectorsByCoordinates.value.forEach((connectorGroup, index) => {
      try {
        // Validate connector group
        if (!connectorGroup || !connectorGroup.coordinates) {
          console.warn(`Invalid connector group at index ${index}`);
          errorCount++;
          return;
        }

        const coords = connectorGroup.coordinates;
        
        if (typeof coords.latitude !== 'number' || typeof coords.longitude !== 'number') {
          console.warn(`Invalid coordinates at index ${index}:`, coords);
          errorCount++;
          return;
        }

        // Check if within range if range filter is active
        if (range_checkbox.value && chargepoint_distance.value > 0) {
          if (!lat_geo.value || !lon_geo.value) {
            console.warn('User location not available for range filtering');
            return;
          }
          
          const temp_distance = haversine(lat_geo.value, lon_geo.value, coords.latitude, coords.longitude);
          if (temp_distance > chargepoint_distance.value) {
            return; // Skip this connector group if outside range
          }
        }
        
        // Final check before creating marker
        if (!mapObject.value || !mapObject.value._container) {
          console.warn('Map became unavailable during rendering');
          return false;
        }

        const markerIcon = getConnectorMarkerIcon(connectorGroup);
        
        // Create marker with additional safety
        const marker = L.marker([coords.latitude, coords.longitude], { icon: markerIcon });
        
        // Verify marker was created successfully
        if (!marker) {
          console.warn(`Failed to create marker at index ${index}`);
          errorCount++;
          return;
        }

        // Add to map with final check
        if (mapObject.value && typeof mapObject.value.addLayer === 'function') {
          marker.addTo(mapObject.value);
        } else {
          console.warn('Cannot add marker - map not available');
          errorCount++;
          return;
        }

        // Store marker reference
        markerRefs.value.set(`group_${index}`, {
          marker: marker,
          connectorGroup: connectorGroup
        });

        // Create popup content
        const popupContent = createConnectorPopupContent(connectorGroup);
        marker.bindPopup(popupContent);

        // Add click handler
        marker.on('click', (e) => {
          handleConnectorMarkerClick(connectorGroup, e.latlng);
        });

        successCount++;
        //console.log(`✓ Marker ${index} created successfully for ${connectorGroup.location_data?.city || 'Unknown'}`);
        
      } catch (error) {
        console.error(`✗ Error rendering marker ${index}:`, error);
        errorCount++;
      }
    });
    
    //console.log(`Marker rendering complete: ${successCount} success, ${errorCount} errors`);
    return successCount > 0;
    
  } catch (error) {
    console.error('Critical error in renderConnectorMarkers:', error);
    return false;
  }
};





// Fixed function to update a specific marker based on connector changes
const updateMarkerForConnector = (connectorUuid) => {
  //console.log('Updating marker for connector:', connectorUuid);
  
  // Find which group this connector belongs to
  let targetGroupIndex = -1;
  let targetGroup = null;
  
  groupConnectorsByCoordinates.value.forEach((group, index) => {
    if (group.connectors.some(c => c.uuid === connectorUuid)) {
      targetGroupIndex = index;
      targetGroup = group;
    }
  });
  
  if (targetGroupIndex !== -1 && targetGroup) {
    //console.log(`Found connector in group ${targetGroupIndex}`);
    
    const markerRef = markerRefs.value.get(`group_${targetGroupIndex}`);
    
    if (markerRef) {
      //console.log('Updating marker icon and popup...');
      
      // Update marker icon based on new status
      const newIcon = getConnectorMarkerIcon(targetGroup);
      markerRef.marker.setIcon(newIcon);
      
      // Update popup content
      const newPopupContent = createConnectorPopupContent(targetGroup);
      markerRef.marker.setPopupContent(newPopupContent);
      
      // Update the stored connector group reference
      markerRef.connectorGroup = targetGroup;
      
      //console.log(`Successfully updated marker for connector group ${targetGroupIndex}`);
    } else {
      console.warn(`Marker reference not found for group ${targetGroupIndex}`);
      // If marker reference is missing, re-render all markers
      //console.log('Re-rendering all markers due to missing reference...');
      renderConnectorMarkers();
    }
  } else {
    console.warn('Connector group not found for UUID:', connectorUuid);
  }
};

// Enhanced clear function to work with connectors
// Enhanced clear function to work with connectors
const clearRouting = () => {
  //console.log('Starting clearRouting...');
  
  // Check if map exists before proceeding
  if (!mapObject.value) {
    console.warn('Map object not available for clearRouting');
    return;
  }

  try {
    if (routingControl.value) {
      mapObject.value.removeControl(routingControl.value);
      routingControl.value = null;
    }

    // Clear only routing-related markers, keep connector markers
    mapObject.value.eachLayer(layer => {
      if (layer instanceof L.Marker && 
          !layer._icon?.classList?.contains('current-location-marker') &&
          !isConnectorMarker(layer)) {
        mapObject.value.removeLayer(layer);
      }
    });

    // Reset input values
    startLat.value = '';
    startLng.value = '';
    endLat.value = '';
    endLng.value = '';

    // Clear selected connector and graphs
    selectedConnectorForRouting.value = null;
    hide_tariff_graph();
    hide_capacity_graph();

    // DON'T re-render markers immediately - use a safer approach
    //console.log('clearRouting completed successfully');
    
  } catch (error) {
    console.error('Error in clearRouting:', error);
  }
};

const isConnectorMarker = (marker) => {
  try {
    // Check if this marker is in our connector marker references
    for (const [key, markerData] of markerRefs.value) {
      if (markerData && markerData.marker === marker) {
        return true;
      }
    }
    return false;
  } catch (error) {
    console.warn('Error checking if marker is connector marker:', error);
    return false;
  }
};

// =================== Windy MAp ============================================================
  
    const initializeWindyMap = async () => {
      const windyOptions = {
        key: 'irNhW2wlLWeKezbXjPxWcxwtv9WwxYPm', // Replace with your Windy API key
        verbose: true,
        lat: center[0],
        lon: center[1],
        zoom: 5,
      };
  
      windyInit(windyOptions, windyAPI => {
        mapObjectWindy.value = windyAPI.map;
        //console.log("Windy Map initialized successfully");
      });
    };
  
    //let isChecked= ref(true);
    let selectedTab = ref('chargepoint');
  
  
    // Function to dynamically add or remove CSS file
    const toggleCSS = () => {
      const cssFileUrl = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'; // Replace with your CSS file URL
      const linkId = 'dynamic-css'; // Unique ID for the link element
  
      // Check if the CSS file is already loaded
      let linkElement = document.getElementById(linkId);
  
      if (selectedTab.value === 'chargepoint' && !linkElement) {
        // Create a new link element
        linkElement = document.createElement('link');
        linkElement.id = linkId;
        linkElement.rel = 'stylesheet';
        linkElement.href = cssFileUrl;
  
        // Append the link element to the head
        document.head.appendChild(linkElement);
        //console.log(`CSS file ${cssFileUrl} loaded.`);
        setTimeout(initializeMap, 0);
        //initializeMap();
      } else if (selectedTab.value === 'weather' && linkElement) {
        document.head.removeChild(linkElement);
        //console.log(`CSS file ${cssFileUrl} unloaded.`);
        if (mapObject.value) {
          mapObject.value.remove();
        }
        initializeWindyMap();
      }
    };
  
// Update your showMap function
const showMap = async (mapType) => {
  // console.log(`🗺️ Switching to ${mapType} map...`);
  selectedTab.value = mapType;
  await toggleCSS();
};
  
  
  
  
    const clearRouting_old = () => {
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
          .bindPopup(`<div>
                          <strong>City:</strong> ${location.location__city}<br>
                          <strong>Address:</strong> ${location.location__address}<br>
                          <strong>Number of Sockets:</strong> 4<br>
                          <strong>Sockets Power:</strong> 22kW<br>
                        </div>`);
  
        marker.on('click', (e) => {
          updateInputFields(e.latlng);
          markerAddress.value = location.location__city; // Save the marker address
          //console.log('Marker address:', markerAddress);

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
  
      //Removing Circle for good rendering
      if (circleLayer !== null) {
        circleLayer.remove();
        circleLayer = null;
      }
  
  
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
            //console.log("Returning ", [waypoint.latLng, { icon: markerIcon }])
  
  
            return L.marker(waypoint.latLng, { icon: markerIcon });
          }
        }).addTo(mapObject.value);
      }
      //console.log("routingControl", routingControl)
  
  
  
  
  
  
  
      // Listen for the routesfound event
      routingControl.value.on('routesfound', function (e) {
        routes_info.value = e.routes;
        //console.log("routes_array", routes_info.value);
        //console.log("size_of_routes", routes_info.value.length)
        ////console.log(routes_info.value);
      });
  
    };
  
  
  
    const handleClear = () => {
      clearRouting();
      startAddress.value = '';
      destinationAddress.value = '';
      if (circleLayer !== null) {
        circleLayer.remove();
        circleLayer = null;
        chargepoint_distance.value = 0;
      }
      markerAddress.value = '';
      hide_tariff_graph();
      hide_capacity_graph();
  
      if (routes_info.value.length > 0) { // Check if the array is not empty
        routes_info.value = []; // Clear the array
      }
      kw_checkbox.value = false;
      selectedStartOption.value = 0;
      selectedDestinationOption.value = 0;
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
          } else if (endLat.value && startLat.value) {
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
  
    // PROVIDER===================================
    // Initialize the provider
    // const provider = new EsriProvider();


    const provider = new OpenStreetMapProvider({
          params: {
            'accept-language': 'el,en', // Greek and English
            addressdetails: 1,
            limit: 2
            // Don't add countrycodes - this allows global search
          },
        });

    // const provider = new LocationIQProvider();
     
    //const provider = new OpenStreetMapProvider();
  
  
  
    // Watch the startAddress ref for changes
    watch(startAddress, (newValue) => {
      searchStartAddresses(newValue);
  
    });
  
    // Function to search for addresses
    const searchStartAddresses = async (query) => {
      if (selectedStartOption.value === 0) {
        if (query.length > 2) {
          const results = await provider.search({ query });
          startAddressResults.value = results;
        } else {
          startAddressResults.value = [];
        }
      }
    };
  
  
    // Function to select an address from the dropdown
    const select_Start_Address = (address) => {
      //console.log("Selected_address", address.label)
      startAddress.value = address.label; // Update inputRef directly
      startAddressResults.value = []; // Clear results
      selectedStartOption.value = 1; // Update selected option
    };
  
    // Function to clear the input field
    const clearStartInput = () => {
      startAddress.value = '';
      startAddressResults.value = [];
      selectedStartOption.value = 0;
    };
  
  
    // Destination field =========================================
    // Watch the startAddress ref for changes
    watch(destinationAddress, (newValue) => {
      searchDestinationAddresses(newValue);
  
    });
  
    // Function to search for addresses
    const searchDestinationAddresses = async (query) => {
      if (selectedDestinationOption.value === 0) {
        if (query.length > 2) {
          const results = await provider.search({ query });
          destinationAddressResults.value = results;
        } else {
          destinationAddressResults.value = [];
        }
      }
    };
  
  
    // Function to select an address from the dropdown
    const select_Destination_Address = (address) => {
      //console.log("Selected_address", address.label)
      destinationAddress.value = address.label; // Update inputRef directly
      destinationAddressResults.value = []; // Clear results
      selectedDestinationOption.value = 1; // Update selected option
    };
  
    // Function to clear the input field
    const clearDestinationInput = () => {
      destinationAddress.value = '';
      destinationAddressResults.value = [];
      selectedDestinationOption.value = 0;
    };
  
  
  
  
  
    // PROVIDER===================================
  
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
  
  
    const getCoordinates = async (address, type) => {
      try {
        const results = await provider.search({ query: address });
        //console.log("EsriProvider", results);
        if (results && results.length > 0) {
          const firstResult = results[0];
          const lat = parseFloat(firstResult.y);
          const lon = parseFloat(firstResult.x);
          //console.log("lat", lat);
          //console.log("lon", lon);
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
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
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
  
  
    // ================ map distances ========================================
  
  
  
    let circleLayer = null;
    const chargepoint_distance = ref(0);
  
    let maxLat = ref(0);
    let maxLng = ref(0);
  
  
    let lat_geo = ref(null);
    let lon_geo = ref(null);
  
  
    //const toRadians = degrees => degrees * Math.PI / 180;
    //const toDegrees = radians => radians * 180 / Math.PI;
  
    const getGeolocation = () => {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            lat_geo.value = latitude;
            lon_geo.value = longitude;
            resolve({ lat: latitude, lng: longitude });
          }, error => {
            console.error("Geolocation error:", error);
            reject(error);
          });
        } else {
          console.error("Geolocation is not supported by this browser.");
          reject(new Error("Geolocation is not supported by this browser."));
        }
      });
    };
  
  
 // Updated onDistanceChanged function to work with connectors
const onDistanceChanged = async () => {
  //console.log("Distance changed to:", chargepoint_distance.value);

  // Remove existing circle if distance is 0
  if (chargepoint_distance.value == 0) {
    if (circleLayer) {
      circleLayer.remove();
      circleLayer = null;
    }
    return;
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const latLng = L.latLng(lat, lng);

      // Update user location
      lat_geo.value = lat;
      lon_geo.value = lng;

      if (!circleLayer) {
        // Initialize the circle layer if it doesn't exist
        circleLayer = L.circle(latLng, { radius: 0 }).addTo(mapObject.value);
      }

      // Update the circle's position and radius
      circleLayer.setLatLng(latLng);
      circleLayer.setRadius(chargepoint_distance.value * 1000); // Convert km to meters

      // Update connector markers based on new range
      renderConnectorMarkersInBounds();

    }, error => {
      console.error("Geolocation error:", error);
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
};
  
  
  
  
    // Function to render markers based on maxLat and maxLng
    const renderMarkers = () => {
      //console.log("Task_5_locations", Task_5_locations)
  
  
  
  
      Task_5_locations.value.forEach((location, index) => {
        const coords = location.location__coordinates;
  
        if (typeof coords.latitude === 'number' && typeof coords.longitude === 'number') {
          // Check if coordinates are within the updated bounds
          const temp_distance = haversine(lat_geo.value, lon_geo.value, coords.latitude, coords.longitude)
          ////console.log("temp_distance",temp_distance,"chargepoint_distance.value",chargepoint_distance.value)
          //console.log("For-->", location.location__city, " temp_distance ", temp_distance, " Bar distance", chargepoint_distance.value);
          if (temp_distance <= chargepoint_distance.value) {
  
  
            // Create marker for each location within bounds
            const markerIcon = getMarkerIcon(location.chargepoint_status);
            const marker = L.marker([coords.latitude, coords.longitude], { icon: markerIcon })
              .addTo(mapObject.value)
              .bindPopup(`<div>
                          <strong>City:</strong> ${location.location__city}<br>
                          <strong>Address:</strong> ${location.location__address}<br>
                          <strong>Number of Sockets:</strong> 4<br>
                          <strong>Sockets Power:</strong> 22kW<br>
                        </div>`);
  
            // Listen for marker clicks to update input fields
            marker.on('click', (e) => {
              updateInputFields(e.latlng);
              markerAddress.value = location.location__city; // Save the marker address
              //console.log('Marker address:', markerAddress);
 
            });
          }
        } else {
          console.error(`Marker ${index} initialization error: Coordinates are not valid numbers`, coords);
        }
      });
  
    }
  

  // Watch for distance changes to update markers
watch([chargepoint_distance], () => {
  if (range_checkbox.value) {
    //console.log('Distance changed, updating connector markers in range');
    onDistanceChanged();
  }
});


// Updated handleClear_extended function with better error handling
// Updated handleClear_extended with safer approach
const handleClear_extended = async () => {
  try {
    //console.log('Starting handleClear_extended...');
    
    // Reset range checkbox first
    range_checkbox.value = false;
    
    // Clear routing
    clearRouting();
    
    // Clear address inputs
    startAddress.value = '';
    destinationAddress.value = '';
    
    // Remove circle if it exists
    if (circleLayer !== null && typeof circleLayer.remove === 'function') {
      circleLayer.remove();
      circleLayer = null;
      chargepoint_distance.value = 0;
    }
    
    // Clear other values
    markerAddress.value = '';
    hide_tariff_graph();
    hide_capacity_graph();

    if (routes_info.value.length > 0) {
      routes_info.value = [];
    }
    
    kw_checkbox.value = false;
    selectedStartOption.value = 0;
    selectedDestinationOption.value = 0;
    
    // Use a delayed approach for re-rendering markers
    //console.log('Scheduling marker re-render...');
    setTimeout(() => {
      if (mapObject.value && Task_5_connectors.value.length > 0) {
        //console.log('Re-rendering markers after clear...');
        const success = renderConnectorMarkers();
        if (!success) {
          console.warn('Marker re-render failed, will retry...');
          setTimeout(() => renderConnectorMarkers(), 1000);
        }
      }
    }, 100);
    
    //console.log('handleClear_extended completed');
    
  } catch (error) {
    console.error('Error in handleClear_extended:', error);
  }
};
  // Updated clearMarkers function for connectors
const clearMarkers = () => {
  if (mapObject.value) {
    markerRefs.value.forEach(markerData => {
      if (markerData && markerData.marker) {
        mapObject.value.removeLayer(markerData.marker);
      }
    });
    markerRefs.value.clear();
    //console.log('All connector markers cleared');
  }
};




  
    function toRadians(degrees) {
      return degrees * Math.PI / 180;
    }
  
  
  
    function haversine(lat1, lon1, lat2, lon2) {
      // Convert latitude and longitude from degrees to radians
      const φ1 = toRadians(lat1);
      const λ1 = toRadians(lon1);
      const φ2 = toRadians(lat2);
      const λ2 = toRadians(lon2);
  
      //  // Haversine formula
      const dlat = φ2 - φ1;
      const dlon = λ2 - λ1;
  
      const a = Math.sin(dlat / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(dlon / 2) ** 2;
      const c = 2 * Math.asin(Math.sqrt(a));
  
      //  // Radius of Earth in kilometers
      const R = 6371;
  
      //  // Calculate the distance
      const distance = c * R;
      return distance; // This distance is in kilometers
    }
  
    //#####################
  
    const hide_tariff_graph = () => {
      dataToUse.value = [];
    }
  
    const hide_capacity_graph = () => {
      dataToUse_Capacity.value = [];
    }
  
  
  
  
    let kw_checkbox = ref(false);
    let kW_amount = ref(0);
  
    const kw_check_function = async () => {
  
      if (kw_checkbox.value === false) {
        kW_amount = 0;
  
      };
    }
  
    //==================================ADMIN TOOLS======================================================
  
  
    const location_id = ref([]);
  
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
      ////console.log("Location1 values",Location_inputs)
      ////console.log("Location2 values",Location_inputs.value)
      try {
  
  
        const query = {
          time_zone: Location_inputs.value.timeZone,
          countryCode: Location_inputs.value.countryCode,
  
          coordinates: {
            latitude: Location_inputs.value.latitude,
            longitude: Location_inputs.value.longitude
          },
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
        //console.log("query", query)
        const apiUrl = `/api/location/`;
  
  
        //console.log('Task LOCATIONS URL:', apiUrl);
  
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          },
          body: JSON.stringify(query) // Send query parameters in the request body
        };
  
        //console.log("Options", requestOptions)
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json(); // Parse response body as JSON
        location_id.value = data.id;
        //console.log("Location_inputs", location_id.value)
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null; // Return null in case of error
      }
    }
  
  
  
    const range_checkbox = ref(false);
  
    const range_check_function = async () => {
  if (range_checkbox.value === false) {
    try {
      // Load connector data first
      await Task_5_Connectors();
      //console.log('Connectors reloaded for range reset');
      
      // Remove and reinitialize the map
      if (mapObject.value) {
        mapObject.value.remove();
        //console.log('Map removed for reinitialization');
      }
      
      // Clear routing and reset state
      await handleClear();
      
      // Wait a moment for cleanup
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Reinitialize the map with all connectors
      await initializeMap();
      //console.log('Map reinitialized with all connectors');
      
    } catch (error) {
      console.error('Error in range_check_function:', error);
    }
  } else {
    // When range is enabled, update markers to show only those in range
    //console.log('Range filtering enabled, updating connector markers');
    renderConnectorMarkersInBounds();
  }
};

// Enhanced renderConnectorMarkersInBounds function
const renderConnectorMarkersInBounds = () => {
  //console.log('Rendering connectors within range bounds...');
  
  // Clear existing markers
  markerRefs.value.forEach(markerData => {
    if (markerData && markerData.marker) {
      mapObject.value.removeLayer(markerData.marker);
    }
  });
  markerRefs.value.clear();

  if (!groupConnectorsByCoordinates.value || groupConnectorsByCoordinates.value.length === 0) {
    console.warn('No connector groups available for range filtering');
    return;
  }

  let markersInRange = 0;

  groupConnectorsByCoordinates.value.forEach((connectorGroup, index) => {
    const coords = connectorGroup.coordinates;
    
    if (typeof coords.latitude === 'number' && typeof coords.longitude === 'number') {
      // Check if within range if range filter is active
      if (range_checkbox.value && chargepoint_distance.value > 0) {
        if (!lat_geo.value || !lon_geo.value) {
          console.warn('User location not available for range filtering');
          return;
        }
        
        const temp_distance = haversine(lat_geo.value, lon_geo.value, coords.latitude, coords.longitude);
        //console.log(`Connector group ${index} at ${connectorGroup.location_data.city}: ${temp_distance.toFixed(2)}km away`);
        
        if (temp_distance > chargepoint_distance.value) {
          //console.log(`Skipping connector group ${index} - outside range (${temp_distance.toFixed(2)}km > ${chargepoint_distance.value}km)`);
          return; // Skip this connector group if outside range
        }
      }
      
      // Create marker for connector group within range
      const markerIcon = getConnectorMarkerIcon(connectorGroup);
      const marker = L.marker([coords.latitude, coords.longitude], { icon: markerIcon })
        .addTo(mapObject.value);

      // Store marker reference
      markerRefs.value.set(`group_${index}`, {
        marker: marker,
        connectorGroup: connectorGroup
      });

      // Create popup content
      const popupContent = createConnectorPopupContent(connectorGroup);
      marker.bindPopup(popupContent);

      // Add click handler
      marker.on('click', (e) => {
        handleConnectorMarkerClick(connectorGroup, e.latlng);
      });

      markersInRange++;
      //console.log(`Connector group ${index} added to map (${connectorGroup.location_data.city})`);
    } else {
      console.error(`Invalid coordinates for connector group ${index}:`, coords);
    }
  });

  //console.log(`Range filtering complete: ${markersInRange} connector groups displayed within ${chargepoint_distance.value}km`);
};

    const calculateDistanceTime = (data1) => {
      if (data1 < 60) {
        return `${data1.toFixed(2)} seconds`;
      } else if (data1 < 3600) {
        const minutes = Math.floor(data1 / 60);
        const seconds = (data1 % 60).toFixed(2);
        return `${minutes} minutes`;
      } else if (data1 < 86400) {
        const hours = Math.floor(data1 / 3600);
        const minutes = Math.floor((data1 % 3600) / 60);
        const seconds = (data1 % 60).toFixed(2);
        return `${hours} hours ${minutes} minutes`;
      } else {
        const days = Math.floor(data1 / 86400);
        const hours = Math.floor((data1 % 86400) / 3600);
        const minutes = Math.floor((data1 % 3600) / 60);
        const seconds = (data1 % 60).toFixed(2);
        return `${days} days ${hours} hours ${minutes} minutes`;
      }
    };
  
    const calculateChargingTime = (data2) => {
      if (kw_checkbox.value === true) {
        // Assuming 40 kW charging time calculation
        const chargingTimeInHours = data2 / 11; // Assuming data2 is in watt-hours (Wh)
        return calculateDistanceTime(chargingTimeInHours * 3600); // Convert hours to seconds
      }
    };
  
  
    const calculateTotalTime = (data1, data2) => {
  
      if (kw_checkbox.value === true) {
        // Assuming 40 kW charging time calculation
        const chargingTimeInHours = data2 / 11; // Assuming data2 is in watt-hours (Wh)
  
        return calculateDistanceTime(chargingTimeInHours * 3600 + data1); // Convert hours to seconds
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
      ////console.log("Location1 values",Location_inputs)
      ////console.log("Location2 values",Location_inputs.value)
      try {
  
  
        const query = {
          chargepoint_id: Chargepoint_inputs.value.chargepointId,
          location: locations_selection_option.value,
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
        //console.log("query", query)
        const apiUrl = `/api/chargepoint/`;
  
  
        //console.log('Task Chargepoints URL:', apiUrl);
  
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          },
          body: JSON.stringify(query) // Send query parameters in the request body
        };
  
        //console.log("Chargepoint Options", requestOptions)
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json(); // Parse response body as JSON
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null; // Return null in case of error
      }
    }
  
    const locations_table = ref([]);
    const get_locations_info = async () => {
      ////console.log("Location1 values",Location_inputs)
      ////console.log("Location2 values",Location_inputs.value)
      try {
  
  
        const query = {
          fields: ['id,time_zone,name,address,city,postal_code,state,country,parking_type,substation_id,last_updated'],
        };
        const apiUrl = `/api/location/`;
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
  
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json(); // Parse response body as JSON
        locations_table.value = data;
        //console.log("locations_table", locations_table.value)
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null; // Return null in case of error
      }
    }
  
  
  
    const see_existing_locations = ref(false);
    const existing_locations = () => {
  
      if (see_existing_locations.value) {
  
        see_existing_locations.value = true;
        get_locations_info();
      } else {
        see_existing_locations.value = false;
      }
  
    }
  
    const see_existing_chargepoints = ref(false);
    const existing_chargepoints = () => {
  
      if (see_existing_chargepoints.value) {
  
        see_existing_chargepoints.value = true;
        Task_9();
      } else {
        see_existing_chargepoints.value = false;
      }
  
    }
  
  
    let locations_selection_option = ref([]);
    const selected_locition_patch = ref({
  
      coordinates: {
        latitude: 0.0,
        longitude: 0.0
      },
  
      time_zone: "",
      country_code: "",
      party_id: "",
      name: "",
      address: "",
      city: "",
      postal_code: "",
      state: "",
      country: "",
      parking_type: "",
      substation_id: ""
  
    });
  
    const locations_selection_option_function = async () => {
      //console.log("locations_selection_option", locations_selection_option.value);
      try {
        // const query = {
        //   fields: ['coordinates', 'time_zone','','','','','','','','','','','','']
        // };
  
        //const queryString = new URLSearchParams(query).toString();
        //const fullApiUrl = `${apiUrl}?${queryString}`;
        const apiUrl = `/api/location/${locations_selection_option.value}/`;
        const fullApiUrl = `${apiUrl}`;
  
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
        selected_locition_patch.value = data;
        //console.log("data", data);
  
        //console.log("selected_locition_patch", selected_locition_patch.value);
  
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null;
      }
  
  
  
    }
  
  
    const PatchLocation_inputs = async () => {
      ////console.log("Location1 values",Location_inputs)
      ////console.log("Location2 values",Location_inputs.value)
      try {
  
  
        const query = {
          time_zone: selected_locition_patch.value.time_zone,
          countryCode: selected_locition_patch.value.country_code,
  
          coordinates: {
            latitude: selected_locition_patch.value.coordinates.latitude,
            longitude: selected_locition_patch.value.coordinates.longitude
          },
  
          partyId: selected_locition_patch.value.party_id,
          name: selected_locition_patch.value.name,
          address: selected_locition_patch.value.address,
          city: selected_locition_patch.value.city,
          postal_code: selected_locition_patch.value.postal_code,
          state: selected_locition_patch.value.state,
          country: selected_locition_patch.value.country,
          parking_type: selected_locition_patch.value.parking_type,
          substation_id: selected_locition_patch.value.substation_id
        };
  
        //console.log("query", query)
        const apiUrl = `/api/location/${locations_selection_option.value}/`;
  
        const requestOptions = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          },
          body: JSON.stringify(query) // Send query parameters in the request body
        };
  
        //console.log("Options", requestOptions)
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json(); // Parse response body as JSON
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null; // Return null in case of error
      }
  
      get_locations_info();
    };
  
    const Chargepoint_inputs_patch = ref([]);
    let chargepoint_selection_option = ref([]);
  
    const chargepoint_selection_option_function = async () => {
      //console.log("locations_selection_option", locations_selection_option.value);
      try {
        // const query = {
        //   fields: ['coordinates', 'time_zone','','','','','','','','','','','','']
        // };
  
        //const queryString = new URLSearchParams(query).toString();
        //const fullApiUrl = `${apiUrl}?${queryString}`;
        const apiUrl = `/api/chargepoint/${chargepoint_selection_option.value}/`;
        const fullApiUrl = `${apiUrl}`;
  
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
        Chargepoint_inputs_patch.value = data;
        locations_selection_option.value = Chargepoint_inputs_patch.value.location.id;
        //console.log("locations_selection_option_value", locations_selection_option.value);
  
        //console.log("Chargepoint_inputs_patch", Chargepoint_inputs_patch.value);
  
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null;
      }
  
    };
  
    const PatchChargepoint_inputs = async () => {
      ////console.log("Location1 values",Location_inputs)
      ////console.log("Location2 values",Location_inputs.value)
      try {
  
  
        const query = {
          chargepoint_id: Chargepoint_inputs_patch.value.chargepoint_id,
          location: locations_selection_option.value,
          chargepoint_model: Chargepoint_inputs_patch.value.chargepoint_model,
          chargepoint_vendor: Chargepoint_inputs_patch.value.chargepoint_vendor,
          chargebox_serial_number: Chargepoint_inputs_patch.value.chargebox_serial_number,
          chargepoint_serial_number: Chargepoint_inputs_patch.value.chargepoint_serial_number,
          firmware_version: Chargepoint_inputs_patch.value.firmware_version,
          ip_address: Chargepoint_inputs_patch.value.ip_address,
          websocket_port: Chargepoint_inputs_patch.value.websocket_port,
          chargepoint_status: Chargepoint_inputs_patch.value.chargepoint_status,
          ocpp_version: Chargepoint_inputs_patch.value.ocpp_version
        };
        //console.log("query", query)
        const apiUrl = `/api/chargepoint/${chargepoint_selection_option.value}/`;
  
  
        //console.log('Task Chargepoints URL:', apiUrl);
  
        const requestOptions = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          },
          body: JSON.stringify(query) // Send query parameters in the request body
        };
  
        //console.log("Chargepoint Options", requestOptions)
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json(); // Parse response body as JSON
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null; // Return null in case of error
      }
  
      Task_9();
    }
  
    const DeleteLocation_inputs = async () => {
      try {
        const apiUrl = `/api/location/${locations_selection_option.value}/`;
        const requestOptions = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          }
        };
  
        const response = await fetch(apiUrl, requestOptions);
        //console.log("DELETE response", response);
  
        if (!response.ok) {
          throw new Error(`Failed to delete tariff element. Status: ${response.status}`);
        }
  
        // Check if the response has a body
        let result;
        try {
          result = await response.json();
          //console.log('DELETE location Response:', result);
        } catch (e) {
          if (response.status !== 204) {
            throw e;
          }
          //console.log('No content returned from DELETE request.');
        }
  
        // Perform any additional actions after successful deletion
        //console.log("Tariff element deleted successfully.");
  
        get_locations_info();
  
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
    };
  
    const DeleteChargepoint_inputs = async () => {
      try {
        const apiUrl = `/api/chargepoint/${chargepoint_selection_option.value}/`;
        const requestOptions = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          }
        };
  
        const response = await fetch(apiUrl, requestOptions);
        //console.log("DELETE response", response);
  
        if (!response.ok) {
          throw new Error(`Failed to delete tariff element. Status: ${response.status}`);
        }
  
        // Check if the response has a body
        let result;
        try {
          result = await response.json();
          //console.log('DELETE Chargepoint Response:', result);
        } catch (e) {
          if (response.status !== 204) {
            throw e;
          }
          //console.log('No content returned from DELETE request.');
        }
  
        // Perform any additional actions after successful deletion
        //console.log("Tariff element deleted successfully.");
  
        get_locations_info();
  
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
    };
  
  
    const admin_chargepoint_starting_functions = () => {
      locations_selection_option_function();
      Task_9();
  
  
    }
  
  
  
  
    //===============================Tarriff Declaration========================================================
  
    const use_existing_tarriff_element = ref(false);
    const Restrictions = ref(false);
  
  
    const existing_tarriff_case = () => {
  
      if (use_existing_tarriff_element.value) {
  
        use_existing_tarriff_element.value = true;
        Restrictions.value = false;
        Task_7_Tarriff_get_info();
        //alert("True,False")
  
      } else {
        use_existing_tarriff_element.value = false;
        Restrictions.value = false;
        //alert("False,False")
      }
  
    }
  
    const Task_7_Tarriff = ref([]);
    const selectedTariff = ref([]);
  
    const Task_7_Tarriff_Main = ref([]);
  
    const flag_case = ref([]);
    const selectedMainTariffId = ref('');//in the Patch tab
    const Task_7_selected_Main_Tariff_Id = ref([]);//It is trigerred when I chosse specific Tariff in the patch tab
  
    const Task_7_Tarriff_get_info = async () => {
      try {
  
        //const apiUrl = `/api/user/?username=${username.value}`;
        const apiUrl = `/api/tariffelement/`;
  
        // Construct the URL with query parameters if provided
        //const queryString = new URLSearchParams(query || {}).toString();
        //const fullApiUrl = `${apiUrl}${queryString}/`; // Append query parameters
  
        //const queryString = new URLSearchParams(query).toString();
        //const fullApiUrl = `${apiUrl}?${queryString}`;
        const fullApiUrl = `${apiUrl}`;
        //console.log('Task7 URL:', fullApiUrl)
  
  
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
        Task_7_Tarriff.value = data
        //console.log("Task_7_Tarriff", Task_7_Tarriff.value)
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null; // Return null in case of error
      }
    };
  
  
  
    const processedData = computed(() => {
      return Task_7_Tarriff.value.map(tariff => {
        // Check if restrictions object has any non-empty values
        const hasRestrictions = tariff.restrictions && Object.values(tariff.restrictions).some(value => value !== "" && value !== 0 && value !== "string" && value !== null);
        return {
          Tarrif_id: tariff.id,
          price_components: tariff.price_components,
          Restrictions: hasRestrictions ? "Yes" : "No"
        };
      });
    });
  
  
  
    const Task_7_Tarriff_MAIN_get_info = async () => {
      try {
  
        const query = {
  
          fields: ['id,tariff_alt_text,min_price,max_price,elements,country_code,party_id,currency,type,start_date_time,end_date_time,last_updated'],
        }
        //const apiUrl = `/api/user/?username=${username.value}`;
        const apiUrl = `/api/tariff/`;
  
        // Construct the URL with query parameters if provided
        //const queryString = new URLSearchParams(query || {}).toString();
        //const fullApiUrl = `${apiUrl}${queryString}/`; // Append query parameters
  
        const queryString = new URLSearchParams(query).toString();
        const fullApiUrl = `${apiUrl}?${queryString}`;
        //const fullApiUrl = `${apiUrl}`;
        //console.log('Task7_MAIN URL:', fullApiUrl)
  
  
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
        Task_7_Tarriff_Main.value = data
        //console.log("Task_7_Tarriff_Main", Task_7_Tarriff_Main.value)
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null; // Return null in case of error
      }
    };
  
    const Task_7_Get_Functions = async () => {
      Task_7_Tarriff_get_info();
      Task_7_Tarriff_MAIN_get_info();
  
    }
  
    const start_date_time_check = ref(false);
    const StartDateChange = () => {
      TarriffElement_inputs_Patch.value.start_date_time = formatDateForStart_END(TarriffElement_inputs_Patch.value.start_date_time);
    }
  
  
    const end_date_time_check = ref(false);
    const EndDateChange = () => {
      TarriffElement_inputs_Patch.value.end_date_time = formatDateForStart_END(TarriffElement_inputs_Patch.value.end_date_time);
    }
  
    const TarriffElement_inputs = ref({
      // TarriffElement  
      price_components: [
        {
          type: "",
          price: 0.0,
          vat: 0.0,
          step_size: 0.0,
        }
      ],
  
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
  
    const TarriffElement_inputs_Patch_Delete = ref({
  
      price_components: [
        {
          type: "",
          price: 0.0,
          vat: 0.0,
          step_size: 0.0,
        }
      ],
      restrictions: [
        {
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
          reservation: ""
        }
      ],
      empty_flag: 0
  
  
    });
  
    let data_element_id = ref([]);
  
  
    const addPriceComponent = () => {
      TarriffElement_inputs.value.price_components.push({
        type: "",
        price: 0.0,
        vat: 0.0,
        step_size: 0.0,
      });
    };
  
    const removePriceComponent = (index) => {
      TarriffElement_inputs.value.price_components.splice(index, 1);
    };
  
    const addPriceComponent_Element = () => {
      TarriffElement_inputs_Patch_Delete.value.price_components.push({
        type: "",
        price: 0.0,
        vat: 0.0,
        step_size: 0.0,
      });
    };
  
    const removePriceComponent_Element = (index) => {
      TarriffElement_inputs_Patch_Delete.value.price_components.splice(index, 1);
    };
  
  
  
    const TarriffElement_inputs_Patch = ref({
  
  
  
  
      tariff_alt_text: [],
  
  
      min_price_excl_vat: 0.0,
      min_price_incl_vat: 0.0,
  
      max_price_excl_vat: 0.0,
      max_price_incl_vat: 0.0,
  
      tariff_element_id: 0,
  
      tarriff_countrycode: "",
      tarriff_party_id: "",
      currency: "",
      tarrif_type: "",
      start_date_time: "",
      end_date_time: "",
      last_updated_date_time: ""
    });
  
    const submitTarriffElement_inputs = async () => {
      ////console.log("Location1 values",Location_inputs)
      ////console.log("Location2 values",Location_inputs.value)
  
      //console.log("use_existing_tarriff_element", use_existing_tarriff_element)
      //==================== CASE 2 ===================================================================
      if (use_existing_tarriff_element.value === false) {
        //console.log("Restrictions2", Restrictions)
  
        if (Restrictions.value === true) {
          alert("Case 2 ");
          try {
            const priceComponents = TarriffElement_inputs.value.price_components.filter(pc =>
              pc.type && pc.price && pc.vat && pc.step_size
            );
            const restrictions = {};
  
            // Helper function to add non-empty values
            const addIfValid = (obj, key, value) => {
              if (typeof value === 'string' && value.trim() !== "") {
                obj[key] = value;
              } else if (typeof value === 'number' && value !== 0) {
                obj[key] = value;
              }
            };
  
  
  
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
              price_components: priceComponents,
              restrictions: restrictions
            };
  
            //console.log("query_tarriff_element", query_tarriff_element);
  
            //Destination
            const apiUrl = `/api/tariffelement/`;
            const requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token.value}`,
              },
              body: JSON.stringify(query_tarriff_element) // Send query parameters in the request body
            };
  
            //console.log("TarriffElement Options", requestOptions);
            const response = await fetch(apiUrl, requestOptions);
            
            const data = await response.json(); // Parse response body as JSON
            //console.log("CASE 2 The tariff_element_response of post",data)
            ////console.log("TarriffElement Data",data)
            flag_case.value = 2;
            //submitTarriff_case(data.id);
            data_element_id.value = data.id;
          } catch (error) {
            console.error('An error occurred:', error.message);
            return null; // Return null in case of error
          }
        }
      }
  
      /// CASE 1 ==================================================================================================================
      if (use_existing_tarriff_element.value === false) {
  
        if (Restrictions.value === false) {
          alert("Case 1 ");
          try {
            const priceComponents = TarriffElement_inputs.value.price_components.filter(pc =>
              pc.type && pc.price && pc.vat && pc.step_size
            );
  
  
            // Helper function to add non-empty values
            const addIfValid = (obj, key, value) => {
              if (typeof value === 'string' && value.trim() !== "") {
                obj[key] = value;
              } else if (typeof value === 'number' && value !== 0) {
                obj[key] = value;
              }
            };
  
  
  
  
            const query_tarriff_element = {
              price_components: priceComponents
            };
            //console.log("query_tarriff_element", query_tarriff_element);
  
            //Destination
            const apiUrl = `/api/tariffelement/`;
            const requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token.value}`,
              },
              body: JSON.stringify(query_tarriff_element) // Send query parameters in the request body
            };
  
            //console.log("TarriffElement Options", requestOptions);
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.json(); // Parse response body as JSON

            //console.log("CASE 1 The tariff_element_response of post",data)
            ////console.log("TarriffElement Data",data)
            flag_case.value = 1;
            //submitTarriff_case(data.id);
            data_element_id.value = data.id
  
          } catch (error) {
            console.error('An error occurred:', error.message);
            return null; // Return null in case of error
          }
        }
      }
  
    }
  
  
    //=================== Tarrif Submission Cases ==========================================================
  
    const Tarriff_Post_function = async () => {
      ////console.log("Location1 values",Location_inputs)
      ////console.log("Location2 values",Location_inputs.value)
  
      //console.log("use_existing_tarriff_element", use_existing_tarriff_element)
      //==================== CASE 2 ===================================================================
      if (use_existing_tarriff_element.value === false) {
        //console.log("Restrictions2", Restrictions)
  
        if (Restrictions.value === true) {
          alert("Case 2 ");
          try {
            const priceComponents = TarriffElement_inputs.value.price_components.filter(pc =>
              pc.type && pc.price && pc.vat && pc.step_size
            );
            const restrictions = {};
  
            // Helper function to add non-empty values
            const addIfValid = (obj, key, value) => {
              if (typeof value === 'string' && value.trim() !== "") {
                obj[key] = value;
              } else if (typeof value === 'number' && value !== 0) {
                obj[key] = value;
              }
            };
  
  
  
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
              price_components: priceComponents,
              restrictions: restrictions
            };
  
            //console.log("query_tarriff_element", query_tarriff_element);
  
            //Destination
            const apiUrl = `/api/tariffelement/`;
            const requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token.value}`,
              },
              body: JSON.stringify(query_tarriff_element) // Send query parameters in the request body
            };
  
            //console.log("TarriffElement Options", requestOptions);
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.json(); // Parse response body as JSON
            //console.log("CASE 2 The TARIFF of post Tarrif Submission Cases ",response)
            ////console.log("TarriffElement Data",data)
            flag_case.value = 2;
            submitTarriff_case(data.id);
  
          } catch (error) {
            console.error('An error occurred:', error.message);
            return null; // Return null in case of error
          }
        }
      }
  
      /// CASE 1 ==================================================================================================================
      if (use_existing_tarriff_element.value === false) {
  
        if (Restrictions.value === false) {
          alert("Case 1 ");
          try {
            const priceComponents = TarriffElement_inputs.value.price_components.filter(pc =>
              pc.type && pc.price && pc.vat && pc.step_size
            );
  
  
            // Helper function to add non-empty values
            const addIfValid = (obj, key, value) => {
              if (typeof value === 'string' && value.trim() !== "") {
                obj[key] = value;
              } else if (typeof value === 'number' && value !== 0) {
                obj[key] = value;
              }
            };
  
  
  
  
            const query_tarriff_element = {
              price_components: priceComponents
            };
            //console.log("query_tarriff_element", query_tarriff_element);
  
            //Destination
            const apiUrl = `/api/tariffelement/`;
            const requestOptions = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token.value}`,
              },
              body: JSON.stringify(query_tarriff_element) // Send query parameters in the request body
            };
  
            //console.log("TarriffElement Options", requestOptions);
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.json(); // Parse response body as JSON
            //console.log("CASE 1 The TARIFF of post Tarrif Submission Cases ",data)

            ////console.log("TarriffElement Data",data)
            flag_case.value = 1;
            submitTarriff_case(data.id);
  
  
          } catch (error) {
            console.error('An error occurred:', error.message);
            return null; // Return null in case of error
          }
        }
      }
  
      /// CASE 3 ==================================================================================================================
      if (use_existing_tarriff_element.value === true) {
        alert("Case 3 ");
  
        flag_case.value = 3;
        submitTarriff_case(selectedTariff.value);
  
      }
  
    }
  
  
    const submitTarriff_case = async (id_value) => {
  
      //console.log("flag_case", flag_case.value);
      if (flag_case.value === 2 || flag_case.value === 1 || flag_case.value === 3) {
        try {
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
  
          //console.log("query_tarriff_main", query_tarriff_main);
  
          //Destination
          const apiUrl = `/api/tariff/`;
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token.value}`,
            },
            body: JSON.stringify(query_tarriff_main) // Send query parameters in the request body
          };
  
          //console.log("query_tarriff_main Options", requestOptions);
          const response = await fetch(apiUrl, requestOptions);
          const data = await response.json(); // Parse response body as JSON
          //console.log("Tarriff Data", data)
        } catch (error) {
          console.error('An error occurred:', error.message);
          return null; // Return null in case of error
        }
      }
  
  
  
  
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
  
  
  
  
  
      //console.log("Actual string", isoString)
      //console.log("date", date)
      //console.log("month", month)
      //console.log("day", day)
      //console.log("year", year)
      //console.log("hours", hours)
      //console.log("minutes", minutes)
  
      const dateInput = `${month}/${day}/${year}`;
      const timeInput = `${hours}:${minutes}`;
      return `${dateInput} ${timeInput}`
    }
  
    function formatDateForStart_END(isoString) {
      const date = new Date(isoString);
  
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // getMonth() returns month from 0-11
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0'); // 24-hour format
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
  
      // Format as YYYY-MM-DDThh:mm:ss
      return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    }
  
  
    const onTariffSelect = async (event) => {
      const selectedTariff = event.target.selectedIndex - 1;
      const selectedId = selectedTariff.id;
  
      try {
        const query = {
          id: selectedId,
          fields: ['tariff_alt_text', 'min_price', 'max_price', 'elements', 'country_code', 'party_id', 'currency', 'type', 'start_date_time', 'end_date_time', 'last_updated', 'elements']
        };
        const apiUrl = `/api/tariff/`;
        const queryString = new URLSearchParams(query).toString();
        const fullApiUrl = `${apiUrl}?${queryString}`;
        //console.log('Task7_Update URL:', fullApiUrl);
  
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
        //console.log("data", data[selectedTariff]);
  
        TarriffElement_inputs_Patch.value = {
          tariff_alt_text: data[selectedTariff].tariff_alt_text ? data[selectedTariff].tariff_alt_text.map(item => ({ language: item.language, text: item.text })) : [],
  
          min_price_excl_vat: data[selectedTariff].min_price ? data[selectedTariff].min_price.excl_vat : selectedTariff.selectedTariff,
          min_price_incl_vat: data[selectedTariff].min_price ? data[selectedTariff].min_price.incl_vat : selectedTariff.selectedTariff,
  
          max_price_excl_vat: data[selectedTariff].max_price ? data[selectedTariff].max_price.excl_vat : selectedTariff.selectedTariff,
          max_price_incl_vat: data[selectedTariff].max_price ? data[selectedTariff].max_price.incl_vat : selectedTariff.selectedTariff,
  
          tariff_element_id: data[selectedTariff].elements ? data[selectedTariff].elements : selectedTariff.selectedTariff,
  
          tarriff_countrycode: data[selectedTariff].country_code || "",
          tarriff_party_id: data[selectedTariff].party_id || "",
          currency: data[selectedTariff].currency || "",
          tarrif_type: data[selectedTariff].type || "",
          start_date_time: formatDateForStart_END(data[selectedTariff].start_date_time) || "",
          end_date_time: formatDateForStart_END(data[selectedTariff].end_date_time) || "",
          last_updated_date_time: formatDateForInput(data[selectedTariff].last_updated) || ""
        };
  
        // Use the selected index if needed
        //console.log('Selected Tariff Index:', selectedTariff);
  
      } catch (error) {
        console.error("Error fetching tariff data:", error);
      }
    };
  
  
  
    const onTariffElementSelect = async () => {
      try {
        const query = {
          fields: ['price_components', 'restrictions']
        };
        const apiUrl = `/api/tariffelement/${TarriffElement_inputs_Patch.value.tariff_element_id}/`;
        const queryString = new URLSearchParams(query).toString();
        const fullApiUrl = `${apiUrl}?${queryString}`;
        //console.log('TariffElement_Patch URL:', fullApiUrl);
  
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
        //console.log("data_Tariff_Elements", data);
  
        // Ensure price_components is an array
        const priceComponents = Array.isArray(data[0].price_components) ?
          data[0].price_components.map(item => ({
            type: item.type,
            price: item.price,
            vat: item.vat,
            step_size: item.step_size
          })) : [];
  
        // Handle restrictions as an object and check if all fields are empty
        const restrictions = data[0].restrictions ? {
          start_time: data[0].restrictions.start_time,
          end_time: data[0].restrictions.end_time,
          start_date: data[0].restrictions.start_date,
          end_date: data[0].restrictions.end_date,
          min_kwh: data[0].restrictions.min_kwh,
          max_kwh: data[0].restrictions.max_kwh,
          min_current: data[0].restrictions.min_current,
          max_current: data[0].restrictions.max_current,
          min_power: data[0].restrictions.min_power,
          max_power: data[0].restrictions.max_power,
          min_duration: data[0].restrictions.min_duration,
          max_duration: data[0].restrictions.max_duration,
          day_of_week: data[0].restrictions.day_of_week,
          reservation: data[0].restrictions.reservation
        } : {};
        //console.log("restrictions", restrictions)
        // Check if all fields in restrictions are empty or zero
        const isEmptyRestrictions = Object.values(restrictions).every(value =>
          value === "" || value === 0.0 || value === "string");
  
  
        // Construct TarriffElement_inputs_Patch_Delete
        TarriffElement_inputs_Patch_Delete.value = {
          price_components: priceComponents,
          empty_flag: isEmptyRestrictions ? 1 : 0
        };
  
        if (!isEmptyRestrictions) {
          TarriffElement_inputs_Patch_Delete.value.restrictions = restrictions;
        }
  
        //console.log("TarriffElement_inputs_Patch_Delete", TarriffElement_inputs_Patch_Delete.value);
  
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null;
      }
    };
  
  
  
  
    const Patch_Tariff = async () => {
      try {
        const updatedData = {};
        const inputs = TarriffElement_inputs_Patch.value;
  
        // Include only non-empty fields
        if (inputs.tariff_alt_text && inputs.tariff_alt_text.length) {
          updatedData.tariff_alt_text = inputs.tariff_alt_text.filter(item => item.text);
        }
  
        // Assign min_price if both excl_vat and incl_vat are present
        if (inputs.min_price_excl_vat !== "" && inputs.min_price_incl_vat !== "") {
          updatedData.min_price = {
            excl_vat: inputs.min_price_excl_vat,
            incl_vat: inputs.min_price_incl_vat,
          };
        }
  
        // Assign max_price if both excl_vat and incl_vat are present
        if (inputs.max_price_excl_vat !== "" && inputs.max_price_incl_vat !== "") {
          updatedData.max_price = {
            excl_vat: inputs.max_price_excl_vat,
            incl_vat: inputs.max_price_incl_vat,
          };
        }
  
        if (inputs.tariff_element_id) updatedData.elements = [inputs.tariff_element_id];
  
        if (inputs.tarriff_countrycode) updatedData.tarriff_countrycode = inputs.tarriff_countrycode;
        if (inputs.tarriff_party_id) updatedData.tarriff_party_id = inputs.tarriff_party_id;
        if (inputs.currency) updatedData.currency = inputs.currency;
        if (inputs.tarrif_type) updatedData.tarrif_type = inputs.tarrif_type;
        if (inputs.start_date_time) updatedData.start_date_time = inputs.start_date_time;
        if (inputs.end_date_time) updatedData.end_date_time = inputs.end_date_time;
        if (inputs.last_updated_date_time) updatedData.last_updated_date_time = inputs.last_updated_date_time;
  
        
        //console.log("Selected_Tariff for PATCH",selectedMainTariffId.value)
        const id_tariff_selection = JSON.parse(JSON.stringify(selectedMainTariffId.value))
        //console.log('Selected_Tariff keys:',id_tariff_selection.id);


        const apiUrl = `/api/tariff/${id_tariff_selection.id}/`;

        //console.log('PATCH URL:', apiUrl);
        //console.log('Updated Data:', updatedData);
  
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
        //console.log('PATCH Response:', result);
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
  
      Task_7_Tarriff_MAIN_get_info();
    };
  
  
    const deleteTariff = async () => {
      try {
        const apiUrl = `/api/tariff/${selectedMainTariffId.value}/`;
        const requestOptions = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          }
        };
  
        const response = await fetch(apiUrl, requestOptions);
        //console.log("DELETE response", response);
  
        if (!response.ok) {
          throw new Error(`Failed to delete tariff element. Status: ${response.status}`);
        }
  
        // Check if the response has a body
        let result;
        try {
          result = await response.json();
          //console.log('DELETE Tariff Response:', result);
        } catch (e) {
          if (response.status !== 204) {
            throw e;
          }
          //console.log('No content returned from DELETE request.');
        }
  
        // Perform any additional actions after successful deletion
        //console.log("Tariff element deleted successfully.");
  
        Task_7_Tarriff_MAIN_get_info();
        selectedMainTariffId.value = [];
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
    };
  
  
    const Patch_Tariff_Element = async () => {
      try {
        const updatedData = {};
        const inputs = TarriffElement_inputs_Patch_Delete.value;
  
        // Include non-empty price components
        if (inputs.price_components && inputs.price_components.length) {
          updatedData.price_components = inputs.price_components.filter(component =>
            component.type && component.price !== 0.0 && component.vat !== 0.0 && component.step_size !== 0.0
          );
        }
  
        // Handle restrictions as an object and check if any field is non-empty
        if (inputs.restrictions) {
          const restrictions = inputs.restrictions;
          const nonEmptyRestrictions = Object.entries(restrictions).reduce((acc, [key, value]) => {
            if (value !== "" && value !== "string" && value !== 0.0) {
              acc[key] = value;
            }
            return acc;
          }, {});
  
          if (Object.keys(nonEmptyRestrictions).length > 0) {
            updatedData.restrictions = nonEmptyRestrictions;
          }
        }
  
        //console.log("Update_Phase", updatedData)
        //console.log("nonEmptyRestrictions", inputs)
  
  
        const apiUrl = `/api/tariffelement/${TarriffElement_inputs_Patch.value.tariff_element_id}/`;
        //console.log('PATCH URL:', apiUrl);
        //console.log('Updated Data:', updatedData);
  
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
        //console.log('PATCH Response:', result);
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
  
      Task_7_Tarriff_get_info();
    };
  
    const deleteRestrictions = async () => {
      TarriffElement_inputs_Patch_Delete.value.restrictions = {
        start_time: null,
        end_time: null,
        start_date: null,
        end_date: null,
        min_kwh: null,
        max_kwh: null,
        min_current: null,
        max_current: null,
        min_power: null,
        max_power: null,
        min_duration: null,
        max_duration: null,
        day_of_week: null,
        reservation: null
      };
  
      //console.log("After clearing restrictions:", TarriffElement_inputs_Patch_Delete.value.restrictions);
    };
  
  
    const deleteTariff_Element = async () => {
      try {
        const apiUrl = `/api/tariffelement/${TarriffElement_inputs_Patch.value.tariff_element_id}/`;
        const requestOptions = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          }
        };
  
        const response = await fetch(apiUrl, requestOptions);
        //console.log("DELETE response", response);
  
        if (!response.ok) {
          throw new Error(`Failed to delete tariff element. Status: ${response.status}`);
        }
  
        // Check if the response has a body
        let result;
        try {
          result = await response.json();
          //console.log('DELETE Tariff Response:', result);
        } catch (e) {
          if (response.status !== 204) {
            throw e;
          }
          //console.log('No content returned from DELETE request.');
        }
  
        // Perform any additional actions after successful deletion
        //console.log("Tariff element deleted successfully.");
  
  
  
        TarriffElement_inputs_Patch_Delete.value.price_components = {
          type: "",
          price: 0.0,
          vat: 0.0,
          step_size: 0.0
        };
  
        TarriffElement_inputs_Patch_Delete.value.restrictions = {
          start_time: null,
          end_time: null,
          start_date: null,
          end_date: null,
          min_kwh: null,
          max_kwh: null,
          min_current: null,
          max_current: null,
          min_power: null,
          max_power: null,
          min_duration: null,
          max_duration: null,
          day_of_week: null,
          reservation: null
        };
        TarriffElement_inputs_Patch.value.tariff_element_id = null;
  
        Task_7_Tarriff_get_info();
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
    };
    
    //##########$$$$$$$$###########//##############$$$$#######// Tarrif Adjustment Tools END //#########$$$$$$$$$$$$$$$$############//#####################//#####################//#####################
  
  
    //##########$$$$$$$$###########//##############$$$$#######// TRANSACTION OPTIONS START //#########$$$$$$$$$$$$$$$$############//#####################//#####################//#####################
  
  let stop_transaction_id=ref([]);
  let stop_chargepoint_name=ref([]);
  let stop_trigger_info=ref([]);
  
  const stopNotificationVisible = ref(false);
  const stopNotificationMessage = ref('Charging has been stopped successfully.');
  
  const showStopNotification = (message) => {
    stopNotificationMessage.value = message;
    stopNotificationVisible.value = true;
    
    // Hide the notification after a timeout (optional)
    setTimeout(() => {
      stopNotificationVisible.value = false;
    }, 5000); // Adjust time as needed
  };
  
  const stopTransaction =async (transaction_id,connector__chargepoint) => {
      //@click="stopTransaction(data.transaction_id, data.connector__chargepoint)">
  
      stop_transaction_id.value=`${transaction_id}`;
      stop_chargepoint_name.value=`${connector__chargepoint}`;
  
      //console.log("Transaction STOP triggered for stop_transaction_id:", stop_transaction_id.value);
      //console.log("Transaction STOP triggered for stop_chargepoint_name:", stop_chargepoint_name.value);
      
      
      try {
        const query = {
          chargepoint_id: stop_chargepoint_name.value,
          sync: true,
          transaction_id:stop_transaction_id.value
        };
        //console.log("query", query);
        const apiUrl = `/api/ocpp16/remotestoptransaction/`;
  
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          },
          body: JSON.stringify(query)
        };
  
        const response = await fetch(apiUrl, requestOptions);
        console.log("The stop QUERY",query)
        console.log("The stop trasnasction",response)
        stop_trigger_info.value = await response.json(); // Parse response body as JSON
        //console.log("stop_trigger_info.value", stop_trigger_info.value);
      } catch (error) {
        console.error('An error occurred:', error.message);
        showStopNotification("Failed to stop transaction.");
        return null;
      }
  
  
      Transaction_Options();
      showStopNotification("Charging completed.");
      Task_14();
  };
  
  const Transaction_Options=async()=>{
  
    Task_1_Active();
    Task_1_Finished();
    Task_3();
  }
  
const ResetChargepoint = async (chargepoint_id) => {
    try {
        const query = {
            chargepoint_id: chargepoint_id, // Remove .value if it's a string parameter
            sync: true,
            reset_type: "Soft"
        }
        
        const apiUrl = `/api/ocpp16/reset/`
        
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token.value}`,
            },
            body: JSON.stringify(query)
        }
        
        const response = await fetch(apiUrl, requestOptions)
        const result = await response.json() // Add await
        
        if (response.ok) {
            showStopNotification("Reset Successfully done.")
        } else {
            console.error('Reset command failed:', result)
            // Show error notification instead
            showStopNotification("Reset command failed.")
        }
        
    } catch (error) {
        console.error('An error occurred IN RESET COMMAND:', error.message || error)
        showStopNotification("Reset command error.")
    }
}
   //##########$$$$$$$$###########//##############$$$$#######// TRANSACTION OPTIONS END //#########$$$$$$$$$$$$$$$$############//#####################//#####################//#####################
  
  //##########$$$$$$$$###########//##############$$$$#######// CONNECTOR OPTIONS START //#########$$$$$$$$$$$$$$$$############//#####################//#####################//#####################
  
  let Connector_chargepoint_selection=ref([]);
  let Connector_ID_selection=ref([]);
  const connector_chargepoint_name_data= ref([]);
  let connector_data_load_and_patch= ref([]);
  let uuid_selection= ref([]);
  let connector_id_data_table=ref([]);
  
  
  
  const connector_chargepoint_name_fetch= async () => {
  
    try {
  
         const query = {
         fields: ['chargepoint']
         };
  
        const queryString = new URLSearchParams(query).toString();
        const apiUrl = `/api/connector/`;
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
        const data = await response.json();
  
        // Filter out duplicate chargepoint values
        const uniqueData = data.filter((value, index, self) => 
          index === self.findIndex((t) => t.chargepoint === value.chargepoint)
        );
  
        connector_chargepoint_name_data.value = uniqueData;
  
  
        
        //console.log("connector_chargepoint_name_data", connector_chargepoint_name_data.value);
  
        } catch (error) {
        console.error('An error occurred:', error.message);
        return null;
      }
  
  };
  
  
  const connector_ID_fetching_function = async () => {
    try {
      const query = {
        chargepoint_id :Connector_chargepoint_selection.value,
        fields: ['connectorid']
      };
  
      const queryString = new URLSearchParams(query).toString();
      const apiUrl = `/api/connector/`;
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
      
      // Check if response is OK (status 200-299)
      if (!response.ok) {
        const errorText = await response.text();  // Capture error message
        console.error(`API error: ${errorText}`);
        return null;
      }
  
      // Parse the JSON data if response is OK
      const data = await response.json();
      connector_id_data_table.value = data;
      //console.log("connector_id_data_table", connector_id_data_table.value);
      
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null;
    }
  };
  
  const connector_data_loading_functions=async () => {
    await connector_ID_uuid_fetch_rest_data();
    await connector_uuid_data();
  
  }
  const connector_ID_uuid_fetch_rest_data = async () => {
    //console.log("Connector_ID_selection", Connector_ID_selection.value);
    //console.log("Connector_chargepoint_selection", Connector_chargepoint_selection.value);
  
    try {
      const query = {
        connector_id :Connector_ID_selection.value,
        chargepoint_id: Connector_chargepoint_selection.value,
        fields: ['uuid']
      };
  
      const queryString = new URLSearchParams(query).toString();
      const apiUrl = `/api/connector/`;
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
      
      // Check if response is OK (status 200-299)
      if (!response.ok) {
        const errorText = await response.text();  // Capture error message
        console.error(`API error: ${errorText}`);
        return null;
      }
  
      // Parse the JSON data if response is OK
      const data = await response.json();
      uuid_selection.value = data;
      //console.log("uuid_selection", uuid_selection.value);
  
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null;
    }
  };
  
  const connector_uuid_data = async () => {
  
    //console.log("uuid_selection",uuid_selection.value);
    const uuidArray = Array.from(uuid_selection.value);
    const uuid_filtered= uuidArray[0]; 
    //console.log("uuid_filtered",uuid_filtered.uuid);
  
    uuid_selection.value=uuid_filtered.uuid
  
    //console.log("Task_7_Tarriff_Main",Task_7_Tarriff_Main.value);
  
    try {
      const query = {
        uuid: uuid_selection.value,
        fields: ['connectorid','availability_status','connector_status','standard','format','power_type','tariff_ids'], // Split each field name
      };
  
      const queryString = new URLSearchParams(query).toString();
      const apiUrl = `/api/connector/${uuid_selection.value}/`;
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
      
      // Check if response is OK (status 200-299)
      if (!response.ok) {
        const errorText = await response.text();  // Capture error message
        console.error(`API error: ${errorText}`);
        return null;
      }
  
      // Parse the JSON data if response is OK
      const data = await response.json();
      
      const connector_data_load_and_patch_array = Array.from(data);
      const connector_data_load_and_patch_filtered= connector_data_load_and_patch_array[0];
      connector_data_load_and_patch.value = connector_data_load_and_patch_filtered;
      //console.log("connector_data_load_and_patch", connector_data_load_and_patch.value);
  
      //console.log("connector_data_load_and_patch.tariff_ids",connector_data_load_and_patch.value.tariff_ids);
      ////console.log("connector_data_load_and_patch_filtered", connector_data_load_and_patch_filtered.availability_status);
  
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null;
    }
  };
  
  const Patch_Connector_inputs = async () => {
    ////console.log("Location1 values",Location_inputs)
    ////console.log("Location2 values",Location_inputs.value)
    //console.log("COOOOOconnector_data_load_and_patch",connector_data_load_and_patch.value);
    try {
      let query=ref([]);
      // Initialize the query with the fields that are always required
      if (connector_data_load_and_patch.value.tariff_ids === null || connector_data_load_and_patch.value.tariff_ids === "") {
        //console.log("No Selection")
        query = {
          availability_status: connector_data_load_and_patch.value.availability_status,
          connector_status: connector_data_load_and_patch.value.connector_status,
          standard: connector_data_load_and_patch.value.standard,
          format: connector_data_load_and_patch.value.format,
          power_type: connector_data_load_and_patch.value.power_type
        };
      }
  
      else if (connector_data_load_and_patch.value.tariff_ids === '0') {
        //console.log("Blank Tariff!")
        query = {
          availability_status: connector_data_load_and_patch.value.availability_status,
          connector_status: connector_data_load_and_patch.value.connector_status,
          standard: connector_data_load_and_patch.value.standard,
          format: connector_data_load_and_patch.value.format,
          power_type: connector_data_load_and_patch.value.power_type,
          tariff_ids: []
        };
      }
  
      else {
        if (connector_data_load_and_patch.value.tariff_ids !== '0') {
        query = {
          availability_status: connector_data_load_and_patch.value.availability_status,
          connector_status: connector_data_load_and_patch.value.connector_status,
          standard: connector_data_load_and_patch.value.standard,
          format: connector_data_load_and_patch.value.format,
          power_type: connector_data_load_and_patch.value.power_type,
          tariff_ids: [connector_data_load_and_patch.value.tariff_ids]
        };
      }
  
      }
  
  
      //console.log("query", query)
      const apiUrl = `/api/connector/${uuid_selection.value}/`;
  
  
      //console.log('Task Chargepoints URL:', apiUrl);
  
      const requestOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token.value}`,
        },
        body: JSON.stringify(query) // Send query parameters in the request body
      };
  
      //console.log("Chargepoint Options", requestOptions)
      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json(); // Parse response body as JSON
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null; // Return null in case of error
    }
  
    Test_Charging_Operation();
  }
  
  
  
  //##########$$$$$$$$###########//##############$$$$#######// CHARGING TOOLS OPTIONS //#########$$$$$$$$$$$$$$$$############//#####################//#####################//#####################
  
  
  //const Test_Charging_transaction_id_finder =async (test_charging_stop_chargepoint_name,test_charging_stop_connector_id) => {
  
  
  
  //}
  
  //@click="Test_Charging_Stop(data.chargepoint,data.connectorid)">
  
  //##########$$$$$$$$###########//##############$$$$#######// TEST CHARGING START //#########$$$$$$$$$$$$$$$$############//#####################//#####################//#####################
  
  let test_charging_stop_connector_id=ref([]);
  let test_charging_stop_chargepoint_name=ref([]);
  let test_charging_stop_transaction_id=ref([]);
  let test_charging_stop_trigger_info=ref([]);
  
  
  
  const Test_Charging_Stop_set_functions=async (chargepoint,connectorid) => {
  
    test_charging_stop_connector_id.value=`${connectorid}`;
    test_charging_stop_chargepoint_name.value=`${chargepoint}`;
    
    //console.log("Transaction STOP triggered for test_charging_stop_connector_id:", test_charging_stop_connector_id.value);
    //console.log("Transaction STOP triggered for test_charging_stop_chargepoint_name:", test_charging_stop_chargepoint_name.value);
    
    try {
        //const query = { transaction_status: 'Finished', // Filter by status
        //                fields: ['id_tag','start_transaction_timestamp','wh_meter_start', 'wh_meter_last_timestamp','wh_meter_last','transaction_status','connector'], // Key-value pair for the query parameter
        //           };
  
        const query = {
          
          chargepoint_id:test_charging_stop_chargepoint_name.value,
          connector_id:test_charging_stop_connector_id.value,
          transaction_status:"Started",//Started
          fields: ['transaction_id'],
        }
        const apiUrl = `/api/transaction/`;
  
        const queryString = new URLSearchParams(query).toString();
        const fullApiUrl = `${apiUrl}?${queryString}`;
        //console.log('Transaction Test charging Operation URL:', fullApiUrl)
  
  
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
        test_charging_stop_transaction_id.value = data
        //console.log("test_charging_stop_transaction_id",test_charging_stop_transaction_id.value[0].transaction_id);
  
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null; // Return null in case of error
      }
  
  
    Test_Charging_Stop()
  }
  
  const Test_Charging_Stop =async () => {
      
      try {
        const query = {
          chargepoint_id: test_charging_stop_chargepoint_name.value,
          sync: true,
          transaction_id:test_charging_stop_transaction_id.value[0].transaction_id
        };
        //console.log("query", query);
        const apiUrl = `/api/ocpp16/remotestoptransaction/`;
  
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          },
          body: JSON.stringify(query)
        };
        
        const response = await fetch(apiUrl, requestOptions);
        // console.log("The stop trasnasction",response.value)
        test_charging_stop_trigger_info.value = await response.json(); // Parse response body as JSON
        //console.log("test_charging_stop_trigger_info.value", test_charging_stop_trigger_info.value);
      } catch (error) {
        console.error('An error occurred:', error.message);
        showStopNotification("Failed to stop transaction.");
        return null;
      }
  
  
      Test_Charging_Operation();
      showStopNotification("Charging completed.");
  
      Task_14();
  };
  
  let test_charging_start_connector_id=ref([]);
  let test_charging_start_chargepoint_name=ref([]);
  let test_charging_start_info=ref([]);
  
  
  
  let notificationVisible = ref(false);
  let notificationMessage = ref("");
  
  const show_Start_Charging_Notification = (message) => {
    notificationMessage.value = message;
    notificationVisible.value = true;
  
    // Hide the notification after 3 seconds
    setTimeout(() => {
      notificationVisible.value = false;
    }, 7000);
  };
  
  
  const Test_Charging_Start = async (chargepoint,connectorid) => {
  
    test_charging_start_connector_id.value=`${connectorid}`;
  
    test_charging_start_chargepoint_name.value=`${chargepoint}`;
  
    //console.log("Transaction START triggered for test_charging_start_connector_id:", test_charging_start_connector_id.value);
    //console.log("Transaction START triggered for test_charging_start_chargepoint_name:", test_charging_start_chargepoint_name.value);
  
  
    try {

        // Get user's primary ID token
        const userIdToken = getPrimaryIdToken();
        if (!userIdToken) {
          show_Start_Charging_Notification("No valid ID token found. Please check your charging cards.");
          return;
        }

        const query = {
          chargepoint_id: test_charging_start_chargepoint_name.value,
          sync: true,
          connector_id:test_charging_start_connector_id.value,
          id_tag:userIdToken
  
        };
        //console.log("query", query);
        const apiUrl = `/api/ocpp16/remotestarttransaction/`;
  
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          },
          body: JSON.stringify(query)
        };
  
        const response = await fetch(apiUrl, requestOptions);
        test_charging_start_info.value = await response.json(); // Parse response body as JSON
        //console.log("test_charging_start_info.value", test_charging_start_info.value);
      } catch (error) {
        console.error('An error occurred:', error.message);
        show_Start_Charging_Notification("Failed to start charging operation.");
        return null;
      }
  
  
      Test_Charging_Operation();
  
      show_Start_Charging_Notification("Charging started successfully!"); // Show success message
  
  }
  
  // Your existing reactive reference
//const Connector_info_response = ref([])

// Computed property to get unique connectors with merged tariff IDs
const uniqueConnectors = computed(() => {
  if (!Task_5_connectors.value || Task_5_connectors.value.length === 0) {
    return [];
  }
  
  // 🔧 FIX: Since Task_5_connectors.value now contains unique connectors with merged tariff_ids,
  // we can return it directly
  return Task_5_connectors.value;
});

  
  
const Test_Charging_Operation = async () => {
  try {
    const query = {
      fields: ['chargepoint,uuid,connectorid,tariff_ids,availability_status,connector_status,standard,format,power_type,charging_profile'],
    };
    
    const apiUrl = `/api/connector/`;
    const queryString = new URLSearchParams(query).toString();
    const fullApiUrl = `${apiUrl}?${queryString}`;
    //console.log('Test_Charging_Operation URL:', fullApiUrl);

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
    
    // 🔧 FIX: Apply the same deduplication logic here
    const connectorMap = new Map();
    
    data.forEach(connector => {
      const uuid = connector.uuid;
      
      if (connectorMap.has(uuid)) {
        const existingConnector = connectorMap.get(uuid);
        
        // Merge tariff_ids
        if (!Array.isArray(existingConnector.tariff_ids)) {
          existingConnector.tariff_ids = existingConnector.tariff_ids ? [existingConnector.tariff_ids] : [];
        }
        
        if (connector.tariff_ids) {
          const newTariffs = Array.isArray(connector.tariff_ids) ? connector.tariff_ids : [connector.tariff_ids];
          newTariffs.forEach(tariffId => {
            if (!existingConnector.tariff_ids.includes(tariffId)) {
              existingConnector.tariff_ids.push(tariffId);
            }
          });
        }
        
        // Merge charging_profile
        if (connector.charging_profile) {
          if (!Array.isArray(existingConnector.charging_profile)) {
            existingConnector.charging_profile = existingConnector.charging_profile ? [existingConnector.charging_profile] : [];
          }
          
          const newProfiles = Array.isArray(connector.charging_profile) ? connector.charging_profile : [connector.charging_profile];
          newProfiles.forEach(profileId => {
            if (!existingConnector.charging_profile.includes(profileId)) {
              existingConnector.charging_profile.push(profileId);
            }
          });
        }
      } else {
        const connectorCopy = { ...connector };
        
        // Ensure arrays
        if (connectorCopy.tariff_ids && !Array.isArray(connectorCopy.tariff_ids)) {
          connectorCopy.tariff_ids = [connectorCopy.tariff_ids];
        } else if (!connectorCopy.tariff_ids) {
          connectorCopy.tariff_ids = [];
        }
        
        if (connectorCopy.charging_profile && !Array.isArray(connectorCopy.charging_profile)) {
          connectorCopy.charging_profile = [connectorCopy.charging_profile];
        } else if (!connectorCopy.charging_profile) {
          connectorCopy.charging_profile = [];
        }
        
        connectorMap.set(uuid, connectorCopy);
      }
    });
    
    // Convert back to array
    Connector_info_response.value = Array.from(connectorMap.values());
    //console.log("Test_Charging_Operation (unique):", Connector_info_response.value);

  } catch (error) {
    console.error('An error occurred:', error.message);
    return null;
  }
};
  
  //##########$$$$$$$$###########//##############$$$$#######// TEST CHARGING END //#########$$$$$$$$$$$$$$$$############//#####################//#####################//#####################
  
  //##########$$$$$$$$###########//##############$$$$#######// CHARGING TOOLS OPTIONS END //#########$$$$$$$$$$$$$$$$############//#####################//#####################//#####################
  
    //#####################//#####################// PREDICTION MODELS ALL NECESSARY CODE //#####################//#####################//#####################//#####################
    const prediction_function = async () => {
      try {
        const query = {
          chargepoint_name: Task_Prediction_name.value
        };
        //console.log("query", query);
        const apiUrl = `/api/prediction/`;
  
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          },
          body: JSON.stringify(query)
        };
  
        const response = await fetch(apiUrl, requestOptions);
        predicted_data.value = await response.json(); // Parse response body as JSON
        //console.log("predicted_data.value", predicted_data.value);
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null;
      }
    };
  
  
    const prediction_trigger = async () => {
      // Await the prediction function
      await prediction_function();
  
      // Ensure that predicted_data.value is available before proceeding
      if (!predicted_data.value) {
        console.error('No prediction data available');
        return;
      }
  
      // Extract dates, actual values, and predicted values
      predicted_dates.value = Object.keys(predicted_data.value);
      predicted_actualValues.value = predicted_dates.value.map(date => predicted_data.value[date]["Actual_values"]);
      predicted_predictedValues.value = predicted_dates.value.map(date => predicted_data.value[date]["Predicted_values"]);
  
      // Format the dates in YYYY-MM-DD
      formattedDates.value = predicted_dates.value.map(date => new Date(date).toISOString().split('T')[0]);
  
      //console.log('predicted_dates.value', predicted_dates.value);
      //console.log('predicted_actualValues.value', predicted_actualValues.value);
      //console.log('predicted_predictedValues.value', predicted_predictedValues.value);
      //console.log('formattedDates.value', formattedDates.value);
    };
  
    // Computed property for chart options
    const Task_Prediction_areaChart = computed(() => {
      const isDark = store.theme === 'dark' || store.isDarkMode;
      const isRtl = store.rtlClass === 'rtl';
  
      const forecast_Labels = formattedDates.value;
      return {
        chart: {
          height: 300,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ['#2196f3', '#eb3d26'],
        stroke: {
          width: [4, 4],
          curve: 'smooth',
        },
        fill: {
          opacity: [1, 0.55, 1],
        },
        labels: forecast_Labels,
        markers: {
          size: 0,
        },
        xaxis: {
          type: 'datetime',
          axisBorder: {
            color: isDark ? '#191e3a' : '#e0e6ed',
          },
        },
        yaxis: {
          title: {
            text: 'kWh Volume',
          },
          min: 0,
          opposite: isRtl,
          labels: {
            offsetX: isRtl ? -10 : 0,
          },
        },
        grid: {
          borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        tooltip: {
          shared: true,
          intersect: false,
          theme: isDark ? 'dark' : 'light',
          y: {
            formatter: (y) => {
              if (typeof y !== 'undefined') {
                return y.toFixed(0) + ' kWh';
              }
              return y;
            },
          },
        },
        legend: {
          itemMargin: {
            horizontal: 4,
            vertical: 8,
          },
        },
      };
    });
  
    // Computed property for chart series
    const Task_Prediction_areaChartSeries = computed(() => [
      {
        name: 'Actual Values',
        type: 'line',
        data: predicted_actualValues.value.map((value, index) => [new Date(predicted_dates.value[index]).getTime(), parseFloat(value.toFixed(1))]),
      },
      {
        name: 'Predicted Values',
        type: 'line',
        data: predicted_predictedValues.value.map((value, index) => [new Date(predicted_dates.value[index]).getTime(), parseFloat(value.toFixed(1))]),
      },
    ]);
  
    //#####################//#####################// TARRIF CODE //#####################//#####################//#####################//#####################
  
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
    const Task_1_response_active = ref([]);
    const Task_3_mergedDataRef = ref([]);
    const Task_3_updated_mergedDataRef = ref([]);
    const Task3_values = ref([]);
    const Task3_Timestamp_values = ref([]);
    // Define reactive references
  
    const Task_3_response = ref([]);
    const Task_9_response = ref([]);
    const Task_14_response = ref([]);
    const Task_18_response = ref([]);
    const Task_18_mergedDataRef = ref([]);
    const values = ref([]);
  
    const selectedTransaction = ref(null);
    const selectedUnit = ref('');
  
    const parameters = ref({});
  
    const selectedLocation = ref(null);
  
    const Connector_info_response = ref([]);
  
    // Function to check if a user exists
    const Task_1 = async () => {
      try {
        //const query = { transaction_status: 'Finished', // Filter by status
        //                fields: ['id_tag','start_transaction_timestamp','wh_meter_start', 'wh_meter_last_timestamp','wh_meter_last','transaction_status','connector'], // Key-value pair for the query parameter
        //           };
  
        const query = {
          transaction_status: 'Finished',//Started //Finished
          fields: ['id_tag,start_transaction_timestamp,wh_meter_start,wh_meter_last_timestamp,wh_meter_last,transaction_status,connector', 'connector__standard', 'connector__power_type', 'connector__chargepoint'],
        }
        //const apiUrl = `/api/user/?username=${username.value}`;
        const apiUrl = `/api/transaction/`;
  
        // Construct the URL with query parameters if provided
        //const queryString = new URLSearchParams(query || {}).toString();
        //const fullApiUrl = `${apiUrl}${queryString}/`; // Append query parameters
  
        const queryString = new URLSearchParams(query).toString();
        const fullApiUrl = `${apiUrl}?${queryString}`;
        //console.log('Task1 URL:', fullApiUrl)
  
  
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
        mergedDataRef.value = data
  
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null; // Return null in case of error
      }
    };
  
// Updated Task_1_Finished to filter finished transactions
// Updated Task_1_Finished to filter finished transactions
const Task_1_Finished = async () => {
    try {
        const query = {
            transaction_status: 'Finished',
            fields: 'transaction_id,id_tag,start_transaction_timestamp,wh_meter_start,wh_meter_last_timestamp,wh_meter_last,transaction_status,connector,connector__standard,connector__connector_status,connector__connectorid,connector__power_type,connector__chargepoint,connector__charging_profile,connector__tariff_ids'
        };

        const apiUrl = `/api/transaction/`;
        const queryString = new URLSearchParams(query).toString();
        const fullApiUrl = `${apiUrl}?${queryString}`;
        //console.log('Task1 Finished URL:', fullApiUrl);

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
        
        // Check if user is admin
        const isAdmin = Task_14_response.value && Task_14_response.value.length > 0 && 
                       Task_14_response.value[0].user__is_superuser;
        
        if (!isAdmin) {
            // Filter transactions to only include user's transactions
            const userIdTokens = await getUserIdTags();
            
            if (userIdTokens && userIdTokens.length > 0) {
                const filteredData = data.filter(transaction => 
                    userIdTokens.includes(transaction.id_tag)
                );
                
                //console.log(`Filtered finished transactions for non-admin user: ${filteredData.length} out of ${data.length}`);
                Task_1_response.value = filteredData;
            } else {
                //console.log('No ID tags found for user, showing no finished transactions');
                Task_1_response.value = [];
            }
        } else {
            //console.log('Admin user - showing all finished transactions');
            Task_1_response.value = data;
        }

    } catch (error) {
        console.error('An error occurred:', error.message);
        return null;
    }
};
  
  // Updated Task_1_Active to filter active transactions
const Task_1_Active = async () => {
    try {
        const query = {
            transaction_status: 'Started',
            fields: 'transaction_id,id_tag,start_transaction_timestamp,wh_meter_start,wh_meter_last_timestamp,wh_meter_last,transaction_status,connector,connector__standard,connector__connector_status,connector__connectorid,connector__power_type,connector__chargepoint'
        };

        const apiUrl = `/api/transaction/`;
        const queryString = new URLSearchParams(query).toString();
        const fullApiUrl = `${apiUrl}?${queryString}`;
        //console.log('Task1 Active URL:', fullApiUrl);

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
        
        // Check if user is admin
        const isAdmin = Task_14_response.value && Task_14_response.value.length > 0 && 
                       Task_14_response.value[0].user__is_superuser;
        
        if (!isAdmin) {
            // Filter transactions to only include user's transactions
            const userIdTokens = await getUserIdTags();
            
            if (userIdTokens && userIdTokens.length > 0) {
                const filteredData = data.filter(transaction => 
                    userIdTokens.includes(transaction.id_tag)
                );
                
                //console.log(`Filtered active transactions for non-admin user: ${filteredData.length} out of ${data.length}`);
                Task_1_response_active.value = filteredData;
            } else {
                //console.log('No ID tags found for user, showing no active transactions');
                Task_1_response_active.value = [];
            }
        } else {
            //console.log('Admin user - showing all active transactions');
            Task_1_response_active.value = data;
            console.log("Admin_Data",Task_1_response_active)
        }

    } catch (error) {
        console.error('An error occurred:', error.message);
        return null;
    }
};
  
  
    const Task_18 = async () => {
      try {
        const query = {
          username: username.value ,   //username.value, // Filter by status
          fields: ['idToken'], // Key-value pair for the query parameter
        };
  
        //alert(username.value)
        //const apiUrl = `/api/user/?username=${username.value}`;
        const apiUrl = `/api/idtag/`;
  
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
  
  
        Task_18_response.value = data
  
  
        const mergedData = await FetchTransactionValue(Task_18_response.value);
        Task_18_mergedDataRef.value = mergedData;
  
        //console.log('Task_18_mergedDataRef ??:', Task_18_mergedDataRef.value)
  
        const whMeterLast = Task_18_mergedDataRef.value.map(item => item.wh_meter_last);
        values.value = whMeterLast;
  
  
  
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null; // Return null in case of error
      }
    };
  
    const FetchTransactionValue = async (data) => {
      const apiUrl_connector = `/api/transaction/`;
      const connectorPromises18 = [];
  
      //alert(data.length)
      for (let ii = 0; ii < data.length; ii++) {
        // alert(ii)
        const query_connector = {
          transaction_id: data[ii].idToken,//,
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
      //console.log('connectorDataArray 18:', connectorDataArray18)
  
      return connectorDataArray18[0];
    };
  
    let socket_type_selection = ref([]);
    let tariff_amount = ref([]);
    // Enhanced Task_14 function to load user info AND primary ID tag
    const Task_14 = async () => {
      try {
        const query = {
          username: username.value, // Filter by status
          fields: ['user__username', 'user__first_name', 'user__last_name', 'user__email', 'user__is_superuser', 'tariff_preference', 'chargepoint_sockets','credit_balance'], // Key-value pair for the query parameter
        };

        const apiUrl = `/api/user`;
        const queryString = new URLSearchParams(query).toString();
        const fullApiUrl = `${apiUrl}?${queryString}`;
        //console.log('Task_14 URL:', fullApiUrl);

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
        Task_14_response.value = data;

        //console.log('Task14 user data fetched:', Task_14_response.value);

        // After successfully loading user data, get their primary ID tag
        if (data && data.length > 0 && data[0].user__username) {
          //console.log('🔄 Loading primary ID tag for user...');
          await getUserPrimaryIdTag(data[0].user__username);
        } else {
          console.warn('⚠️ No user data available to load ID tag');
        }

      } catch (error) {
        console.error('An error occurred in Task_14:', error.message);
        return null; // Return null in case of error
      }
    };
  
    ///////====####===========#######====####===========#######====#### PROFILE OVERVIEW TOOLS  START ===========#######====####===========#######====####===========#######====####===========#######====####===========#######
  
  function generateRandomString(length = 20) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:<>?';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }  
  
  const load_details = async () => {
  
  socket_type_selection.value = Task_14_response.value[0].chargepoint_sockets[0];
  tariff_amount.value = Task_14_response.value[0].tariff_preference;
  
  Tag_response_function()
  }
  
  
  let profile_save_button = ref(false);
  
  
  const showSaveButton = async () => {
  
  if (Task_14_response.value[0].chargepoint_sockets[0] !== socket_type_selection.value || Task_14_response.value[0].tariff_preference !== tariff_amount.value) {
    //console.log("Not Equal");
    profile_save_button.value = true;
  }
  
  if (Task_14_response.value[0].chargepoint_sockets[0] === socket_type_selection.value && Task_14_response.value[0].tariff_preference === tariff_amount.value) {
    //console.log("Equal");
    profile_save_button.value = false;
  }
  
  }
  
  const saveChanges = async () => {
  try {
    const updatedData = {
      chargepoint_sockets: [socket_type_selection.value],
      tariff_preference: tariff_amount.value
    };
  
    const apiUrl = `/api/user/${Task_14_response.value[0].user__username}/`;
    //console.log('PATCH URL:', apiUrl);
    //console.log('Updated Data:', updatedData);
  
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
    //console.log('PATCH User Response:', result);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
  
  //console.log("savechanges_ inside!")
  profile_save_button.value = false;
  
  Task_14();
  }
  
  let Tag_response =ref([]);
  const Tag_response_function = async ()=>{
  
    //console.log("Task_14_response.value.user__username",Task_14_response.value[0].user__username);
    
    try {
      const query = {
        username: Task_14_response.value[0].user__username,//Started //Finished //Active
        fields: ['friendly_name,expiry_date']
      }
      const apiUrl = `/api/idtag/`;
  
      // Construct the URL with query parameters if provided
      //const queryString = new URLSearchParams(query || {}).toString();
      //const fullApiUrl = `${apiUrl}${queryString}/`; // Append query parameters
  
      const queryString = new URLSearchParams(query).toString();
      const fullApiUrl = `${apiUrl}?${queryString}`;
      //console.log('idtag URL:', fullApiUrl)
  
  
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
      Tag_response.value = data
  
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null; // Return null in case of error
    }
  
  }
  
  /// POST -PATCH -DELETE ID TAg
  
  let createTagData = ref({ friendly_name: '', expiry_date: '' });
  
  let id_tag_fetch_selection=ref([]);//Selected in the list
  let id_token_for_patch=ref([]); // ID token for patching 
  let id_tag_selected_data=ref([]); // Fetched data to load in order to update
  
  let id_tag_delete_token=ref([]);
  let id_tag_fetch_delete_selection=ref([]);
  
  let id_tag_post_info=ref ([]);
  let id_tag_patch_info=ref ([]);
  
  // Find specific Id Token and data
  const tag_selected_fetch = async () => {
  
    try {
      const query = {
        username: Task_14_response.value[0].user__username,
        friendly_name: id_tag_fetch_selection.value,//Started //Finished //Active
        fields: ['idToken,friendly_name,expiry_date']
      }
      const apiUrl = `/api/idtag/`;
  
      // Construct the URL with query parameters if provided
      //const queryString = new URLSearchParams(query || {}).toString();
      //const fullApiUrl = `${apiUrl}${queryString}/`; // Append query parameters
  
      const queryString = new URLSearchParams(query).toString();
      const fullApiUrl = `${apiUrl}?${queryString}`;
      //console.log('id_token_for_patch URL:', fullApiUrl)
  
  
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
      id_tag_selected_data.value = data[0]
      //console.log("id_tag_selected_data",id_tag_selected_data.value)
  
      id_token_for_patch.value=id_tag_selected_data.value.idToken
      //console.log("id_token_for_patch",id_token_for_patch.value)
  
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null; // Return null in case of error
    }
  
  }
  
  // Create Charging Tag
  const create_Id_Tag = async () => {
  
    
    try {
        const query = {
          idToken: generateRandomString(),
          user: Task_14_response.value[0].user__username,
          friendly_name: createTagData.value.friendly_name,
          expiry_date: createTagData.value.expiry_date
          //revoked: true
  
        };
  
        //console.log("query", query);
        const apiUrl = `/api/idtag/`;
  
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          },
          body: JSON.stringify(query)
        };
  
        const response = await fetch(apiUrl, requestOptions);
        id_tag_post_info.value = await response.json(); // Parse response body as JSON
        //console.log("id_tag_post_info.value", id_tag_post_info.value);
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null;
      }
  
      Tag_response_function();
  
  };
  
  
  
  // Update Charging Tag
  const update_Id_Tag = async () => {
    try {
        const query = {
          friendly_name: id_tag_selected_data.value.friendly_name,
          expiry_date: id_tag_selected_data.value.expiry_date
          //revoked: true
  
        };
  
        //console.log("query", query);
        const apiUrl = `/api/idtag/${id_token_for_patch.value}/`;
  
        const requestOptions = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          },
          body: JSON.stringify(query)
        };
  
        const response = await fetch(apiUrl, requestOptions);
        id_tag_patch_info.value = await response.json(); // Parse response body as JSON
        //console.log("id_tag_patch_info.value", id_tag_patch_info.value);
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null;
      }
  
      
      Tag_response_function();
  };
  
  
  
  const tag_selected_for_delete_fetch = async () => {
  
  try {
    const query = {
      username: Task_14_response.value[0].user__username,
      friendly_name: id_tag_fetch_delete_selection.value,//Started //Finished //Active
      fields: ['idToken']
    }
    const apiUrl = `/api/idtag/`;
  
    // Construct the URL with query parameters if provided
    //const queryString = new URLSearchParams(query || {}).toString();
    //const fullApiUrl = `${apiUrl}${queryString}/`; // Append query parameters
  
    const queryString = new URLSearchParams(query).toString();
    const fullApiUrl = `${apiUrl}?${queryString}`;
    //console.log('id_token_for_patch URL:', fullApiUrl)
  
  
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
    id_tag_delete_token.value = data[0]
    //console.log("id_tag_delete_token_FETCH",id_tag_delete_token.value.idToken)
  
  
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null; // Return null in case of error
    }
  
    
  
  
  }
  
  
  // Delete Charging Tag
  const deleteChargingTag = async () => {
    //console.log("AAAAAAAA now ",id_tag_delete_token.value.idToken)
  
    try {
        const apiUrl = `/api/idtag/${id_tag_delete_token.value.idToken}/`;
        const requestOptions = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          }
        };
  
        const response = await fetch(apiUrl, requestOptions);
        //console.log("DELETE response", response);
  
        if (!response.ok) {
          throw new Error(`Failed to delete tariff element. Status: ${response.status}`);
        }
  
        // Check if the response has a body
        let result;
        try {
          result = await response.json();
          //console.log('DELETE location Response:', result);
        } catch (e) {
          if (response.status !== 204) {
            throw e;
          }
          //console.log('No content returned from DELETE request.');
        }
  
        // Perform any additional actions after successful deletion
        //console.log("Tariff element deleted successfully.");
  
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
  
  
      Tag_response_function();
  
  };
  
  
  
  ///////====####===========#######====####=== PROFILE OVERVIEW TOOLS  END========#######====####===========#######====####===========#######====####===========#######====####===========#######====####===========#######
  
  //--=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=-  ACCOUNT MANAGEMENT TOOLS  START-=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^
  /// POST -PATCH -DELETE ID TAg
  
  let Account_response=ref([]);
  
  let createAccountData = ref([]);
  let account_post_info=ref ([]);
  
  let account_fetch_selection=ref([]);//Selected in the list
  let account_selected_data=ref([]); // Fetched data to load in order to update
  let account_patch_info=ref ([]);
  
  let account_fetch_delete_selection=ref([]);
  
  
  
  
  
  const Account_response_function= async () => {
    try {
      const query = {
        
        fields: ['user__username,user__password,user__first_name,user__last_name,user__email,user__is_superuser,user__is_active,chargepoint_sockets,tariff_preference,credit_balance']
      }
      const apiUrl = `/api/user/`;
  
      const queryString = new URLSearchParams(query).toString();
      const fullApiUrl = `${apiUrl}?${queryString}`;
      //console.log('idtag URL:', fullApiUrl)
  
  
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
      Account_response.value = data
  
      //console.log("Account_response.value",Account_response.value)
  
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null; // Return null in case of error
    }
  
  
  }
  
  // Create Account
  const create_Account = async () => {
  
    //console.log("account_selected_data FOR POST",account_selected_data)
    try {
      const response = await axios.post('/api/user/create/', {
        username: createAccountData.value.user__username,
        password: createAccountData.value.user__password,
        first_name: createAccountData.value.user__first_name,
        last_name: createAccountData.value.user__last_name,
        email: createAccountData.value.user__email
      });
      
      //console.log('Account created successfully:', response.data);
      Account_response_function();
    } catch (error) {
      console.error('Error creating account:', error.response ? error.response.data : error.message);
    }
  };
  
  
  // Find specific Id Token and data
  const account_selected_fetch = async () => {
  
    try { 
      const query = {
        username: account_fetch_selection.value,
        fields: ['user__username,user__password,user__first_name,user__last_name,user__email,user__is_superuser,user__is_active,chargepoint_sockets,tariff_preference,credit_balance']
      }
      const apiUrl = `/api/user/`;
  
  
      const queryString = new URLSearchParams(query).toString();
      const fullApiUrl = `${apiUrl}?${queryString}`;
      //console.log('Account_for_patch URL:', fullApiUrl)
  
  
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
      account_selected_data.value = data[0]
  
      const temp=account_selected_data.value.chargepoint_sockets;
  
      account_selected_data.value.chargepoint_sockets=temp[0]
  
  
     //console.log("account_selected_data",account_selected_data.value)
      //account_selected_data.value.chargepoint_sockets=chargepoint_sockets.value[0].chargepoint_sockets;
      //console.log("account_selected_data.value.chargepoint_sockets",account_selected_data.value.chargepoint_sockets)
      
  
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null; // Return null in case of error
    }
  
  }
  
  
  // Update Charging Tag
  const update_Account = async () => {
    //console.log("account_selected_data FOR UPDATE", account_selected_data);
  
    // Check if the necessary data is available
    if (!account_selected_data?.value || !token?.value) {
      console.error("Required data is missing: account_selected_data or token is undefined");
      return;
    }
  
    // Construct the query payload
    const query = {
      user: {
        first_name: account_selected_data.value.user__first_name,
        last_name: account_selected_data.value.user__last_name,
        email: account_selected_data.value.user__email,
        is_superuser: account_selected_data.value.user__is_superuser,
        is_active: account_selected_data.value.user__is_active
      },
      chargepoint_sockets: account_selected_data.value.chargepoint_sockets ? [account_selected_data.value.chargepoint_sockets] : [],
      credit_balance: account_selected_data.value.credit_balance,
      tariff_preference: account_selected_data.value.tariff_preference
    };
  
    //console.log("ACCOUNT query", query);
  
    const apiUrl = `/api/user/${account_fetch_selection.value}/`;
  
    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token.value}`,
      },
      body: JSON.stringify(query)
    };
  
    try {
      const response = await fetch(apiUrl, requestOptions);
      
      // Check if the response is OK
      if (!response.ok) {
        console.error(`Failed to update account: ${response.status} ${response.statusText}`);
        return null;
      }
      
      // Parse the JSON response
      account_patch_info.value = await response.json();
      //console.log("account_patch_info.value", account_patch_info.value);
  
      // Call the response handler function after successful patch
      Account_response_function();
  
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null;
    }
  };
  
  
  
  // Delete Charging Tag
  const delete_Account= async () => {
    //console.log("For deletion Now ",account_fetch_delete_selection.value)
  
    try {
        const apiUrl = `/api/user/${account_fetch_delete_selection.value}/`;
        const requestOptions = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          }
        };
  
        const response = await fetch(apiUrl, requestOptions);
        //console.log("DELETE response", response);
  
        if (!response.ok) {
          throw new Error(`Failed to delete tariff element. Status: ${response.status}`);
        }
  
        // Check if the response has a body
        let result;
        try {
          result = await response.json();
          //console.log('DELETE location Response:', result);
        } catch (e) {
          if (response.status !== 204) {
            throw e;
          }
          //console.log('No content returned from DELETE request.');
        }
  
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
  
  
      Account_response_function();
  
  };
  
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Add these refs at the top with your other reactive data
const dsoSignal = ref({
  id: 1,
  uuName: 'event_CapacityLimit',
  locationName: '',
  transformerID: '',
  longitude: '23.727539',  // Note: longitude first in the array
  latitude: '37.983810',   // latitude second
  eventDate: new Date().toISOString().split('T')[0],
  eventTime: '12:00:00',
  sync: true,  // Added sync field
  periods: []
});

const isDsoSignalValid = ref(false);

// Helper function to convert Athens datetime to Unix timestamp
const athensDateTimeToTimestamp = (date, time) => {
  try {
    // Combine date and time strings
    const dateTimeString = `${date}T${time}`;
    console.log('🕐 Converting datetime:', dateTimeString);
    
    const dateTime = new Date(dateTimeString);
    
    // Convert to Athens timezone (UTC+2 or UTC+3 depending on DST)
    // For simplicity, we'll use the browser's interpretation
    // In production, consider using a library like date-fns-tz or moment-timezone
    const timestamp = Math.floor(dateTime.getTime() / 1000);
    
    console.log(`✅ Timestamp result: ${dateTimeString} -> ${timestamp}`);
    return timestamp;
  } catch (error) {
    console.error('❌ Error converting datetime to timestamp:', error);
    return 0;
  }
};

// Helper function to parse value (supports both single values and arrays)
const parseValueInput = (valueText) => {
  console.log('📊 Parsing value input:', valueText);
  const trimmed = valueText.trim();
  
  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    // Parse as array: [value1, value2]
    try {
      const inner = trimmed.slice(1, -1);
      const parts = inner.split(',').map(p => p.trim());
      
      if (parts.length === 2) {
        const result = [parseFloat(parts[0]), parseFloat(parts[1])];
        console.log('✅ Parsed as array:', result);
        return result;
      } else {
        throw new Error('Array must contain exactly 2 values');
      }
    } catch (error) {
      console.error('❌ Array parsing error:', error);
      throw new Error(`Invalid array format: ${error.message}`);
    }
  } else {
    // Parse as single value
    const value = parseFloat(trimmed);
    if (isNaN(value)) {
      console.error('❌ Invalid number:', trimmed);
      throw new Error('Invalid number format');
    }
    console.log('✅ Parsed as single value:', value);
    return value;
  }
};

// Generate UUID v4
const generateUUID = () => {
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
  console.log('🆔 Generated UUID:', uuid);
  return uuid;
};

// Add a new period
const addPeriod = () => {
  const now = new Date();
  const today = now.toISOString().split('T')[0];
  const currentTime = now.toTimeString().split(' ')[0];
  
  console.log('➕ Adding new period');
  dsoSignal.value.periods.push({
    startDate: today,
    startTime: currentTime,
    endDate: today,
    endTime: currentTime,
    value: '0.0'
  });
  console.log('📋 Total periods:', dsoSignal.value.periods.length);
};

// Remove the last period
const removeLastPeriod = () => {
  if (dsoSignal.value.periods.length > 0) {
    console.log('➖ Removing last period');
    dsoSignal.value.periods.pop();
    console.log('📋 Total periods:', dsoSignal.value.periods.length);
  } else {
    console.log('⚠️ No periods to remove');
  }
};

// Updated validateDsoSignal function
const validateDsoSignal = () => {
  console.log('🔍 Starting validation...');
  console.log('📝 Current dsoSignal data:', JSON.stringify(dsoSignal.value, null, 2));
  
  try {
    // Check required fields
    if (!dsoSignal.value.id || dsoSignal.value.id < 1) {
      throw new Error('Signal ID must be a positive number');
    }
    console.log('✅ ID valid:', dsoSignal.value.id);
    
    if (!dsoSignal.value.locationName.trim()) {
      throw new Error('Location Name is required');
    }
    console.log('✅ Location Name valid:', dsoSignal.value.locationName);
    
    if (!dsoSignal.value.transformerID.trim()) {
      throw new Error('Transformer ID is required');
    }
    console.log('✅ Transformer ID valid:', dsoSignal.value.transformerID);
    
    // Validate coordinates
    const lon = parseFloat(dsoSignal.value.longitude);
    const lat = parseFloat(dsoSignal.value.latitude);
    
    if (isNaN(lon) || lon < -180 || lon > 180) {
      throw new Error('Longitude must be between -180 and 180');
    }
    console.log('✅ Longitude valid:', lon);
    
    if (isNaN(lat) || lat < -90 || lat > 90) {
      throw new Error('Latitude must be between -90 and 90');
    }
    console.log('✅ Latitude valid:', lat);
    
    // Validate periods
    if (dsoSignal.value.periods.length === 0) {
      throw new Error('At least one period is required');
    }
    console.log('✅ Periods count valid:', dsoSignal.value.periods.length);
    
    // Validate each period
    for (let i = 0; i < dsoSignal.value.periods.length; i++) {
      const period = dsoSignal.value.periods[i];
      console.log(`🔍 Validating period ${i + 1}:`, period);
      
      if (!period.startDate || !period.endDate) {
        throw new Error(`Period ${i + 1}: Start and end dates are required`);
      }
      
      try {
        parseValueInput(period.value);
      } catch (error) {
        throw new Error(`Period ${i + 1}: ${error.message}`);
      }
      
      const startTimestamp = athensDateTimeToTimestamp(period.startDate, period.startTime);
      const endTimestamp = athensDateTimeToTimestamp(period.endDate, period.endTime);
      
      if (endTimestamp <= startTimestamp) {
        throw new Error(`Period ${i + 1}: End time must be after start time`);
      }
      console.log(`✅ Period ${i + 1} valid`);
    }
    
    isDsoSignalValid.value = true;
    console.log('✅✅✅ Validation successful! DSO Signal is ready to submit.');
    alert('Validation successful! DSO Signal is ready to submit.');
    
  } catch (error) {
    isDsoSignalValid.value = false;
    console.error('❌❌❌ Validation Error:', error.message);
    alert(`Validation Error: ${error.message}`);
  }
};

// Submit DSO Signal
const submitDsoSignal = async () => {
  console.log('🚀 Starting DSO Signal submission...');
  
  try {
    validateDsoSignal();
    
    if (!isDsoSignalValid.value) {
      console.log('⚠️ Validation failed, aborting submission');
      return;
    }
    
    console.log('📦 Building payload...');
    const payload = {
      id: dsoSignal.value.id,
      uuId: generateUUID(),
      uuName: dsoSignal.value.uuName,
      event_timestamp: athensDateTimeToTimestamp(
        dsoSignal.value.eventDate, 
        dsoSignal.value.eventTime
      ),
      locationCoords: [
        dsoSignal.value.longitude,
        dsoSignal.value.latitude
      ],
      locationName: dsoSignal.value.locationName,
      sync: dsoSignal.value.sync,
      transformerID: dsoSignal.value.transformerID,
      duration: dsoSignal.value.periods.length,
      period: dsoSignal.value.periods.map(period => ({
        timeslot_start: athensDateTimeToTimestamp(period.startDate, period.startTime),
        timeslot_end: athensDateTimeToTimestamp(period.endDate, period.endTime),
        value: parseValueInput(period.value)
      }))
    };
    
    console.log('📤 Payload to submit:', JSON.stringify(payload, null, 2));
    
    const apiUrl = '/api/dso/signal/';
    console.log('🌐 API URL:', apiUrl);
    console.log('🔑 Token present:', !!token.value);
    
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token.value}`,
      },
      body: JSON.stringify(payload)
    };
    
    console.log('📡 Sending request...');
    console.log('Request headers:', requestOptions.headers);
    
    const response = await fetch(apiUrl, requestOptions);
    
    console.log('📥 Response status:', response.status);
    console.log('📥 Response status text:', response.statusText);
    console.log('📥 Response headers:', Object.fromEntries(response.headers.entries()));
    
    if (!response.ok) {
      let errorData;
      const contentType = response.headers.get('content-type');
      console.log('📥 Response content-type:', contentType);
      
      try {
        if (contentType && contentType.includes('application/json')) {
          errorData = await response.json();
          console.error('❌ API Error Response (JSON):', JSON.stringify(errorData, null, 2));
        } else {
          const errorText = await response.text();
          console.error('❌ API Error Response (Text):', errorText);
          errorData = { message: errorText };
        }
      } catch (parseError) {
        console.error('❌ Error parsing error response:', parseError);
        errorData = { message: `Server error: ${response.status} ${response.statusText}` };
      }
      
      throw new Error(errorData.message || `Server error: ${response.status}`);
    }
    
    const result = await response.json();
    console.log('✅✅✅ DSO Signal created successfully!');
    console.log('Response data:', JSON.stringify(result, null, 2));
    
    alert('DSO Signal created successfully!');
    
    // Optionally reset the form
    resetDsoSignal();
    
  } catch (error) {
    console.error('❌❌❌ Error submitting DSO Signal:', error);
    console.error('Error stack:', error.stack);
    alert(`Failed to create DSO Signal: ${error.message}`);
  }
};

// Reset DSO Signal form
const resetDsoSignal = () => {
  console.log('🔄 Resetting DSO Signal form...');
  dsoSignal.value = {
    id: 1,
    uuName: 'event_CapacityLimit',
    locationName: '',
    transformerID: '',
    longitude: '23.727539',
    latitude: '37.983810',
    eventDate: new Date().toISOString().split('T')[0],
    eventTime: '12:00:00',
    sync: true,
    periods: []
  };
  isDsoSignalValid.value = false;
  console.log('✅ Form reset complete');
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  //+__+_+_+_+_+_+_+_+_+_+_+___++__+_+_+_+_+_+_+_+_+_+_+ CHARGING PROFILE START___++__+_+_+_+_+_+_+_+_+_+_+___++__+_+_+_+_+_+_+_+_+_+_+___+
  
  
  
  
  const chargingProfileData = ref({
        stack_level: null,
        chargingprofile_purpose: null,
        chargingprofile_kind: null,
        charging_rate_unit: null,
        recurrency_kind: null,
        valid_from: null,
        valid_to: null,
        start_schedule: null,
        duration: null,
        min_charging_rate: null,
  
        chargingschedule_period: [
          {
            startPeriod: null,
            limit: null,
            number_phases: null,
          },
        ],
        
  
  
  
  
  
  
      });
  
    let chargingProfileData_response=ref([]);
  
    const chargingProfile_response_function = async () => {
    try {
      const apiUrl = `/api/chargingprofile16/`;
  
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token.value}`, // Ensure `token` is correctly initialized and has the required value
        },
      };
  
      const response = await fetch(apiUrl, requestOptions);
  
      if (!response.ok) {
        // Handle non-2xx responses
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json(); // Parse response body as JSON
      chargingProfileData_response.value = data; // Assign the response to the reactive variable
  
      //console.log("chargingProfileData_response.value", chargingProfileData_response.value);
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null; // Return null in case of error
    }
  };
  
  
    let charging_profile_post_info=ref([]);
    // Method to handle form submission for creating a charging profile
    const createChargingProfile = async () => {
  
      try {
  
  
      const query = {
  
        //chargingProfileData.value.
  
        chargingschedule_period: chargingProfileData.value.chargingschedule_period,
        stack_level:chargingProfileData.value.stack_level,
        chargingprofile_purpose: chargingProfileData.value.chargingprofile_purpose,
        chargingprofile_kind: chargingProfileData.value.chargingprofile_kind,
        recurrency_kind: chargingProfileData.value.recurrency_kind,
        valid_from: chargingProfileData.value.valid_from,
        valid_to: chargingProfileData.value.valid_to,
        duration: chargingProfileData.value.duration,
        start_schedule: chargingProfileData.value.start_schedule,
        charging_rate_unit: chargingProfileData.value.charging_rate_unit,
        min_charging_rate: chargingProfileData.value.min_charging_rate
      };
  
      //console.log("query", query);
      const apiUrl = `/api/chargingprofile16/`;
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token.value}`,
        },
        body: JSON.stringify(query)
      };
  
      const response = await fetch(apiUrl, requestOptions);
      charging_profile_post_info.value = await response.json(); // Parse response body as JSON
      //console.log("charging_profile_post_info.value", charging_profile_post_info.value);
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null;
    }
  
  
      chargingProfile_response_function();
  
  
  
    };
  
  
  //  function isValidPeriod(period) {
  //  return period.startPeriod != null && period.limit != null && period.number_phases != null;
  //}
  
  
  
  
    // Method to add a new schedule period to the chargingschedule_period array
    const addSchedulePeriod = () => {
      chargingProfileData.value.chargingschedule_period.push({
        startPeriod: null,
        limit: null,
        number_phases: null,
      });
    };
  
    // Method to remove a schedule period by index
    const removeSchedulePeriod = (index) => {
      chargingProfileData.value.chargingschedule_period.splice(index, 1);
    };
  
  
  let charging_profile_id_selection=ref([]);
  let charging_profile_selected_data=ref([]);
  let charging_profile_selected_post_info=ref([]);
  
  
  
  // Find specific Id Token and data
  const ChargingProfile_selected_fetch = async () => {
  
    try { 
      //const query = {
      //  username: account_fetch_selection.value,
      //  fields: ['user__username,user__password,user__first_name,user__last_name,user__email,user__is_superuser,user__is_active,chargepoint_sockets,tariff_preference,credit_balance']
      //}
      const apiUrl = `/api/chargingprofile16/${charging_profile_id_selection.value}/`;
  []
  
      //const queryString = new URLSearchParams(query).toString();
      //const fullApiUrl = `${apiUrl}?${queryString}`;
      ////console.log('Account_for_patch URL:', fullApiUrl)
      const fullApiUrl = `${apiUrl}`;
  
  
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
      charging_profile_selected_data.value = data
  
      //console.log("charging_profile_selected_data",charging_profile_selected_data.value)
      ////console.log("charging_profile_selected_data PERIODS",charging_profile_selected_data.value.chargingschedule_period[0])
  
      //let temp=charging_profile_selected_data.value.chargingschedule_period[0];
  
      ////console.log("temp",temp.value)
  
      //charging_profile_selected_data.value.chargingschedule_period=temp;
  
         
  
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null; // Return null in case of error
    }
  
  }
  
  
  
  
  
  
  // Method to add a new schedule period to the chargingschedule_period array
    const add_Selected_SchedulePeriod = () => {
      charging_profile_selected_data.value.chargingschedule_period.push({
        startPeriod: null,
        limit: null,
        number_phases: null,
      });
    };
  
    // Method to remove a schedule period by index
    const remove_Selected_SchedulePeriod = (index) => {
      charging_profile_selected_data.value.chargingschedule_period.splice(index, 1);
    };
  
  
    const update_ChargingProfile = async () => {
  
      try {
        //console.log("THE scehdule", charging_profile_selected_data.value.start_schedule)
  
      const query = {
  
        //charging_profile_selected_data.value.
  
        chargingschedule_period: charging_profile_selected_data.value.chargingschedule_period,
        stack_level:charging_profile_selected_data.value.stack_level,
        chargingprofile_purpose: charging_profile_selected_data.value.chargingprofile_purpose,
        chargingprofile_kind: charging_profile_selected_data.value.chargingprofile_kind,
        recurrency_kind: charging_profile_selected_data.value.recurrency_kind,
        valid_from: charging_profile_selected_data.value.valid_from,
        valid_to: charging_profile_selected_data.value.valid_to,
        duration: charging_profile_selected_data.value.duration,
        start_schedule: charging_profile_selected_data.value.start_schedule,
        charging_rate_unit: charging_profile_selected_data.value.charging_rate_unit,
        min_charging_rate: charging_profile_selected_data.value.min_charging_rate
      };
  
      //console.log("query", query);
      const apiUrl = `/api/chargingprofile16/${charging_profile_id_selection.value}/`;
  
      const requestOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token.value}`,
        },
        body: JSON.stringify(query)
      };
  
      const response = await fetch(apiUrl, requestOptions);
      charging_profile_selected_post_info.value = await response.json(); // Parse response body as JSON
      //console.log("charging_profile_selected_post_info.value", charging_profile_selected_post_info.value);
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null;
    }
  
  
      chargingProfile_response_function();
  };
  
  
  
  let charging_profile_delete_selection=ref([]);
  
  // Delete Charging Tag
  const delete_charging_profile= async () => {
  
    try {
        const apiUrl = `/api/chargingprofile16/${charging_profile_delete_selection.value}/`;
        const requestOptions = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          }
        };
  
        const response = await fetch(apiUrl, requestOptions);
        //console.log("DELETE response", response);
  
        if (!response.ok) {
          throw new Error(`Failed to delete tariff element. Status: ${response.status}`);
        }
  
        // Check if the response has a body
        let result;
        try {
          result = await response.json();
          //console.log('DELETE location Response:', result);
        } catch (e) {
          if (response.status !== 204) {
            throw e;
          }
          //console.log('No content returned from DELETE request.');
        }
  
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
  
  
      chargingProfile_response_function();
  
  };
  
  
  
//############################## SET CHARGING PROFILE ON CONNECTOR #########################################  
  
  
  
  let uuid_selection_charging_profile = ref([]);
let uuid_charging_profile_array = ref([]);

const connector_uuid_finder_charging_profile = async () => {
  try {
    const query = {
      connector_id: Connector_ID_selection.value,
      chargepoint_id: Connector_chargepoint_selection.value,
      fields: ['uuid', 'charging_profile'] // Corrected field name
    };

    const queryString = new URLSearchParams(query).toString();
    const apiUrl = `/api/connector/`;
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

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API error: ${errorText}`);
      return null;
    }

    const data = await response.json();
    uuid_selection_charging_profile.value = data[0]?.uuid || null;
    uuid_charging_profile_array.value = Array.isArray(data[0]?.charging_profile) ? data[0].charging_profile : [];

    //console.log("Fetched data:", data);
    //console.log("uuid_selection_charging_profile:", uuid_selection_charging_profile.value);

    if (uuid_selection_charging_profile.value) {
      patch_set_connector_charging_profile();
    } else {
      console.warn("uuid_selection_charging_profile is not yet set!");
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
    return null;
  }
};

// Charging Profile Test
let patch_set_connector_charging_profile_info = ref([]);

const patch_set_connector_charging_profile = async () => {
  //console.log("uuid_selection_charging_profile.value:", uuid_selection_charging_profile.value);

  //console.log("charging_profile_id_selection",charging_profile_id_selection.value)
  //console.log("PATCHING! uuid_charging_profile_array.value:", uuid_charging_profile_array.value);

 // if (!uuid_charging_profile_array.value || !Array.isArray(uuid_charging_profile_array.value)) {
 //   uuid_charging_profile_array.value = [];
 // }

  if (charging_profile_id_selection.value) {

      
      //const index = uuid_charging_profile_array.value.indexOf(charging_profile_id_selection.value);
      const index = uuid_charging_profile_array.value
                    .map(item => Number(item))  // Converts all elements to numbers
                    .indexOf(Number(charging_profile_id_selection.value));  // Converts the selected value to a number and checks its index

      //console.log("index_result",index)
      if (index !== -1) {
        // Replace existing value
        uuid_charging_profile_array.value[index] = charging_profile_id_selection.value;
        //console.log(`Replaced existing charging profile at index ${index}`);
      } else {
        // Append new value
        uuid_charging_profile_array.value.push(charging_profile_id_selection.value);
        //console.log("Appended new charging profile");
      }
    } else {
      console.warn("charging_profile_id_selection is undefined");
    }


  try {
    const query = {
      charging_profile: uuid_charging_profile_array.value
    };

    //console.log("query", query);
    const apiUrl = `/api/connector/${uuid_selection_charging_profile.value}/`;
    //console.log("PATCHING APIURL CHARGING PROFILE,", apiUrl);

    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token.value}`,
      },
      body: JSON.stringify(query)
    };

    const response = await fetch(apiUrl, requestOptions);
    patch_set_connector_charging_profile_info.value = await response.json();
    //console.log("patch_set_connector_charging_profile_info.value", patch_set_connector_charging_profile_info.value);
  } catch (error) {
    console.error('An error occurred:', error.message);
    return null;
  }

  Transaction_Options();
  chargingProfile_response_function();
  Test_Charging_Operation();
};

//############################## OCPP Porfile  ON CONNECTOR #########################################    
  let set_charging_profile_info=ref([]);
  
    const Set_Charging_Profile =async () => {
      
      try {
        const query = {
          chargepoint_id: Connector_chargepoint_selection.value,
          sync: true,
          connector_id:Connector_ID_selection.value,
          charging_profile_id:charging_profile_id_selection.value
        };
        //console.log("query", query);
        const apiUrl = `/api/ocpp16/setchargingprofile/`;
  
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          },
          body: JSON.stringify(query)
        };
  
        const response = await fetch(apiUrl, requestOptions);
        set_charging_profile_info.value = await response.json(); // Parse response body as JSON
        //console.log("set_charging_profile_info.value", set_charging_profile_info.value);
      } catch (error) {
        console.error('An error occurred:', error.message);
        //showStopNotification("Failed to stop transaction.");
        return null;
      }
  
      connector_uuid_finder_charging_profile();
      
  
  };
  
  //############################## CLEAR CHARGING PROFILE ON CONNECTOR #########################################  
  
  let patch_clear_connector_charging_profile_info=ref([]);
    const patch_clear_connector_charging_profile =async () => {
      
      try {
  
        const idToRemove = parseInt(charging_profile_id_selection.value, 10);
        //console.log(" THE charging_profile_id_selection ",charging_profile_id_selection.value)
        //console.log(" THE uuid_selection__clear_charging_profile_array ",uuid_selection__clear_charging_profile_array.value)

        const index = uuid_selection__clear_charging_profile_array.value.indexOf(idToRemove);
  
        //console.log("THE  ARRAY",uuid_selection__clear_charging_profile_array.value);
  
        if (index > -1) {
        // Use splice to remove the element
        uuid_selection__clear_charging_profile_array.value.splice(index, 1);
        }
  
        
        //console.log("THE UPDATED ARRAY",uuid_selection__clear_charging_profile_array.value);
        const query = {
          charging_profile:uuid_selection__clear_charging_profile_array.value
        };
  
        //console.log("query", query);
        const apiUrl = `/api/connector/${uuid_selection__clear_charging_profile.value}/`;
  
        const requestOptions = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          },
          body: JSON.stringify(query)
        };
  
        const response = await fetch(apiUrl, requestOptions);
        patch_clear_connector_charging_profile_info.value = await response.json(); // Parse response body as JSON
        //console.log("patch_clear_connector_charging_profile_info.value", patch_clear_connector_charging_profile_info.value);
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null;
      }
  
    Transaction_Options();
    chargingProfile_response_function();
    Test_Charging_Operation();
  
  
  };
  
  
  let uuid_selection__clear_charging_profile = ref([]);
  let uuid_selection__clear_charging_profile_array=ref([]);
  const connector_uuid_finder_clear_charging_profile = async () => {
  
    try {
      const query = {
        connector_id :Connector_ID_selection.value,
        chargepoint_id: Connector_chargepoint_selection.value,
        fields: ['uuid,charging_profile']
      };
  
      const queryString = new URLSearchParams(query).toString();
      const apiUrl = `/api/connector/`;
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
      
      // Check if response is OK (status 200-299)
      if (!response.ok) {
        const errorText = await response.text();  // Capture error message
        console.error(`API error: ${errorText}`);
        return null;
      }
  
      // Parse the JSON data if response is OK
      const data = await response.json();
      uuid_selection__clear_charging_profile.value = data[0].uuid;
      uuid_selection__clear_charging_profile_array.value=data[0].charging_profile;
      //console.log("Fetched data:", data);
      //console.log("uuid_selection__clear_charging_profile!", uuid_selection__clear_charging_profile.value);
      
  
    } catch (error) {
      console.error('An error occurred:', error.message);
      return null;
    }
    patch_clear_connector_charging_profile();
    
  };
  
  
  let Clear_Charging_Profile_info=ref([]);
  const Clear_Charging_Profile =async () => {
      
    try {
      const query = {
        chargepoint_id: Connector_chargepoint_selection.value,
        sync: true,
        connector_id:Connector_ID_selection.value,
        charging_profile_id:charging_profile_id_selection.value,
  
        charging_profile_purpose_type:"TxDefaultProfile"
      };
  
      //console.log("query", query);
      const apiUrl = `/api/ocpp16/clearchargingprofile/`;
  
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token.value}`,
        },
        body: JSON.stringify(query)
      };
  
      const response = await fetch(apiUrl, requestOptions);
      Clear_Charging_Profile_info.value = await response.json(); // Parse response body as JSON
      //console.log("Clear_Charging_Profile_info.value", Clear_Charging_Profile_info.value);
    } catch (error) {
      console.error('An error occurred:', error.message);
      //showStopNotification("Failed to stop transaction.");
      return null;
    }
  
    connector_uuid_finder_clear_charging_profile();
    
  
    //showStopNotification("Charging completed.");
  };
  
  
  
  
  function updateDateTime_from(field, value) {
    if (!value) {
      this.charging_profile_selected_data[field] = null; // Handle empty values
      return;
    }
  
    // Convert "YYYY-MM-DDTHH:MM" from the datetime-local input back to ISO with microseconds
    const d = new Date(value);
    if (isNaN(d)) {
      console.error("Invalid date input:", value);
      return;
    }
    //console.log("Update field: ",this.charging_profile_selected_data[field])
    //console.log("Update Field to this: ",d.toISOString().replace(".000Z", ".000000Z"))
    // Update the model in the correct JSON format
    this.charging_profile_selected_data[field] = d.toISOString().replace(".000Z", ".000001Z");
    // Ensure there's no redundant period
    //this.charging_profile_selected_data[field] =  d.toISOString().replace("..", ".");
    charging_profile_selected_data.valid_from=this.charging_profile_selected_data[field]
  }
  
  function updateDateTime_to(field, value) {
    if (!value) {
      this.charging_profile_selected_data[field] = null; // Handle empty values
      return;
    }
  
    // Convert "YYYY-MM-DDTHH:MM" from the datetime-local input back to ISO with microseconds
    const d = new Date(value);
    if (isNaN(d)) {
      console.error("Invalid date input:", value);
      return;
    }
    //console.log("Update field: ",this.charging_profile_selected_data[field])
    //console.log("Update Field to this: ",d.toISOString().replace(".000Z", ".000000Z"))
    // Update the model in the correct JSON format
    this.charging_profile_selected_data[field] = d.toISOString().replace(".000Z", ".000001Z");
    // Ensure there's no redundant period
    //this.charging_profile_selected_data[field] =  d.toISOString().replace("..", ".");
    charging_profile_selected_data.valid_to=this.charging_profile_selected_data[field]
  }
  
  function updateDateTime_start(field, value) {
    if (!value) {
      this.charging_profile_selected_data[field] = null; // Handle empty values
      return;
    }
  
    // Convert "YYYY-MM-DDTHH:MM" from the datetime-local input back to ISO with microseconds
    const d = new Date(value);
    if (isNaN(d)) {
      console.error("Invalid date input:", value);
      return;
    }
    //console.log("Update field: ",this.charging_profile_selected_data[field])
    //console.log("Update Field to this: ",d.toISOString().replace(".000Z", ".000000Z"))
    // Update the model in the correct JSON format
    this.charging_profile_selected_data[field] = d.toISOString().replace(".000Z", ".000001Z");
    // Ensure there's no redundant period
    //this.charging_profile_selected_data[field] =  d.toISOString().replace("..", ".");
    charging_profile_selected_data.start_schedule=this.charging_profile_selected_data[field]
  }
  
  //---------------- POST date time 
  
  function createDateTime_from(field, value) {
    if (!value) {
      this.chargingProfileData[field] = null; // Handle empty values
      return;
    }
  
    // Convert "YYYY-MM-DDTHH:MM" from the datetime-local input back to ISO with microseconds
    const d = new Date(value);
    if (isNaN(d)) {
      console.error("Invalid date input:", value);
      return;
    }
    //console.log("Update field: ",this.chargingProfileData[field])
    //console.log("Update Field to this: ",d.toISOString().replace(".000Z", ".000000Z"))
    // Update the model in the correct JSON format
    this.chargingProfileData[field] = d.toISOString().replace(".000Z", ".000001Z");
    chargingProfileData.valid_from=this.chargingProfileData[field]
  }
  
  function createDateTime_to(field, value) {
    if (!value) {
      this.chargingProfileData[field] = null; // Handle empty values
      return;
    }
  
    // Convert "YYYY-MM-DDTHH:MM" from the datetime-local input back to ISO with microseconds
    const d = new Date(value);
    if (isNaN(d)) {
      console.error("Invalid date input:", value);
      return;
    }
    //console.log("Update field: ",this.chargingProfileData[field])
    //console.log("Update Field to this: ",d.toISOString().replace(".000Z", ".000000Z"))
    // Update the model in the correct JSON format
    this.chargingProfileData[field] = d.toISOString().replace(".000Z", ".000001Z");
    chargingProfileData.valid_to=this.chargingProfileData[field]
  }
  
  function createDateTime_start(field, value) {
    if (!value) {
      this.chargingProfileData[field] = null; // Handle empty values
      return;
    }
  
    // Convert "YYYY-MM-DDTHH:MM" from the datetime-local input back to ISO with microseconds
    const d = new Date(value);
    if (isNaN(d)) {
      console.error("Invalid date input:", value);
      return;
    }
    //console.log("Update field: ",this.chargingProfileData[field])
    //console.log("Update Field to this: ",d.toISOString().replace(".000Z", ".000000Z"))
    // Update the model in the correct JSON format
    this.chargingProfileData[field] = d.toISOString().replace(".000Z", ".000001Z");
    chargingProfileData.start_schedule=this.chargingProfileData[field]
  }
  
  
  
  
  
  
  
  
  //+__+_+_+_+_+_+_+_+_+_+_+___++__+_+_+_+_+_+_+_+_+_+_+_CHARGING PROFILE END__++__+_+_+_+_+_+_+_+_+_+_+___++__+_+_+_+_+_+_+_+_+_+_+___+
  
  
  
  //--=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=  ACCOUNT MANAGEMENT TOOLS END $%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^-=--=--=$%^
  
  
  
// =-=-=-=-=-=-=-=-=--=000000000000000000000000000000000000000000=-=-=--=-=-=-=-=-=-=-=-=--==-=
// =-=-=-=-=-=-=-=-=--=00000000000 Real time trnasactions  START 0=-=-=--=-=-=-=-=-=-=-=-=--==-=
// =-=-=-=-=-=-=-=-=--=000000000000000000000000000000000000000000=-=-=--=-=-=-=-=-=-=-=-=--==-=

// Add these new reactive variables to your script setup
const selectedMainTransaction = ref(null);
const voltageData = ref([]);
const energyData = ref([]);
const currentData = ref([]);
const energyHoursData = ref([]);

// Add these new chart series
const voltageChartSeries = ref([{ name: 'Voltage', data: [] }]);
const energyChartSeries = ref([{ name: 'Energy', data: [] }]);
const currentChartSeries = ref([{ name: 'Current', data: [] }]);
const energyHoursChartSeries = ref([{ name: 'Energy Hours', data: [] }]);

// Chart configurations for each unit
const voltageChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode;
  const isRtl = store.rtlClass === 'rtl';

  return {
    chart: {
      type: 'area',
      height: 200,
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    colors: ['#3B82F6'], // Blue color
    dataLabels: { enabled: false },
    stroke: { width: 2, curve: 'smooth' },
    xaxis: {
      type: 'datetime',
      axisBorder: { color: isDark ? '#191e3a' : '#e0e6ed' },
    },
    yaxis: {
      title: { text: 'Voltage (V)' },
      opposite: isRtl,
      labels: { offsetX: isRtl ? -40 : 0 },
    },
    legend: { horizontalAlign: 'left' },
    grid: { borderColor: isDark ? '#191e3a' : '#e0e6ed' },
    tooltip: { 
      theme: isDark ? 'dark' : 'light',
      y: { formatter: (val) => val + ' V' }
    },
  };
});

const energyChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode;
  const isRtl = store.rtlClass === 'rtl';

  return {
    chart: {
      type: 'area',
      height: 200,
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    colors: ['#10B981'], // Green color
    dataLabels: { enabled: false },
    stroke: { width: 2, curve: 'smooth' },
    xaxis: {
      type: 'datetime',
      axisBorder: { color: isDark ? '#191e3a' : '#e0e6ed' },
    },
    yaxis: {
      title: { text: 'Energy (W)' },
      opposite: isRtl,
      labels: { offsetX: isRtl ? -40 : 0 },
    },
    legend: { horizontalAlign: 'left' },
    grid: { borderColor: isDark ? '#191e3a' : '#e0e6ed' },
    tooltip: { 
      theme: isDark ? 'dark' : 'light',
      y: { formatter: (val) => val + ' W' }
    },
  };
});

const currentChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode;
  const isRtl = store.rtlClass === 'rtl';

  return {
    chart: {
      type: 'area',
      height: 200,
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    colors: ['#F59E0B'], // Orange color
    dataLabels: { enabled: false },
    stroke: { width: 2, curve: 'smooth' },
    xaxis: {
      type: 'datetime',
      axisBorder: { color: isDark ? '#191e3a' : '#e0e6ed' },
    },
    yaxis: {
      title: { text: 'Current (A)' },
      opposite: isRtl,
      labels: { offsetX: isRtl ? -40 : 0 },
    },
    legend: { horizontalAlign: 'left' },
    grid: { borderColor: isDark ? '#191e3a' : '#e0e6ed' },
    tooltip: { 
      theme: isDark ? 'dark' : 'light',
      y: { formatter: (val) => val + ' A' }
    },
  };
});

const energyHoursChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode;
  const isRtl = store.rtlClass === 'rtl';

  return {
    chart: {
      type: 'area',
      height: 200,
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    colors: ['#8B5CF6'], // Purple color
    dataLabels: { enabled: false },
    stroke: { width: 2, curve: 'smooth' },
    xaxis: {
      type: 'datetime',
      axisBorder: { color: isDark ? '#191e3a' : '#e0e6ed' },
    },
    yaxis: {
      title: { text: 'Energy Hours (Wh)' },
      opposite: isRtl,
      labels: { offsetX: isRtl ? -40 : 0 },
    },
    legend: { horizontalAlign: 'left' },
    grid: { borderColor: isDark ? '#191e3a' : '#e0e6ed' },
    tooltip: { 
      theme: isDark ? 'dark' : 'light',
      y: { formatter: (val) => val + ' Wh' }
    },
  };
});

// Function to fetch data for a specific unit
const fetchUnitData = async (transactionId, unit) => {
  if (!transactionId || !unit) return [];

  try {
    const apiUrl_connector = `/api/sampledvalue/`;
    const query_connector = {
      unit: unit,
      fields: ['timestamp', 'value', 'transaction', 'unit']
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

    const response = await fetch(fullApiUrl_connector, requestOptions_connector);
    if (!response.ok) {
      throw new Error('Failed to fetch unit data');
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error(`Error fetching ${unit} data:`, error);
    return [];
  }
};

// Enhanced updateAllUnitsData function to use stored data first, then fetch if needed
const updateAllUnitsData = async () => {
    if (!selectedMainTransaction.value) {
        // Clear all data if no transaction selected
        voltageData.value = [];
        energyData.value = [];
        currentData.value = [];
        energyHoursData.value = [];
        
        voltageChartSeries.value = [{ name: 'Voltage', data: [] }];
        energyChartSeries.value = [{ name: 'Energy', data: [] }];
        currentChartSeries.value = [{ name: 'Current', data: [] }];
        energyHoursChartSeries.value = [{ name: 'Energy Hours', data: [] }];
        return;
    }
    
    const transactionId = parseInt(selectedMainTransaction.value);
    //console.log(`Loading data for transaction: ${transactionId}`);
    
    // Always fetch fresh historical data from API first
    try {
        //console.log('Fetching historical data for transaction:', transactionId);
        
        const [voltage, energy, current, energyHours] = await Promise.all([
            fetchUnitData(selectedMainTransaction.value, 'V'),
            fetchUnitData(selectedMainTransaction.value, 'W'),
            fetchUnitData(selectedMainTransaction.value, 'A'),
            fetchUnitData(selectedMainTransaction.value, 'Wh')
        ]);

        //console.log('Historical data fetched:', {
        //    voltage: voltage.length,
        //    energy: energy.length,
        //    current: current.length,
        //    energyHours: energyHours.length
        //});

        // Initialize or reset the transaction data store
        transactionMeterData.value.set(transactionId, {
            voltage: new Map(),
            energy: new Map(),
            current: new Map(),
            energyHours: new Map()
        });
        
        const transactionData = transactionMeterData.value.get(transactionId);
        
        // Store historical data in Maps (keyed by timestamp)
        voltage.forEach(item => {
            transactionData.voltage.set(item.timestamp, parseFloat(item.value));
        });
        
        energy.forEach(item => {
            transactionData.energy.set(item.timestamp, parseFloat(item.value));
        });
        
        current.forEach(item => {
            transactionData.current.set(item.timestamp, parseFloat(item.value));
        });
        
        energyHours.forEach(item => {
            transactionData.energyHours.set(item.timestamp, parseFloat(item.value));
        });

        //console.log('Historical data stored in Maps:', {
         //   voltage: transactionData.voltage.size,
          //  energy: transactionData.energy.size,
           // current: transactionData.current.size,
            //energyHours: transactionData.energyHours.size
        //});

        // Now update the charts with the complete data (historical + any real-time updates)
        updateChartsForTransaction(transactionId);
        
        // Trigger reactivity
        transactionMeterData.value = new Map(transactionMeterData.value);

        //console.log(`Transaction ${transactionId} data loaded successfully`);

    } catch (error) {
        console.error('Error loading transaction data:', error);
        
        // Fallback: try to use existing real-time data if available
        if (transactionMeterData.value.has(transactionId)) {
            //console.log('Using existing real-time data as fallback');
            updateChartsForTransaction(transactionId);
        }
    }
};


// =-=-=-=-=-=-=-=-=--=000000000000000000000000000000000000000000=-=-=--=-=-=-=-=-=-=-=-=--==-=
// =-=-=-=-=-=-=-=-=--=00000000000 Real time trnasactions  END 0=-=-=--=-=-=-=-=-=-=-=-=--==-=
// =-=-=-=-=-=-=-=-=--=000000000000000000000000000000000000000000=-=-=--=-=-=-=-=-=-=-=-=--==-=
// Updated Task_3 to filter transactions for non-admin users
const Task_3 = async () => {
    try {
        const query = {
            transaction_status: 'Started', //Started, Finished, Unauthorized 
            fields: ['transaction_id', 'id_tag'], // Include id_tag for filtering
        }
        
        const apiUrl = `/api/transaction/`;
        const queryString = new URLSearchParams(query).toString();
        const fullApiUrl = `${apiUrl}?${queryString}`;
        //console.log('Task3 URL:', fullApiUrl)

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
        
        // Check if user is admin
        const isAdmin = Task_14_response.value && Task_14_response.value.length > 0 && 
                       Task_14_response.value[0].user__is_superuser;
        
        if (!isAdmin) {
            // Filter transactions to only include user's transactions
            const userIdTokens = await getUserIdTags();
            
            if (userIdTokens && userIdTokens.length > 0) {
                const filteredData = data.filter(transaction => 
                    userIdTokens.includes(transaction.id_tag)
                );
                
                //console.log(`Filtered transactions for non-admin user: ${filteredData.length} out of ${data.length}`);
                Task_3_response.value = filteredData;
            } else {
                //console.log('No ID tags found for user, showing no transactions');
                Task_3_response.value = [];
            }
        } else {
            //console.log('Admin user - showing all transactions');
            Task_3_response.value = data;
        }

        //console.log('Task3 fetched and filtered:', Task_3_response.value);

        // Continue with the rest of the processing
        const mergedData = await FetchSampledValue(Task_3_response.value);
        Task_3_mergedDataRef.value = mergedData;

    } catch (error) {
        console.error('An error occurred:', error.message);
        return null;
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
          //console.log('Updated Task_3_mergedDataRef:', Task_3_updated_mergedDataRef.value);
  
          // Reset selected values
          //selectedTransaction.value = null;
          //selectedUnit.value = null;
        });
      } else {
        console.warn('Both selectedTransaction and selectedUnit must have values.');
      }
    };
  
    // FetchSampledValue2 function
    const FetchSampledValue2 = async (transactionId) => {
      const apiUrl_connector = `/api/sampledvalue/`;
  
      if (selectedUnit.value) {
        const query_connector = {
          unit: selectedUnit.value,
          fields: ['timestamp', 'value', 'transaction', 'unit']
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
  
            //console.log("Task3_data.value", data);
  
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
      const apiUrl_connector = `/api/sampledvalue/`;
      const connectorPromises3 = [];
  
  
  
      //alert(data.length)
      for (let ii = 0; ii < data.length; ii++) {
        // alert(ii)
        const query_connector = {
          transaction_id: data[ii].transaction_id//,
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
      //console.log('connectorDataArray:', connectorDataArray3)
      const extractedData3 = connectorDataArray3.map(array => array.map(connectorData => ({
        transaction: connectorData.transaction,
        timestamp: connectorData.timestamp,
        value: connectorData.value,
        context: connectorData.context,
        measurand: connectorData.measurand,
        unit: connectorData.unit
      })));
  
      //console.log('Task3 extractedData:', extractedData3)
  
  
      return extractedData3;
    };
  
  
  // CHARGEPOINT
    const Task_9 = async () => {
      try {
        //const query = { transaction_status: 'Finished', // Filter by status
        //                fields: ['id_tag','start_transaction_timestamp','wh_meter_start', 'wh_meter_last_timestamp','wh_meter_last','transaction_status','connector'], // Key-value pair for the query parameter
        //           };
  
        const query = {
          fields: ['chargepoint_id,location__id,location__city,location__country,chargepoint_model,chargepoint_vendor,websocket_port,connected,chargepoint_status,ocpp_version'],
        }
        //const apiUrl = `/api/user/?username=${username.value}`;
        const apiUrl = `/api/chargepoint/`;
  
        // Construct the URL with query parameters if provided
        //const queryString = new URLSearchParams(query || {}).toString();
        //const fullApiUrl = `${apiUrl}${queryString}/`; // Append query parameters
  
        const queryString = new URLSearchParams(query).toString();
        const fullApiUrl = `${apiUrl}?${queryString}`;
        //console.log('Task9 URL:', fullApiUrl)
  
  
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
        Task_9_response.value = data
  
  
  
        //console.log('Task9 fetched:', Task_9_response.value)
  
  
      } catch (error) {
        console.error('An error occurred:', error.message);
        return null; // Return null in case of error
      }
    };
  
// Define the downloadCSV function with proper CSV escaping
// Define the downloadCSV function with proper CSV escaping
// Define the downloadCSV function with proper CSV escaping
// Define the downloadCSV function with multiple sheets support
const downloadCSV = () => {
  // Helper function to convert UTC to Athens timezone
  const convertToAthensTime = (utcString) => {
    if (!utcString) return '';
    
    try {
      const date = new Date(utcString);
      
      const formatter = new Intl.DateTimeFormat('el-GR', {
        timeZone: 'Europe/Athens',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      
      const parts = formatter.formatToParts(date);
      const partMap = {};
      
      parts.forEach(part => {
        if (part.type !== 'literal') {
          partMap[part.type] = part.value;
        }
      });
      
      return `${partMap.day}/${partMap.month}/${partMap.year} ${partMap.hour}:${partMap.minute}:${partMap.second}`;
    } catch (error) {
      console.error('Error converting time:', error);
      return utcString;
    }
  };

  // Helper function to escape CSV values
  const escapeCSV = (value) => {
    if (value === null || value === undefined) {
      return '';
    }
    
    const stringValue = String(value);
    
    if (stringValue.includes(',') || stringValue.includes('\n') || stringValue.includes('"')) {
      return `"${stringValue.replace(/"/g, '""')}"`;
    }
    
    return stringValue;
  };

  // Define headers
  const headers = [
    "Connector Chargepoint Name",
    "Id_Tag",
    "Start_Time",
    "Start_Wh",
    "Last_Time",
    "Last_Wh",
    "Total kWh",
    "Transaction Status",
    "Transaction ID",
    "Connector Standard",
    "Connector ID",
    "Connector Power Type"
  ];

  // Process data: remove duplicates and format rows
  const processedData = Task_1_response.value
    .filter((row, index, self) => 
      index === self.findIndex(r => r.transaction_id === row.transaction_id) &&
      row.connector__chargepoint // Only keep rows with a connector chargepoint
    )
    .map(row => {
      const startWh = parseFloat(row.wh_meter_start) || 0;
      const lastWh = parseFloat(row.wh_meter_last) || 0;
      const totalKwh = Math.round(((lastWh - startWh) / 1000) * 1000) / 1000;

      return {
        'Connector Chargepoint Name': row.connector__chargepoint,
        'Id_Tag': row.id_tag || '',
        'Start_Time': convertToAthensTime(row.start_transaction_timestamp),
        'Start_Wh': startWh,
        'Last_Time': convertToAthensTime(row.wh_meter_last_timestamp),
        'Last_Wh': lastWh,
        'Total kWh': totalKwh,
        'Transaction Status': row.transaction_status || '',
        'Transaction ID': row.transaction_id || '',
        'Connector Standard': row.connector__standard || '',
        'Connector ID': row.connector__connectorid || '',
        'Connector Power Type': row.connector__power_type || ''
      };
    });

  // Start building the combined CSV with all sheets
  let combinedCSV = '';

  // Add General sheet with all data
  combinedCSV += 'SHEET:General\n';
  combinedCSV += headers.map(escapeCSV).join(',') + '\n';
  combinedCSV += processedData.map(row => 
    headers.map(header => escapeCSV(row[header])).join(',')
  ).join('\n');
  combinedCSV += '\n\n';

  // Group data by Connector Chargepoint Name and create individual sheets
  const connectorGroups = {};
  processedData.forEach(row => {
    const connectorName = row['Connector Chargepoint Name'] || 'Unknown';
    if (!connectorGroups[connectorName]) {
      connectorGroups[connectorName] = [];
    }
    connectorGroups[connectorName].push(row);
  });

  // Add a sheet for each connector
  Object.entries(connectorGroups).forEach(([connectorName, data]) => {
    combinedCSV += `SHEET:${connectorName}\n`;
    combinedCSV += headers.map(escapeCSV).join(',') + '\n';
    combinedCSV += data.map(row => 
      headers.map(header => escapeCSV(row[header])).join(',')
    ).join('\n');
    combinedCSV += '\n\n';
  });

  // Create and download the combined CSV
  const blob = new Blob([combinedCSV], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute("download", "charging_data.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
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
  



//======================== Tariff and Capacity Histroy ===========================

// Add reactive references for connector historical data
const selectedConnectorHistoricalData = ref({
  tariff: [],
  capacity: [],
  timestamps: []
});

// Function to load historical data for a connector
const loadConnectorHistoricalData = async (Capacity_history_list, Tariff_history_list) => {
  try {
    // Initialize the historical data structure
    selectedConnectorHistoricalData.value = {
      timestamps: [],
      tariff: [],
      capacity: []
    };

    // Helper function to transform target_copy format to arrays
    const transformTargetCopyData = (targetCopyObject) => {
      const timestamps = [];
      const values = [];
      
      Object.entries(targetCopyObject).forEach(([timeRange, value]) => {
        timestamps.push(timeRange);
        // Ensure the value is a number
        const numericValue = parseFloat(value);
        values.push(isNaN(numericValue) ? 0 : numericValue);
      });
      
      return { timestamps, values };
    };

    // Process Tariff data
    if (Tariff_history_list) {
      if (typeof Tariff_history_list === 'object' && !Array.isArray(Tariff_history_list)) {
        const transformed = transformTargetCopyData(Tariff_history_list);
        selectedConnectorHistoricalData.value.timestamps = transformed.timestamps;
        selectedConnectorHistoricalData.value.tariff = transformed.values;
      } else if (Array.isArray(Tariff_history_list)) {
        selectedConnectorHistoricalData.value.tariff = Tariff_history_list.map(v => parseFloat(v) || 0);
      }
    }

    // Process Capacity data
    if (Capacity_history_list) {
      if (typeof Capacity_history_list === 'object' && !Array.isArray(Capacity_history_list)) {
        const transformed = transformTargetCopyData(Capacity_history_list);
        selectedConnectorHistoricalData.value.capacity = transformed.values;
        
        if (selectedConnectorHistoricalData.value.timestamps.length === 0) {
          selectedConnectorHistoricalData.value.timestamps = transformed.timestamps;
        }
      } else if (Array.isArray(Capacity_history_list)) {
        selectedConnectorHistoricalData.value.capacity = Capacity_history_list.map(v => parseFloat(v) || 0);
      }
    }

    // Debug logging
    //console.log('Processed tariff data:', {
    //  length: selectedConnectorHistoricalData.value.tariff.length,
    //  sample: selectedConnectorHistoricalData.value.tariff.slice(0, 5),
    //  min: Math.min(...selectedConnectorHistoricalData.value.tariff),
    //  max: Math.max(...selectedConnectorHistoricalData.value.tariff)
    //});

    //console.log('Processed capacity data:', {
    //  length: selectedConnectorHistoricalData.value.capacity.length,
    //  sample: selectedConnectorHistoricalData.value.capacity.slice(0, 5),
    //  min: Math.min(...selectedConnectorHistoricalData.value.capacity),
    //  max: Math.max(...selectedConnectorHistoricalData.value.capacity)
    //});

    // Update graphs
    dataToUse.value = selectedConnectorHistoricalData.value.tariff;
    dataToUse_Capacity.value = selectedConnectorHistoricalData.value.capacity;
    
    // Force reactivity update
    nextTick(() => {
      city_change();
      city_change_capacity();
    });

  } catch (error) {
    console.error('Error loading historical data:', error);
    // Fallback to existing random data logic
    city_change();
    city_change_capacity();
  }
};



    // For the Chargepoints
// Updated area chart with current time line
// Updated area chart with 30-minute intervals
// Updated area chart with 30-minute intervals and proper error handling
// Simplified chart configuration without custom formatters
const areaChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode;
  const isRtl = store.rtlClass === 'rtl';
  
  // Create simplified time labels - show only every 2 hours
  const timeLabels = Array.from({length: 288}, (_, i) => {
    const totalMinutes = i * 5; // Each slot is 5 minutes
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    
    // Show labels every 2 hours (every 24 slots: 0, 24, 48, 72, etc.)
    // This means showing labels at: 00:00, 02:00, 04:00, 06:00, etc.
    if (i % 12 === 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
    return ''; // Empty string for non-displayed labels
  });
  
  return {
    chart: {
      type: 'bar', // Changed from 'area' to 'bar'
      height: 400, // Increased height for better visibility
      zoom: { enabled: true }, // Enable zoom for better navigation with 288 bars
      toolbar: { 
        show: true, // Show toolbar for zoom/pan controls
        tools: {
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        }
      }
    },
    colors: ['#805dca'], // Keep original purple color
    dataLabels: { enabled: false }, // Keep disabled to avoid clutter
    plotOptions: {
      bar: {
        columnWidth: '70%', // Adjust bar width (80% means bars will be close together)
        borderRadius: 2, // Rounded corners for bars
        dataLabels: {
          position: 'top' // Position data labels on top if enabled
        }
      }
    },
    xaxis: {
      categories: timeLabels,
      axisBorder: { color: isDark ? '#191e3a' : '#e0e6ed' },
      labels: {
        rotate: -45, // Rotate labels for better visibility
        hideOverlappingLabels: true,
        style: {
          fontSize: '16px' // Smaller font for 288 labels
        }
      },
      tickPlacement: 'on' // Align ticks with bars
    },
    yaxis: {
      opposite: isRtl,
      labels: { offsetX: isRtl ? -40 : 0 },
      title: { text: 'Tariff (€/kWh)' } // Keep original tariff label
    },
    legend: { horizontalAlign: 'left' },
    grid: { 
      borderColor: isDark ? '#191e3a' : '#e0e6ed',
      strokeDashArray: 3 // Dashed grid lines for better visibility with bars
    },
    tooltip: { 
      theme: isDark ? 'dark' : 'light',
      y: {
        formatter: function (val) {
          return val + ' €/kWh'; // Keep original tariff formatting
        }
      },
      x: {
        formatter: function (val, { dataPointIndex }) {
          // Show actual time for the specific bar
          const totalMinutes = dataPointIndex * 5;
          const hours = Math.floor(totalMinutes / 60);
          const minutes = totalMinutes % 60;
          return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        }
      }
    }
  };
});


const areaChart_Capacity = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode;
  const isRtl = store.rtlClass === 'rtl';
  
  // Create time labels for 288 slots (5-minute intervals)
  const timeLabels = Array.from({length: 288}, (_, i) => {
    const totalMinutes = i * 5; // Each slot represents 5 minutes
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    
    // Show labels every 2 hours to reduce clutter
    // Every 24 slots = every 2 hours (24 * 5 minutes = 120 minutes = 2 hours)
    if (i % 12 === 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
    return '';
  });
  
  return {
    chart: {
      type: 'bar', // Changed from 'area' to 'bar'
      height: 400, // Increased height for better visibility
      zoom: { enabled: true }, // Enable zoom for better navigation with 288 bars
      toolbar: { 
        show: true, // Show toolbar for zoom/pan controls
        tools: {
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        }
      }
    },
    colors: ['#28a745'],
    dataLabels: { enabled: false }, // Keep disabled to avoid clutter
    plotOptions: {
      bar: {
        columnWidth: '70%', // Adjust bar width (90% means bars will be close together)
        borderRadius: 2, // Rounded corners for bars
        dataLabels: {
          position: 'top' // Position data labels on top if enabled
        }
      }
    },
    xaxis: {
      categories: timeLabels,
      axisBorder: { color: isDark ? '#191e3a' : '#e0e6ed' },
      labels: {
        rotate: -45, // Rotate labels for better visibility
        hideOverlappingLabels: true,
        style: {
          fontSize: '16px' // Smaller font for 288 labels
        }
      },
      tickPlacement: 'on' // Align ticks with bars
    },
    yaxis: {
      opposite: isRtl,
      labels: { offsetX: isRtl ? -40 : 0 },
      title: { text: 'Capacity (kW)' }
    },
    legend: { horizontalAlign: 'left' },
    grid: { 
      borderColor: isDark ? '#191e3a' : '#e0e6ed',
      strokeDashArray: 3 // Dashed grid lines for better visibility with bars
    },
    tooltip: {
      theme: isDark ? 'dark' : 'light',
      y: {
        formatter: function (val) {
          return val + ' kW';
        }
      },
      x: {
        formatter: function (val, { dataPointIndex }) {
          // Show actual time for the specific bar
          const totalMinutes = dataPointIndex * 5;
          const hours = Math.floor(totalMinutes / 60);
          const minutes = totalMinutes % 60;
          return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        }
      }
    }
  };
});


let dataToUse = ref([]);
const city_change = () => {
  //console.log("Updating tariff chart with data:", selectedConnectorHistoricalData.value.tariff);
  
  if (selectedConnectorHistoricalData.value.tariff && selectedConnectorHistoricalData.value.tariff.length > 0) {
    const tariffArray = Array.from(selectedConnectorHistoricalData.value.tariff);
    
    //console.log('Converted tariff array:', tariffArray);
    //console.log('Array length:', tariffArray.length);
    
    const processedData = tariffArray.map(v => {
      const num = parseFloat(v);
      return isNaN(num) ? 0.15 : num;
    });
    
    //console.log('Processed tariff data for chart:', processedData);
    //console.log('Min/Max values:', Math.min(...processedData), Math.max(...processedData));
    
    dataToUse.value = processedData;
    
    // Force chart update with proper series structure
    areaChartSeries.value = [{
      name: '24h Tariff Schedule',
      data: processedData.map((value, index) => ({
        x: index, // Use index for x-axis
        y: value
      }))
    }];
    
    //console.log('Chart series updated:', areaChartSeries.value);
  } else{
  }
};



const areaChartSeries = ref([
  {
    name: '24h Tariff SChedule',
  
    data: dataToUse //values//[16800, 16800, 15500] //whMeterLast//whMeterLastLabels//[16800, 16800, 15500] 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
  
      },
    ]);
  
  
  
  
    //============================== AREA CHART CAPACITY ===========================================================================================
  

  
let dataToUse_Capacity = ref([]);
const city_change_capacity = () => {
  //console.log("Updating capacity chart with data:", selectedConnectorHistoricalData.value.capacity);
  
  if (selectedConnectorHistoricalData.value.capacity && selectedConnectorHistoricalData.value.capacity.length > 0) {
    const capacityArray = Array.from(selectedConnectorHistoricalData.value.capacity);
    
    //console.log('Converted capacity array:', capacityArray);
    
    const processedData = capacityArray.map(v => {
      const num = parseFloat(v);
      return isNaN(num) ? 22 : num;
    });
    
    //console.log('Processed capacity data for chart:', processedData);
    //console.log('Min/Max values:', Math.min(...processedData), Math.max(...processedData));
    
    dataToUse_Capacity.value = processedData;
    
    // Force chart update with proper series structure
    areaChartSeries_Capacity.value = [{
      name: '24h Capacity Schedule',
      data: processedData.map((value, index) => ({
        x: index, // Use index for x-axis
        y: value
      }))
    }];
    
    //console.log('Capacity chart series updated:', areaChartSeries_Capacity.value);
  } else {
  }
};
  
  
const areaChartSeries_Capacity = ref([
  {
    name: '24h Capacity Scehdule',

    data: dataToUse_Capacity //values//[16800, 16800, 15500] //whMeterLast//whMeterLastLabels//[16800, 16800, 15500] 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],

  },
]);
  
  
    // Call city_change whenever markerAddress.value changes
    watch(markerAddress, () => {
      city_change();
      city_change_capacity();
    });
  
  
  
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
  
  
      range_checkbox.value = false;
      range_check_function();
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



  //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////// MY SESSIONS START ////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  
// Add these reactive variables to your script setup section

// My Sessions reactive variables
const myActiveSession = ref(null);
const hasActiveSessionNotification = ref(false);
const mySessionEnergyData = ref([]);
const mySessionEnergyHoursData = ref([]);
const hasNewMeterDataNotification = ref(false); // Add this line
// Chart series for My Sessions
const mySessionEnergyChartSeries = ref([{ name: 'Energy', data: [] }]);
const mySessionEnergyHoursChartSeries = ref([{ name: 'Energy Hours', data: [] }]);

// Chart configurations for My Sessions
const mySessionEnergyChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode;
  const isRtl = store.rtlClass === 'rtl';
const hasNewMeterDataNotification = ref(false); // NEW - Add this line




  return {
    chart: {
      type: 'area',
      height: 300,
      zoom: { enabled: false },
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    colors: ['#10B981'], // Green color
    dataLabels: { enabled: false },
    stroke: { width: 2, curve: 'smooth' },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      type: 'datetime',
      axisBorder: { color: isDark ? '#191e3a' : '#e0e6ed' },
      labels: {
        style: {
          colors: isDark ? '#888ea8' : '#888ea8'
        }
      }
    },
    yaxis: {
      title: { 
        text: 'Power (W)',
        style: {
          color: isDark ? '#888ea8' : '#888ea8'
        }
      },
      opposite: isRtl,
      labels: { 
        offsetX: isRtl ? -40 : 0,
        style: {
          colors: isDark ? '#888ea8' : '#888ea8'
        }
      },
    },
    legend: { horizontalAlign: 'left' },
    grid: { 
      borderColor: isDark ? '#191e3a' : '#e0e6ed',
      strokeDashArray: 4
    },
    tooltip: { 
      theme: isDark ? 'dark' : 'light',
      y: { formatter: (val) => val + ' W' }
    },
  };
});

const mySessionEnergyHoursChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode;
  const isRtl = store.rtlClass === 'rtl';

  return {
    chart: {
      type: 'area',
      height: 300,
      zoom: { enabled: false },
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    colors: ['#8B5CF6'], // Purple color
    dataLabels: { enabled: false },
    stroke: { width: 2, curve: 'smooth' },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      type: 'datetime',
      axisBorder: { color: isDark ? '#191e3a' : '#e0e6ed' },
      labels: {
        style: {
          colors: isDark ? '#888ea8' : '#888ea8'
        }
      }
    },
    yaxis: {
      title: { 
        text: 'Energy (Wh)',
        style: {
          color: isDark ? '#888ea8' : '#888ea8'
        }
      },
      opposite: isRtl,
      labels: { 
        offsetX: isRtl ? -40 : 0,
        style: {
          colors: isDark ? '#888ea8' : '#888ea8'
        }
      },
    },
    legend: { horizontalAlign: 'left' },
    grid: { 
      borderColor: isDark ? '#191e3a' : '#e0e6ed',
      strokeDashArray: 4
    },
    tooltip: { 
      theme: isDark ? 'dark' : 'light',
      y: { formatter: (val) => val + ' Wh' }
    },
  };
});

// Functions for My Sessions


// Function to get user's ID tags
// Enhanced getUserIdTags function to use cached data when available
const getUserIdTags = async () => {
  try {
    // If we already have cached ID tags, return them
    if (userIdTags.value && userIdTags.value.length > 0) {
      //console.log('🔄 Using cached ID tags:', userIdTags.value.map(tag => tag.idToken));
      return userIdTags.value.map(tag => tag.idToken);
    }
    
    // Otherwise, fetch fresh data
    //console.log('🔄 Fetching fresh ID tags for user:', username.value);
    const query = {
      username: username.value, // Make sure this is correct
      fields: ['idToken']
    };
    
    const apiUrl = `/api/idtag/`;
    const queryString = new URLSearchParams(query).toString();
    const fullApiUrl = `${apiUrl}?${queryString}`;
    
    //console.log('🔍 ID Tag API URL:', fullApiUrl); // Debug log
    
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token.value}`,
      },
    };
    
    const response = await fetch(fullApiUrl, requestOptions);
    
    if (!response.ok) {
      console.error('❌ Failed to fetch ID tags:', response.status, response.statusText);
      return [];
    }
    
    const data = await response.json();
    //console.log('📄 Raw ID tags response:', data); // Debug log
    
    if (data && Array.isArray(data)) {
      // Filter out revoked tags
      const validTags = data.filter(tag => !tag.revoked);
      const idTokens = validTags.map(tag => tag.idToken);
      
      //console.log('✅ Valid ID tags fetched:', idTokens);
      
      // Update cache
      userIdTags.value = validTags;
      
      return idTokens;
    }
    
    //console.log('ℹ️ No ID tags found for user');
    return [];
    
  } catch (error) {
    console.error('❌ Error fetching user ID tags:', error);
    return [];
  }
};
// Function to get active transaction for user
const getActiveTransactionForUser = async (userIdTags) => {
  try {

    //console.log("userIdTags list",userIdTags)
    // Check for Started transactions with user's ID tags
    for (const idTag of userIdTags) {
      const query = {
        id_token: idTag,
        transaction_status: 'Started',
        fields: 'transaction_id,id_tag,start_transaction_timestamp,connector,connector__chargepoint,connector__connectorid,connector__connector_status'
      };
      
      const apiUrl = `/api/transaction/`;
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
      const data = await response.json();

      //console.log("getActiveTransactionForUser list",data)
      
      if (data && data.length > 0) {
        return data[0]; // Return the first (and should be only) active transaction
      }
    }
    
    return null;
    
  } catch (error) {
    console.error('Error fetching active transaction for user:', error);
    return null;
  }
};

// Function to load meter values for my session
const loadMySessionMeterValues = async (transactionId) => {
  if (!transactionId) return;
  
  try {
    //console.log(`Loading meter values for my session: ${transactionId}`);
    
    // Fetch Energy (W) data
    const energyData = await fetchUnitData(transactionId, 'W');
    
    // Fetch Energy Hours (Wh) data  
    const energyHoursData = await fetchUnitData(transactionId, 'Wh');
    
    //console.log('My session energy data:', energyData.length, 'records');
    //console.log('My session energy hours data:', energyHoursData.length, 'records');
    
    // Update chart data
    updateMySessionCharts(energyData, energyHoursData);
    
  } catch (error) {
    console.error('Error loading my session meter values:', error);
  }
};

// Function to update my session charts
const updateMySessionCharts = (energyData, energyHoursData) => {
  try {
    // Process energy data for chart with Athens timezone
    const energyChartData = energyData.map(item => [
      toAthensTime(item.timestamp),
      parseFloat(item.value)
    ]);
    
    // Process energy hours data for chart with Athens timezone
    const energyHoursChartData = energyHoursData.map(item => [
      toAthensTime(item.timestamp),
      parseFloat(item.value)
    ]);
    
    // Update chart series
    mySessionEnergyChartSeries.value = [{
      name: 'Energy (W)',
      data: energyChartData
    }];
    
    mySessionEnergyHoursChartSeries.value = [{
      name: 'Energy Hours (Wh)',
      data: energyHoursChartData
    }];
    
    //console.log('My session charts updated:', {
    //  energy: energyChartData.length,
    //  energyHours: energyHoursChartData.length
    //});
    
  } catch (error) {
    console.error('Error updating my session charts:', error);
  }
};

// Reactive data for survey modal
const showSurveyModal = ref(false);
const surveyUrl = 'https://www.survio.com/survey/d/F3G5W3J3G7P8M9G6C?preview=1';

const surveyUrl_WP3 = 'https://forms.office.com/e/A3PLVbXmh3';

// Function to open survey
const openSurvey = () => {
  window.open(surveyUrl, '_blank');
  setTimeout(() => {
    window.open(surveyUrl_WP3, '_blank');
  }, 100);
  showSurveyModal.value = true;
};


// Function to close survey modal
const closeSurveyModal = () => {
  showSurveyModal.value = false;
};

// Function to show survey modal
const showChargingExperienceSurvey = () => {
  showSurveyModal.value = true;
};

// Function to stop my transaction
const stopMyTransaction = async () => {
  if (!myActiveSession.value) {
    console.warn('No active session to stop');
    return;
  }
  
  try {
    //console.log('Stopping my transaction:', myActiveSession.value.transaction_id);
    
    await stopTransaction(
      myActiveSession.value.transaction_id,
      myActiveSession.value.connector__chargepoint
    );
    
    // Show charging experience survey popup
    showChargingExperienceSurvey();
    
    // Refresh my sessions data
    setTimeout(() => {
      loadMyActiveSessions();
    }, 2000);

    await fetchMySessions();

    
  } catch (error) {
    console.error('Error stopping my transaction:', error);
  }
};

// Function to show session notification
const showSessionNotification = () => {
  hasActiveSessionNotification.value = true;
  //console.log('Session notification activated');
};

// Watch for new transactions to trigger notification
watch(Task_1_response_active, (newActiveTransactions) => {
  if (!newActiveTransactions || newActiveTransactions.length === 0) return;
  
  // Check if any of the new active transactions belong to current user
  checkForUserTransactions(newActiveTransactions);
}, { deep: true });

// Function to check if any active transactions belong to current user
const checkForUserTransactions = async (activeTransactions) => {
  try {
    if (!username.value) return;
    
    const userIdTags = await getUserIdTags();
    
    if (!userIdTags || userIdTags.length === 0) return;
    
    // Check if any active transaction has user's ID tag
    const userTransaction = activeTransactions.find(transaction => 
      userIdTags.includes(transaction.id_tag)
    );
    
    if (userTransaction && !myActiveSession.value) {
      // User has a new active transaction
      showSessionNotification();
      //console.log('New user transaction detected:', userTransaction.transaction_id);
    }
    
  } catch (error) {
    console.error('Error checking for user transactions:', error);
  }
};



// Add this debug function
window.debugIdTagFlow = async (transactionId) => {
    //console.log('=== ID TAG COMPARISON DEBUG ===');
    //console.log('Transaction ID to check:', transactionId);
    
    // Get user tags
    const userTags = await getUserIdTags();
    //console.log('User tags:', userTags);
    
    // FIXED: Get transaction using direct endpoint
    const apiUrl = `/api/transaction/${transactionId}/`;
    //console.log('Fetching from:', apiUrl);
    
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token.value}`,
            },
        });
        
        if (!response.ok) {
            console.error('Failed to fetch transaction:', response.status, response.statusText);
            return;
        }
        
        const transactionData = await response.json();
        //console.log('Transaction data:', transactionData);
        
        // FIXED: Access id_tag directly
        const transactionTag = transactionData.id_tag;
        //console.log('Transaction tag:', transactionTag);
        
        if (!transactionTag) {
            //console.log('❌ No id_tag found in transaction data');
            return;
        }
        
        // Test exact comparison
        userTags.forEach((userTag, index) => {
            //console.log(`User tag ${index}: "${userTag}"`);
            //console.log(`Transaction tag: "${transactionTag}"`);
            //console.log(`Length comparison: ${userTag.length} vs ${transactionTag.length}`);
            //console.log(`Exact match: ${userTag === transactionTag}`);
            
            // Character by character comparison if they don't match
            if (userTag !== transactionTag) {
                //console.log('Character comparison:');
                const maxLen = Math.max(userTag.length, transactionTag.length);
                for (let i = 0; i < maxLen; i++) {
                    const userChar = userTag[i] || '(missing)';
                    const transChar = transactionTag[i] || '(missing)';
                    if (userChar !== transChar) {
                        //console.log(`  Position ${i}: "${userChar}" vs "${transChar}"`);
                    }
                }
            }
        });
        
        // Test inclusion
        const includes = userTags.includes(transactionTag);
        //console.log('Array includes result:', includes);
        
    } catch (error) {
        console.error('Error in debug function:', error);
    }
    
    //console.log('===============================');
};

  //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////// MY SESSIONS END ////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////



  //%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------
  //%$#@------%$#@------%$#@------%$#@------%$#@---- WEBSOCKET --%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------
  //%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------
  
// DSO Websocket START ----------------------------------------------------------------------------------------------------------------------

let websocekt_notification = ref([]);   
let message_counter_inside = ref(0);   
const notification_dropdown = ref(false);      
const counter = ref(0);

// NEW: Track expanded state for each notification
const expandedNotifications = ref({});

// NEW: Track received message IDs to prevent duplicates
const receivedMessageIds = ref(new Set());

// NEW: Function to format current date/time when notification is received
const formatCurrentDateTime = () => {
  const now = new Date();
  
  // Format: HH:MM - MM/DD/YYYY
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const year = now.getFullYear();
  
  return `${hours}:${minutes} - ${month}/${day}/${year}`;
};

// Function to format Unix timestamp to 24-hour format
const formatTimestamp = (timestamp) => {
  if (!timestamp) return 'N/A';
  
  // Check if timestamp is already in milliseconds (longer number) or seconds
  const isMilliseconds = timestamp > 10000000000;
  const date = new Date(isMilliseconds ? timestamp : timestamp * 1000);
  
  return date.toLocaleTimeString('el-GR', {
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });
};

// Function to format party IDs array into comma-separated string
const formatPartyIds = (partyIds) => {
  if (!partyIds) {
    return 'Unknown';
  }
  
  if (typeof partyIds === 'string') {
    return partyIds;
  }
  
  if (Array.isArray(partyIds)) {
    const validPartyIds = partyIds.filter(id => id != null && id !== '' && id.trim() !== '');
    
    if (validPartyIds.length === 0) {
      return 'Unknown';
    }
    
    return validPartyIds.join(', ');
  }
  
  return String(partyIds);
};

// NEW: Check if notification has any changes to display
const hasChanges = (message) => {
  const hasTariffChanges = message.tariff_changes && message.tariff_changes.length > 0;
  const hasCapacityChanges = message.capacity_changes && message.capacity_changes.length > 0;
  return hasTariffChanges || hasCapacityChanges;
};

// NEW: Toggle expand/collapse for a specific notification
const toggleExpand = (index) => {
  expandedNotifications.value[index] = !expandedNotifications.value[index];
};


// NEW: Get color class based on change type
// FIXED: Opposite colors for Capacity vs Tariff
const getChangeColor = (changeText) => {
  const isCapacity = changeText.includes('Capacity');
  const isTariff = changeText.includes('Tariff');
  
  if (changeText.includes('INCREASED')) {
    // CAPACITY INCREASE = GREEN (more power available is good)
    // TARIFF INCREASE = RED (higher cost is bad)
    if (isCapacity) {
      return 'text-green-600 dark:text-green-400';
    } else if (isTariff) {
      return 'text-red-600 dark:text-red-400';
    }
  } else if (changeText.includes('DECREASED')) {
    // CAPACITY DECREASE = RED (less power available is bad)
    // TARIFF DECREASE = GREEN (lower cost is good)
    if (isCapacity) {
      return 'text-red-600 dark:text-red-400';
    } else if (isTariff) {
      return 'text-green-600 dark:text-green-400';
    }
  } else if (changeText.includes('SAME')) {
    return 'text-gray-600 dark:text-gray-400'; // Gray for no change
  }
  
  return 'text-gray-700 dark:text-gray-300'; // Default
};

// NEW: Generate unique ID for a message based on content
const generateMessageId = (message) => {
  try {
    const msg = message.message || message;
    
    // Create unique ID based on multiple fields
    const idParts = [
      msg.uuName || '',
      msg.timeslot_start || '',
      msg.timeslot_end || '',
      (msg.location_party_id || []).sort().join(','), // Sort for consistency
      // Include change counts to differentiate signals with same time but different changes
      (msg.tariff_changes || []).length,
      (msg.capacity_changes || []).length
    ];
    
    return idParts.join('_');
  } catch (e) {
    console.error("Error generating message ID:", e);
    return `fallback_${Date.now()}_${Math.random()}`;
  }
};

// NEW: Check if message is duplicate
const isDuplicateMessage = (message) => {
  const messageId = generateMessageId(message);
  return receivedMessageIds.value.has(messageId);
};

// NEW: Add message to tracking
const trackMessage = (message) => {
  const messageId = generateMessageId(message);
  receivedMessageIds.value.add(messageId);
  
  // Clean up old message IDs after 10 minutes to prevent memory leak
  setTimeout(() => {
    receivedMessageIds.value.delete(messageId);
  }, 600000); // 10 minutes
};

const connectWebSocket_DSS = () => {          
    const wsUrl = `wss://ev4eu.rid-ppcinspectra.com/ws/updates/dso_signal/`;
    const socket = new WebSocket(wsUrl);

    socket.onopen = () => {
        console.log("WebSocket DSS connection established");
    };

    socket.onmessage = (event) => {
        try {
            const parsedMessage = JSON.parse(event.data);
            
            // CRITICAL FIX: Check for duplicate before processing
            if (isDuplicateMessage(parsedMessage)) {
                console.log("⚠️ Duplicate message detected, skipping:", generateMessageId(parsedMessage));
                return; // Skip duplicate
            }
            
            // Track this message
            trackMessage(parsedMessage);
            
            // NEW: Add receivedAt timestamp to the message
            parsedMessage.receivedAt = formatCurrentDateTime();
            
            message_counter_inside.value = parsedMessage;
            
            // Add the new message to the notifications array
            websocekt_notification.value.push(parsedMessage);
            
            console.log("✅ Received DSO notification:", parsedMessage);
            
            // Log tariff and capacity changes if present
            if (parsedMessage.message?.tariff_changes) {
                console.log("💰 Tariff changes:", parsedMessage.message.tariff_changes);
            }
            if (parsedMessage.message?.capacity_changes) {
                console.log("⚡ Capacity changes:", parsedMessage.message.capacity_changes);
            }
            
        } catch (e) {
            console.error("❌ Error parsing message data:", event.data, e);
        }
    };

    socket.onerror = (error) => {
        console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
        console.log("WebSocket DSS connection closed. Reconnecting...");
        setTimeout(connectWebSocket_DSS, 5000);
    };
};

// Toggle the dropdown
const toggleNotificationDropdown = () => {
  notification_dropdown.value = !notification_dropdown.value;
};

// Reset the counter to 0 when the button is clicked
const resetCounter = () => {
  counter.value = 0;
  close();
};

// Watch for changes in websocket_notification to update the counter
watch(websocekt_notification, () => {
  counter.value = websocekt_notification.value.length;
}, { deep: true });

const clearNotifications = (close) => {
  websocekt_notification.value = [];
  counter.value = 0;
  expandedNotifications.value = {}; // Reset expanded states
  receivedMessageIds.value.clear(); // Clear message ID tracking
  close();
};

// Initialize WebSocket connection on component mount
connectWebSocket_DSS();

// DSO Websocket END ----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
// Connector Websocket START ----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------

let connector_websocket_p2=ref([]);   
let connector_websocket_p1=ref(0);   

// Enhanced WebSocket message handler with better error handling
const connectWebSocket_CONNECTOR = () => {          
    const wsUrl = `wss://ev4eu.rid-ppcinspectra.com/ws/updates/connector/`;
    
    try {
        const socket = new WebSocket(wsUrl);
        
        //console.log("Connecting to CONNECTOR WebSocket...");

        socket.onopen = () => {
            //console.log("WebSocket CONNECTOR connection established successfully");
        };

        socket.onmessage = (event) => {
            try {
                const rawData = JSON.parse(event.data);
                //console.log("Raw connector WebSocket data:", rawData);
                
                // Update the reactive reference
                connector_websocket_p1.value = rawData;
                
                // Also handle the update immediately if it's a connector update
                if (rawData && rawData.type === 'connector_update' && rawData.connector) {
                    handleConnectorUpdate(rawData.connector);
                }
                
            } catch (parseError) {
                console.error("Error parsing connector WebSocket message:", parseError);
                console.error("Raw message data:", event.data);
            }
        };

        socket.onerror = (error) => {
            console.error("Connector WebSocket error:", error);
        };

        socket.onclose = (event) => {
            //console.log("WebSocket CONNECTOR connection closed:", event.code, event.reason);
            //console.log("Attempting to reconnect in 5 seconds...");
            setTimeout(connectWebSocket_CONNECTOR, 5000);
        };

        // Store socket reference for potential cleanup
        window.connectorSocket = socket;
        
    } catch (connectionError) {
        console.error("Error creating WebSocket connection:", connectionError);
        // Retry connection after delay
        setTimeout(connectWebSocket_CONNECTOR, 5000);
    }
};

// Enhanced handleConnectorUpdate with historical data processing
const handleConnectorUpdate = (connectorData) => {
    //console.log('Direct connector update handler called:', connectorData);
    
    if (!connectorData || !connectorData.uuid) {
        console.warn('Invalid connector data received:', connectorData);
        return;
    }
    
    try {
        // Find and update the connector in our data
        const connectorIndex = Task_5_connectors.value.findIndex(
            c => c.uuid === connectorData.uuid
        );
        
        if (connectorIndex !== -1) {
            //console.log(`Updating connector at index ${connectorIndex}:`, connectorData.uuid);
            
            // Store the old status for comparison
            const oldStatus = Task_5_connectors.value[connectorIndex].connector_status;
            
            // Update the connector data
            Task_5_connectors.value[connectorIndex] = {
                ...Task_5_connectors.value[connectorIndex],
                ...connectorData
            };
            
            //console.log(`Connector status changed from ${oldStatus} to ${connectorData.connector_status}`);
            
            // Process historical data if present
            if (connectorData.tariff_history || connectorData.capacity_history) {
                //console.log('Processing historical data update...');
                processHistoricalDataUpdate(connectorData);
            }
            
            // Force update the marker
            updateMarkerForConnectorImmediate(connectorData.uuid);
            
        } else {
            console.warn('Connector not found in local data for immediate update:', connectorData.uuid);
            //console.log('Consider refreshing connector data...');
        }
    } catch (error) {
        console.error('Error in handleConnectorUpdate:', error);
    }
};

// Process historical data updates from WebSocket
const processHistoricalDataUpdate = (connectorData) => {
    try {
        // Check if this is the currently selected connector for graphs
        const isCurrentlySelected = selectedConnectorForRouting.value && 
                                   selectedConnectorForRouting.value.uuid === connectorData.uuid;
        
        if (isCurrentlySelected) {
            //console.log('Updating graphs for currently selected connector');
            
            // Update historical data
            if (connectorData.tariff_history) {
                const tariffValues = Object.values(connectorData.tariff_history);
                selectedConnectorHistoricalData.value.tariff = tariffValues;
                dataToUse.value = tariffValues;
                //console.log('Updated tariff data:', tariffValues);
            }
            
            if (connectorData.capacity_history) {
                const capacityValues = Object.values(connectorData.capacity_history);
                selectedConnectorHistoricalData.value.capacity = capacityValues;
                dataToUse_Capacity.value = capacityValues;
                //console.log('Updated capacity data:', capacityValues);
            }
            
            // Update timestamps from tariff_history keys (they should be the same)
            if (connectorData.tariff_history) {
                const timestamps = Object.keys(connectorData.tariff_history);
                selectedConnectorHistoricalData.value.timestamps = timestamps;
                //console.log('Updated timestamps:', timestamps);
            }
        }
    } catch (error) {
        console.error('Error processing historical data update:', error);
    }
};



// Immediate marker update function (doesn't wait for reactive updates)
// Enhanced updateMarkerForConnectorImmediate with better error handling
const updateMarkerForConnectorImmediate = (connectorUuid) => {
  //console.log('Immediate marker update for connector:', connectorUuid);
  
  try {
    // Force re-computation of grouped connectors
    const currentGroups = groupConnectorsByCoordinates.value;
    
    if (!currentGroups || currentGroups.length === 0) {
      console.warn('No connector groups available for update');
      return;
    }
    
    // Find the group containing this connector
    let targetGroupIndex = -1;
    let targetGroup = null;
    
    currentGroups.forEach((group, index) => {
      if (group.connectors.some(c => c.uuid === connectorUuid)) {
        targetGroupIndex = index;
        targetGroup = group;
      }
    });
    
    if (targetGroupIndex !== -1 && targetGroup) {
      const markerRef = markerRefs.value.get(`group_${targetGroupIndex}`);
      
      if (markerRef && markerRef.marker) {
        //console.log(`Updating marker for group ${targetGroupIndex}`);
        
        // CRITICAL: Generate completely new icon with updated status color
        const newIcon = getConnectorMarkerIcon(targetGroup);
        markerRef.marker.setIcon(newIcon);
        
        // Update popup content
        const newPopupContent = createConnectorPopupContent(targetGroup);
        markerRef.marker.setPopupContent(newPopupContent);
        
        // Update stored reference
        markerRef.connectorGroup = targetGroup;
        
        // ${connectorUuid}`);
      } else {
        console.warn(`Marker ref not found, re-rendering all`);
        renderConnectorMarkers();
      }
    }
  } catch (error) {
    console.error('Error in updateMarkerForConnectorImmediate:', error);
    renderConnectorMarkers();
  }
};

// Visual feedback function to briefly highlight updated markers
// Fixed highlightMarkerBriefly function with better error handling
const highlightMarkerBriefly = (marker) => {
    if (!marker) {
        console.warn('No marker provided for highlighting');
        return;
    }
    
    try {
        // Check if marker has the required methods
        if (typeof marker.setIcon !== 'function') {
            console.warn('Marker does not have setIcon method');
            return;
        }
        
        // Store original icon URL or create a reference
        const originalIconUrl = marker.options.icon?.options?.iconUrl || 
                               'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png';
        
        // Create highlighted icon (yellow)
        const highlightIcon = new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
        
        // Create original icon to restore
        const originalIcon = new L.Icon({
            iconUrl: originalIconUrl,
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });
        
        // Briefly show highlight
        marker.setIcon(highlightIcon);
        
        // Restore original icon after 1 second
        setTimeout(() => {
            try {
                marker.setIcon(originalIcon);
            } catch (restoreError) {
                console.warn('Error restoring original icon:', restoreError);
            }
        }, 1000);
        
    } catch (error) {
        console.warn('Error in highlightMarkerBriefly:', error);
    }
};

// Alternative highlight function without getIcon (fallback)
const alternativeHighlightMarker = (marker) => {
    if (!marker) return;
    
    try {
        // Create a simple visual effect by adding/removing a CSS class
        // or by briefly changing the marker size
        
        // Method 1: Size change
        const originalSize = [25, 41];
        const highlightSize = [30, 46];
        
        const highlightIcon = new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: highlightSize,
            iconAnchor: [15, 46],
            popupAnchor: [1, -34],
            shadowSize: [46, 46]
        });
        
        marker.setIcon(highlightIcon);
        
        // Restore after delay
        setTimeout(() => {
            const originalIcon = new L.Icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: originalSize,
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });
            marker.setIcon(originalIcon);
        }, 1000);
        
    } catch (error) {
        console.warn('Alternative highlight also failed:', error);
    }
};

// Enhanced initialization function that includes WebSocket status logging
const initializeConnectorSystem = async () => {
    //console.log('Initializing connector system...');
    
    try {
        // Load connector data first
        await Task_5_Connectors();
        //console.log('Connector data loaded:', Task_5_connectors.value.length, 'connectors');
        
        // Initialize map with connectors
        if (mapObject.value) {
            renderConnectorMarkers();
            //console.log('Connector markers rendered on existing map');
        }
        
        // Connect to WebSocket
        connectWebSocket_CONNECTOR();
        //console.log('Connector WebSocket connection initiated');
        
    } catch (error) {
        console.error('Error initializing connector system:', error);
    }
};

// Debug functions for troubleshooting
window.debugConnectors = () => {
    //console.log('=== CONNECTOR DEBUG INFO ===');
    //console.log('Connector data:', Task_5_connectors.value);
    //console.log('Grouped connectors:', groupConnectorsByCoordinates.value);
    //console.log('Marker references:', markerRefs.value);
    //console.log('WebSocket status:', window.connectorSocket?.readyState);
    //console.log('Range checkbox:', range_checkbox.value);
    //console.log('Current distance:', chargepoint_distance.value);
    //console.log('============================');
};

window.forceRenderMarkers = () => {
    //console.log('Force rendering markers...');
    renderConnectorMarkers();
};

window.testConnectorUpdate = (uuid, newStatus) => {
    //console.log(`Testing connector update: ${uuid} -> ${newStatus}`);
    handleConnectorUpdate({
        uuid: uuid,
        connector_status: newStatus
    });
};

// Fixed WebSocket watcher for connector updates
watch(connector_websocket_p1, (newWebSocketData) => {
  //console.log('WebSocket data received:', newWebSocketData);
  
  if (newWebSocketData && newWebSocketData.type === 'connector_update' && newWebSocketData.connector) {
    const connectorData = newWebSocketData.connector;
    //console.log('Processing connector update:', connectorData);
    
    // Find and update the connector in our data
    const connectorIndex = Task_5_connectors.value.findIndex(
      c => c.uuid === connectorData.uuid
    );
    
    if (connectorIndex !== -1) {
      //console.log('Found connector to update at index:', connectorIndex);
      
      // Update the connector data
      Task_5_connectors.value[connectorIndex] = {
        ...Task_5_connectors.value[connectorIndex],
        ...connectorData
      };
      
      //console.log('Updated connector data:', Task_5_connectors.value[connectorIndex]);
      
      // Update the marker on the map
      updateMarkerForConnector(connectorData.uuid);
      
      //console.log('Connector updated via WebSocket:', connectorData.uuid);
    } else {
      console.warn('Connector not found in local data:', connectorData.uuid);
    }
  } else {
    //console.log('WebSocket data format not recognized:', newWebSocketData);
  }
}, { deep: true });

//----------------------------------------------------------------------------------------------------------------------
// Connector Websocket END ----------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------


//-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0
// MeterValues Websocket START ----------------------------------------------------------------------------------------------------------------------
//-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0

let metervalues_websocket_p2=ref([]);   
let metervalues_websocket_p1=ref(0);   
// Add these reactive references to store meter values by transaction
const transactionMeterData = ref(new Map());

// Enhanced WebSocket handler for meter values
// Enhanced WebSocket handler for meter values with user filtering
const connectWebSocket_METERVALUES = () => {          
    const wsUrl = `wss://ev4eu.rid-ppcinspectra.com/ws/updates/metervalues/`;
    const socket = new WebSocket(wsUrl);
    
    //console.log("Connecting to Metervalues WebSocket...");

    socket.onopen = () => {
        //console.log("WebSocket Metervalues connection established");
    };

    socket.onmessage = (event) => {
        try {
            const rawData = JSON.parse(event.data);
            //console.log("Metervalues_Websocket_Data: ", rawData);
            
            // Update the reactive reference
            metervalues_websocket_p1.value = rawData;
            
            // Process the meter values with user filtering
            if (rawData && rawData.message) {
                processMeterValueMessage(rawData.message);
            }
        } catch (e) {
            console.error("Error parsing meter values message data: ", event.data);
        }
    };

    socket.onerror = (error) => {
        console.error("WebSocket error: ", error);
    };

    socket.onclose = () => {
        //console.log("WebSocket Metervalues connection closed. Reconnecting...");
        setTimeout(connectWebSocket_METERVALUES, 5000);
    };
};



// let curr_tariff_price=ref(null);
const transactionTariffPrices = ref(new Map());  // ✓ Store per transaction

// Function to get current tariff price based on current time
const getCurrentTariffPrice = (tariffHistory) => {
    if (!tariffHistory || typeof tariffHistory !== 'object') {
        //console.log('❌ No tariff history available');
        return null;
    }
    
    // Get current time
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();
    
    // Convert current time to total minutes since midnight
    const currentTotalMinutes = currentHours * 60 + currentMinutes;
    
    //console.log(`🕐 Current time: ${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}`);
    
    // Find the appropriate time slot
    for (const [timeSlot, price] of Object.entries(tariffHistory)) {
        // Parse time slot (e.g., "12:00-12:05")
        const [startTime, endTime] = timeSlot.split('-');
        
        // Parse start time
        const [startHours, startMinutes] = startTime.split(':').map(Number);
        const startTotalMinutes = startHours * 60 + startMinutes;
        
        // Parse end time
        const [endHours, endMinutes] = endTime.split(':').map(Number);
        const endTotalMinutes = endHours * 60 + endMinutes;
        
        // Check if current time falls within this slot
        if (currentTotalMinutes >= startTotalMinutes && currentTotalMinutes < endTotalMinutes) {
            //console.log(`💰 Current tariff slot: ${timeSlot}, Price: ${price}`);
            return {
                timeSlot: timeSlot,
                price: price,
                currentTime: `${currentHours.toString().padStart(2, '0')}:${currentMinutes.toString().padStart(2, '0')}`
            };
        }
    }
    
    //console.log('❌ No matching tariff slot found for current time');
    return null;
};

const getCurrentTariffForTransaction = (transactionId) => {
    if (!transactionId) {
        return { timeSlot: null, price: 0, currentTime: null };
    }
    return transactionTariffPrices.value.get(transactionId) || {
        timeSlot: null,
        price: 0,
        currentTime: null
    };
};

const myCurrentTariff = computed(() => {
    if (!myActiveSession.value || !myActiveSession.value.transaction_id) {
        return { timeSlot: null, price: 0, currentTime: null };
    }
    return getCurrentTariffForTransaction(myActiveSession.value.transaction_id);
});


// Enhanced checkTransactionBelongsToUser function with better error handling
// Enhanced checkTransactionBelongsToUser function with better error handling
const checkTransactionBelongsToUser = async (transactionId) => {
    try {
        // First, get user's ID tags - use cached data if available
        let userIdTokens;
        if (userIdTags.value && userIdTags.value.length > 0) {
            userIdTokens = userIdTags.value.map(tag => tag.idToken);
            //console.log('🔄 Using cached ID tags:', userIdTokens);
        } else {
            userIdTokens = await getUserIdTags();
            //console.log('🔄 Fetched fresh ID tags:', userIdTokens);
        }
        
        if (!userIdTokens || userIdTokens.length === 0) {
            //console.log('❌ No ID tags found for user');
            return false;
        }
        
        //console.log('🔍 User ID tags:', userIdTokens);
        
        // Get transaction details using direct endpoint
        const apiUrl = `/api/transaction/${transactionId}/`;
        
        //console.log(`🔍 Fetching transaction from: ${apiUrl}`);
        
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token.value}`,
            },
        };
        
        const response = await fetch(apiUrl, requestOptions);
        
        if (!response.ok) {
            console.error(`❌ Failed to fetch transaction ${transactionId}:`, response.status, response.statusText);
            return false;
        }
        
        const transactionData = await response.json();
        
        //console.log("📄 Transaction data:", transactionData);
        
        // Get the transaction's ID tag
        const transactionIdTag = transactionData.id_tag;
        
        if (!transactionIdTag) {
            //console.log(`❌ No id_tag found in transaction ${transactionId}`);
            return false;
        }
        
        //console.log(`🔍 Transaction ${transactionId} uses ID tag: "${transactionIdTag}"`);
        //console.log(`🔍 User ID tags: [${userIdTokens.map(tag => `"${tag}"`).join(', ')}]`);
        
        // Check if transaction ID tag matches any of user's ID tags
        const belongsToUser = userIdTokens.includes(transactionIdTag);
        
        //console.log(`🔍 Transaction belongs to user: ${belongsToUser}`);
        
        // Apply herer the function core 
        const tariffHistory = transactionData.connector?.tariff_history;
        const temp_result=getCurrentTariffPrice(tariffHistory);


        if ( temp_result) {
            // curr_tariff_price.value=temp_result
            transactionTariffPrices.value.set(transactionId, temp_result);  // ✓ Store with ID as key
            //console.log(`💰 Current tariff price: ${curr_tariff_price.value.price} at ${curr_tariff_price.value.currentTime} (slot: ${curr_tariff_price.value.timeSlot})`);
        } else {
            //console.log('❌ Could not determine current tariff price');
        }
        return belongsToUser;
        
    } catch (error) {
        console.error('❌ Error checking transaction ownership:', error);
        return false;
    }
};


// 3. Add these new functions after your existing WebSocket code
// Enhanced processing with user filtering for meter values
// Enhanced processing with user filtering for meter values
const processMeterValueMessage = async (messageString) => {
    //console.log('🔄 Processing meter value message...');
    //console.log('Raw message string:', messageString);
    
    try {
        const messageData = JSON.parse(messageString);
        //console.log('Parsed message data:', messageData);
        
        const { transaction_id, meterValue } = messageData;
        
        if (!transaction_id) {
            console.warn('❌ No transaction_id in message:', messageData);
            return;
        }
        
        if (!meterValue || !Array.isArray(meterValue)) {
            console.warn('❌ Invalid meterValue format:', messageData);
            return;
        }
        
        // Check if user is admin - admins can see all transactions
        const isAdmin = Task_14_response.value && Task_14_response.value.length > 0 && 
                       Task_14_response.value[0].user__is_superuser;
        
        //console.log(`🔐 User admin status: ${isAdmin}`);
        
        // For non-admin users, check if this transaction belongs to them
        if (!isAdmin) {
            const belongsToUser = await checkTransactionBelongsToUser(transaction_id);
            if (!belongsToUser) {
                //console.log(`🚫 Transaction ${transaction_id} does not belong to current user, skipping meter value processing...`);
                return; // STOP PROCESSING HERE - don't load any meter values
            }
            //console.log(`✅ Transaction ${transaction_id} belongs to current user, processing meter values...`);
        } else {
            //console.log(`👑 Admin user - processing all meter values for transaction ${transaction_id}`);
        }
        
        //console.log(`📊 Processing meter values for transaction ${transaction_id}`);
        //console.log(`📊 Number of meter value entries: ${meterValue.length}`);
        
        // Only process meter values if we reach this point (user owns transaction or is admin)
        meterValue.forEach((entry, index) => {
            //console.log(`Processing entry ${index + 1}:`, entry);
            
            if (entry.timestamp && entry.sampled_value && Array.isArray(entry.sampled_value)) {
                //console.log(`📊 Processing ${entry.sampled_value.length} sampled values for timestamp: ${entry.timestamp}`);
                processSampledValues(transaction_id, entry.timestamp, entry.sampled_value);
            } else {
                console.warn('❌ Invalid entry format:', entry);
            }
        });
        
    } catch (error) {
        console.error('❌ Error processing meter value message:', error);
        console.error('❌ Original message string:', messageString);
    }
};


// Function to show session notification


// Function to show meter data notification - ADD THIS FUNCTION
const showMeterDataNotification = () => {
  hasNewMeterDataNotification.value = true;
  //console.log('New meter data notification activated');
};

// Function to load user's active sessions
const loadMyActiveSessions = async () => {
  try {
    // Clear all notifications when tab is clicked - UPDATE THIS LINE
    hasActiveSessionNotification.value = false;
    hasNewMeterDataNotification.value = false; // ADD THIS LINE
    
    //console.log('Loading active sessions for user:', username.value);
    
    // First, get user's ID tags to find transactions
    const userIdTags = await getUserIdTags();
    
    if (!userIdTags || userIdTags.length === 0) {
      //console.log('No ID tags found for user');
      myActiveSession.value = null;
      return;
    }
    
    //console.log('User ID tags:', userIdTags);
    
    // Get active transactions for user's ID tags
    const activeTransaction = await getActiveTransactionForUser(userIdTags);

    
    if (activeTransaction) {
      //console.log('Found active transaction:', activeTransaction);
      myActiveSession.value = activeTransaction;
      
      // Load meter values for this transaction
      await loadMySessionMeterValues(activeTransaction.transaction_id);
    } else {
      //console.log('No active transaction found for user');
      myActiveSession.value = null;
    }
    
  } catch (error) {
    console.error('Error loading my active sessions:', error);
    myActiveSession.value = null;
  }
};

// Function to process sampled values for a specific transaction
const processSampledValues = (transactionId, timestamp, sampledValues) => {
    //console.log(`=== Processing sampled values for transaction ${transactionId} ===`);
    //console.log('Timestamp:', timestamp);
    //console.log('Selected transaction:', selectedMainTransaction.value);
    //console.log('Transaction ID type:', typeof transactionId);
    //console.log('Selected transaction type:', typeof selectedMainTransaction.value);
    
    // Get or create transaction data
    if (!transactionMeterData.value.has(transactionId)) {
        //console.log(`Creating new transaction data for ${transactionId}`);
        transactionMeterData.value.set(transactionId, {
            voltage: new Map(),
            energy: new Map(),
            current: new Map(),
            energyHours: new Map()
        });
    }
    
    const transactionData = transactionMeterData.value.get(transactionId);
    //console.log('Current transaction data sizes:', {
    //    voltage: transactionData.voltage.size,
     //   energy: transactionData.energy.size,
    //    current: transactionData.current.size,
    //    energyHours: transactionData.energyHours.size
   // });
    
    // Process each sampled value
    sampledValues.forEach(sample => {
        const { unit, value, measurand } = sample;
        const numericValue = parseFloat(value);
        
        if (isNaN(numericValue)) {
            console.warn('Invalid numeric value:', value);
            return;
        }
        
        //console.log(`Processing: ${unit} = ${numericValue} (${measurand})`);
        
        // Store based on unit type (avoiding duplicates by timestamp)
        switch (unit) {
            case 'V': // Voltage
                if (!transactionData.voltage.has(timestamp)) {
                    transactionData.voltage.set(timestamp, numericValue);
                    //console.log(`✓ Added voltage data: ${numericValue}V (total: ${transactionData.voltage.size})`);
                } else {
                    //console.log(`⚠ Voltage data already exists for timestamp: ${timestamp}`);
                }
                break;
            case 'W': // Power/Energy
                if (!transactionData.energy.has(timestamp)) {
                    transactionData.energy.set(timestamp, numericValue);
                    //console.log(`✓ Added energy data: ${numericValue}W (total: ${transactionData.energy.size})`);
                } else {
                    //console.log(`⚠ Energy data already exists for timestamp: ${timestamp}`);
                }
                break;
            case 'A': // Current
                if (!transactionData.current.has(timestamp)) {
                    transactionData.current.set(timestamp, numericValue);
                    //console.log(`✓ Added current data: ${numericValue}A (total: ${transactionData.current.size})`);
                } else {
                    //console.log(`⚠ Current data already exists for timestamp: ${timestamp}`);
                }
                break;
            case 'Wh': // Energy Hours
                if (!transactionData.energyHours.has(timestamp)) {
                    transactionData.energyHours.set(timestamp, numericValue);
                    //console.log(`✓ Added energy hours data: ${numericValue}Wh (total: ${transactionData.energyHours.size})`);
                } else {
                    //console.log(`⚠ Energy hours data already exists for timestamp: ${timestamp}`);
                }
                break;
            case 'Percent': // Ignore SoC for now
                //console.log(`Ignoring SoC data: ${numericValue}% (${measurand})`);
                break;
            default:
                //console.log(`Unhandled unit type: ${unit} (measurand: ${measurand}) for transaction ${transactionId}`);
        }
    });
    
    // Check if this is the currently selected transaction
    const isCurrentTransaction = selectedMainTransaction.value === transactionId.toString() || 
                                selectedMainTransaction.value === transactionId;
    
    //console.log('Is current transaction?', isCurrentTransaction);
    //console.log('Comparison:', selectedMainTransaction.value, '===', transactionId);
    
    // Update charts if this is the currently selected transaction
    if (isCurrentTransaction) {
        //console.log(`🔄 Updating charts for currently selected transaction: ${transactionId}`);
        updateChartsForTransaction(transactionId);
    } else {
        //console.log(`📊 Not updating charts - transaction ${transactionId} is not selected`);
    }
    
    // Update the transaction data map reference to trigger reactivity
    transactionMeterData.value = new Map(transactionMeterData.value);
    //console.log(`=== End processing for transaction ${transactionId} ===\n`);
};


// Watch for meter values WebSocket updates with user session refresh
watch(metervalues_websocket_p1, async (newWebSocketData) => {
    //console.log('🔔 Meter values WebSocket data received');
    //console.log('Is Proxy?', newWebSocketData?.constructor?.name === 'Object');
    //console.log('Data keys:', Object.keys(newWebSocketData || {}));
    
    if (newWebSocketData && newWebSocketData.message) {
        //console.log('📨 Message found, processing...');
        // Handle the Proxy by accessing the message directly
        const messageString = newWebSocketData.message;
        //console.log('📨 Message string type:', typeof messageString);
        //console.log('📨 Message length:', messageString?.length);
        
        // Extract transaction ID from message to check if it's user's session
        try {
            const messageData = JSON.parse(messageString);
            const transactionId = messageData.transaction_id;
            
            // Check if this is the user's active session (for non-admins)
            const isAdmin = Task_14_response.value && Task_14_response.value.length > 0 && 
                           Task_14_response.value[0].user__is_superuser;
            
            if (!isAdmin && myActiveSession.value && 
                transactionId && transactionId.toString() === myActiveSession.value.transaction_id.toString()) {
                //console.log('🔄 Refreshing user session data due to meter value update');
                
                // Show meter data notification if user is not currently viewing My Sessions tab
                showMeterDataNotification(); // ADD THIS LINE
                
                // Update my session charts with new data
                setTimeout(async () => {
                    await loadMySessionMeterValues(myActiveSession.value.transaction_id);
                }, 500);
            }
            
        } catch (parseError) {
            //console.log('Could not parse message for session check:', parseError);
        }
        
        processMeterValueMessage(messageString);
    } else {
        //console.log('❌ No message property found in WebSocket data');
        //console.log('❌ WebSocket data structure:', newWebSocketData);
    }
}, { deep: true });

const toAthensTime = (utcTimestamp) => {
    const date = new Date(utcTimestamp);
    // Get the timezone offset for Athens at this specific date (handles DST)
    const athensDate = new Date(date.toLocaleString("en-US", {timeZone: "Europe/Athens"}));
    const utcDate = new Date(date.toLocaleString("en-US", {timeZone: "UTC"}));
    const offset = athensDate.getTime() - utcDate.getTime();
    
    return date.getTime() + offset;
};
// Function to update charts for a specific transaction
const updateChartsForTransaction = (transactionId) => {
    //console.log(`📈 Starting chart update for transaction ${transactionId}`);
    
    const transactionData = transactionMeterData.value.get(transactionId);
    
    if (!transactionData) {
        console.warn('❌ No data found for transaction:', transactionId);
        //console.log('Available transactions:', Array.from(transactionMeterData.value.keys()));
        return;
    }
    
    //console.log('📈 Current data sizes before update:', {
    //    voltage: transactionData.voltage.size,
     //   energy: transactionData.energy.size,
     //   current: transactionData.current.size,
     //   energyHours: transactionData.energyHours.size
    //});
    
    // Convert Maps to arrays for tables and charts
    const voltageArray = Array.from(transactionData.voltage.entries()).map(([timestamp, value]) => ({
        transaction: transactionId,
        timestamp,
        value,
        unit: 'V'
    }));
    
    const energyArray = Array.from(transactionData.energy.entries()).map(([timestamp, value]) => ({
        transaction: transactionId,
        timestamp,
        value,
        unit: 'W'
    }));
    
    const currentArray = Array.from(transactionData.current.entries()).map(([timestamp, value]) => ({
        transaction: transactionId,
        timestamp,
        value,
        unit: 'A'
    }));
    
    const energyHoursArray = Array.from(transactionData.energyHours.entries()).map(([timestamp, value]) => ({
        transaction: transactionId,
        timestamp,
        value,
        unit: 'Wh'
    }));
    
    //console.log('📈 Converted arrays:', {
    //    voltage: voltageArray.length,
    //    energy: energyArray.length,
    //    current: currentArray.length,
    //    energyHours: energyHoursArray.length
    //});
    
    // Update table data
    //console.log('📊 Updating table data...');
    voltageData.value = voltageArray;
    energyData.value = energyArray;
    currentData.value = currentArray;
    energyHoursData.value = energyHoursArray;
    
    // Update chart series
    //console.log('📈 Updating chart series...');
    
const voltageChartData = voltageArray.map(item => [
    toAthensTime(item.timestamp), 
    parseFloat(item.value)
]);

const energyChartData = energyArray.map(item => [
    toAthensTime(item.timestamp), 
    parseFloat(item.value)
]);

const currentChartData = currentArray.map(item => [
    toAthensTime(item.timestamp), 
    parseFloat(item.value)
]);

const energyHoursChartData = energyHoursArray.map(item => [
    toAthensTime(item.timestamp), 
    parseFloat(item.value)
]);
    
    voltageChartSeries.value = [{ name: 'Voltage', data: voltageChartData }];
    energyChartSeries.value = [{ name: 'Energy', data: energyChartData }];
    currentChartSeries.value = [{ name: 'Current', data: currentChartData }];
    energyHoursChartSeries.value = [{ name: 'Energy Hours', data: energyHoursChartData }];
    
    //console.log('📈 Chart series updated with data points:', {
     //   voltage: voltageChartData.length,
    //    energy: energyChartData.length,
     //   current: currentChartData.length,
     //   energyHours: energyHoursChartData.length
    //});
    
    //console.log('✅ Chart update completed for transaction', transactionId);
};


// Debug function to check stored data
const debugTransactionData = () => {
    //console.log('=== TRANSACTION METER DATA DEBUG ===');
    //console.log('Stored transactions:', Array.from(transactionMeterData.value.keys()));
    //console.log('Selected transaction:', selectedMainTransaction.value);
    
    if (selectedMainTransaction.value) {
        const transactionId = parseInt(selectedMainTransaction.value);
        const data = transactionMeterData.value.get(transactionId);
        if (data) {
            //console.log(`Transaction ${transactionId} data:`, {
               // voltage: data.voltage.size,
                //energy: data.energy.size,
                //current: data.current.size,
                //energyHours: data.energyHours.size
           // });
        }
    }
    //console.log('=====================================');
};

// Make debug function available globally for testing
window.debugTransactionData = debugTransactionData;

// Watch for meter values WebSocket updates
watch(metervalues_websocket_p1, (newWebSocketData) => {
    //console.log('🔔 Meter values WebSocket data received');
    //console.log('Is Proxy?', newWebSocketData?.constructor?.name === 'Object');
    //console.log('Data keys:', Object.keys(newWebSocketData || {}));
    
    if (newWebSocketData && newWebSocketData.message) {
        //console.log('📨 Message found, processing...');
        // Handle the Proxy by accessing the message directly
        const messageString = newWebSocketData.message;
        //console.log('📨 Message string type:', typeof messageString);
        //console.log('📨 Message length:', messageString?.length);
        
        processMeterValueMessage(messageString);
    } else {
        //console.log('❌ No message property found in WebSocket data');
        //console.log('❌ WebSocket data structure:', newWebSocketData);
    }
}, { deep: true });

// Debug function to manually test chart updates
window.testChartUpdate = (transactionId) => {
    //console.log(`🧪 Testing chart update for transaction ${transactionId}`);
    updateChartsForTransaction(parseInt(transactionId));
};


// Debug function to check current state
window.debugMeterData = () => {
    //console.log('=== METER DATA DEBUG ===');
    //console.log('Selected transaction:', selectedMainTransaction.value);
    //console.log('Transaction data keys:', Array.from(transactionMeterData.value.keys()));
    //console.log('Chart series lengths:', {
    //    voltage: voltageChartSeries.value[0]?.data?.length || 0,
     //   energy: energyChartSeries.value[0]?.data?.length || 0,
     //   current: currentChartSeries.value[0]?.data?.length || 0,
     //   energyHours: energyHoursChartSeries.value[0]?.data?.length || 0
    //});
    //console.log('========================');

};

// Add these reactive references to your existing Vue setup
const mySessions = ref([])
const loadingSessions = ref(false)

// Computed properties for session summaries
const totalSpent = computed(() => {
  if (!mySessions.value || mySessions.value.length === 0) return 0
  return mySessions.value.reduce((sum, session) => sum + (parseFloat(session.total_cost__incl_vat) || 0), 0)
})

const totalEnergy = computed(() => {
  if (!mySessions.value || mySessions.value.length === 0) return 0
  return mySessions.value.reduce((sum, session) => sum + (parseFloat(session.total_energy) || 0), 0)
})

const averageSessionCost = computed(() => {
  if (!mySessions.value || mySessions.value.length === 0) return 0
  return totalSpent.value / mySessions.value.length
})
//getUserPrimaryIdTag(username)
// Function to fetch user's charging sessions from CDR API


const fetchMySessions = async () => {
  try {
    loadingSessions.value = true;
    
    // Get the user's primary ID tag
    const currentTag = await getUserPrimaryIdTag(username.value);
    
    if (!currentTag || !currentTag.idToken) {
      console.error('No primary ID tag found for user:', username.value);
      mySessions.value = [];
      return;
    }
    
    //console.log("FETCHING-- The Id Token that was used:", currentTag.idToken);

    // Query parameters for CDR API - Remove cdr_token filter, we'll filter client-side
    const queryParams = {
      // Note: Check if your API supports the 'fields' parameter for filtering response fields
      fields: [
        'id',
        'start_date_time',
        'total_cost__incl_vat',
        'total_energy',
        'total_time',
        'total_fixed_cost__incl_vat',
        'total_energy_cost__incl_vat',
        'total_time_cost__incl_vat',
        'cdr_token' // Include cdr_token field for comparison
      ].join(',') // Some APIs expect comma-separated fields
    };

    const apiUrl = '/api/cdr/';
    
    // Build query string properly handling arrays
    const queryString = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        // If your API expects multiple field parameters: ?fields=id&fields=start_date_time
        value.forEach(item => queryString.append(key, item));
      } else {
        queryString.append(key, value);
      }
    });
    
    const fullApiUrl = `${apiUrl}?${queryString}`;
    //console.log('Fetching sessions from:', fullApiUrl);

    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token.value}`,
      },
    };

    const response = await fetch(fullApiUrl, requestOptions);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
    }

    const data = await response.json();
    //console.log('Raw API response:', data);
    
    // Handle different response structures
    const allSessions = Array.isArray(data) ? data : (data.results || data.data || []);
    
    // Filter sessions by the specific ID token
    const userSessions = allSessions.filter(session => 
      session.cdr_token === currentTag.idToken
    );
    

    
    // Sort sessions by start_date_time (most recent first)
    const sortedSessions = userSessions.sort((a, b) => 
      new Date(b.start_date_time) - new Date(a.start_date_time)
    );
    
    mySessions.value = sortedSessions;
    //console.log(`Final filtered sessions for user ${username.value}:`, sortedSessions);

  } catch (error) {
    console.error('Error fetching user sessions:', error);
    mySessions.value = []; // Clear sessions on error
    
    // Optional: Set an error message for the UI
    // errorMessage.value = 'Failed to load charging sessions. Please try again.';
    
  } finally {
    loadingSessions.value = false;
  }
};

// Utility functions for formatting data
const formatSessionDate = (dateString) => {
  if (!dateString) return 'N/A'
  
  const date = new Date(dateString)
  return date.toLocaleString('el-GR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatCurrency = (amount) => {
  if (amount == null || amount === '') return '0.00'
  return parseFloat(amount).toFixed(2)
}

const formatEnergy = (energy) => {
  if (energy == null || energy === '') return '0.00'
  return parseFloat(energy).toFixed(2)
}

const formatDuration = (timeInSeconds) => {
  if (!timeInSeconds || timeInSeconds === 0) return '0m'
  
  const hours = Math.floor(timeInSeconds / 3600)
  const minutes = Math.floor((timeInSeconds % 3600) / 60)
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`
  } else {
    return `${minutes}m`
  }
}









// Function to clear stored data for testing
//window.clearTransactionData = () => {
//    //console.log('Clearing all stored transaction data...');
//    transactionMeterData.value.clear();
//    transactionMeterData.value = new Map();
//    
//    // Clear displays
//    voltageData.value = [];
//    energyData.value = [];
//    currentData.value = [];
//    energyHoursData.value = [];
//    
//    voltageChartSeries.value = [{ name: 'Voltage', data: [] }];
//    energyChartSeries.value = [{ name: 'Energy', data: [] }];
//    currentChartSeries.value = [{ name: 'Current', data: [] }];
//    energyHoursChartSeries.value = [{ name: 'Energy Hours', data: [] }];
//    
//    //console.log('All transaction data cleared');
//};
//-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0
// MeterValues Websocket END ----------------------------------------------------------------------------------------------------------------------
//-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0






//%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------
//%$#@------%$#@------%$#@------%$#@------%$#@---- WEBSOCKET --%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------
//%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------%$#@------
  
  
  ////////// **************************************** EMAIL START *****************************************************************************//////
  let email_info=ref([]);
  const send_email=async()=>{
  
      
    try {
        const query = {
          subject: "Hello",
          message: "onetwothree",
          recipient_email:"v.melissianos@gmail.com"
        };
        //console.log("query", query);
        const apiUrl = `/api/mailsending/`;
  
        const requestOptions = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token.value}`,
          },
          body: JSON.stringify(query)
        };
  
        const response = await fetch(apiUrl, requestOptions);
        email_info.value = await response.json(); // Parse response body as JSON
        //console.log("email_info.value", email_info.value);
      } catch (error) {
        console.error('An error occurred:', error.message);
        //showStopNotification("Failed to stop transaction.");
        return null;
      }
  
  }
  
  ////////// **************************************** EMAIL END *****************************************************************************//////
  



  //////////////////+-=-=-=-=-=-=-=-=--=-=-=- RESET PASSWORD START  +-=-=-=-=-=-=-=-=--=-=-=-+-=-=-=-=-=-=-=-=--=-=-=-+-=-=-=-=-=-=-=-=--=-=-=-+-=-=-=-=-=-=-=-=--=-=-=-+-=-=-=-=-=-=-=-=--=-=-=-

const reset_email = ref('');
let Forgot_legend =ref('Back to Sign in');

const Reset_password_email_send = async () => {
   try {
        const query = {
            email: reset_email.value
        }
        
        const apiUrl = `/api/user/password-reset/request/`
        
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(query)
        }
        
        const response = await fetch(apiUrl, requestOptions)
        const result = await response.json()
        
        if (response.ok) {
            // console.log("Password reset successful", result)
            signed_in_flag.value = 5
            Forgot_legend="Email Sent! Redirecting to..."

        } else {
            // Handle API error response
            errorMessage.value = result.message || result.error || 'Email send failed. Please try again.'
            console.error('Email send failed. failed:', result)
        }

  } catch (error) {
    console.error('Error Email send failed:', error);
  }
}

  //////////////////+-=-=-=-=-=-=-=-=--=-=-=-+-=-=-=-=-=- RESET PASSWORD START =-=-=--=-=-=-+-=-=-=-=-=-=-=-=--=-=-=-+-=-=-=-=-=-=-=-=--=-=-=-+-=-=-=-=-=-=-=-=--=-=-=-+-=-=-=-=-=-=-=-=--=-=-=-




  //^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%
  //^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^  ONMOUNTED  START %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%
  //^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%
onMounted(() => {
  // Try to restore session first
  const restored = loadAuthState();
  
  if (restored) {
    // Session restored, load user data
    logged_section();
  }
});

// Cleanup on component unmount
onBeforeUnmount(() => {
  saveAuthState();
  
  // Remove event listeners
  const activityEvents = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click'];
  activityEvents.forEach(event => {
    document.removeEventListener(event, resetSessionTimer);
  });
  
  // Clear timers
  if (sessionTimeoutId) clearTimeout(sessionTimeoutId);
  if (activityCheckId) clearInterval(activityCheckId);
});

// Save state periodically and on visibility change
watch([signed_in_flag, token, username], () => {
  if (signed_in_flag.value === 10) {
    saveAuthState();
  }
}, { deep: true });

// Handle page visibility changes (tab switching)
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      saveAuthState();
    } else if (document.visibilityState === 'visible') {
      // Optionally refresh data when tab becomes visible again
      if (signed_in_flag.value === 10) {
        // console.log('Tab visible - refreshing data...');
        // Refresh critical data without full reload
        Task_14();
        Transaction_Options();
      }
    }
  });
}


// Function to get transaction ID for a specific connector
const getTransactionIdForConnector = async (connector) => {
  try {
    const query = {
      chargepoint_id: connector.chargepoint,
      connector_id: connector.connectorid,
      transaction_status: "Started",
      fields: ['transaction_id']
    };

    const apiUrl = `/api/transaction/`;
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
    const data = await response.json();
    
    if (data && data.length > 0) {
      return data[0].transaction_id;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching transaction ID:', error);
    return null;
  }
};
  
////{}{}}{}{}{}{}{}{}{}{}{}{}{}{{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}}
////{}{}}{}{}{}{}{}{}{}{}{}{}{}{{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}}
////{}{}}{}{}{}{}{}{}{}{}{}{}{}{{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}}

// Add this with your other reactive variables
const userPrimaryIdTag = ref(null); // Store the user's first/primary ID tag
const userIdTags = ref([]); // Store all user's ID tags for reference

// Function to get user's primary (first) ID tag
const getUserPrimaryIdTag = async (username) => {
  try {
    if (!username) {
      console.warn('No username provided for ID tag lookup');
      return null;
    }

    //console.log('🔍 Getting primary ID tag for user:', username);
    
    const query = {
      username: username, // Note: using 'user' field that corresponds to username
      fields: ['idToken', 'friendly_name', 'expiry_date', 'revoked']
    };
    
    const apiUrl = `/api/idtag/`;
    const queryString = new URLSearchParams(query).toString();
    const fullApiUrl = `${apiUrl}?${queryString}`;
    
    //console.log('🔍 ID Tag API URL:', fullApiUrl);
    
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token.value}`,
      },
    };
    
    const response = await fetch(fullApiUrl, requestOptions);
    
    if (!response.ok) {
      console.error('Failed to fetch user ID tags:', response.status, response.statusText);
      return null;
    }
    
    const data = await response.json();
    //console.log('🔍 User ID tags response:', data);
    
    if (data && Array.isArray(data) && data.length > 0) {
      // Store all ID tags for reference
      userIdTags.value = data;
      
      // Filter out revoked tags and get the first valid one
      const validIdTags = data.filter(tag => !tag.revoked);
      
      if (validIdTags.length > 0) {
        // Get the first valid (non-revoked) ID tag
        const primaryIdTag = validIdTags[0];
        userPrimaryIdTag.value = primaryIdTag;
        
        //console.log('✅ Primary ID tag found:', primaryIdTag.idToken);
        //console.log('🏷️ Friendly name:', primaryIdTag.friendly_name);
        
        return primaryIdTag;
      } else {
        console.warn('⚠️ No valid (non-revoked) ID tags found for user');
        userPrimaryIdTag.value = null;
        return null;
      }
    } else {
      //console.log('ℹ️ No ID tags found for user:', username);
      userPrimaryIdTag.value = null;
      userIdTags.value = [];
      return null;
    }
    
  } catch (error) {
    console.error('❌ Error getting user primary ID tag:', error);
    userPrimaryIdTag.value = null;
    userIdTags.value = [];
    return null;
  }
};

// Helper function to get just the primary ID token string
const getPrimaryIdToken = () => {
  if (userPrimaryIdTag.value && userPrimaryIdTag.value.idToken) {
    return userPrimaryIdTag.value.idToken;
  }
  
  console.warn('⚠️ No primary ID tag available');
  return null;
};

// Helper function to check if user has valid ID tags
const hasValidIdTags = () => {
  return userIdTags.value && userIdTags.value.length > 0 && 
         userIdTags.value.some(tag => !tag.revoked);
};

// Helper function to get user's friendly tag name
const getPrimaryIdTagFriendlyName = () => {
  if (userPrimaryIdTag.value && userPrimaryIdTag.value.friendly_name) {
    return userPrimaryIdTag.value.friendly_name;
  }
  
  return 'Unknown Tag';
};


const middleware_my_sessions = async () => {  

  await loadMyActiveSessions();
  await fetchMySessions();
  
}

////{}{}}{}{}{}{}{}{}{}{}{}{}{}{{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}}
////{}{}}{}{}{}{}{}{}{}{}{}{}{}{{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}}
////{}{}}{}{}{}{}{}{}{}{}{}{}{}{{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}}
  
  // Debug function to check user ID tag status (add this for testing)
const debugUserIdTags = () => {
    //console.log('=== USER ID TAG DEBUG INFO ===');
    //console.log('Username:', username.value);
    //console.log('Primary ID Tag:', userPrimaryIdTag.value);
    //console.log('All ID Tags:', userIdTags.value);
    //console.log('Has valid tags:', hasValidIdTags());
    //console.log('Primary token:', getPrimaryIdToken());
    //console.log('Primary friendly name:', getPrimaryIdTagFriendlyName());
    //console.log('==============================');
};

// Make it available globally for testing in browser console
window.debugUserIdTags = debugUserIdTags;
  
// Update the logged_section function to use connectors instead of chargepoints
// Updated logged_section function
// Updated logged_section function
const logged_section = async () => {  
  username.value = CryptoJS.AES.decrypt(encrypted_Username.value, AES_encryption_message.value).toString(CryptoJS.enc.Utf8);
  token.value = CryptoJS.AES.decrypt(encrypted_Token.value, AES_encryption_message.value).toString(CryptoJS.enc.Utf8);
  
  console.log("🔐 User logged in:", username.value);

  try {
    // Load user data first
    // console.log('📊 Loading user data...');
    await Task_14();
    
    // Load other data
    Task_1();
    Transaction_Options();
    Task_18();
    Task_9();

    // Load connectors
    // console.log('🔌 Loading connectors...');
    await Task_5_Connectors();
    // console.log(`✅ ${Task_5_connectors.value.length} connectors loaded`);
    
    // Get user location
    await getGeolocation();
    
    // CRITICAL: Ensure we're on chargepoint tab and wait for it to be ready
    selectedTab.value = 'chargepoint';
    await nextTick();
    
    // Initialize the map
    // console.log('🗺️ Initializing chargepoint map...');
    await showMap('chargepoint');
    
    // Extra safety: render markers again after a delay
    setTimeout(() => {
      if (mapObject.value && Task_5_connectors.value.length > 0) {
        // console.log('🔄 Safety re-render of markers...');
        renderConnectorMarkers();
      }
    }, 1000);
    
  } catch (error) {
    console.error('❌ Error in logged_section:', error);
  }
  
  // Connect WebSockets
  connectWebSocket_DSS();
  connectWebSocket_CONNECTOR();
  connectWebSocket_METERVALUES();
};

window.forceMapRefresh = async () => {
  // console.log('🔄 Force refreshing map...');
  if (mapObject.value) {
    mapObject.value.invalidateSize();
    renderConnectorMarkers();
  } else {
    await initializeMap();
  }
};
  
  //^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%
  //^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^  ONMOUNTED  END %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%
  //^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%
  

//-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X
//-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X LOGGED IN SESSIONS -X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X
//-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X
// Add these constants and refs after your other declarations
const SESSION_TIMEOUT = 10 * 60 * 1000; // 30 minutes in milliseconds
const ACTIVITY_CHECK_INTERVAL = 60 * 1000; // Check every minute
let sessionTimeoutId = null;
let activityCheckId = null;
const lastActivityTime = ref(Date.now());

// Function to check session validity
const isSessionValid = () => {
  const savedTimestamp = localStorage.getItem('ev4eu_last_activity');
  if (!savedTimestamp) return false;
  
  const timeSinceLastActivity = Date.now() - parseInt(savedTimestamp);
  return timeSinceLastActivity < SESSION_TIMEOUT;
};

// Function to update last activity timestamp
const updateActivity = () => {
  lastActivityTime.value = Date.now();
  localStorage.setItem('ev4eu_last_activity', lastActivityTime.value.toString());
};

// Function to handle session timeout
const handleSessionTimeout = () => {
  // console.log('⏱️ Session expired due to inactivity');
  clearAuthState();
  signed_in_flag.value = 5;
  errorMessage.value = 'Your session has expired. Please sign in again.';
  
  // Clear any intervals
  if (sessionTimeoutId) clearTimeout(sessionTimeoutId);
  if (activityCheckId) clearInterval(activityCheckId);
};

// Function to reset session timer
const resetSessionTimer = () => {
  // Clear existing timeout
  if (sessionTimeoutId) clearTimeout(sessionTimeoutId);
  
  // Update activity
  updateActivity();
  
  // Set new timeout
  sessionTimeoutId = setTimeout(handleSessionTimeout, SESSION_TIMEOUT);
};



// Update the saveAuthState function to include timestamp
const saveAuthState = () => {
  if (signed_in_flag.value === 10 && token.value && username.value) {
    localStorage.setItem('ev4eu_auth_token', token.value);
    localStorage.setItem('ev4eu_username', username.value);
    localStorage.setItem('ev4eu_signed_in', 'true');
    localStorage.setItem('ev4eu_encryption_key', AES_encryption_message.value);
    updateActivity(); // Save activity timestamp
  }
};

// Update the loadAuthState function to check session validity
const loadAuthState = () => {
  const savedToken = localStorage.getItem('ev4eu_auth_token');
  const savedUsername = localStorage.getItem('ev4eu_username');
  const savedSignedIn = localStorage.getItem('ev4eu_signed_in');
  const savedEncryptionKey = localStorage.getItem('ev4eu_encryption_key');
  
  // Check if session is still valid
  if (!isSessionValid()) {
    // console.log('❌ Session expired - clearing state');
    clearAuthState();
    return false;
  }
  
  if (savedToken && savedUsername && savedSignedIn === 'true') {
    token.value = savedToken;
    username.value = savedUsername;
    AES_encryption_message.value = savedEncryptionKey || generateRandomString();
    signed_in_flag.value = 10;
    
    encrypted_Username.value = CryptoJS.AES.encrypt(username.value, AES_encryption_message.value);
    encrypted_Token.value = CryptoJS.AES.encrypt(token.value, AES_encryption_message.value);
    
    // console.log('✅ Session restored from localStorage');
    
    // Start session monitoring
    startSessionMonitoring();
    
    return true;
  }
  
  return false;
};

// Function to start session monitoring
const startSessionMonitoring = () => {
  // Reset timer on user activity
  const activityEvents = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click'];
  
  activityEvents.forEach(event => {
    document.addEventListener(event, resetSessionTimer, { passive: true });
  });
  
  // Initial timer setup
  resetSessionTimer();
  
  // Periodic check for session validity (every minute)
  activityCheckId = setInterval(() => {
    if (!isSessionValid()) {
      handleSessionTimeout();
    }
  }, ACTIVITY_CHECK_INTERVAL);
};


// Update clearAuthState to include timestamp removal
const clearAuthState = () => {
  localStorage.removeItem('ev4eu_auth_token');
  localStorage.removeItem('ev4eu_username');
  localStorage.removeItem('ev4eu_signed_in');
  localStorage.removeItem('ev4eu_encryption_key');
  localStorage.removeItem('ev4eu_last_activity');
  
  // Clear timers
  if (sessionTimeoutId) clearTimeout(sessionTimeoutId);
  if (activityCheckId) clearInterval(activityCheckId);
};

//-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X
//-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X
//-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X-X
  
  </script>
  
  
  <style>
    html,
    body,
    #app {
      height: 100%;
      margin: 0;
  
  
    }
  
    .map-container {
      position: relative;
      /* Updated positioning */
      width: 100%;
      /* Adjust the width as needed */
      height: 500px;
      /* Increased height for the map container */
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
  
    .windy {
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
  
    .distance-slider {
      width: 400px;
      /* Adjust the width as needed */
      margin-right: 10px;
    }
  
    .input-container {
      position: relative;
      display: flex;
      align-items: center;
    }
  
    .form-input {
      flex: 1;
      padding-right: 30px;
      /* Adjust padding to make room for the clear button */
    }
  
    .clear-button {
      position: absolute;
      right: 10px;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 16px;
      color: #999;
    }
  
    .clear-button:hover {
      color: #333;
    }
  
    /* Simple styles for the dropdown */
    .dropdown {
      max-height: 150px;
  
      margin-top: 8px;
      padding: 0;
      list-style: none;
    }
  
    .dropdown-item {
      padding: 8px;
      cursor: pointer;
    }
  
    .dropdown-item:hover {
      background-color: #f0f0f0;
    }
  
    .price-component {
      border: 1px solid #ccc;
      padding: 16px;
      margin-bottom: 16px;
      background-color: #fff;
    }
  
    .dark .price-component {
      background-color: #1a202c;
      border-color: #2d3748;
    }
  
  
    .notification-popup {
    position: fixed;
    bottom: 20px; /* Position 20px from the bottom */
    right: 20px; /* Position 20px from the right */
    z-index: 1000;
    max-width: 600px; /* Limit the width */
    animation: fadeOut 10s forwards;
  }

    .expand-enter-active,
    .expand-leave-active {
      transition: all 0.3s ease;
      max-height: 500px;
      overflow: hidden;
    }

    .expand-enter-from,
    .expand-leave-to {
      max-height: 0;
      opacity: 0;
    }

    /* Scrollbar styling */
    ul::-webkit-scrollbar {
      width: 6px;
    }

    ul::-webkit-scrollbar-track {
      background: transparent;
    }

    ul::-webkit-scrollbar-thumb {
      background: rgba(156, 163, 175, 0.5);
      border-radius: 3px;
    }

    ul::-webkit-scrollbar-thumb:hover {
      background: rgba(156, 163, 175, 0.7);
    }

    /* Dark mode scrollbar */
    .dark ul::-webkit-scrollbar-thumb {
      background: rgba(75, 85, 99, 0.5);
    }

    .dark ul::-webkit-scrollbar-thumb:hover {
      background: rgba(75, 85, 99, 0.7);
    }
  
  @keyframes fadeOut {
    0% { opacity: 1; }
    80% { opacity: 1; }
    100% { opacity: 0; }
  }
  
  </style>