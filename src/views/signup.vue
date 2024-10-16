<template >

    
    <div class=" bg-purple-50 h-full">

    <div  class=" flex justify-center  m-0 p-5">
        
    <div class=" w-96 border bg-white p-5 rounded-3xl border-none ">
        <div class="mb-8">
            <p class="  pb-4 ">انشاء حساب</p>
            <span class="  text-sm">هل لديك حساب؟ <a href="" class=" text-purple-600 ">تسجيل الدخول</a></span>
        </div>

        <form action="" class=" text-xs font-light">

            <div class=" flex justify-center gap-4">
               
                <div class=" grid">
                    <label for="" class=" text-start pb-2">الاسم الاول</label>
                    <input type="text" class=" h-9 focus:outline-purple-700  w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" name="" id="">
                </div>

                <div class=" grid">
                    <label for="" class=" text-start pb-2">الاسم الاخير</label>
                    <input type="text" class="h-9 focus:outline-purple-700 w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" name="" id="">
                </div>
            </div>

            <div class=" grid">
                <label for="" class=" text-start pb-2 pt-4">الايميل </label>
                <input type="text" class="h-9 focus:outline-purple-700 w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" name="" id="">
            </div>


            
            <div class=" grid">
                <label for="" class=" text-start pb-2 pt-4">الرقم السري </label>
                <div class=" relative">
                   
                    <input type="text" class="h-9 focus:outline-purple-700 w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" name="" id="">
                    <button class="absolute top-1/2 left-1 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
                 
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_15_200)">
                            <rect width="24" height="24" fill="white"/>
                            <circle cx="12" cy="13" r="2" stroke="#000000" stroke-linejoin="round"/>
                            <path d="M12 7.5C7.69517 7.5 4.47617 11.0833 3.39473 12.4653C3.14595 12.7832 3.14595 13.2168 3.39473 13.5347C4.47617 14.9167 7.69517 18.5 12 18.5C16.3048 18.5 19.5238 14.9167 20.6053 13.5347C20.8541 13.2168 20.8541 12.7832 20.6053 12.4653C19.5238 11.0833 16.3048 7.5 12 7.5Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_15_200">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </button>
                </div>

                
                
            </div>

            
            <div class=" grid">
                <label for="" class=" text-start pb-2 pt-4">اعادة الرقم السري  </label>
                <div class=" relative">
                   
                    <input type="text" class="h-9 focus:outline-purple-700 w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" name="" id="">
                    <button class="absolute top-1/2 left-1 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
                 
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_15_200)">
                            <rect width="24" height="24" fill="white"/>
                            <circle cx="12" cy="13" r="2" stroke="#000000" stroke-linejoin="round"/>
                            <path d="M12 7.5C7.69517 7.5 4.47617 11.0833 3.39473 12.4653C3.14595 12.7832 3.14595 13.2168 3.39473 13.5347C4.47617 14.9167 7.69517 18.5 12 18.5C16.3048 18.5 19.5238 14.9167 20.6053 13.5347C20.8541 13.2168 20.8541 12.7832 20.6053 12.4653C19.5238 11.0833 16.3048 7.5 12 7.5Z" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_15_200">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                            </button>
                </div>
                </div>

                <div class="flex my-5 mx-3 gap-5">
                    <input type="checkbox" name="" class="" id="">
                   
                    <span class=" text-start">بالنقر على "انشاء حساب" , اوافق على انني فرأت وقبلت <a href="" class=" text-purple-800  font-bold">شروط الاستخدام</a> و  <a href="" class=" text-purple-800 font-bold">سياسة الخصوصية</a></span>
                   
                </div>

            
                    <button type="submit" class=" bg-purple-900  w-full   text-white font-bold py-2 px-4 rounded">انشاء حساب</button>
                

               
        </form>

        <div class="flex mb-6 items-center my-5">
            <div class="w-full h-px bg-gray-300"></div>
            <span class="mx-4 text-sm font-semibold text-gray-500">او</span>
            <div class="w-full h-px bg-gray-300"></div>
        </div>

        <div class="flex  justify-center">
            <div class=" w-52 self-center px-2">
                <a class="inline-flex w-full py-3 px-4 items-center justify-center rounded border border-gray-200 hover:border-gray-400 transition duration-100" href="#">
                  <img src="saturn-assets/images/sign-up/icon-apple.svg" alt="">
                  <span class="ml-4 text-sm font-semibold text-gray-500">تسجيل الدخول google</span>
                </a>
              </div>
        </div>
    
    </div>
</div>
</div>
</template>
<script>
export default {
    
    name : 'SignupV'
}
</script>

<style >
    
</style>