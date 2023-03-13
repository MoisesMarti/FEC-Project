INSERT INTO host (host_info, cohost_info) VALUES (
    '{
        "name": "Tag",
        "joined": "November 2017",
        "identity_verified": true,
        "bio": "We are proud parents of 6, and grandparents of 2, who love the outdoors! We enjoy the beach (when we can), and are avid cyclists, hikers, and down-time enthusiasts. Happy dog owners (2).",
        "url": "https://a0.muscache.com/im/pictures/user/dbc4290c-328a-426e-bbde-a8175f48ad72.jpg?aki_policy=profile_large",
        "language": "English",
        "response_rate": "100%",
        "response_time": "within a few hours"
    }',

    '{
        "name": "Sherilyn",
        "bio": "We are local in Boise and can be on-site pretty quickly if there is an issue. We''re available at anytime via phone/text/AIRBNB message app. The cabin features wifi, Verizon wireless, and a landline.",
        "url": "https://a0.muscache.com/im/pictures/user/cfdfa743-4062-439c-8355-c29f63b85b3d.jpg?aki_policy=profile_large"
    }'
);

INSERT INTO property (host_id, safety, cancellation_policy, house_rules, location, amenities, nightly_rate, cleaning_fee, service_fee) VALUES (
    1,

    '{
        "pool": "Pool/hot tub without a gate or lock",
        "animals": "May encounter potentially dangerous animal",
        "animal_warning": "This is a mountaintop getaway, so there is a possibility of encountering mountain wildlife including (but not limited to) bear, mountain lion, elk, deer, etc.",
        "camera": "Security camera/recording device",
        "camera_info": "We have a webcam pointed at the parking area to help us know when guests have arrived/departed. The camera DOES NOT point at the house or deck at all.",
        "carbon": true,
        "smoke_alarm": true,
        "fire_extinguisher": true,
        "first_aid_kit": true,
        "stairs": "Must climb stairs",
        "stairs_info": "There are several steps as you approach the door. The second floor loft and master bedroom are up a flight of stairs.",
        "amenity": "Amenity limitations",
        "amenity_info": "Guests will not have access to the shop, the basement storage, the kitchen pantry, and the small storage closet in the master bedroom."
    }',

    '{"cancel_by":"5"}',

    '{
        "max_guest": "5",
        "pets": true,
        "pets_info": "Assistance animals are always allowed",
        "in": "4:00 PM",
        "out": "11:00 AM",
        "quiet": "10:00 PM - 7:00 AM",
        "self_check": "Self check-in with smart lock",
        "photography": true,
        "parties": false,
        "smoking":false,
        "additional_rules": 
            [
                "-Winter road conditions REQUIRE chains/cables for your vehicle in the winter months. If do not own chains, we''re happy to make a recommendation for you to purchase. If you are not willing to acquire chains, please plan your stay for springtime when the roads are dry.",
                "-If you do run in to traction issues (winter) and get stuck, PLEASE DO NOT IMPOSE on our neighbors in Wilderness Ranch to assist you. There is no cell signal on the roads in Wilderness Ranch. To call for assistance, make your way on foot down the mountain to the mailroom (wifi & landline) or up the mountain to our cabin (wifi, verizon cell & landline).",
                "-Parties are not permitted.",
                "-The cabin is in a mountain neighborhood that values its quiet and tranquility. Quiet hours are 10pm to 8am. Voices carry more than we realize it is unacceptable to disturb the neighbors with loud conversations from the hilltop, hot tub, or the deck. Please take it inside by 10pm. We appreciate your cooperation.",
                "-Smoking is not permitted anywhere on the property.",
                "-If you are planning on bringing pets, ensure that you send us an AIRBNB message with an accurate count. Pet fee is $25/pet/night.",
                "-Guests will please clean up after their pets.",
                "-Children under the age of 8 are NOT permitted in the hot tub at any time.  Absolutely NO DIAPERS of any kind (including swim diapers) permitted in the hot tub, ever.",
                "-Please leave the wildlife alone.",
                "-This property has a private septic system. Kindly place feminine and other sanitary products in the garbage. DO NOT flush them as they can cause catastrophic sewer failure. (We''re certain that a sewer failure will not ''enhance'' the quality of your stay!)",
                "-Exterior lights must be turned off during the quiet hours of 10pm to 8am. This is to limit light pollution in the neighborhood."
            ]
    }'::jsonb,

    '{
        "title": "Mountaintop Getaway w/Stunning Views and Hot Tub",
        "city": "Boise",
        "state": "Idaho",
        "country": "United States"
    }',

    '{
        "scenic_views": true,
        "valley_view": true,
        "mountain_view": true,
        "bathtub": true,
        "hair_dryer": true,
        "shampoo": true,
        "hot_water": true,
        "free_washer": true,
        "free_dryer": true,
        "essentials": true,
        "essentials_items": "Towels, bed sheets, soap, and toilet paper",
        "hangers": true,
        "bed_linens": true,
        "extra_pillows_and_blankets": true,
        "iron": true,
        "tv": true,
        "tv_apps": "HDTV with Hulu, Amazon Prime Video, Apple TV, HBO Max, Netflix, Roku",
        "game_console": true,
        "ac_unit": true,
        "ac_unit": true,
        "indoor_fireplace": true,
        "heating": true,
        "wifi": true,
        "dedicated_workspace": true,
        "kitchen": true,
        "kitchen_info": "Space where guests can cook their own meals",
        "refrigerator": true,
        "microwave": true,
        "cooking_basics": true,
        "cooking_basics_info": "Pots and pans, oil, salt and pepper",
        "dishes_and_silverware": true,
        "dishes_and_silverware_info": "Bowls, chopsticks, plates, cups, etc.",
        "dishwasher": true,
        "stove": true,
        "oven": true,
        "coffee_maker": true,
        "baking_sheet": true,
        "barbeque_utensils": true,
        "barbeque_utensils_info": "Grill, charcoal, bamboo skewers/iron skewers, etc.",
        "bread_maker": true,
        "private_entrance": true,
        "private_entrance_info": "Separate street or building entrance",
        "patio_or_balcony": true,
        "backyard": true,
        "backyard_info": "An open space on the property usually covered in grass",
        "outdoor_furniture": true,
        "bbq_grill": true,
        "parking": true,
        "hot_tub_or_pool": true,
        "long_term_stay": true,
        "long_term_stay_info": "Allow stay for 28 days or more",
        "smart_lock": true
    }',
    
    160,
    125,
    63
);

