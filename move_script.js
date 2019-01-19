

                
               $(document).ready(function() {


                    $("#move").click(function() {
                                 
                                $("#post").each(function() {

                                        var image = $(this).children("img");

                                        image.remove();

                                        $("#post1").append(image);
                                        $("#move").hide();
                                        $("#1move").show();


                                });

                        }); 


                        $("#1move").click(function() {
                                 
                                $("#post1").each(function() {

                                        var image = $(this).children("img");

                                        image.remove();

                                        $("#post2").append(image);
                                         $("#1move").hide();
                                        $("#2move").show();
                                           
                                });

                        });

                        $("#2move").click(function() {
                                 
                                $("#post2").each(function() {

                                        var image = $(this).children("img");

                                        image.remove();

                                        $("#post3").append(image);
                                          $("#2move").hide();
                                        $("#3move").show();

                                });

                        });

                        
                        $("#3move").click(function() {
                                 
                                $("#post3").each(function() {

                                        var image = $(this).children("img");

                                        image.remove();

                                        $("#post4").append(image);
                                          $("#3move").hide();
                                        $("#4move").show();

                                });

                        });

                        $("#4move").click(function() {
                                 
                                $("#post4").each(function() {

                                        var image = $(this).children("img");

                                        image.remove();

                                        $("#post5").append(image);
                                          $("#4move").hide();
                                        $("#5move").show();

                                });

                        });


                        $("#5move").click(function() {
                                 
                                $("#post5").each(function() {

                                        var image = $(this).children("img");

                                        image.remove();

                                        $("#post").append(image);
                                          $("#5move").hide();
                                        $("#move").show();

                                });

                        });

                });

        