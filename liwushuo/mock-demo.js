Mock.mock('http://g.cn',
     {'tableData|16-30':[{
         'paragraph':'@cparagraph',
         'comment|1-20':100,
         'like|1000-2000':1,
         'share|90-600':10,
         'image':"@image",
         'sentence':"@csentence",
             'isShow|0-1':1
             }]
     });


$.ajax({
    url: 'http://g.cn',
    dataType:'json'
}).done(function(data,status, xhr) {
    //console.log(JSON.stringify(data, null, 4));
    var content_image=$(".content-image");
    var content_title=$(".content-title");
    var content_example=$(".content-example");
    var like_number=$(".number-like");
    var comment_number=$(".number-comment");
    var share_number=$(".number-share");
    var icon_show=$(".icon-new");
    var length=content_title.length;
    //console.log(length);
    for(var i=0;i<length;i++){
        content_image.eq(i).css("background-image","url("+data.tableData[i].image+")");
        content_title.eq(i).text(data.tableData[i].sentence);
        content_example.eq(i).text(data.tableData[i].paragraph);
        like_number.eq(i).text(data.tableData[i].like);
        comment_number.eq(i).text(data.tableData[i].comment);
        share_number.eq(i).text(data.tableData[i].share);
        if(data.tableData[i].isShow===1){
            icon_show.eq(i).css("background-image","url(image/icon_tag_new.png)");
        }
    }
    function change_example(){
        for(var i=0;i<length;i++){
            if(content_example.eq(i).text().length>58){
                content_example.eq(i).text(content_example.eq(i).text().substring(0,57)+'...');
            }
        }
    }
    change_example();
});