INSERT into booked_days (from_date, to_date) VALUES 
('03/02/2023', '03/08/2023'),
('03/19/2023', '03/22/2023'),
('05/11/2023', '05/19/2023'),
('04/02/2023', '04/08/2023'),
('04/16/2023', '04/22/2023');

INSERT INTO reviews (user_name, comment, img_url, review_date)
VALUES 
  ('Keith', 'We had a great time, the place felt like home! Clean with everything you would need.', 'https://a0.muscache.com/im/pictures/user/71b67618-0162-4dc0-a885-d534d4070c51.jpg?im_w=240', '2021-01-10'),
  ('Sarah', 'Great location, easy to understand directions, and not far from Idaho City which was a bonus!', 'https://a0.muscache.com/im/pictures/user/f0ebbcf4-e840-4751-a189-b4706b3f2a59.jpg?im_w=240', '2022-02-15'),
  ('Caleb', 'Thoroughly enjoyed our weekend stay! Everything was as described and we had everything we needed to relax and clock out for a few days. The views were serene; it was wonderful to sit on the porch and watch the clouds and weather roll over the mountains.', 'https://a0.muscache.com/im/pictures/user/35d08415-fa3a-4738-b0b3-eb94d0ef540a.jpg?im_w=240', '2021-06-20'),
  ('Christine', 'The host was very friendly and helpful.', 'https://a0.muscache.com/im/pictures/user/2108581a-c9f0-4b13-98f4-4fe2b79dae87.jpg?im_w=240', '2022-01-05'),
  ('Alex', 'Very nice place', 'https://a0.muscache.com/im/pictures/user/5fb9152c-cece-4aea-83e7-8dd7485e06d9.jpg?im_w=240', '2021-08-08'),
  ('Garret', 'The room was a bit small, they did not have a tesla charger, did not have a closet big enough for my hawaiian shirts', 'https://avatars.githubusercontent.com/u/13923018?v=4', '2022-03-01'),
  ('Belen', 'Best place to get away from the city. Beautiful views all around the place. Saw bunch of wild animal. Host was friendly and informative. Would highly recommend everything was perfect.', 'https://a0.muscache.com/im/pictures/user/b9a30aff-80c5-47a1-97e7-f061d15ca803.jpg?im_w=240', '2011-02-10'),
  ('Megan', 'We look forward to staying every year - clean, cozy and relaxing. Our pup loves it too. Thanks for having us!', 'https://a0.muscache.com/im/pictures/user/6823f0eb-a5f6-47fd-9ddc-57777b7aff94.jpg?im_w=240', '2021-04-6'),
  ('Chester', 'Beautiful place with awesome views!', 'https://a0.muscache.com/im/pictures/user/e90b283f-d7eb-46d4-913c-33c6b7dcead1.jpg?im_w=240', '2021-12-20'),
  ('Jeffrey', 'Fantastic place to get away , relax and re-charge the batteries- We will definitely try and rent this amazing place again, we could here elk calling at night which was a once in a life time thing in my opinion! thanks again Tag & Sherilyn- P.S neighbors are friendly and knowledgeable about where to hike and site see!','https://a0.muscache.com/im/pictures/user/e458fafe-8db6-4ad6-8cba-b999950cedd8.jpg?im_w=240', '2020-01-14'),
  ('James', 'Beautiful location with gorgeous views all around. The house was very well kept and we had a great weekend getaway. Will definitely be booking another getaway in the future here.', 'https://a0.muscache.com/im/pictures/user/7fc561f5-71da-4d66-8a32-4f576cb537f4.jpg?im_w=240', '2021-06-11');
  
