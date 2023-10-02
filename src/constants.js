//Register
export const API_REGISTER_CARD = '/register/card'
export const API_REGISTER_CONTACT_INFO = '/register/contactInfo'
export const API_REGISTER_BASIC_INFO = '/register/basicInfo'
export const API_REGISTER_ADDITIONAL_INFO = '/register/additionalInfo'

//ekyc
export const API_EKYC_OCR = '/ekyc/ocr'
export const API_EKYC_FACEVERIFY = '/ekyc/faceVerification'

//moneycat api
export const API_MC_CONTACT_INFO = '/moneycat/register/contact-info'
export const API_MC_BASIC_INFO = '/moneycat/register/basic-info'
export const API_MC_EKYC_OCR = '/ekyc/ocr/money-cat'
export const MC_GET_BASIC_INFO = '/moneycat/register/basic-info'

//Step
export const REGISTER_STEP_CONTACT_INFO = 1;
export const REGISTER_STEP_BASIC_INFO = 2;
export const REGISTER_STEP_ADDITIONAL_INFO = 3;
export const REGISTER_STEP_OCR = 4;
export const REGISTER_STEP_FACE_MATCHING = 5;

//verify email
export const API_EMAIL_VERIFY = '/email/verify'