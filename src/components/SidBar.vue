<template>
    
        
        <div id="side-menu" class="   top-0 right-0    z-50 bg-[#503E9D] p-5
        flex flex-col space-y-5 text-white duration-300 px-1">
            <img src="../assets/img/logo_remove.png" alt="">

            <router-link exact active-class="active" class=" hover:bg-white hover:text-black py-2 rounded-xl  flex gap-3  active:bg-white active:text-black" to="/visitore" >
                <span>
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z" fill="white"/>
                        </svg>
                </span>
                <span>
                    الصفحة الرئيسية
                </span>
            </router-link>
            <router-link exact active-class="active" class="hover:bg-white hover:text-black py-2 rounded-xl flex gap-3" to="/admin">
                <span>
                    <svg width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path stroke="white" stroke-width="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3ZM14 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z"/>
                      </svg>
                </span>
                <span>
                    لوحة التحكم
                </span>
            </router-link>
            <router-link exact active-class="active"  class="hover:bg-white hover:text-black py-2 rounded-xl flex gap-3" to="/profile">
                <span>
                    <svg width="25px" height="25px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="white " fill="none"><circle cx="32" cy="18.14" r="11.14"/><path d="M54.55,56.85A22.55,22.55,0,0,0,32,34.3h0A22.55,22.55,0,0,0,9.45,56.85Z"/></svg>
              
                </span>
                <span>
                    الملف التعريفي
                </span>
            </router-link>
            <router-link   active-class="active"  class="hover:bg-white hover:text-black py-2 rounded-xl flex gap-3" to="/services">
                <span>
                    <svg width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  stroke="white" d="M17.673 5.606a3326.02 3326.02 0 0 1-5.671-2.674L.138 8.524l2.03.98L2 9.531V20h1v-9.626l.72-.124.28.135v5.288c0 .914 5.206 3.533 6.249 4.049a3.89 3.89 0 0 0 3.48-.026C20 16.486 20 15.895 20 15.673v-5.288l3.854-1.857s-3.8-1.801-6.181-2.922zM19 15.504a51.526 51.526 0 0 1-5.726 3.302 2.884 2.884 0 0 1-2.582.02A40.184 40.184 0 0 1 5 15.521v-4.655l7 3.373 7-3.373zm-7-2.373L5.416 9.958l6.469-1.115-.17-.987-7.85 1.354-1.403-.676 9.537-4.495c.825.393 8.523 4.014 9.542 4.494z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                </span>

                <span>
                    خدمات معين
                </span>
            </router-link>
            <a class="hover:bg-white hover:text-black py-2 rounded-xl flex gap-3" href="#">
                <span>
                    <svg width="25px" height="25px" viewBox="0 0 24 24" id="Layer_4" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path stroke="white" class="st0" d="M14.77,20.99c0.134,0,0.244-0.02,0.358-0.041c0.171,0.025,0.342,0.041,0.512,0.041  c2.261,0,4.101-1.835,4.101-4.09c0-1.652-0.98-3.109-2.48-3.76V7.39c0-0.134-0.054-0.263-0.15-0.357l-0.455-0.446  c-0.016-0.022-0.033-0.043-0.052-0.061L13.237,3.16c-0.095-0.096-0.223-0.15-0.357-0.15H9.297c-0.276,0-0.5,0.224-0.5,0.5  s0.224,0.5,0.5,0.5h3.111c-0.02,0.071-0.033,0.145-0.033,0.221V6.38c0,0.833,0.678,1.51,1.51,1.51h2.149  c0.078,0,0.153-0.012,0.226-0.034v4.987c-0.021-0.003-0.037-0.002-0.058-0.005c-0.198-0.03-0.386-0.049-0.562-0.049  c-2.261,0-4.1,1.844-4.1,4.11c0,0.279,0.036,0.55,0.09,0.816c0.017,0.083,0.044,0.161,0.065,0.242  c0.049,0.181,0.107,0.358,0.18,0.529c0.036,0.085,0.075,0.168,0.117,0.251c0.084,0.165,0.18,0.321,0.285,0.473  c0.048,0.069,0.091,0.139,0.142,0.204c0.155,0.196,0.324,0.38,0.513,0.545c0.01,0.009,0.018,0.021,0.028,0.03H6.74  c-0.816,0-1.48-0.673-1.48-1.5V5.51c0-0.827,0.664-1.5,1.48-1.5h0.838c0.276,0,0.5-0.224,0.5-0.5s-0.224-0.5-0.5-0.5H6.74  c-1.368,0-2.48,1.122-2.48,2.5v12.98c0,1.378,1.112,2.5,2.48,2.5H14.77z M13.885,6.89c-0.281,0-0.51-0.229-0.51-0.51V4.717  l2.173,2.173H13.885z M12.54,16.9c0-1.715,1.391-3.11,3.1-3.11c0.226,0,0.476,0.034,0.764,0.101l0.208,0.057  c1.254,0.413,2.129,1.626,2.129,2.952c0,1.704-1.391,3.09-3.101,3.09c-0.142,0-0.282-0.008-0.5-0.04l-0.115-0.021  C13.585,19.65,12.54,18.376,12.54,16.9z"/><path stroke="white" class="st0" d="M14.893,18.038c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146l1.583-1.583  c0.195-0.195,0.195-0.512,0-0.707s-0.512-0.195-0.707,0l-1.23,1.23l-0.438-0.438c-0.195-0.195-0.512-0.195-0.707,0  s-0.195,0.512,0,0.707L14.893,18.038z"/></svg>
                </span>
                <span>
                    ملفاتي
                </span>
            </a>

            <a class="hover:bg-white hover:text-black py-2 rounded-xl flex gap-3" href="#">
                <span>
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Communication / Chat_Conversation">
                        <path  id="Vector" d="M16 8H20C20.5523 8 21 8.44772 21 9V20L17.667 17.231C17.4875 17.0818 17.2608 17 17.0273 17H9C8.44771 17 8 16.5523 8 16V13M16 8V5C16 4.44772 15.5523 4 15 4H4C3.44772 4 3 4.44772 3 5V16.0003L6.33301 13.2308C6.51255 13.0817 6.73924 13 6.97266 13H8M16 8V12C16 12.5523 15.5523 13 15 13H8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        </svg>  </span>
                <span>
                    تواصل معنا
                </span>
            </a>


            <div class=" top-96 pt-32">
            <div class="mx-6 ">
            <div class="  p-3 rounded rounded-xl relative  bg-white shadow-lg">
                <img class="w-10  absolute top-0  transform -translate-y-1/2 -translate-x-16 " src="../assets/img/star_icon.jpg" alt="Sunset in the mountains">
                <div class="px-6 py-2">
                  <div class="font-bold text-xl mb-2 text-[#7561E9]">ترقية الحساب</div>
                  <p class="text-gray-700 text-sm">
                    منصة معين تقدم حلا مبتكرا للمذاكرة التقليدية من خلال تحويل المحتوى النصي 
                  </p>
                </div>
                <div class=" pt-0 pb-2">
                    <button type="button" class=" bg-[#7561E9] w-32 mx-auto   text-white font-bold py-2 px-4 rounded"> ترقية</button>
            
                </div>
              </div>
            </div>
        </div>

        
    </div>
</template>

<script>

export default{

    name:'SideBar',

}
</script>

<style scoped>

.active{
    background-color: white;
    color:black;
}
</style>