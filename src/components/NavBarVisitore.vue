<template>
    <div>
        
        <div class=" p-6  flex justify-between">

            <div>
                
            </div>


            <div>
                <div class=" relative">
                   
                    <input type="text" placeholder="بحث" class="h-9  w-80 focus:outline-purple-700  py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" name="" id="">
                    <button class="absolute top-1/2 left-1 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
                 
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </button>
                </div>
            </div>

       

            <div class="flex gap-4 text-xs text-purple-800  self-center">
                <span>
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0009 5C13.4331 5 14.8066 5.50571 15.8193 6.40589C16.832 7.30606 17.4009 8.52696 17.4009 9.8C17.4009 11.7691 17.846 13.2436 18.4232 14.3279C19.1606 15.7133 19.5293 16.406 19.5088 16.5642C19.4849 16.7489 19.4544 16.7997 19.3026 16.9075C19.1725 17 18.5254 17 17.2311 17H6.77066C5.47638 17 4.82925 17 4.69916 16.9075C4.54741 16.7997 4.51692 16.7489 4.493 16.5642C4.47249 16.406 4.8412 15.7133 5.57863 14.3279C6.1558 13.2436 6.60089 11.7691 6.60089 9.8C6.60089 8.52696 7.16982 7.30606 8.18251 6.40589C9.19521 5.50571 10.5687 5 12.0009 5ZM12.0009 5V3M9.35489 20C10.0611 20.6233 10.9888 21.0016 12.0049 21.0016C13.0209 21.0016 13.9486 20.6233 14.6549 20" stroke="#6b21a8 " stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                </span>
 
                <span v-if='this.$route.name == `visitore` '>
                    <svg width="25px" height="25px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#6b21a8 " fill="none"><circle cx="32" cy="18.14" r="11.14"/><path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z"/></svg>
                </span>
               
                <span v-else>
                    <img src="../assets/img/profil_img.jpg" class="w-8 rounded-full" alt="">    
                </span>
             
                   
                <span class="  self-center" v-if='this.$route.name == `visitore` '>
                   <router-link to="/signup">انشاءحساب</router-link> 
                |
                   <router-link to="/login">تسجيل دخول</router-link> 
                </span>

                <span  class="  self-center" v-else>
                    عبدلله
                </span>


            </div>

        </div>
    </div>
</template>

<script>

export default {

    name : 'NavBarVisitore',

    mounted(){
    
    }
}
</script>

<style scoped>

</style>