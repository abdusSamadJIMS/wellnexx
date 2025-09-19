import { Product, Testimonial } from "../type";


import welnisol_4_1 from "@/../public/images/product_images/wellnisol_4_1.jpg"
import welnisol_4_3 from "@/../public/images/product_images/wellnisol_4_3.jpg"
import welnisol_4_2 from "@/../public/images/product_images/wellnisol_4_2.jpg"
import wellness_plus_1 from "@/../public/images/product_images/wellness_plus_1.jpg"
import wellness_plus_2 from "@/../public/images/product_images/wellness_plus_2.jpg"
import wellness_plus_3 from "@/../public/images/product_images/wellness_plus_3.jpg"
import wellness_plus_4 from "@/../public/images/product_images/wellness_plus_4.jpg"
import wellness_plus_5 from "@/../public/images/product_images/wellness_plus_5.jpg"
import wellsovit_gold_1 from "@/../public/images/product_images/wellsovit_gold_1.jpg"
import wellsovit_gold_2 from "@/../public/images/product_images/wellsovit_gold_2.jpg"
import wellsovit_gold_3 from "@/../public/images/product_images/wellsovit_gold_3.jpg"
import glowcyn_1 from "@/../public/images/product_images/glowcyn_1.jpg"
import pantacyn_dsr_1 from "@/../public/images/product_images/pantacyn_dsr_1.jpg"
import glowcyn_pro_gel_1 from "@/../public/images/product_images/glowcyn_pro_1.jpg"
import glowcyn_pro_gel_2 from "@/../public/images/product_images/glowcyn_pro_2.jpg"
import wellnex_oc_1 from "@/../public/images/product_images/wellnexx_oc_1.jpg"
import wellnex_oc_2 from "@/../public/images/product_images/wellnexx_oc_2.jpg"
import wellnex_oc_3 from "@/../public/images/product_images/wellnexx_oc_3.jpg"
import wellnex_oc_4 from "@/../public/images/product_images/wellnexx_oc_4.jpg"
import kuffcyn_dx_1 from "@/../public/images/product_images/kuffcyn_dx_1.jpg"
import kuffcyn_dx_2 from "@/../public/images/product_images/kuffcyn_dx_2.jpg"
import kuffcyn_dx_3 from "@/../public/images/product_images/kuffcyn_dx_3.jpg"
import kuffcyn_dx_4 from "@/../public/images/product_images/kuffcyn_dx_4.jpg"

