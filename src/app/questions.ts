export const questions:any={
    "id": "TNatOmnO",
    "type": "quiz",
    "title": "Nula - Engagement Survey",
    "workspace": {
        "href": "https://api.typeform.com/workspaces/ECgKv9"
    },
    "theme": {
        "href": "https://api.typeform.com/themes/YevUvxTl"
    },
    "settings": {
        "language": "en",
        "progress_bar": "proportion",
        "meta": {
            "title": "Nula - Engagement Survey",
            "allow_indexing": false,
            "description": "Our pre-pilot, environmental engagement survey. "
        },
        "hide_navigation": false,
        "is_public": true,
        "is_trial": false,
        "show_progress_bar": true,
        "show_typeform_branding": true,
        "are_uploads_public": false,
        "show_time_to_complete": true,
        "show_number_of_submissions": false,
        "pro_subdomain_enabled": false,
        "capabilities": {
            "e2e_encryption": {
                "enabled": false,
                "modifiable": false
            }
        }
    },
    "thankyou_screens": [
        {
            "id": "SFvOftHfKifY",
            "ref": "dd5be08c-650b-4c81-bd09-91415f8e7d64",
            "title": "Now you have officially completed the survey - thank you!",
            "properties": {
                "show_button": true,
                "share_icons": true,
                "button_mode": "default_redirect",
                "button_text": "Create a typeform"
            }
        },
        {
            "id": "DefaultTyScreen",
            "ref": "default_tys",
            "title": "Thanks for completing this typeform\nNow *create your own* — it's free, easy, & beautiful",
            "properties": {
                "show_button": true,
                "share_icons": false,
                "button_mode": "default_redirect",
                "button_text": "Create a *typeform*"
            },
            "attachment": {
                "type": "image",
                "href": "https://images.typeform.com/images/2dpnUBBkz2VN"
            }
        }
    ],
    "welcome_screens": [
        {
            "id": "yrzz44coJevK",
            "ref": "5db92931-c006-4ba3-a344-20fd50821d1e",
            "title": "Welcome to our pilot engagement survey. ",
            "properties": {
                "show_button": true,
                "button_text": "Start",
                "description": "Thanks so much for agreeing to take part - your answers will help us fine tune our survey before we bring it to organisations in early 2022."
            },
            "attachment": {
                "type": "image",
                "href": "https://images.typeform.com/images/GJDCx2dkPY5n",
                "properties": {
                    "description": "Opening Slide1"
                }
            },
            "layout": {
                "type": "wallpaper",
                "attachment": {
                    "type": "image",
                    "href": "https://images.typeform.com/images/GJDCx2dkPY5n",
                    "properties": {
                        "focal_point": {
                            "x": 0,
                            "y": 0
                        },
                        "description": "Opening Slide1"
                    }
                }
            }
        }
    ],
    "fields": [
        {
            "id": "DkTG1cWRmuag",
            "title": "How old are you?",
            "ref": "01FQ4116P5FE2A4WN2VR6QKEEH",
            "properties": {
                "randomize": false,
                "allow_multiple_selection": false,
                "allow_other_choice": false,
                "vertical_alignment": true,
                "choices": [
                    {
                        "id": "IEeOBLh4lEes",
                        "ref": "01FQ4116P5722BDZYES6D754K2",
                        "label": "18-24"
                    },
                    {
                        "id": "DkroCFu2zbLb",
                        "ref": "01FQ4116P58J5FSJB2B2SDEH1Q",
                        "label": "25-34"
                    },
                    {
                        "id": "edbOCy2XmShy",
                        "ref": "a4adf845-ec36-44dc-be66-703201f514c5",
                        "label": "35-44"
                    },
                    {
                        "id": "beXNgs0k3jVV",
                        "ref": "2ddcb3e5-7e09-45dd-b06b-4d3711f59062",
                        "label": "45-54"
                    },
                    {
                        "id": "g5LamJaVW9cm",
                        "ref": "de40f4ba-af6a-49cd-988f-f476f1f56afb",
                        "label": "55-64"
                    },
                    {
                        "id": "EgfY6CKIB52a",
                        "ref": "79769746-270c-486d-af9b-06392af9f140",
                        "label": "65-74"
                    },
                    {
                        "id": "LxlyzsUXp2qK",
                        "ref": "e451d331-c21f-4a2a-bbe6-28d77ff7935e",
                        "label": "75+"
                    }
                ]
            },
            "validations": {
                "required": true
            },
            "type": "multiple_choice"
        },
        {
            "id": "U7tOXx7YDaRE",
            "title": "What is your gender or gender identity?",
            "ref": "fd983951-70dc-4710-aabf-688b412c768e",
            "properties": {
                "randomize": false,
                "allow_multiple_selection": false,
                "allow_other_choice": true,
                "vertical_alignment": true,
                "choices": [
                    {
                        "id": "nHdmSMNX6qhq",
                        "ref": "5111b220-3d73-4c69-adb7-f522ddb8257f",
                        "label": "Male"
                    },
                    {
                        "id": "PpwtOTm6B0s4",
                        "ref": "1a27ba72-0d0c-4c26-aff0-79286c2cdc17",
                        "label": "Female"
                    },
                    {
                        "id": "tph2S2x6qzN4",
                        "ref": "c2fc7f9f-5e6f-4e66-b360-e19d3761cf1d",
                        "label": "Prefer not to say"
                    }
                ]
            },
            "validations": {
                "required": true
            },
            "type": "multiple_choice"
        },
        {
            "id": "pEPDAf8MS873",
            "title": "What industry/sector do you work in?",
            "ref": "11a77bfe-873b-4cd3-90f8-cd910105319d",
            "properties": {
                "randomize": false,
                "allow_multiple_selection": false,
                "allow_other_choice": true,
                "vertical_alignment": true,
                "choices": [
                    {
                        "id": "SiS3Ww9ZhP3e",
                        "ref": "c147ec0f-077b-4f73-98aa-bf9e83a1b354",
                        "label": "Finance"
                    },
                    {
                        "id": "qjh0TDbVRqWn",
                        "ref": "4d7dc373-d7f4-4163-810b-068772386ebb",
                        "label": "Marketing"
                    },
                    {
                        "id": "QnjBPrbfq7tv",
                        "ref": "9cf7d142-8b90-4059-9bbb-f9f590b3cbe3",
                        "label": "Education"
                    },
                    {
                        "id": "A9JtHKhkZgiH",
                        "ref": "92975048-e0ef-4b90-abc3-98a34200acc9",
                        "label": "Retail"
                    },
                    {
                        "id": "C90SRxC3O7oQ",
                        "ref": "7b71f564-04e4-4972-a2f7-3c5b256405ee",
                        "label": "Sustainability"
                    },
                    {
                        "id": "ihczAwSclAFB",
                        "ref": "15c812cc-5ee2-4362-9f0e-20fab4b6b3dc",
                        "label": "Technology"
                    },
                    {
                        "id": "Z2Lq33X6AOez",
                        "ref": "95360af6-c52b-407c-99e3-a24ebda6c2e5",
                        "label": "Healthcare"
                    },
                    {
                        "id": "TZ6e2oXR0rs4",
                        "ref": "523b4e5e-02f3-4e5e-bd33-18e5dc034ecf",
                        "label": "Transport"
                    },
                    {
                        "id": "sF0yfH4GcmyU",
                        "ref": "15c2624e-3ae8-4566-a377-d23acfb23220",
                        "label": "Hospitality"
                    }
                ]
            },
            "validations": {
                "required": true
            },
            "type": "multiple_choice"
        },
        {
            "id": "d34ZmQUfGp8j",
            "title": "How many employees are in your company?",
            "ref": "7c130848-2191-43de-9ec1-f8ae3a5f227f",
            "properties": {
                "randomize": false,
                "allow_multiple_selection": false,
                "allow_other_choice": false,
                "vertical_alignment": true,
                "choices": [
                    {
                        "id": "Ip0oXYocHiwI",
                        "ref": "691c74e6-87e6-4c2d-8993-4cdac876dfcd",
                        "label": "1-10"
                    },
                    {
                        "id": "PSPqcopzmBWt",
                        "ref": "dd46c78f-7641-48f9-8d4c-58654e7a58d9",
                        "label": "11-25"
                    },
                    {
                        "id": "1EH96rvcinUa",
                        "ref": "2fac14f0-bb48-48a6-9746-668b3b3bf95d",
                        "label": "26-50"
                    },
                    {
                        "id": "HBpOdLrGX8V4",
                        "ref": "21490aa5-6c6f-4f4e-b83a-05bbab949749",
                        "label": "51-100"
                    },
                    {
                        "id": "Ck24AJVAXKCL",
                        "ref": "81ed597b-78d7-48cb-8610-373fce3e8bda",
                        "label": "101-200"
                    },
                    {
                        "id": "ZmkZuVsIfOPz",
                        "ref": "70bbf6f0-bfdf-42f7-bb71-521832b3e469",
                        "label": "200+"
                    }
                ]
            },
            "validations": {
                "required": true
            },
            "type": "multiple_choice"
        },
        {
            "id": "m1EWaweypVhQ",
            "title": "Thank you for completing the demographic questions. The next section will focus on environmental action in your personal life.",
            "ref": "c944673e-a972-4a62-a19c-d2b603deb302",
            "properties": {
                "description": "Please review each statement and answer based on how much you agree or disagree.",
                "button_text": "Continue",
                "show_button": true,
                "fields": [
                    {
                        "id": "p1nZkNo0aoHF",
                        "title": "I care about climate change.",
                        "ref": "0647d7aa-c3c3-4409-9e75-d42eeacbf9a9",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "e1f5ENNeXdHx",
                                    "ref": "10410c7b-a297-47f7-afd2-11c4db61c5f5",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "KfOABtAqi9Cy",
                                    "ref": "1206774d-6dc9-4e15-8248-817830b6698b",
                                    "label": "Agree"
                                },
                                {
                                    "id": "tZTFODyFJjUO",
                                    "ref": "ecf35fef-1c1b-4ed7-986b-c8c27da8e66f",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "OWwDZVIxLNie",
                                    "ref": "717c27f8-3599-4f14-a460-693bc4ddac79",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "IK0jd5uCOQQh",
                                    "ref": "632b4efe-94c8-43df-9d16-17fe884f67b8",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "iyzaRZMYhnEA",
                        "title": "I feel well informed about the different ways I can reduce my impact on the planet.",
                        "ref": "c032ba8d-4187-41ec-baef-ce38d18bb22e",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "Q6bV9uS0Amzm",
                                    "ref": "c127e058-38a8-411a-9482-4f887f21d60e",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "XyVdDSAlAgrn",
                                    "ref": "84e7e2ce-02ac-4f28-8094-1c93ee4f4ae8",
                                    "label": "Agree"
                                },
                                {
                                    "id": "e5p3O3yn9L5X",
                                    "ref": "7066bc01-c5fb-4b32-9a0e-4f47df773981",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "kla3lCZ2y1XQ",
                                    "ref": "c58945a9-0cdf-4dd2-95f2-9ac7f0281950",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "9LwM8LSdoXpp",
                                    "ref": "499b22eb-56b2-4640-a6b3-ce8ea34ad70c",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "AqIJxz7vXAU6",
                        "title": "I plan to reduce my personal footprint over the next year.",
                        "ref": "c3093e45-efeb-4a4c-82d3-f4c2a6340e90",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "4XA77QE87fzI",
                                    "ref": "a638be9f-ea30-454b-9cea-43163eea3494",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "b7ab3BPVkIxx",
                                    "ref": "55ca40ea-097a-476a-818f-a48b1fc582a3",
                                    "label": "Agree"
                                },
                                {
                                    "id": "I51VxU6HrylS",
                                    "ref": "69aaed0a-aceb-4ae8-80c4-d7c670781a1c",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "yQXs78m8SCEA",
                                    "ref": "5355585d-01fe-4530-b156-052569de4c86",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "DnV5Ci0NTs3g",
                                    "ref": "9b9ba71c-3735-4ced-92db-2d8b404a64ed",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "i7gTMIce2EqN",
                        "title": "I am actively involved with climate action groups outside of work",
                        "ref": "24eb12cd-a90a-4a88-8f69-16ae142da8be",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "4IwScbOQdUWp",
                                    "ref": "c8d6aeea-9579-40e2-83e0-73f7100458da",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "rQsJsrkMpSGo",
                                    "ref": "c03a4884-ec9e-46b4-8212-ac1cc9ea1811",
                                    "label": "Agree"
                                },
                                {
                                    "id": "mADVx7dswQ5q",
                                    "ref": "6edaa3d4-a81c-47a6-bac1-8ef54a9be51a",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "SD907zIDqC1F",
                                    "ref": "f0055f4b-8607-4333-a1d0-adb4fb87e72e",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "OSl14ZR7N2tQ",
                                    "ref": "eefc1b9b-82aa-473b-93aa-561c89cfaedd",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "MZesU6tvU7Pq",
                        "title": "If yes, then please let us know which groups.",
                        "ref": "2a73b2b4-4de4-463b-aed3-49c23f7375be",
                        "properties": {},
                        "validations": {
                            "required": false
                        },
                        "type": "short_text"
                    },
                    {
                        "id": "hpuHEAh69fKB",
                        "title": "I feel a strong sense of responsibility to wider society to take action against climate change.",
                        "ref": "87bfb27a-bcad-4709-9fec-38f37702dd89",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "yYKHYQmxVHA3",
                                    "ref": "8ed9b6fe-62bb-4d60-808d-3538d5de5643",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "bdJVaEY1zOYC",
                                    "ref": "2a69c149-818f-4387-a048-c394024d15a3",
                                    "label": "Agree"
                                },
                                {
                                    "id": "aZTm62uKOWGQ",
                                    "ref": "98d52f22-471d-43d8-9d5b-72b8710387c8",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "Cm3veiVsbsNZ",
                                    "ref": "eb6efe7d-3888-45f5-85b5-cfbc4af4b92a",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "tCniWDr1KJDK",
                                    "ref": "8994c84e-ca9b-4763-839f-a067a5813495",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    }
                ]
            },
            "type": "group"
        },
        {
            "id": "raGyTT3MNMTr",
            "title": "This next section will focus on your experience of climate action in the workplace.",
            "ref": "706bcd31-4721-4cab-a990-598d286bd59a",
            "properties": {
                "description": "Please state whether you agree or disagree with the following statements.",
                "button_text": "Continue",
                "show_button": true,
                "fields": [
                    {
                        "id": "DPNPRLegESst",
                        "title": "Our leadership team are increasingly aware of climate change.",
                        "ref": "65ed5daa-eb97-4de1-b01a-9ad3aa2450e0",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "mIymd8T9u80f",
                                    "ref": "a5ec46b6-3468-41a4-bdb2-ccd668376b09",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "wqnpEQ9QINmF",
                                    "ref": "3669a197-144b-472b-86b3-032e14ec78a6",
                                    "label": "Agree"
                                },
                                {
                                    "id": "AkA11G5mQOU4",
                                    "ref": "69242aa4-c022-4d6b-aad2-7858be2fd636",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "vJYbHUkxb3ZW",
                                    "ref": "899f3519-1378-4364-a8c8-c3325e4c2975",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "PDqv9GBczkb0",
                                    "ref": "048d37bf-4351-4214-b506-8e172d5526f3",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "wO4jwDpC3Y3y",
                        "title": "Our senior leadership team are knowledgable about environmental action.",
                        "ref": "bbcb13e3-2ab3-47cc-97d5-abb25731b219",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "14yTPKWCYGdi",
                                    "ref": "e0ba356a-bdd7-42d9-94f7-89d531678eef",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "uMnxox8M5TmA",
                                    "ref": "32b12d99-b4ce-48db-8457-36edafd35480",
                                    "label": "Agree"
                                },
                                {
                                    "id": "vFdVzFWSBouu",
                                    "ref": "82dbfae3-a1ec-4550-8e60-2c6e235c9e51",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "gJYvxcMttfZw",
                                    "ref": "133a437a-7f86-4b8b-852a-be4d2c387af1",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "JpynCpYpexMK",
                                    "ref": "b80cbd94-0d59-4c11-bbed-11f67004cb75",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "9VcPHheaJ3vL",
                        "title": "The leaders at my organisation are increasingly including climate action in their business strategy.",
                        "ref": "69d8fdad-6216-4592-b437-04cb5841e788",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "mtgDD3wF8uiL",
                                    "ref": "ae98fb33-d5c4-4777-a75a-3809ce5462bb",
                                    "label": "Yes - it is integral to our strategy"
                                },
                                {
                                    "id": "Bwc17PBFfP2v",
                                    "ref": "3e77f9b0-b270-42b6-857d-4a0bf17e40b0",
                                    "label": "Yes, it is being included from 2022"
                                },
                                {
                                    "id": "90fLh5gYNCV5",
                                    "ref": "c7ffbc2d-e2da-421d-94b4-f30ee5dd7e00",
                                    "label": "Yes but not enough"
                                },
                                {
                                    "id": "lEaoKv2nsUzD",
                                    "ref": "1cc61d9e-47ce-4b4f-81c3-6186cf1264cb",
                                    "label": "I'm not sure"
                                },
                                {
                                    "id": "B7XsuFk94chk",
                                    "ref": "9a74610b-ff0d-4c77-8fb2-e9e10d10d145",
                                    "label": "Definitely not"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "PkPEsq7e0OQ1",
                        "title": "Our leadership team are visibly striving to make a positive impact.",
                        "ref": "865b0934-f4d6-49ab-bd45-d8f3a93fd8ba",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "OdIcjiz95cZG",
                                    "ref": "3f610b0c-74f8-428c-9d00-d05cd60d1237",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "tofg4Alo4zn3",
                                    "ref": "ddea05e6-1e0d-4cf2-b382-da7109afd080",
                                    "label": "Agree"
                                },
                                {
                                    "id": "2DpyD9iZA0l4",
                                    "ref": "64b1946c-d369-415a-97e5-ab9ab66d9579",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "9QCIMihvhp2O",
                                    "ref": "bbc23d71-96f4-4a7f-9da0-8e234b5c9ee0",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "NF2ztPWTp0ur",
                                    "ref": "53e307b3-18bd-4571-b6e3-bb97eb91d1bb",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "zUsLgfLVOjwc",
                        "title": "My colleagues understands what climate action is and how it applies in the workplace.",
                        "ref": "2ec37cda-18c6-4ca1-a151-abe544f865e5",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "iNkVNzjfxTaF",
                                    "ref": "1f2a4619-416e-4a12-bc0c-d9e4e3fa2dd1",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "PUzISfghCiVe",
                                    "ref": "2d1f7f1b-9751-42a4-83ba-b4237f249366",
                                    "label": "Agree"
                                },
                                {
                                    "id": "Y8K38uySzMA3",
                                    "ref": "76f8fa9e-b261-47e3-806f-0d6b0676ecac",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "cCCXdhUzV0n0",
                                    "ref": "c8292ec2-4e53-42d9-b3e2-af19304be6f7",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "OrUHvgEOgx3v",
                                    "ref": "6d3ce811-e453-4957-94b2-d02411cf0d19",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "4m3FqCIUB2jE",
                        "title": "My organisation provides us with useful information to help us lower our footprint.",
                        "ref": "c9baead0-695a-4553-80c3-6ba5c6760649",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "XQSHwbXAJFrq",
                                    "ref": "2edee14b-375d-4b15-8f45-2651bc1615cd",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "X9BV1Ff8Yhss",
                                    "ref": "fa4cefc6-dc16-453a-8d47-0af74da87a63",
                                    "label": "Agree"
                                },
                                {
                                    "id": "Z3RRYEuibqH9",
                                    "ref": "3913eb77-d762-4c5c-8629-51f195c4eb61",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "kmfefiYqrNPG",
                                    "ref": "0a7b2ae9-0c3f-4e8e-81c4-08285731f4ee",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "WC83HbG4ddyz",
                                    "ref": "4bb27f63-0a39-4a64-b720-2f9a7274f914",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "PpTThV6tZL3X",
                        "title": "My organisation has clear climate goals",
                        "ref": "94b456be-bb35-4663-b109-e0011baf0f03",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "utpvkjBjGjAz",
                                    "ref": "043a19d4-a944-42ae-82f0-39b3fa65039e",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "XdeR0G6gSmtt",
                                    "ref": "6535a916-b6d9-4dd6-970e-53e606770fb2",
                                    "label": "Agree"
                                },
                                {
                                    "id": "imE4dj30SNr2",
                                    "ref": "5fcb80d2-dc35-4568-b146-6e9a57fa981d",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "IQLy8h8gk9Gu",
                                    "ref": "93d939b2-1094-4ba6-a809-b7c6e352cf0d",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "qN7jvHm7PIFC",
                                    "ref": "a2fff77f-8e84-4bff-9396-af04b51679fa",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "BNOs5KUw4Uu4",
                        "title": "My organisation is doing enough to fight climate change.",
                        "ref": "88580ff6-4e3e-4d5f-ba85-3701bbe10264",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "gNg4DFI9SM3V",
                                    "ref": "5e7d416c-ebd4-40f9-8188-84fd90425bce",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "SX55BNAMOFVg",
                                    "ref": "540ffef5-e6d3-43da-a16b-c03c2473f60d",
                                    "label": "Agree"
                                },
                                {
                                    "id": "P2VWVjfa5z9I",
                                    "ref": "6a9c1c15-44aa-49da-9afb-6a50f2be7470",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "09LBIjpKJ9py",
                                    "ref": "85c79989-71b6-494b-bd21-2c4311e2784d",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "tYRoRiBHSwIu",
                                    "ref": "45dc0e4e-a84d-4688-b572-805a0f382c55",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "Upz6jonZ41oH",
                        "title": "My organisation is making progress towards reducing our environmental impact.",
                        "ref": "6437fe08-c40e-4062-a006-c6b7d28f27ab",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "16aG2TZTRCDM",
                                    "ref": "18926e10-1243-4bd3-9e4f-c44ff1b03e8b",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "gr34tWWWt3d8",
                                    "ref": "1ea04c37-77cd-4618-bd9b-cd994b97d022",
                                    "label": "Agree"
                                },
                                {
                                    "id": "B2qVGUNuxigH",
                                    "ref": "477eca04-5ba7-4e18-8fd8-f45dbe14b159",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "rhu8AJDcG887",
                                    "ref": "2110629f-da81-409e-9959-09acc655cace",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "b4A5ruJrlTAr",
                                    "ref": "a3dd162b-da86-4ae8-8757-dd924a752bb8",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "ZQ8FLPjJNvxw",
                        "title": "My organisation provides opportunities for sustainability training at work.",
                        "ref": "7e12b4b0-e1f6-4b41-a883-1084cd415804",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": true,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "c3Ca6G6qQPZR",
                                    "ref": "4f2a158c-f7a1-4322-a2f3-f1614aa27f05",
                                    "label": "Yes, I have attended"
                                },
                                {
                                    "id": "00b20ZXmZeef",
                                    "ref": "b71bcff7-bbd0-40a9-bb2f-44588563792f",
                                    "label": "Yes but I haven't attended"
                                },
                                {
                                    "id": "DRrMennunqu1",
                                    "ref": "91695baf-ab03-4c04-9b10-d8458d691be1",
                                    "label": "It is being planned"
                                },
                                {
                                    "id": "xq68NJVgkLUp",
                                    "ref": "d5f9f83a-2108-4094-a7c3-1b88711a002e",
                                    "label": "It has been requested"
                                },
                                {
                                    "id": "LexUP84eA4T6",
                                    "ref": "6db3b5c0-1d09-4fce-93a3-23f5772c07fc",
                                    "label": "Not that I am aware"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "bET7MYN8tbVR",
                        "title": "I'm engaged with climate conversations at work on a regular basis",
                        "ref": "87318ff0-3039-4e64-9906-5cadd8534820",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "81Ikzm38guR3",
                                    "ref": "bc37d610-d472-4175-bc8d-fc8a27f56401",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "EV2CLLTJk4tH",
                                    "ref": "f837bae1-a060-4d5b-90c3-b615a4a76633",
                                    "label": "Agree"
                                },
                                {
                                    "id": "maEp0Tq2sHvZ",
                                    "ref": "c31416ba-dd01-43bb-bb91-0b21cf70d16d",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "LuvgzbHsJ91B",
                                    "ref": "efe163a5-6bdf-4900-ba51-dccefc4aa594",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "YNTYQu8R5PfH",
                                    "ref": "3da37a50-06f2-4f9c-83d5-cc1e30463ccd",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "mOarxCVwDgcS",
                        "title": "I believe that my role can have a positive environmental impact.",
                        "ref": "d05d679e-9c1a-427d-8ff7-cec17ca8b598",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "j1QW4jVVKmni",
                                    "ref": "57d49e7d-b825-4e6c-8000-c73126b65777",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "mQBjxACAIFTT",
                                    "ref": "a3437b7e-e4fa-4d3f-84c0-130425767a1b",
                                    "label": "Agree"
                                },
                                {
                                    "id": "xlKi4B0qvyHv",
                                    "ref": "b8512423-43c6-4ae9-9a18-c19348918194",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "Vy7ZnMzkfyYr",
                                    "ref": "2fde6075-5bd0-435d-a33f-9fb7333fe840",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "SKgvUkOPr1K5",
                                    "ref": "d43577d1-7727-4653-b5bf-3a2a396f9f2c",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "JZ4h3TI5HImG",
                        "title": "My organisation's approach to climate change makes me feel proud to work there.",
                        "ref": "bf1000e1-d370-4fe1-8e29-a1b39fecd292",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "IlkEpKLzpGLI",
                                    "ref": "9ea891f2-f89f-41a4-822c-71fd242182b1",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "PSq5FXdWqZl9",
                                    "ref": "4ee7a72b-f673-4410-b2da-fa936da301ae",
                                    "label": "Agree"
                                },
                                {
                                    "id": "53CKXqJ8YUAN",
                                    "ref": "030704c0-3483-4162-93eb-2ef5742ea814",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "RDrKa5U1k0gb",
                                    "ref": "41d638fe-f737-4874-abc5-3d3eb5f39446",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "GyrAdtgiMeoF",
                                    "ref": "b1d9f710-3a61-4106-b41f-47c06a5d236c",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "fF0sQZ6ekWIE",
                        "title": "There are plenty of opportunities for me to get involved with green initiatives in my organisation.",
                        "ref": "d9de6f72-844c-4b77-a171-c9e3afa69eb2",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "821TVvmdsqJJ",
                                    "ref": "29d174ab-b0d5-461f-83a0-6d15e33b83e3",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "4sgi1vpewjvs",
                                    "ref": "b929f8d6-3a02-4637-a237-4870e47d619c",
                                    "label": "Agree"
                                },
                                {
                                    "id": "jH4lneArnkIM",
                                    "ref": "0ee283f5-b8df-42a1-a46b-fdd07ecf4001",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "l7XqSTXo8iwO",
                                    "ref": "ae5523f8-ac2f-428a-8497-52ffc28ad57c",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "HNFtguu2Cynz",
                                    "ref": "75e86138-b079-4f98-a50e-7c75d275ef21",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "h6avOksbU0Lj",
                        "title": "I am regularly encouraged to think creatively to address climate change.",
                        "ref": "0f9d6263-23ba-481b-a21d-9f161bd1a531",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "XDPMaWKTE2AV",
                                    "ref": "61ea48a6-f676-47dd-b110-8e8f9f1f68d8",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "qMeBTXU9mPGA",
                                    "ref": "c5122d77-45a6-4cd1-be72-c3fc7662c7ae",
                                    "label": "Agree"
                                },
                                {
                                    "id": "RMxcu4zfBEgt",
                                    "ref": "276055a0-fc8f-43ec-a568-689441691eaf",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "Sv8o5xnSZwxe",
                                    "ref": "92c5648a-ef85-4065-86d7-f6c7260f67d3",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "n7fZTcd0eyCX",
                                    "ref": "e95c3b1c-3747-4344-b169-cbf9a5b54215",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "850jFB9l2WCL",
                        "title": "My organisation's approach to climate change impacts how positively I feel about working there.",
                        "ref": "10c7e476-d56b-44f8-bd28-ec74fbf4e347",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "xKVTnJyEGbJh",
                                    "ref": "a009bcad-4271-4e16-9935-689ca28a7539",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "dEmditIpxLLU",
                                    "ref": "2c63c060-2f7e-40a8-b50c-96477a892e6e",
                                    "label": "Agree"
                                },
                                {
                                    "id": "Hq4FEot2uzni",
                                    "ref": "b3a55813-af3a-4d72-b93a-60a3247344db",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "IMYfwPkvE1zG",
                                    "ref": "49654ee0-572f-4b9a-82d2-55aed219871d",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "he1tEe4iRXQj",
                                    "ref": "bf15d117-651a-4b4e-8d33-2874096983d0",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "bNc2QPCaToYk",
                        "title": "I am more likely to stay at my organisation long term if they prioritise climate change.",
                        "ref": "0220e042-7ac7-4177-a49d-0bf4830f226f",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "elYE9QqsaaYj",
                                    "ref": "e17f8ddf-6975-4fda-b63b-87806c425fc4",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "vFjNmawgven7",
                                    "ref": "12909ee1-d036-49f0-b105-656c4279b6f7",
                                    "label": "Agree"
                                },
                                {
                                    "id": "0UHw5wK1Z9Rr",
                                    "ref": "4050ffaf-d81a-4da8-abf8-749b8aad6aae",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "RokMT08K8Nd7",
                                    "ref": "31d2268f-050d-4f7b-a2b0-d89bc1b6a21a",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "LG2zJEnVdlqC",
                                    "ref": "35016545-5acc-4202-949f-9eb505fbc69b",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": true
                        },
                        "type": "multiple_choice"
                    }
                ]
            },
            "type": "group"
        },
        {
            "id": "NndOwpqVc8i8",
            "title": "Amazing, thank you so much for taking part. This final section is for feedback. It is optional but brutal honesty is preferred!",
            "ref": "bae5050a-1fed-473e-932d-9cb99e1d7f22",
            "properties": {
                "button_text": "Continue",
                "show_button": true,
                "fields": [
                    {
                        "id": "AsarrnIoJzlZ",
                        "title": "First off, how did you find the length of the survey?",
                        "ref": "778147ca-c8d9-4ad7-84a0-80f0d31d2339",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "w9vG0GqD0XdJ",
                                    "ref": "e9386b4a-49a1-4441-b24c-15f25af5a79c",
                                    "label": "Could have answered more"
                                },
                                {
                                    "id": "iTd8IyAGu6gs",
                                    "ref": "5eb716bf-08eb-4452-817e-235c42f6b249",
                                    "label": "Just right"
                                },
                                {
                                    "id": "mpu1kqz8wdCJ",
                                    "ref": "974ce286-45ab-4bfc-9e3d-e9f3dd026332",
                                    "label": "Too many questions"
                                }
                            ]
                        },
                        "validations": {
                            "required": false
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "8hpRinn67PIL",
                        "title": "All of the questions felt relevant.",
                        "ref": "804cca7c-7de3-4357-b397-efd97522f499",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "qntMjvtJH4rB",
                                    "ref": "90d82396-7014-4556-9fcd-f7dde13284e3",
                                    "label": "Strongly agree"
                                },
                                {
                                    "id": "8fQ0zzJ5opD3",
                                    "ref": "31c81465-12cc-4d35-a00e-06918b005ab2",
                                    "label": "Agree"
                                },
                                {
                                    "id": "ADRayDmOMbdQ",
                                    "ref": "79e053f1-0f7e-44db-ad81-a5462b84e260",
                                    "label": "Neutral"
                                },
                                {
                                    "id": "VNkMma9zXYkE",
                                    "ref": "27bd5dae-9e5c-4226-81fc-a1debdca618a",
                                    "label": "Disagree"
                                },
                                {
                                    "id": "UAwTnMHd8pDW",
                                    "ref": "b0076344-eb37-4950-9d74-fb52c063d05a",
                                    "label": "Strongly disagree"
                                }
                            ]
                        },
                        "validations": {
                            "required": false
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "9Pqwp22fPQ0T",
                        "title": "If you disagreed with the statement before, please can you tell us which statements you felt were not helpful or relevant.",
                        "ref": "b17fe7c0-5e46-497b-b960-1be86f4b8169",
                        "properties": {},
                        "validations": {
                            "required": false
                        },
                        "type": "short_text"
                    },
                    {
                        "id": "cjryQ6BUDAHb",
                        "title": "How likely are you to recommend this survey to a colleague?",
                        "ref": "f53525b4-386d-4fca-ac44-a64c469c6eed",
                        "properties": {
                            "randomize": false,
                            "allow_multiple_selection": false,
                            "allow_other_choice": false,
                            "vertical_alignment": true,
                            "choices": [
                                {
                                    "id": "1BwoeutjVeZw",
                                    "ref": "2c5ae292-7680-48fb-9c5e-c6a11bf14cdf",
                                    "label": "Very likely"
                                },
                                {
                                    "id": "rj9Wimtuz3r8",
                                    "ref": "2f4ca2aa-885c-49f2-91e9-8a1f1fe82597",
                                    "label": "Likely"
                                },
                                {
                                    "id": "7uZkByRgoDgq",
                                    "ref": "085c3475-1be1-41dc-a8cb-e4e63d203ba5",
                                    "label": "Unsure"
                                },
                                {
                                    "id": "IPw8PK53C9aJ",
                                    "ref": "4b5dee85-b689-41da-ae6a-6252b2fec1f7",
                                    "label": "Unlikely"
                                },
                                {
                                    "id": "o8eQEgdoWwKM",
                                    "ref": "627e6371-cc08-4f37-a93a-dd3aa849a655",
                                    "label": "Very unlikely"
                                }
                            ]
                        },
                        "validations": {
                            "required": false
                        },
                        "type": "multiple_choice"
                    },
                    {
                        "id": "YWqHlE5uBWuv",
                        "title": "If you have any other feedback for us, please do let us know below.",
                        "ref": "93f3e828-0789-4081-a5f7-339a66dbe341",
                        "properties": {},
                        "validations": {
                            "required": false
                        },
                        "type": "short_text"
                    }
                ]
            },
            "type": "group"
        }
    ],
    "logic": [
        {
            "type": "field",
            "ref": "804cca7c-7de3-4357-b397-efd97522f499",
            "actions": [
                {
                    "action": "jump",
                    "details": {
                        "to": {
                            "type": "field",
                            "value": "93f3e828-0789-4081-a5f7-339a66dbe341"
                        }
                    },
                    "condition": {
                        "op": "and",
                        "vars": [
                            {
                                "op": "is",
                                "vars": [
                                    {
                                        "type": "field",
                                        "value": "804cca7c-7de3-4357-b397-efd97522f499"
                                    },
                                    {
                                        "type": "choice",
                                        "value": "90d82396-7014-4556-9fcd-f7dde13284e3"
                                    }
                                ]
                            },
                            {
                                "op": "is",
                                "vars": [
                                    {
                                        "type": "field",
                                        "value": "804cca7c-7de3-4357-b397-efd97522f499"
                                    },
                                    {
                                        "type": "choice",
                                        "value": "31c81465-12cc-4d35-a00e-06918b005ab2"
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        {
            "type": "field",
            "ref": "24eb12cd-a90a-4a88-8f69-16ae142da8be",
            "actions": [
                {
                    "action": "jump",
                    "details": {
                        "to": {
                            "type": "field",
                            "value": "87bfb27a-bcad-4709-9fec-38f37702dd89"
                        }
                    },
                    "condition": {
                        "op": "and",
                        "vars": [
                            {
                                "op": "is_not",
                                "vars": [
                                    {
                                        "type": "field",
                                        "value": "24eb12cd-a90a-4a88-8f69-16ae142da8be"
                                    },
                                    {
                                        "type": "choice",
                                        "value": "c8d6aeea-9579-40e2-83e0-73f7100458da"
                                    }
                                ]
                            },
                            {
                                "op": "is_not",
                                "vars": [
                                    {
                                        "type": "field",
                                        "value": "24eb12cd-a90a-4a88-8f69-16ae142da8be"
                                    },
                                    {
                                        "type": "choice",
                                        "value": "c03a4884-ec9e-46b4-8212-ac1cc9ea1811"
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    "action": "jump",
                    "details": {
                        "to": {
                            "type": "field",
                            "value": "2a73b2b4-4de4-463b-aed3-49c23f7375be"
                        }
                    },
                    "condition": {
                        "op": "always",
                        "vars": []
                    }
                }
            ]
        }
    ],
    "created_at": "2021-12-17T11:04:31+00:00",
    "last_updated_at": "2022-04-24T07:45:41+00:00",
    "published_at": "2021-12-17T12:51:20+00:00",
    "_links": {
        "display": "https://7d47gggfzx3.typeform.com/to/TNatOmnO"
    }
}