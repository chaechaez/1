
        // 화제 도서
        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "경제" },
            headers: { Authorization: "KakaoAK 990fde994483119ca87dc4ba94a7616b" }
        })
            .done(function (msg) {

                var divs = document.getElementsByClassName('topic_box');

                for (var i = 0; i < divs.length; i++) {

                    var str = msg.documents[i].title;
                    var str2 = str.substring(0,30);

                    $(".topic_box").eq(i).append('<a href="#">' + "<h6>" + msg.documents[i].authors + "</h6>" + '</a>');
                    $(".topic_box").eq(i).append('<a href="#">' + "<h3>" + str2 + "</h3>" + '</a>');
                    $(".topic_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + '</a>');
                    $(".topic_box").eq(i).append("<span>" + msg.documents[i].price +"원" + "</span>");
                    $(".topic_box").eq(i).append("<span>" + '20%' + "</span>");



                }
            });


    // 아동 도서

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: "아동" },
            headers: { Authorization: "KakaoAK 990fde994483119ca87dc4ba94a7616b" }
        })
            .done(function (msg) {

                var divs = document.getElementsByClassName('child_box');

                for (var i = 0; i < divs.length; i++) {

                    var str = msg.documents[i].title;
                    var str2 = str.substring(0, 30);

                    $(".child_box").eq(i).append('<a href="#">' + "<h6>" + msg.documents[i].authors + "</h6>" + '</a>');
                    $(".child_box").eq(i).append('<a href="#">' + "<h3>" + str2 + "</h3>" + '</a>');
                    $(".child_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + '</a>');
                    $(".child_box").eq(i).append("<span>" + msg.documents[i].price + "원" + "</span>");
                    $(".child_box").eq(i).append("<span>" + '20%' + "</span>");



                }
            });


        // 취업/수험서
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "취업" },
        headers: { Authorization: "KakaoAK 990fde994483119ca87dc4ba94a7616b" }
    })
        .done(function (msg) {

            var divs = document.getElementsByClassName('test_box');

            for (var i = 0; i < divs.length; i++) {

                var str = msg.documents[i].title;
                var str2 = str.substring(0, 30);

                $(".test_box").eq(i).append('<a href="#">' + "<h6>" + msg.documents[i].authors + "</h6>" + '</a>');
                $(".test_box").eq(i).append('<a href="#">' + "<h3>" + str2 + "</h3>" + '</a>');
                $(".test_box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + '</a>');
                $(".test_box").eq(i).append("<span>" + msg.documents[i].price + "원" + "</span>");
                $(".test_box").eq(i).append("<span>" + '20%' + "</span>");



            }
        });



    // 추천 교육
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "교육" },
        headers: { Authorization: "KakaoAK 990fde994483119ca87dc4ba94a7616b" }
    })
        .done(function (msg) {

            var divs = document.getElementsByClassName('Kyobo_box');

            for (var i = 0; i < divs.length; i++) {

                var str = msg.documents[i].title;
                var str2 = str.substring(0, 30);

                $(".Kyobo_box").eq(i).children('.best_box-left').append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + '</a>');
                $(".Kyobo_box").eq(i).children('.best_box-right').append('<a href="#">' + "<h6>" + msg.documents[i].authors + "</h6>" + '</a>');
                $(".Kyobo_box").eq(i).children('.best_box-right').append('<a href="#">' + "<h3>" + str2 + "</h3>" + '</a>');
                $(".Kyobo_box").eq(i).children('.best_box-right').append("<span>" + msg.documents[i].sale_price + "원" + "</span>");
                $(".Kyobo_box").eq(i).children('.best_box-right').append("<span>" + msg.documents[i].price + "원" + "</span>");
                $(".Kyobo_box").eq(i).children('.best_box-right').append("<span>" + '20%' + "</span>");



            }
        });

    // 인터넷 총합
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "인터넷" },
        headers: { Authorization: "KakaoAK 990fde994483119ca87dc4ba94a7616b" }
    })
        .done(function (msg) {

            var divs = document.getElementsByClassName('Internet_box');

            for (var i = 0; i < divs.length; i++) {

                var str = msg.documents[i].title;
                var str2 = str.substring(0, 30);

                $(".Internet_box").eq(i).children('.best_box-left').append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + '</a>');
                $(".Internet_box").eq(i).children('.best_box-right').append('<a href="#">' + "<h6>" + msg.documents[i].authors + "</h6>" + '</a>');
                $(".Internet_box").eq(i).children('.best_box-right').append('<a href="#">' + "<h3>" + str2 + "</h3>" + '</a>');
                $(".Internet_box").eq(i).children('.best_box-right').append("<span>" + msg.documents[i].sale_price + "원" + "</span>");
                $(".Internet_box").eq(i).children('.best_box-right').append("<span>" + msg.documents[i].price + "원" + "</span>");
                $(".Internet_box").eq(i).children('.best_box-right').append("<span>" + '20%' + "</span>");



            }
        });

    // 외국도서
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "ab" },
        headers: { Authorization: "KakaoAK 990fde994483119ca87dc4ba94a7616b" }
    })
        .done(function (msg) {

            var divs = document.getElementsByClassName('Foreign_box');

            for (var i = 0; i < divs.length; i++) {

                var str = msg.documents[i].title;
                var str2 = str.substring(0, 30);

                $(".Foreign_box").eq(i).children('.best_box-left').append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + '</a>');
                $(".Foreign_box").eq(i).children('.best_box-right').append('<a href="#">' + "<h6>" + msg.documents[i].authors + "</h6>" + '</a>');
                $(".Foreign_box").eq(i).children('.best_box-right').append('<a href="#">' + "<h3>" + str2 + "</h3>" + '</a>');
                $(".Foreign_box").eq(i).children('.best_box-right').append("<span>" + msg.documents[i].sale_price + "원" + "</span>");
                $(".Foreign_box").eq(i).children('.best_box-right').append("<span>" + msg.documents[i].price + "원" + "</span>");
                $(".Foreign_box").eq(i).children('.best_box-right').append("<span>" + '20%' + "</span>");



            }
        });



    // 이주의 베스트
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: "이주" },
        headers: { Authorization: "KakaoAK b4efe9a135542420ae8612f707db2506" }
    })
        .done(function (msg) {

            var divs = document.getElementsByClassName('week-box');

            for (var i = 0; i < divs.length; i++) {

                var str = msg.documents[i].title;
                var str2 = str.substring(0, 30);
                var con = msg.documents[i].contents;
                var con2 = con.substring(0, 87);

                $(".week-box").eq(i).append('<div>'+'<a href="#">' + "<h6>" + msg.documents[i].authors + "</h6>" + '</a>'+'</div>');
                $(".week-box").eq(i).append('<div>'+'<a href="#">' + "<h3>" + str2 + "</h3>" + '</a>'+'</div>');
                $(".week-box").eq(i).append('<div>'+'<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + '</a>'+'</div>');
                $(".week-box").eq(i).append('<div>'+"<span>" + msg.documents[i].sale_price + "원" + "</span>"+"<span>" + msg.documents[i].price + "원" + "</span>"+"<span>" + '20%' + "</span>"+'</div>');
                $(".week-box").eq(i).append('<div>'+con2+'</div>')

            }
        });

    