export const products: Product[] = [
    {
        name: "Welnisol-4",
        product_code: "Welnisol-4",
        product_name: "Welnisol-4 Tablet",
        rate: 49,
        pack: "10 tablets",
        drug_category: "Tablet",
        compositions: ["Methylprednisolone IP 4mg"],
        images: [
            {
                image: welnisol_4_1,
                description:
                    "It is used to treat a number of different conditions, such as inflammation (swelling), severe allergies, adrenal problems, arthritis",
            },
            {
                image: welnisol_4_2,
                description:
                    "It is used to treat a number of different conditions, such as inflammation (swelling), severe allergies, adrenal problems, arthritis",
            },
            {
                image: welnisol_4_3,
                description:
                    "It is used to treat a number of different conditions, such as inflammation (swelling), severe allergies, adrenal problems, arthritis",
            },
        ],
    },
    {
        name: "Welneem Plus",
        product_code: "Welneem-Plus",
        product_name: "Welneem Plus Soap",
        rate: 85,
        pack: "1x1 Soap",
        drug_category: "Soap",
        compositions: ["Neem Aloevera & Tulsi"],
        images: [
            {
                image: wellness_plus_1,
                description:
                    "Neem is known for its antibacterial and antifungal properties, helping to fight acne and skin infections. Aloe vera provides moisturization and soothes the skin, while tulsi is known for its anti-inflammatory and antioxidant benefits.",
            },
            {
                image: wellness_plus_2,
                description:
                    "Neem is known for its antibacterial and antifungal properties, helping to fight acne and skin infections. Aloe vera provides moisturization and soothes the skin, while tulsi is known for its anti-inflammatory and antioxidant benefits.",
            },
            {
                image: wellness_plus_3,
                description:
                    "Neem is known for its antibacterial and antifungal properties, helping to fight acne and skin infections. Aloe vera provides moisturization and soothes the skin, while tulsi is known for its anti-inflammatory and antioxidant benefits.",
            },
            {
                image: wellness_plus_4,
                description:
                    "Neem is known for its antibacterial and antifungal properties, helping to fight acne and skin infections. Aloe vera provides moisturization and soothes the skin, while tulsi is known for its anti-inflammatory and antioxidant benefits.",
            },
            {
                image: wellness_plus_5,
                description:
                    "Neem is known for its antibacterial and antifungal properties, helping to fight acne and skin infections. Aloe vera provides moisturization and soothes the skin, while tulsi is known for its anti-inflammatory and antioxidant benefits.",
            },
        ],
    },
    {
        name: "Welsovit Gold",
        product_code: "Welsovit-Gold",
        product_name: "Welsovit Gold Syrup",
        rate: 239,
        pack: "200ml Syrup",
        drug_category: "Syrup",
        compositions: ["Multivitamins & Minerals (as per RDA values)"],
        images: [
            {
                image: wellsovit_gold_1,
                description:
                    "Nutritional syrup with vitamins, minerals, amino acids, and antioxidants.",
            },
            {
                image: wellsovit_gold_2,
                description:
                    "Nutritional syrup with vitamins, minerals, amino acids, and antioxidants.",
            },
            {
                image: wellsovit_gold_3,
                description:
                    "Nutritional syrup with vitamins, minerals, amino acids, and antioxidants.",
            },
        ],
    },
    {
        name: "Glowcyn",
        product_code: "Glowcyn",
        product_name: "Glowcyn Cream",
        rate: 109,
        pack: "15g Tube",
        drug_category: "Cream",
        compositions: [
            "Hydroquinone U.S.P. 2.00% w/w",
            "Tretinoin U.S.P. 0.025% w/w",
            "Mometasone Furoate I.P. 0.1% w/w",
        ],
        images: [
            {
                image: glowcyn_1,
                description:
                    "Triple combination cream for melasma. Helps lighten dark spots, reduce inflammation, and improve skin tone and texture.",
            },
        ],
    },
    {
        name: "Pantacyn-DSR",
        product_code: "Pantacyn-DSR",
        product_name: "Pantacyn-DSR Capsule",
        rate: 150,
        pack: "10x10 Capsule",
        drug_category: "DSR",
        compositions: [
            "Pantoprazole IP 40mg",
            "Domperidone IP 30mg",
        ],
        images: [
            {
                image: pantacyn_dsr_1,
                description:
                    "Pantoprazole is used to treat conditions with excess stomach acid.",
            },
        ],
    },
    {
        name: "Glowcyn Pro Gel",
        product_code: "Glowcyn-Pro-Gel",
        product_name: "Glowcyn Pro Gel",
        rate: 179,
        pack: "15g Gel Cream",
        drug_category: "Skin Care",
        compositions: [
            "Kojic Acid Dipalmitate",
            "Pine Bark Extract",
            "Arbutin",
            "Allantoin",
            "Vitamin E Acetate",
            "Niacinamide",
            "Octinoxate",
        ],
        images: [
            {
                image: glowcyn_pro_gel_1,
                description: "Skin care gel with Kojic Acid and antioxidants.",
            },
            {
                image: glowcyn_pro_gel_2,
                description: "Skin care gel with Kojic Acid and antioxidants.",
            },
        ],
    },
    {
        name: "Welnex-OC",
        product_code: "Welnex-OC",
        product_name: "Welnex-OC Cream",
        rate: 95,
        pack: "15g Cream",
        drug_category: "Anti-allergic",
        compositions: [
            "Ofloxacin IP 0.75% w/w",
            "Miconazole Nitrate IP 2.0% w/w",
            "Terbinafine Hydrochloride IP 1.0% w/w",
            "Clobetasol Propionate IP 0.05% w/w",
            "Dexpanthenol USP 0.05% w/w",
        ],
        images: [
            {
                image: wellnex_oc_1,
                description:
                    "Used to treat various skin infections caused by bacteria and fungi.",
            },
            {
                image: wellnex_oc_2,
                description:
                    "Used to treat various skin infections caused by bacteria and fungi.",
            },
            {
                image: wellnex_oc_3,
                description:
                    "Used to treat various skin infections caused by bacteria and fungi.",
            },
            {
                image: wellnex_oc_4,
                description:
                    "Used to treat various skin infections caused by bacteria and fungi.",
            },
        ],
    },
    {
        name: "Kuffcyn-DX",
        product_code: "Kuffcyn-DX",
        product_name: "Kuffcyn-DX Syrup",
        rate: 105,
        pack: "100ml Syrup",
        drug_category: "Syrup",
        compositions: [
            "Dextromethorphan hydrobromide IP 10mg",
            "Chlorpheniramine Maleate IP 4mg",
        ],
        images: [
            {
                image: kuffcyn_dx_1,
                description: "For Dry Cough, Sore Throat and cold",
            },
            {
                image: kuffcyn_dx_2,
                description: "For Dry Cough, Sore Throat and cold",
            },
            {
                image: kuffcyn_dx_3,
                description: "For Dry Cough, Sore Throat and cold",
            },
            {
                image: kuffcyn_dx_4,
                description: "For Dry Cough, Sore Throat and cold",
            },
        ],
    },
    {
        name: "Amilix -LB 625",
        product_code: "Amilix-LB625",
        product_name: "Amilix -LB 625 Tablet",
        rate: 295,
        pack: "10x10 Tablet",
        drug_category: "Antibiotic",
        compositions: [
            "Amoxycillin Trihydrate IP 500 mg",
            "Potassium Clavulanate Diluted IP 125 mg",
            "Lactic acid bacillus 60 million spores",
        ],
        images: [
            {
                image: "https://placehold.co/600x400",
                description:
                    "Amoxycillin & Potassium clavulanate LB Tablet is an antibiotic that helps your body fight infections caused by bacteria.",
            },
        ],
    },
    {
        name: "Amilix-CV",
        product_code: "Amilix-CV",
        product_name: "Amilix -CV Dry Syrup",
        rate: 67.87,
        pack: "3.3g/30ml Dry Syrup",
        drug_category: "Antibiotic",
        compositions: [
            "Amoxycillin 200mg",
            "Potassium Clavulanate Diluted IP 28.5mg",
        ],
        images: [
            {
                image: "https://placehold.co/600x400",
                description:
                    "Amoxycillin Trhydrate is an antibiotic that helps your body fight infections caused by bacteria.",
            },
        ],
    },

    {
        name: "Weljoy",
        product_code: "Weljoy",
        product_name: "Weljoy Tablet",
        rate: 135,
        pack: "4x1 Tablet",
        drug_category: "Wellness",
        compositions: ["Sildenafil citrate IP 100mg"],
        images: [
            {
                image: "https://placehold.co/600x400",
                description: "Sildenafil is used to treat men who have erectile dysfunction",
            },
        ],
    },

    {
        name: "Mefiwel-D",
        product_code: "Mefiwel-D",
        product_name: "Mefiwel-D Tablet",
        rate: 89,
        pack: "20x10 Tablet",
        drug_category: "Tablet",
        compositions: [
            "Drotaverine Hydrochloride IP 80mg",
            "Mefenamic Acid IP 250mg",
        ],
        images: [
            {
                image: "https://placehold.co/600x400",
                description:
                    "Used to treat abdominal pain, muscle pain, migraine, dysmenorrhea, heavy bleeding during periods, renal colic pain, and post-surgery pain.",
            },
        ],
    },




    {
        name: "Liv Rectify DS",
        product_code: "Liv-Rectify-DS",
        product_name: "Liv Rectify DS Syrup",
        rate: 170,
        pack: "200ml Syrup",
        drug_category: "Liver Tonic",
        compositions: [],
        images: [
            {
                image: "https://placehold.co/600x400",
                description: "Ayurvedic Liver Tonic",
            },
        ],
    },
    {
        name: "Acyclowel-SP",
        product_code: "Acyclowel-SP",
        product_name: "Acyclowel-SP Tablet",
        rate: 98.5,
        pack: "20x10 Tablet",
        drug_category: "Analgesic, Anti-inflammatory",
        compositions: [
            "Aceclofenac 100mg",
            "Paracetamol 325mg",
            "Serratiopeptidase 15mg",
        ],
        images: [
            {
                image: "https://placehold.co/600x400",
                description:
                    "Analgesic, anti-swelling, and anti-inflammatory tablet.",
            },
        ],
    },
    {
        name: "Podoxcyn-50",
        product_code: "Podoxcyn-50",
        product_name: "Podoxcyn-50 Dry Syrup",
        rate: 92,
        pack: "10g/30ml Dry Syrup",
        drug_category: "Antibiotic",
        compositions: ["Cefpodoxime 50mg"],
        images: [
            {
                image: "https://placehold.co/600x400",
                description:
                    "Cefpodoxime is used to treat bacterial infections in many different parts of the body",
            },
        ],
    },
];