INSERT INTO ratings (cleanliness, accuracy, communication, location, check_in, value) VALUES 
(4, 5, 5, 5, 5, 5),
(4, 4, 5, 5, 5, 5),
(5, 4, 4, 5, 5, 5),
(5, 5, 4, 4, 5, 5),
(5, 5, 5, 4, 4, 4),
(5, 5, 5, 5, 4, 4),
(5, 5, 5, 5, 5, 5),
(5, 5, 5, 5, 5, 5),
(5, 5, 5, 5, 5, 5),
(5, 5, 5, 5, 5, 5),
(5, 5, 5, 5, 5, 4),
(5, 5, 5, 5, 5, 5),
(5, 5, 5, 5, 5, 5),
(5, 5, 5, 5, 5, 5),
(5, 5, 5, 5, 5, 5),
(5, 5, 5, 5, 5, 5),
(5, 5, 5, 5, 5, 5),
(5, 5, 5, 5, 5, 5),
(5, 5, 5, 5, 5, 4),
(5, 5, 5, 5, 5, 4),
(5, 5, 5, 5, 5, 4);


INSERT INTO images (large_img,left_img, right_img) VALUES
('https://a0.muscache.com/im/pictures/563de9e7-dd5c-4389-a1ae-758f5c90f551.jpg?im_w=1200',
'https://a0.muscache.com/im/pictures/00e24393-69c0-4077-883c-d71eacf28d3e.jpg?im_w=720',
'https://a0.muscache.com/im/pictures/ce7c192d-faa9-4c38-9c1e-db4d1cdd696d.jpg?im_w=720'),

('https://a0.muscache.com/im/pictures/cf7e5cb9-9e15-44fd-a4f1-625c92d3e5db.jpg?im_w=1200',
'https://a0.muscache.com/im/pictures/6fb0f548-2453-42cd-91d6-01b4b2a26c8d.jpg?im_w=720',
'https://a0.muscache.com/im/pictures/38e66be5-df0b-46aa-a102-c2ad39aec4ae.jpg?im_w=720'),

('https://a0.muscache.com/im/pictures/ec02beaf-e49a-4703-8344-63990512a2ce.jpg?im_w=1200',
'https://a0.muscache.com/im/pictures/98329a47-4996-490b-b3eb-12c304809a45.jpg?im_w=720',
'https://a0.muscache.com/im/pictures/8df89d89-4371-4e80-af33-25047e79c1be.jpg?im_w=720'),

('https://a0.muscache.com/im/pictures/fe75f0cf-8f58-4eec-83b9-6103040634e7.jpg?im_w=1200',
'https://a0.muscache.com/im/pictures/32a3cccc-8286-4bf8-b645-e02ab0e01d1e.jpg?im_w=720',
'https://a0.muscache.com/im/pictures/a310eee5-9612-4af1-898a-4ab29e9e43bd.jpg?im_w=720'),

('https://a0.muscache.com/im/pictures/a9dfab94-b074-4f35-a149-22954adf5a16.jpg?im_w=1200',
'https://a0.muscache.com/im/pictures/533b952d-4f0c-4c0b-9111-aa6bf31a18f7.jpg?im_w=720',
'https://a0.muscache.com/im/pictures/0517d896-a98d-4445-ae43-38667891c75c.jpg?im_w=720'),

('https://a0.muscache.com/im/pictures/1189a8b0-988b-42ae-b53c-bb5a8a264a47.jpg?im_w=1200',
'https://a0.muscache.com/im/pictures/a0853800-1a3c-4a01-bbe9-ecf3d2a795f2.jpg?im_w=720',
'https://a0.muscache.com/im/pictures/6f812b04-ced1-4226-b4c3-9b87f3433ef9.jpg?im_w=720'),

('https://a0.muscache.com/im/pictures/61408a60-901b-4472-9f88-622e32895da4.jpg?im_w=1200',
'https://a0.muscache.com/im/pictures/09c9b900-e486-4508-ba94-cea898e911e2.jpg?im_w=720',
'https://a0.muscache.com/im/pictures/af66294e-5ddc-4d25-a3a2-b09be2fa53ea.jpg?im_w=720'),

('https://a0.muscache.com/im/pictures/884d5505-0ace-4510-8b18-e9a601c47ccb.jpg?im_w=1200',null,null);


