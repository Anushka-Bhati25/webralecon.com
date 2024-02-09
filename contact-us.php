<?php include('haeder.php') ?>

<div class="overflow-hidden">

<!-- START HEADER IMAGE -->
<div class="header7_img">
    <div class="overlay">
        <div class="header_tittle">
            <h2 class="header_tittle1"  >Contact Us</h2>
        </div>
    </div>
</div>
<!-- END HEADER IMAGE -->

<!-- START CONTACT INFO -->
<section id="information_process" class="information_process">
    <div class="container">
        <div class="row">
            <!-- Contact Detail -->
            <div class="col-12 col-md-6 col-lg-6 order-1 order-md-1 order-lg-1 margin_form wow fadeInLeft" data-wow-delay="700ms" data-wow-duration="1s" style="visibility: visible; animation-delay: 700ms; animation-name:fadeInLeft;">
                <p class="colored_heading">Need to talk</p>
                <h1 class="heading_mainc margin_heading"> Let's Get In Touch</h1>
                <ul class="contact-list">
                    <li>Unit No. 413-416, 4th Floor, Tower B4, Spaze i-Tech Park, Sohna Road, Sector 49, Gurgaon, Haryana - 122018
                    </li>
                    <li>Office Telephone :   +91-9991766633</li>
                    <li>Mobile :+91-9991766633Email :<a href="#">info@webralecon.com</a></li>
                    <li>Inquiries :<a href="#"> email@website.com</a></li>
                    <li>Mon-Fri: 9am to 6pm</li>
                </ul>
            </div>
            <!-- Contact Image -->
            <div class="col-12 col-md-6 col-lg-6 order-2 order-md-2 order-lg-2 img-sc1  wow fadeInRight" data-wow-delay="700ms" data-wow-duration="1s" style="visibility: visible; animation-delay: 700ms; animation-name:fadeInRight;">
                <!-- <div class="blue_rectangle right-0 blue-right"></div> -->
                <div class="about_img">
                    <img src="./consulting-startup/img/development.jpeg" alt="About Image">
                </div>
            </div>
        </div>
    </div>
</section>
<!-- END CONTACT INFO -->

<!-- START CONTACT FORM -->
<section id="contact_form" class="contact_form">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-8 col-lg-8 order-2 order-lg-1 pt-4 information_process">
             <p class="colored_heading">Contact Form</p>
                <h1 class="heading_mainc margin_heading">Have any question?</h1>
                <!-- Form -->
                <form id="contact-form-data">
                    <div class="row mt-5">
                        <div class="col-12" id="result"></div>
                        <!-- Name -->
                        <div class="col-lg-4">
                            <div class="form-group">
                                <input class="form-control" type="text" placeholder="Name" required  name="userName">
                            </div>
                        </div>
                        <!-- Email -->
                        <div class="col-lg-4">
                            <div class="form-group">
                                <input class="form-control" type="email" placeholder="Email" required  name="userEmail">
                            </div>
                        </div>
                        <!-- Subject -->
                        <div class="col-lg-4">
                            <div class="form-group ">
                                <input class="form-control" type="text" placeholder="Subject" name="userSubject">
                            </div>
                        </div>
                        <!-- Message -->
                        <div class="col-12">
                            <div class="form-group ">
                                <textarea class="form-control" placeholder="Message" required rows="5" name="userMessage"></textarea>
                            </div>
                            <button type="button" class="btn btn-large btn-primary padding_button w-100 contact_btn">SUBMIT REQUEST</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<!-- END CONTACT FORM -->

    <!-- faq start -->
<?php include('./consulting-startup/faq.php') ?>
    <!-- faq end -->

<!-- START MAP SECTION -->
<?php include('./consulting-startup/map.php') ?>
<!-- END MAP SECTION -->


<?php include('footer.php') ?>