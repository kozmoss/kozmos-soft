import { Timestamp } from "firebase/firestore";

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactInquiry extends ContactFormData {
  id: string;
  createdAt: Timestamp;
}