INSERT INTO languages (language, country) VALUES 
('English', 'United States'),
('Azərbaycan dili', 'Azərbaycan'),
('Bahasa Indonesia', 'Indonesia'),
('Bosanski', 'Bosna i Hercegovina'),
('Català', 'Espanya'),
('Čeština', 'Česká republika'),
('Crnogorski', 'Crna Gora'),
('Dansk', 'Danmark'),
('Deutsch', 'Deutschland'),
('Deutsch', 'Österreich'),
('Deutsch', 'Schweiz'),
('Eesti', 'Eesti'),
('English', 'Australia'),
('English', 'Canada'),
('English', 'Guyana'),
('English', 'India'),
('English', 'Ireland'),
('English', 'New Zealand'),
('English', 'Singapore'),
('English', 'United Arab Emirates'),
('English', 'United Kingdom'),
('Espanol', 'Argentina'),
('Espanol', 'Belice'),
('Espanol', 'Bolivia'),
('Espanol', 'Chile'),
('Espanol', 'Columbia'),
('Espanol', 'Costa Rica'),
('Espanol', 'Ecuador'),
('Espanol', 'El Salvador'),
('Espanol', 'España'),
('Espanol', 'Estados Unidos'),
('Espanol', 'Guatemala'),
('Espanol', 'Honduras'),
('Espanol', 'Latinoamérica'),
('Espanol', 'México'),
('Espanol', 'Nicaragua'),
('Espanol', 'Panamá'),
('Espanol', 'Paraguay'),
('Espanol', 'Perú'),
('Espanol', 'Venezuela'),
('Francias', 'Belgique'),
('Francias', 'Canada'),
('Francias', 'France'),
('Francias', 'Suisse'),
('Gaeilge', 'Éire'),
('Hrvatski', 'Hrvatska'),
('isiXhosa', 'eMzantsi Afrika'),
('isiZulu', 'iNingizimu Afrika'),
('Islenska', 'Island'),
('Italiano', 'Italia'),
('Italiano', 'Svizzera'),
('Kiswahili', 'Afrika'),
('Latviešu', 'Latvija'),
('Lietuviu', 'Lietuva'),
('Magyar', 'Magyarorszag'),
('Malti', 'Malta'),
('Melayu', 'Malaysia'),
('Netherlands', 'Belgie'),
('Netherlands', 'Netherland'),
('Norsk', 'Norge'),
('Polski', 'Polska'),
('Portugues', 'Brazil'),
('Portugues', 'Portugal'),
('Română', 'Romania'),
('Shqip', 'Shqiperi'),
('Slovencina', 'Slovensko'),
('Srpski', 'Srbija'),
('Suomi', 'Suomi'),
('Svenska', 'Sverige'),
('Tagalog', 'Pilipinas'),
('Tiếng Việt', 'Việt Nam'),
('Turkce', 'Turkiye'),
('Ελληνικά', 'Ελλάδα');


INSERT INTO currencies (currency, symbol) VALUES 
('United States dollar', 'USD - $'),
('Australian dollar', 'AUD - $'),
('Brazilian real', 'BRL - R$'),
('Bulgarian lev', 'BGN - лв.'),
('Canadian Dollar', 'CAD - $'),
('Chilean peso', 'CLP - $'),
('Chinese yuan', 'CNY - ￥'),
('Coloumbian peso', 'COP - $'),
('Costa Rucan colon', 'CRC - ₡'),
('Croatian kuna', 'HRK - kn'),
('Czech koruna', 'CZK - '),
('Danish krone', 'DKK - kr'),
('Emirati dirham', 'AED - '),
('Euro', 'EUR - €'),
('Hong Kong dollar', 'HKD - $'),
('Hungarian forint', 'HUF - Ft'),
('Indian rupee', 'INR - ₹'),
('Israeli new shekel', 'ILS - ₪'),
('Japanese yen', 'JPY - ¥'),
('Malaysian ringgit', 'MYR - RM'),
('Mexican peso', 'MXN - $'),
('Moroccan dirham', 'MAD'),
('New Taiwan dollar', 'TWD - $'),
('New Zealand dollar', 'NZD - $'),
('Norwegian krone', 'NOK - kr'),
('Peruvian sol', 'PEN - S/'),
('Philippine peso', 'PHP - ₱'),
('Polish zloty', 'PLN - zł'),
('Pound sterling', 'GBP - £'),
('Romanian leu', 'RON - leu'),
('Saudi Arabian riyal', 'SAR - SR'),
('Singapore odllar', 'SGD - $'),
('South African rand', 'ZAR- R'),
('South Korean won', 'KRW - ₩'),
('Swedish krona', 'SEK - kr'),
('Swiss franc', 'CHF'),
('Thai baht', 'THB - ฿'),
('Turkish lira', 'TRY - ₺'),
('Uruguayan peso', 'UYU - $U');