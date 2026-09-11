from django.urls import path
from . import views

app_name = "cmmsApp"


urlpatterns = [

    # ============================================================
    # MAIN PAGES
    # ============================================================

    path("", views.home, name="home"),

    path("about/", views.about, name="about"),

    path("contact/", views.contact, name="contact"),


    # ============================================================
    # SUBMIT ENQUIRY
    # ============================================================

    path(
        "request-demo/",
        views.request_demo_view,
        name="request_demo",
    ),


    # ============================================================
    # CHANGE BY JYOTI - 11-Sep-2026
    # EMAIL OTP VERIFICATION
    # ============================================================

    path(
        "api/contact/send-email-otp/",
        views.send_email_otp,
        name="send_email_otp",
    ),

    path(
        "api/contact/verify-email-otp/",
        views.verify_email_otp,
        name="verify_email_otp",
    ),


    # ============================================================
    # CONTACT FORM
    # ============================================================

    path(
        "contact/submit/",
        views.contact_block_submit,
        name="contact_submit",
    ),

    path(
        "contact/phone-info/",
        views.phone_info,
        name="phone_info",
    ),

    path(
        "contact/country-list/",
        views.country_list,
        name="country_list",
    ),

    path(
        "contact/thanks/",
        views.contact_thanks,
        name="contact_thanks",
    ),


    # ============================================================
    # SITEMAP
    # ============================================================

    path(
        "sitemap.xml",
        views.sitemap,
        name="sitemap",
    ),
]
