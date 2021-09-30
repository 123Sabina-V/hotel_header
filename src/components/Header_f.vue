<template>
    <b-navbar>
        <template #start>
            <b-navbar-item href="#">
                <p class="text_h">Questions? Need Help?   Call us on (+123) 456 1500</p>
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item  href="#">
                 <img class="img_h" src="/../img/gift.png" alt="">
                 <p class="text_b">BTP Gift Card</p>
            </b-navbar-item>
            <b-navbar-item href="#">
                 <img class="img_h" src="/../img/star.png" alt="">
                 <p class="text_b">Loyalty Program</p>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style>
    .text_h{
        padding: 24px 550px 24px 165px;
        height: 13px;
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 13px;
        color: #333333; 
    }

    .img_h{
        margin-right: 21px;
    }
    
    .text_b{
        
        height: 13px;
        margin-right: 100px;
        font-family: Mulish;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 13px;
        color: #333333;
    }

    .navbar-menu {
        height: 60px;
        background: #F5FAFE;
    }

    @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,700;1,700&display=swap');

</style>