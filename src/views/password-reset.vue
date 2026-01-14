<template>
    <div>
        <div class="absolute inset-0">
            <img src="/assets/images/auth/background_ev4eu.png" alt="image" class="h-full w-full object-cover" />
        </div>

        <div
            class="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16"
        >
            <div
                class="relative w-full max-w-[400px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]"
            >
                <div class="relative flex flex-col justify-center rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 px-6 py-8">
                    <!-- EV4EU Logo -->
                    <div class="flex justify-center mb-6">
                        <img src="/assets/images/auth/ev4eu_logo_trasparent.png" alt="EV4EU Logo" class="h-12" />
                    </div>

                    <!-- Success State -->
                    <div v-if="isSuccess" class="text-center">
                        <div class="mb-6">
                            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h1 class="mb-3 text-2xl font-bold !leading-snug dark:text-white">Password Updated!</h1>
                            <p class="dark:text-white">Your password has been successfully reset.</p>
                        </div>
                        <button 
                            @click="router.push('/')"
                            class="btn btn-gradient w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]"
                        >
                            GO TO LOGIN
                        </button>
                    </div>

                    <!-- Form State -->
                    <div v-else>
                        <div class="mb-6 text-center">
                            <h1 class="mb-3 text-2xl font-bold !leading-snug dark:text-white">Reset Password</h1>
                            <p class="dark:text-white">Create your new password</p>
                        </div>

                        <form class="space-y-4" @submit.prevent="handleSubmit">
                            <!-- Error Message -->
                            <div v-if="errorMessage" class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
                                {{ errorMessage }}
                            </div>

                            <!-- New Password -->
                            <div>
                                <label for="newPassword" class="dark:text-white mb-2 block">New Password</label>
                                <div class="relative text-white-dark">
                                    <input 
                                        id="newPassword" 
                                        v-model="formData.newPassword"
                                        :type="showNewPassword ? 'text' : 'password'" 
                                        placeholder="Enter new password" 
                                        class="form-input ps-10 pr-10 placeholder:text-white-dark w-full" 
                                    />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>
                                    <button 
                                        type="button"
                                        @click="showNewPassword = !showNewPassword"
                                        class="absolute end-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        <svg v-if="!showNewPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                        </svg>
                                    </button>
                                </div>
                                <div class="mt-2 text-xs space-y-1">
                                    <div :class="passwordValidation.length ? 'text-green-600' : 'text-gray-500 dark:text-gray-400'">
                                        {{ passwordValidation.length ? '✓' : '•' }} At least 8 characters
                                    </div>
                                    <div :class="passwordValidation.uppercase ? 'text-green-600' : 'text-gray-500 dark:text-gray-400'">
                                        {{ passwordValidation.uppercase ? '✓' : '•' }} One capital letter
                                    </div>
                                    <div :class="passwordValidation.symbol ? 'text-green-600' : 'text-gray-500 dark:text-gray-400'">
                                        {{ passwordValidation.symbol ? '✓' : '•' }} One symbol
                                    </div>
                                </div>
                            </div>

                            <!-- Confirm Password -->
                            <div>
                                <label for="confirmPassword" class="dark:text-white mb-2 block">Confirm Password</label>
                                <div class="relative text-white-dark">
                                    <input 
                                        id="confirmPassword" 
                                        v-model="formData.confirmPassword"
                                        :type="showConfirmPassword ? 'text' : 'password'" 
                                        placeholder="Confirm new password" 
                                        class="form-input ps-10 pr-10 placeholder:text-white-dark w-full" 
                                    />
                                    <span class="absolute start-4 top-1/2 -translate-y-1/2">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </span>
                                    <button 
                                        type="button"
                                        @click="showConfirmPassword = !showConfirmPassword"
                                        class="absolute end-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        <svg v-if="!showConfirmPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                                        </svg>
                                    </button>
                                </div>
                                <div v-if="formData.confirmPassword" class="mt-2 text-xs">
                                    <span v-if="passwordsMatch" class="text-green-600">✓ Passwords match</span>
                                    <span v-else class="text-red-500">✗ Passwords do not match</span>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                :disabled="!isFormValid || isLoading"
                                class="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)] disabled:opacity-50"
                            >
                                {{ isLoading ? 'UPDATING...' : 'RESET PASSWORD' }}
                            </button>
                        </form>

                        <!-- Back to Login -->
                        <div class="text-center mt-4">
                            <button 
                                @click="router.push('/')"
                                class="bg-purple-400 text-white px-2 py-1 rounded-md"
                            >
                                Back to Login
                            </button>
                        </div>
                    </div>

                    <!-- Disclaimer Text -->
                    <div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600 text-xs text-gray-700 dark:text-gray-300 flex items-center">
                        <img src="/assets/images/auth/eu-logo.jpg" alt="EU Logo" class="h-8 mr-2 flex-shrink-0" />
                        <p class="text-[10px] leading-tight">
                            This project has received funding from the European Union's Horizon 2020 research and innovation programme.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useMeta } from '@/composables/use-meta'

useMeta({ title: 'Reset Password' })

const router = useRouter()
const route = useRoute()

// Reactive data
const formData = reactive({
    newPassword: '',
    confirmPassword: ''
})

const showNewPassword = ref(false)
const showConfirmPassword = ref(false)
const isLoading = ref(false)
const isSuccess = ref(false)
const errorMessage = ref('')

// Password validation computed properties
const passwordValidation = computed(() => ({
    length: formData.newPassword.length >= 8,
    uppercase: /[A-Z]/.test(formData.newPassword),
    symbol: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(formData.newPassword)
}))

const isPasswordValid = computed(() => 
    Object.values(passwordValidation.value).every(valid => valid)
)

const passwordsMatch = computed(() => 
    formData.newPassword === formData.confirmPassword && formData.confirmPassword !== ''
)

const isFormValid = computed(() => 
    isPasswordValid.value && passwordsMatch.value
)

// Get token from URL when needed
const extractTokenFromUrl = () => {
    const currentUrl = window.location.href;
    console.log('Current URL:', currentUrl);
    
    // Extract token from URL - looking for everything after the ? character
    const match = currentUrl.match(/\?(.+)/);
    if (match) {
        const token = match[1];
        console.log('Extracted token:', token);
        return token;
    }
    
    console.log('No token found in URL');
    return '';
}

// Methods
const handleSubmit = async () => {
    if (!isFormValid.value) return
    
    // Extract token from URL only when submitting
    const urlToken = extractTokenFromUrl()
    
    if (!urlToken) {
        errorMessage.value = 'Reset token is missing from URL'
        return
    }
    
    isLoading.value = true
    errorMessage.value = ''
    
    try {
        const query = {
            new_password: formData.newPassword,
            confirm_password: formData.confirmPassword,
            token: urlToken
        }
        
        console.log('Submitting with token:', urlToken)
        
        const apiUrl = `/api/user/password-reset/submit/`
        
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
            console.log("Password reset successful", result)
            isSuccess.value = true
        } else {
            // Handle API error response
            errorMessage.value = result.message || result.error || 'Password reset failed. Please try again.'
            console.error('Password reset failed:', result)
        }
        
    } catch (error: unknown) {
        const errorMsg = error instanceof Error ? error.message : 'An unknown error occurred'
        console.error('An error occurred:', errorMsg)
        errorMessage.value = 'Network error. Please check your connection and try again.'
    } finally {
        isLoading.value = false
    }
}
</script>