"use server";
import { db } from "@/lib/firebase";
import type { ContactFormData } from "@/types/contact-us";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { revalidatePath } from "next/cache";

const CONTACT_INQUIRES_COLLECTİON = "contact-us";

export async function addContactInquiryAction(
  formData: ContactFormData,
): Promise<{ success: boolean; error?: string }> {
  try {
    await addDoc(collection(db, CONTACT_INQUIRES_COLLECTİON), {
      ...formData,
      createAt: serverTimestamp(),
    });
    revalidatePath("/contact-us");
    return { success: true };
  } catch (error) {
    console.error("Error adding contact inquiry", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to submit inquiry",
    };
  }
}
