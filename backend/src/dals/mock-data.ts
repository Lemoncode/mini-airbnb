import { ObjectId } from 'mongodb';
import { House } from './house/house.model';
import { User } from './user';

export interface DB {
  users: User[];
  houses: House[];
}

export const db: DB = {
  users: [
    {
      _id: new ObjectId(),
      email: 'admin@email.com',
      password: 'test',
      salt: '',
      role: 'admin',
    },
    {
      _id: new ObjectId(),
      email: 'user@email.com',
      password: 'test',
      salt: '',
      role: 'standard-user',
    },
    {
      _id: new ObjectId(),
      email: 'usernotaut@email.com',
      password: 'test',
      salt: '',
      role: 'standard-user-notAut',
    },
  ],
  houses: [
    {
      _id: '10006546',
      name: 'Ribeira Charming Duplex',
      summary:
        'Fantastic duplex apartment with three bedrooms, located in the historic area of Porto, Ribeira (Cube) - UNESCO World Heritage Site. Centenary building fully rehabilitated, without losing their original character.',
      images: {
        picture_url:
          'https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large',
      },
      address: {
        country: 'Portugal',
        street: 'Porto, Porto, Portugal',
        market: 'Porto',
      },
      bedrooms: 3,
      beds: 5,
      bathrooms: 1,
      reviews: [
        {
          _id: '347372623',
          reviewer_name: 'Camille',
          date: new Date('2018-11-11T05:00:00.000Z'),
          comments:
            'Ana’s place is very well located, at 2 min walking distance to the Douro, so that everything is close by! Ana communicated well regarding check in info, and was even flexible regarding check out timing. The description / pictures are relevant; only the bathroom  is not as recent. We appreciated the extra blanket as heaters have to be switched off once u leave the flat, but once they are switched on we had no problem afterwards regarding the temperature of the flat.',
        },
        {
          _id: '354708379',
          reviewer_name: 'Pawel',
          date: new Date('2018-12-02T05:00:00.000Z'),
          comments:
            'If you want to stay in the heart of Porto for reasonable price this is a good alternative. However, I’d selected again it for group of more than 6 people.',
        },
        {
          _id: '362865132',
          reviewer_name: 'Thomas',
          date: new Date('2018-12-27T05:00:00.000Z'),
          comments:
            'Very helpful hosts. Cooked traditional Portuguese Christmas dinner for 6. Location is perfect. Right off square that is on river right by famous bridge engineered by protege of Gustav Eifel. Looks like same type structure.',
        },
        {
          _id: '364728730',
          reviewer_name: 'Mr',
          date: new Date('2018-12-31T05:00:00.000Z'),
          comments:
            "Ana & Goncalo were great on communication, responding instantly to questions.\n5 of us stayed in their home for 3 nights and found the location to be great and central to all the amazing sights Porto has to offer. \nWe found the home to be difficult to heat on our first night, the rooms have heaters but took time to get the room to a comfortable temperature level. But in warmer months Im sure this isn't an issue.\nThe beds are a little hard with one slightly out of shape,  and the shower is fairly basic (hand held) but does the job. Because of the central location some noise can be expected early in the mornings. \nOverall the apartment suited our needs for our short stay and the price is more than reasonable for what we got.",
        },
        {
          _id: '403055315',
          reviewer_name: 'Milo',
          date: new Date('2019-01-20T05:00:00.000Z'),
          comments:
            "The house was extremely well located and Ana was able to give us some really great tips on locations to have lunch and eat out. The house was perfectly clean and the easily able to accommodate 6 people despite only having one bathroom. The beds and living room were comfortable. \n\nHowever, we always felt somewhat on edge in the house due to the number of signs posted around the kitchen, bedrooms and bathroom about being charged 15€ for all sorts of extras like not washing up or using extra towels and bed linen. Not that this would be particularly unreasonable but it made us feel like we were walking on egg shells in and around the house. \n\nThe hosts were aware that we were a group of six yet one of the beds was not prepared and we ran out of toilet paper well before we were due to check out despite only being there 2 nights. It really wasn't the end of the world but the shower head does not have a wall fitting meaning you had to hold it yourself if you wanted to stand underneath it.",
        },
      ],
    },
    {
      _id: '10009999',
      name: 'Horto flat with small garden',
      summary:
        'One bedroom + sofa-bed in quiet and bucolic neighbourhood right next to the Botanical Garden. Small garden, outside shower, well equipped kitchen and bathroom with shower and tub. Easy for transport with many restaurants and basic facilities in the area.',
      images: {
        picture_url:
          'https://a0.muscache.com/im/pictures/5b408b9e-45da-4808-be65-4edc1f29c453.jpg?aki_policy=large',
      },
      address: {
        country: 'Brazil',
        street: 'Rio de Janeiro, Rio de Janeiro, Brazil',
        market: 'Rio De Janeiro',
      },
      bedrooms: 1,
      beds: 2,
      bathrooms: 1,
      reviews: [],
    },
    {
      _id: '1001265',
      name: 'Ocean View Waikiki Marina w/prkg',
      summary:
        "A short distance from Honolulu's billion dollar mall, and the same distance to Waikiki. Parking included. A great location that work perfectly for business, education, or simple visit. Experience Yacht Harbor views and 5 Star Hilton Hawaiian Village.",
      images: {
        picture_url:
          'https://a0.muscache.com/im/pictures/15037101/5aff14a7_original.jpg?aki_policy=large',
      },
      address: {
        country: 'United States',
        street: 'Honolulu, HI, United States',
        market: 'Oahu',
      },
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      reviews: [
        {
          _id: '359748878',
          reviewer_name: 'Chaundra',
          date: new Date('2018-12-17T05:00:00.000Z'),
          comments: 'Good value and central location',
        },
        {
          _id: '363959231',
          reviewer_name: 'Martina',
          date: new Date('2018-12-29T05:00:00.000Z'),
          comments:
            'Great location, very comfortable especially because of the parking space inside the building. Easy check in-check out procedure. We experienced a elevators failure during Christmas holidays, so no maintenance was available for few days. The apt is on the 16th floor so climbing the stairs (small ramps of 7 steps each though) at least twice a day was quite annoying. The host offered spontanusly 255€ refund for the inconvenience.',
        },
        {
          _id: '400059558',
          reviewer_name: 'Robert',
          date: new Date('2019-01-10T05:00:00.000Z'),
          comments: 'David was very helpful and accommodating!',
        },
        {
          _id: '407326158',
          reviewer_name: 'Rhonda',
          date: new Date('2019-02-01T05:00:00.000Z'),
          comments:
            'Great Location!!  Beware of only one working elevator for a 32 story building.  Not sure when the elevator work is going to be completed.  I just used the inconvenience as an opportunity to get my cardio in going up/down 16 flights of stairs each day.  Enjoyed my stay.  Thanks David!',
        },
        {
          _id: '409415200',
          reviewer_name: 'Wendi',
          date: new Date('2019-02-07T05:00:00.000Z'),
          comments:
            'This is a great location in Honolulu!  You can walk to Waikiki in less than 10 minutes.  You are  on a high floor, and can see the water and the mountains.  It is a good value for this location!',
        },
      ],
    },
    {
      _id: '10021707',
      name: 'Private Room in Bushwick',
      summary:
        'Here exists a very cozy room for rent in a shared 4-bedroom apartment. It is located one block off of the JMZ at Myrtle Broadway.  The neighborhood is diverse and appeals to a variety of people.',
      images: {
        picture_url:
          'https://a0.muscache.com/im/pictures/72844c8c-fec2-440e-a752-bba9b268c361.jpg?aki_policy=large',
      },
      address: {
        country: 'United States',
        street: 'Brooklyn, NY, United States',
        market: 'New York',
      },
      bedrooms: 1,
      beds: 1,
      bathrooms: 1.5,
      reviews: [
        {
          _id: '61050713',
          reviewer_name: 'Antoine',
          date: new Date('2016-01-31T05:00:00.000Z'),
          comments:
            "Josh was out of town during my 1 month stay. His roommates greeted and helped get me settled. They were great hosts and all around cool people. I'm a Brooklynite, but have never lived in Bushwick.\r\nIf you're looking for an hip, authentic, and convenient Brooklyn experience, this spot is for you.  You can literally see the Subway platform from Josh's window. Also a couple steps away from anything you could possibly need... restaurants, juice bar, organic grocery, etc. ",
        },
      ],
    },
    {
      _id: '10030955',
      name: 'Apt Linda Vista Lagoa - Rio',
      summary:
        'Quarto com vista para a Lagoa Rodrigo de Freitas, cartão postal do Rio de Janeiro. Linda Vista.  1 Quarto e 1 banheiro  Amplo, arejado, vaga na garagem. Prédio com piscina, sauna e playground.  Fácil acesso, próximo da praia e shoppings.',
      images: {
        picture_url:
          'https://a0.muscache.com/im/pictures/59c516bd-c7c3-4dae-8625-aff5f55ece53.jpg?aki_policy=large',
      },
      address: {
        country: 'Brazil',
        street: 'Rio de Janeiro, Rio de Janeiro, Brazil',
        market: 'Rio De Janeiro',
      },
      bedrooms: 1,
      beds: 1,
      bathrooms: 2,
      reviews: [],
    },
    {
      _id: '1003530',
      name: 'New York City - Upper West Side Apt',
      summary: '',
      images: {
        picture_url:
          'https://a0.muscache.com/im/pictures/15074036/a97119ed_original.jpg?aki_policy=large',
      },
      address: {
        country: 'United States',
        street: 'New York, NY, United States',
        market: 'New York',
      },
      bedrooms: 1,
      beds: 1,
      bathrooms: 1,
      reviews: [
        {
          _id: '187129145',
          reviewer_name: 'Linda',
          date: new Date('2017-08-26T04:00:00.000Z'),
          comments:
            'Gretas Appartement ist wirklich schön und gemütlich. Wir waren super zufrieden! Die Lage ist perfekt um zügig in Richtung Downtown oder in den Central Park zu gelangen. Falls man mit dem Auto anreist ist das Parken auf der Straße kostenlos. Auch Check-In und Kommunikation liefen völlig reibungslos. Sehr zu empfehlen!',
        },
        {
          _id: '201967739',
          reviewer_name: 'Jeremy',
          date: new Date('2017-10-09T04:00:00.000Z'),
          comments:
            "This was our 2nd stay at Greta's place and we loved it just as much as the first time we stayed. Again, great location (1 min walk from the subway), and we even managed to find free parking around! The place is really cozy and it's starting to feel like our 2nd home in NYC. Good shower, kitchen, separate bedrooms and a nice neighborhood close to central park. What more can you need? Highly recommended!",
        },
        {
          _id: '223508188',
          reviewer_name: 'Bruna',
          date: new Date('2018-01-01T05:00:00.000Z'),
          comments:
            'We had a really great time at Greta’s apartment! First of all she was very nice with us since the beggining, helping with all our doubts. The apartment is near of Central Park and a lot of stores and restaurants. It’s a calm local neighborhood, to live your days in the city like a real new yorker :) . The place was very clean, the shower was good and beds was confortable. The heater sistem worked very well and kept us warm always - it was very important, because the temperatures was very low during our stay there. We definetelly recomend this place to stay! ',
        },
        {
          _id: '245763661',
          reviewer_name: 'Andrea',
          date: new Date('2018-03-23T04:00:00.000Z'),
          comments:
            'Loved the stay here. Greta is a wonderful host. The room is spacious and you have everything you need. The neighborhood is beautiful, lots of restaurants nearby, and the red train is literally next to the apartment. \nDefinitely recommended.',
        },
        {
          _id: '306501176',
          reviewer_name: 'Elena',
          date: new Date('2018-08-12T04:00:00.000Z'),
          comments:
            'greta was a super host! the house really nice and well kept. the bed is very comfortable and equipped with everything. the neighborhood is very safe and close to all amenities: the metro, supermarkets, main attractions, restaurants. Greta made sure that my stay was unforgettable, always present but never intrusive and respectful of privacy. it has always been helpful for every kind of need. thanks to greta for making my stay beautiful. surely if i go back to new york i will definitely come back here.',
        },
      ],
    },
    {
      _id: '10038496',
      name: 'Copacabana Apartment Posto 6',
      summary:
        'The Apartment has a living room, toilet, bedroom (suite) and American kitchen. Well located, on the Copacabana beach block a 05 Min. walk from Ipanema beach (Arpoador). Internet wifi, cable tv, air conditioning in the bedroom, ceiling fans in the bedroom and living room, kitchen with microwave, cooker, Blender, dishes, cutlery and service area with fridge, washing machine, clothesline for drying clothes and closet with several utensils for use.  The property boasts 45 m2.',
      images: {
        picture_url:
          'https://a0.muscache.com/im/pictures/159d489e-62ad-44c4-80a0-fab2a8f3b455.jpg?aki_policy=large',
      },
      address: {
        country: 'Brazil',
        street: 'Rio de Janeiro, Rio de Janeiro, Brazil',
        market: 'Rio De Janeiro',
      },
      bedrooms: 1,
      beds: 3,
      bathrooms: 2,
      reviews: [
        {
          _id: '368187046',
          reviewer_name: 'Leah',
          date: new Date('2019-01-06T05:00:00.000Z'),
          comments:
            'This is the second time I’ve stayed with Ana Valeria. Both stays were about a month. Ana Valeria is a sweet and considerate host. \n\nI would not call the apartment luxurious, but it has everything you need and it’s clean. A small kitchen, and laundry is a must for me. If you’re like me, and you love Rio, and go to the beach everyday, there is no better location. I can hop on a skateboard and get to Leme or leblon, no prob. \n\nI won’t say more, so when I want to book again it will be available!!\n\nThank you Ana Valeria. Beijão, amiga.',
        },
        {
          _id: '402138734',
          reviewer_name: 'Murylo',
          date: new Date('2019-01-17T05:00:00.000Z'),
          comments:
            'Incrível hospitalidade, fizemos o check-in antes do horário combinado! O apartamento é super legal, extremamente bem localizado. Panificadoras, mercados, restaurantes, bancos, metro, praias e diversas coisas ao alcance. Ar condicionado antigo mas funciona bem e é limpo.',
        },
        {
          _id: '403178477',
          reviewer_name: 'Pedro',
          date: new Date('2019-01-20T05:00:00.000Z'),
          comments: 'Tudo conforme anunciado. Recomendo e voltaria.',
        },
        {
          _id: '404802128',
          reviewer_name: 'Claudineia',
          date: new Date('2019-01-25T05:00:00.000Z'),
          comments:
            'O apartamento da Ana Valéria é ótimo em todas as questões... a localização é fantástica. A Ana Valéria é uma excelente anfitriã, nos recebeu muito bem com alguns mimos extras. Adorei meus dias no apartamento dela!',
        },
        {
          _id: '406107824',
          reviewer_name: 'Alessandra',
          date: new Date('2019-01-28T05:00:00.000Z'),
          comments:
            'Tudo perfeito! O apto é muito bem localizado e atendeu perfeitamente minha família. Anfitriã prestativa e atenciosa.',
        },
      ],
    },
    {
      _id: '10047964',
      name: 'Charming Flat in Downtown Moda',
      summary:
        'Fully furnished 3+1 flat decorated with vintage style.  Located at the heart of Moda/Kadıköy, close to seaside and also to the public transportation (tram, metro, ferry, bus stations) 10 minutes walk.',
      images: {
        picture_url:
          'https://a0.muscache.com/im/pictures/231120b6-e6e5-4514-93cd-53722ac67de1.jpg?aki_policy=large',
      },
      address: {
        country: 'Turkey',
        street: 'Kadıköy, İstanbul, Turkey',
        market: 'Istanbul',
      },
      bedrooms: 2,
      beds: 6,
      bathrooms: 1,
      reviews: [
        {
          _id: '68162172',
          reviewer_name: 'Mihra',
          date: new Date('2016-04-02T04:00:00.000Z'),
          comments:
            "Zeynep was a most welcoming and generous host, with a gorgeous, comfortable flat - as advertised! The flat is light and spacious, kitchen well-equipped, bed comfortable (both beds actually), and bathroom clean, with great shower pressure. Zeynep prepared a note with key information about the flat, which was great to have for reference. I especially appreciated the ground coffee and coffee maker. The fact that there was a desk in the house made my stay all the more comfortable - I had a proper place to sit down at my computer.\r\n\r\nIt's clear that Zeynep has put a lot of care into making her flat a home - it's an awesome flat! \r\n\r\nZeynep lives a five min walk to the sea, with a great park along the water front. There are plenty of hip cafes and coffee shops in the neighborhood (Moda), all a short walk from the flat. And it's only a 15 mins walk to the Kadikoy ferry, which offers easy access to the rest of Istanbul.",
        },
      ],
    },
    {
      _id: '10051164',
      name: "Catete's Colonial Big Hause Room B",
      summary:
        "Old floor, intirely reformed, destined to receive people in a very harmonious and welcoming place. Located at Catete's neighborhood, with a very easy access to the metro station, a lot of bus lines, next to a excellent trade and things to do around.",
      images: {
        picture_url:
          'https://a0.muscache.com/im/pictures/b2119f25-42e1-4770-8072-20de92e65893.jpg?aki_policy=large',
      },
      address: {
        country: 'Brazil',
        street: 'Rio de Janeiro, Rio de Janeiro, Brazil',
        market: 'Rio De Janeiro',
      },
      bedrooms: 1,
      beds: 8,
      bathrooms: 4,
      reviews: [
        {
          _id: '61992538',
          reviewer_name: 'Izabella',
          date: new Date('2016-02-10T05:00:00.000Z'),
          comments:
            'A Beatriz foi bastante atenciosa e respondia as minhas dúvidas muito rapidamente antes da viagem. O bairro do Catete tem uma localização boa, conseguimos ir para a Lapa à pé e também para outros lugares como o aterro e a praia do Flamengo durante o carnaval. A estação de metrô também é perto e tem várias opções de alimentação muito próximas à casa. O layout da casa assemelha-se à um hostel, o quarto que eu fiquei tem tamanho excelente para 4 pessoas e tem ar condicionado, o que faz muita diferença com o calor que está no Rio de Janeiro. Existem 4 banheiros, que são suficientes para o número de pessoas que cabem na casa, entretanto durante todos os dias que passei lá, o banheiro não foi limpo nenhuma vez, por sorte os hóspedes estavam mantendo-o em condições de uso, mas seria importante limpar o banheiro de vez em quando. \r\nOutro ponto importante é que os quartos são ligados por uma porta que não tem fechadura e é bem fina, ou seja, a privacidade não é garantida e o barulho de um quarto pode ser ouvido perfeitamente no outro.\r\nO preço é justo pelo que é oferecido, seria importante apenas melhorar a limpeza e verificar se é possível fechar a comunicação dos quartos.',
        },
      ],
    },
    {
      _id: '10057447',
      name: 'Modern Spacious 1 Bedroom Loft',
      summary:
        'Prime location, amazing lighting and no annoying neighbours.  Good place to rent if you want a relaxing time in Montreal.',
      images: {
        picture_url:
          'https://a0.muscache.com/im/pictures/9fa69ad8-c9be-45dd-966b-b8f59bdccb2b.jpg?aki_policy=large',
      },
      address: {
        country: 'Canada',
        street: 'Montréal, Québec, Canada',
        market: 'Montreal',
      },
      bedrooms: 1,
      beds: 2,
      bathrooms: 1,
      reviews: [],
    },
  ],
};
