while(true){
    // 唤醒屏幕，保持屏幕常亮。but熄屏时好像没有用
    if(!device.isScreenOn()){
    device.wakeUp();
    swipe(500,1000,500,400,1500);}
    device.keepScreenOn()
    // 定义执行打卡程序
    var now=new Date();
    var day=now.getDay();
    var hour=now.getHours();
    var minu=now.getMinutes();
    
    var minu_down=0;
    var minu_up=25;
    if(day!=0 & day!=6){
        if((hour==8 || hour==21) & minu>=minu_down & minu<=minu_up){
            toast("现在时间是："+hour+":"+minu);
            i=random((15-minu)*60000,(25-minu)*60000);
            sleep(i);
            minu=minu+i/60000;
            toast("现在时间是："+hour+":"+minu);
            launchApp('钉钉');
            sleep(120000);
            back();
            sleep(5000);
            launchApp("QQ");
            sleep(5000);
            className("LinearLayout").depth(11).findOne().click();
            sleep(600);
            id("input").setText("打好卡了，你登录康康");
            sleep(500);
            while(!click("发送"));
            sleep(5000);
            back();
            sleep(1000);
            back();}
        else{sleep(10000);
            toast("没到打卡时间");}}
    else{sleep(10000);
        toast("没到打卡时间");}}