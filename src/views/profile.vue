<template>
    <div>
  
        <div class=" flex m-0 p-0  overflow-x-hidden bg-[#ECECF3] ">

      

            <SidBar  class=" w-1/5"></SidBar>

          
        
        
        <div class=" w-4/5">
            
            <NavBarVisitore></NavBarVisitore>

            <div class=" text-ms text-start mx-10 text-purple-950 my-3" >
                الصفحة  الرئيسية &gt;  الملف التعريفي
            </div>

            <div class="px-10">
                <div class=" w-full rounded-sm">
                    <div class="h-4 bg-[#503E9D] rounded-t-xl"></div>
                </div>

                <div class=" bg-white">
                    <div class=" flex justify-start gap-3 p-3">
                        <img src="../assets/img/profil_img.jpg" class=" w-14" alt="">
                        <span class=" self-center">
                                <div>عبد الله القحطاني</div>
                                <div class=" text-xs text-gray-300">abdulaah12@gmail.com</div>
                        </span>
                    </div>

                    <form action="" class=" grid gap-1 grid-cols-2 grid-rows-3">
                        <div class=" grid-col-1 grid-rows-1 grid p-3">
                            <label for="" class=" text-start text-sm font-bold">الاسم الاول</label>
                            <input type="text" name="" id="" class=" border-spacing-0 bg-gray-100 rounded my-1 h-10 p-1" value="عبد الله">
                        </div>

                        <div class=" grid-col-1 grid-rows-1 grid p-3">
                            <label for="" class=" text-start text-sm font-bold">الاسم الاخير</label>
                            <input type="text" name="" id="" class=" border-spacing-0 bg-gray-100 rounded my-1 h-10 p-1" value="القحطاني ">
                        </div>

                        <div class=" grid-col-1 grid-rows-1 grid p-3">
                            <label for="" class=" text-start text-sm font-bold">الايميل </label>
                            <input type="text" name="" id="" class=" border-spacing-0 bg-gray-100 rounded my-1 h-10 p-1" value="abdullah12@gmail.com">
                        </div>

                        <div class=" grid-col-1 grid-rows-1 grid p-3">
                            <label for="" class=" text-start text-sm font-bold">رقم الهاتف </label>
                            <div class=" flex gap-2">
                                <button class="bg-gray-100  rounded-lg w-1/6 my-1 h-10 ">+966</button>
                                <input type="text" name="" id="" class=" w-5/6 border-spacing-0 bg-gray-100 rounded my-1 h-10 p-1" value="535103327">
                      
                            </div>
                        </div>

                        <div class=" grid-col-1 grid-rows-1 grid p-3">
                            <label for="" class=" text-start text-sm font-bold">التخصص </label>
                            <input type="text" name="" id="" class=" border-spacing-0 bg-gray-100 rounded my-1 h-10 p-1" value="كيمياء ">
                        </div>

                        <div class=" grid-col-1 grid-rows-1 grid p-3">
                            <label for="" class=" text-start text-sm font-bold">الجامعة </label>
                            <input type="text" name="" id="" class=" border-spacing-0 bg-gray-100 rounded my-1 h-10 p-1" value="جامعة الملك خالد ">
                        </div>

                        
                        <div class="col-span-full justify-end my-3">
                            <div class=" flex mx-10  justify-end ">
                                <button class=" bg-[#FAAE17]  rounded px-11 py-1 text-white text-xs">حفظ</button>
                            </div>
                          
                        </div>
                    </form>
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

    name:'ProfileVue',
    components:{
        NavBarVisitore,
        SidBar,
    }
}
</script>

<style>

</style>