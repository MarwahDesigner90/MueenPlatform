<template>
    <div>

        <div class=" flex m-0 p-0  overflow-x-hidden bg-[#ECECF3]">



            <SidBar class=" w-1/5"></SidBar>




            <div class=" w-4/5">

                <NavBarVisitore></NavBarVisitore>

                <div class=" text-ms text-start mx-10 text-purple-950 my-3 py-7 ">
                    الصفحة الرئيسية &gt; خدمات معين &gt;  تعاون

                </div>

                <div class=" px-20">

                    <div class="gap-5 grid grid-cols-2 grid-rows-2">

                        <div class=" col-span-1 row-span-1 h-52 text-white content-center rounded-lg bg-[#503E9D] ">
                            <div class=" text-white text-center py-10 ">
                                اختبار الجاهزية
                                <br>
                                <span class=" text-yellow-400 font-bold">جامعة الملك خالد</span>
                            </div>

                            <div class=" flex justify-around mt-10">
                                <span class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
      </svg>
      1920
    </span>

                                <!--<span>1920</span>-->
                                <span  class=" font-bold">الانضمام المباشر</span>
                            </div>
                        </div>

                        
                        <div class=" col-span-1 row-span-1 h-52 text-white content-center rounded-lg bg-[#503E9D]  ">
                            <div class=" text-white text-center py-10  ">
                                اختبار الجاهزية
                                <br>
                                <span class=" text-yellow-400 font-bold">جامعة الملك خالد</span>
                            </div>

                            <div class=" flex justify-around mt-10">
                                <span>1920</span>
                                <span  class=" font-bold">الانضمام المباشر</span>
                            </div>
                        </div>

                        
                        <div class=" col-span-1 row-span-1 h-52 text-white content-center rounded-lg bg-[#503E9D]  ">
                            <div class=" text-white text-center py-10 ">
                                اختبار الجاهزية
                                <br>
                                <span class=" text-yellow-400 font-bold">جامعة الملك خالد</span>
                            </div>

                            <div class=" flex justify-around mt-10">
                                <span>1920</span>
                                <span class=" font-bold">الانضمام المباشر</span>
                            </div>
                        </div>

                        
                        <div class=" col-span-1 row-span-1 h-52 text-white content-center rounded-lg bg-[#503E9D]  ">
                            <div class=" text-white text-center py-10 ">
                                اختبار الجاهزية
                                <br>
                                <span class=" text-yellow-400 font-bold ">جامعة الملك خالد</span>
                            </div>

                            <div class=" flex justify-around mt-10">
                                <span>1920</span>
                                <span  class=" font-bold">الانضمام المباشر</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>

import NavBarVisitore from '../components/NavBarVisitore'
import SidBar from '../components/SidBar.vue'
export default {
    name: 'JoinVue',
    components: {
        NavBarVisitore,
        SidBar,
    }
}
</script>