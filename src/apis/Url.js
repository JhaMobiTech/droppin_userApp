export const ads = "http://134.209.107.223:1237";

export const url = {
  //----------------------- user -------------------
  user_get_all_main_slider: "/main-banners",
  user_details: '/customers/',
  user_get_exclusive: "/d_p/v1/getExculsive",
  user_get_address: "/customer-addresses/",
  user_set_address: "/d_p/v1/addCus_address",
  user_update_address_status: "/d_p/v1/update_address_status",
  user_delete_address: "/d_p/v1/delete_address",
  user_update_address: "/d_p/v1/update_address",

  // ------------------------- seller --------------
  seller_get_detail_by_id: "/d_p/v1/get_Seller_byID/",
  seller_get_shop_liked_by_id: "/d_p/v1/getLike_bySeller/",
  seller_get_rating_by_id: "/d_p/v1/get_all_ratting/",
  seller_get_pd_count_by_id: "/d_p/v1/count_product/",
  seller_get_all_pd_by_id: "/d_p/v1/get_all_product_by_seller/",

  // ----------------------- category -------------------------
  cate_main: "/d_p/v1/getAllCategory",

  // ----------------------- auth ------------------------ 
  cus_register: "/d_p/v1/fb_addCustomer",
  cus_manual_register: "/customers/register",
  check_phone: "/d_p/v1/check_phone",
  check_name: "/d_p/v1/check_user",
  check_fb_account_by_id: "/d_p/v1/check_Facebook_id",
  login_manual: "/customers/login",
  
  // ------------------------- products ---------------------
  get_all_flash_deals: '/flash-deals/',
  get_all_product: "/d_p/v1/get_all_product",
  get_product_by_id: "/d_p/v1/get_product_ByID/",
  get_delivery_option: "/d_p/v1/getDelivery_option",
  get_all_cate: "/d_p/v1/getAllCategory",
  search_product_by_name: "/d_p/v1/search_product",


  // ------------------------- dropship ---------------------
  
    dropship_add_order: "/dropship/getorder",
    dropship_get_order: "/dropship/addorder",
    dropship_get_driver: "/dropship/driver",
  

};