export const testimonials: Testimonial[] = [
    {
        name: "Dr. Aditi Sharma",
        name1: "Aditi Sharma",
        designation: "Dermatologist",
        message:
            "Wellnex pharmaceutical products have shown consistent results with my patients. The formulations are safe, effective, and trusted by many in my clinic.",
        image: "https://placehold.co/600x400",
        city: "Mumbai",
    },
    {
        name: "Rahul Mehta",
        name1: "Rahul Mehta",
        designation: "Pharmacy Owner",
        message:
            "Our customers are very happy with Wellnex pharmaceutical medicines and wellness products. They are affordable without compromising on quality.",
        image: "https://placehold.co/600x400",
        city: "Delhi",
    },
    {
        name: "Dr. Neha Kapoor",
        name1: "Neha Kapoor",
        designation: "General Physician",
        message:
            "I recommend Wellnex pharmaceutical antibiotics and syrups to my patients. The trust and reliability of the brand make my job easier.",
        image: "https://placehold.co/600x400",
        city: "Bengaluru",
    },
    {
        name: "Vikram Singh",
        name1: "Vikram Singh",
        designation: "Medical Store Owner",
        message:
            "Stocking Wellnex pharmaceutical products has boosted my pharmacy sales. Customers keep coming back for the quality and results.",
        image: "https://placehold.co/600x400",
        city: "Jaipur",
    },
    {
        name: "Dr. Rina Das",
        name1: "Rina Das",
        designation: "Pediatrician",
        message:
            "I trust Wellnex pharmaceutical syrups and tonics for children. They are safe, effective, and formulated with great care.",
        image: "https://placehold.co/600x400",
        city: "Kolkata",
    },
];
