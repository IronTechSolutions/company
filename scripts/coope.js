// Array de productos iniciales
const products = [
    //ITEMS SOLO PARA Ferretería D&W
    {       //Productos con id product-ferr-aluminio-lujo 1)
        id: 'product-ferr-aluminio-lujo', 
        title: 'Handle/IH00225', //1
        description: 'Suitable for Casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/kajapLQzZvtG4oBbFl1K8URNE3nYZUVVrc2UMMPN.jpg',
        details: 'Handle Main material, Aluminum alloy Surface treatment, Electrolytic oxidation',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/o61JzvQ0goA0HAHIaINdyn2wnM6MyCwpilPeD1OH.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo',
        title: 'Handle/IHS00340R', //2
        description: 'Suitable for Casement windows and Screen window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/Q0rqC0g5M2ACgTbffJFyaLdiXJ6fd5S6WuMtSUs3.png',
        details: 'Product category：Handle Main material, Aluminum alloy Surface treatment, Electrolytic oxidation',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/YMcbwx587sOagUjsNXGh3U4j2p8HoS8O3Ht9JAfM.jpg',
           //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo',
        title: 'Door hande/IDHD01A', //3
        description: 'Suitable for Casement doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/5N9BLnxjZcXHMxGob3T4jUqnEZbjGfnOSDsU49kj.jpg',
        details: 'Product category：Door handle Main material, Aluminum alloy Surface treatment, Electrolytic oxidation',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/F8KbQjkj1R9faJHkcXQJ9joCxVjKna2ljsIXlayk.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo',
        title: 'handle/IHS00535R', //4
        description: 'Suitable for Casement windows',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/oYWbxwibgXcjF67ibDWfvhlCKl6S081mRgT2jJa8.jpg',
        details: 'Product category：Handle Main material:Aluminum alloy Surface treatment：Nano coating.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/4vuQwnkPiNBY0aYhpd0zf797fZIUIMoR2CL6VFMp.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //5
        title: 'Handle/IHS00640R',
        description: 'Suitable for Casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/7p4S9kuSJvXWTR7khbLCIoqx7WOnfymwShrxzg4q.png',
        details: 'Product category：Handle Main material：Aluminum alloy Surface treatment：Nano coating',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/82AXsKEs5rmWyDgfiddZNNieqwBzlQUbpTyR0roi.jpg',
            
        ]
    },

    {
        id: 'product-ferr-aluminio-lujo', //6 
        title: 'handle/IH00645',
        description: 'Suitable for Casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/ZStnD4QIaWFKl2puzPODI7wC2aQnrOzMAYME2l0q.png',
        details: 'Product category：Handle Main material:Aluminum alloy Surface treatment：Nano coating.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/jynFx9VYrch7deIedP4NlIKNmKDZIDnfCZs82goM.jpg',
            
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //7
        title: 'Handle/IH00545',
        description: 'Suitable for Casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/nUsj55Cgi8nDkm9lhg9mFs8XipA6jmiSD21GuToX.jpg',
        details: 'Product category：Handle Main material：Aluminum alloy Surface treatment：Nano coating.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/Yt4yIYImBWIATQBmTvjJDvPCyCfPqHfELQZ2dWyO.jpg',
            
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //8
        title: 'Handle/IH00722',
        description: 'Suitable for Casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/VFrkRASQBdkxPSpsVLm7oTpzYQBgresb5PZ2j56Y.png',
        details: 'Product category：Handle Main material：Aluminum alloy Surface treatment：Nano coating.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/Fkm8se8BsGwckwxgQKSViKq6GLBnBl9a0SMAzgUn.jpg',
            
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //9
        title: 'handle/IHBS00840R',
        description: 'Suitable for Casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/nKvdEyrrGNKMNQB5iuYpqSHSMp7aBaFMNlKmj9IL.jpg',
        details: 'Product category：Handle Main material:Aluminum alloy Surface treatment：High weather resistant coating.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/GHRWDDhqY8ysKfBx1sh4EoyQNDwgeva1pB5qnB2c.jpg',
            
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //10
        title: 'Handle/IH3800630',
        description: 'Suitable for Casement windows',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/CpbtSJkx8BbGSaz9FXMtBCcNr1QwvGgGCu0iMRqS.jpg',
        details: 'Product category：Handle Main material：Aluminum alloy Surface treatment：Nano coating.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/fxOzCHC5BKZfTKkEAgKn6OaJhdFy3doeJbxX4agq.jpg',
            
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //11
        title: 'handle/IHB00645',
        description: 'Suitable for Casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/MfLrX5RuGsbpgfrQGmVvzpqg1cDONodWfZkN0yJK.jpg',
        details: 'Product category：Handle Main material:Aluminum alloy Surface treatment：Nano coating',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/CpStLBjNxfizo8NkeaYKEh0XCpis6TSzIIelPMWn.jpg',
            
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //12
        title: 'Handle/IHB00830',
        description: 'Suitable for Casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/SxQLAhlA5nJ741fVKi6keVX1ATDZ9bVt1XQ0BuEL.jpg',
        details: 'Product category：Handle Main material：Aluminum alloy Surface treatment：High weather resistant coating.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/HViE0HL2gVqJr0ZsvdTaCaVcEHkKn8T9ihoUSVQ0.jpg',
            
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //13
        title: 'Handle/IHBS00635L',
        description: 'Suitable for Casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/OYg7qRKSEI6RtUZfQjt1pBNJueqiHgCjOSnL7Sqa.jpg',
        details: 'Product category：Handle Main material：Aluminum alloy Surface treatment：Nano coating.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/trZtAsWo4VOQfCvVooqsSYygfkq29w12xU15FLDO.jpg',
            
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //14
        title: 'Door hingee/IDHG01',
        description: 'Suitable for Casement doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/dLdWONn3E1Zk9WvbeaWK5ZCiWoyxqUyuhlOyoZPx.jpg',
        details: 'Product category：Door hinge Main material：Aluminum alloy Surface treatment：Nano coating.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/wK7gfdCB2Fg7DnxHYciDcvPmMzVmcZonMZXbRxqu.jpg',
            
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //15
        title: 'Hidden window hinge/ICH200',
        description: 'Suitable for Casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/IYHlJCO5HNApJYoxXD19aQd9HZna3T1cVaNqPxGx.jpg',
        details: 'Product category：Hidden window hinge Main material：Stainless steel Surface treatment：Grinding and polishing.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/JWvIv8E7l7ryV39Y4gEqdgYsXVSFHCqDDVV3KL8h.jpg',
            
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //16
        title: 'Concealed screen window hinge with K groove/ICH200K',
        description: 'Suitable for Casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/QF5LgGmMBZ5reCnMK6tuohfcykP2ABhU6ZfrafSv.png',
        details: 'Product category：Concealed screen window hinge with K groove Main material：304Stainless steel Surface treatment：Grinding and polishing.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/N601gpvMajKY4zVbBvWIN6OzPilZ89YWQuKGBwbj.jpg',

        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //17
        title: 'Roller/Y2CL239',
        description: 'Suitable for Slding doors',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/UDxDocOjYyJV5hBcfV4tmr3voLKQbj3rnke8Qysi.jpg',
        details: 'Product category：Roller Main material：Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/YqxvGDs0l0YPGy5WOBRSc2A2OUf36S7mKDl1BS6G.jpg',
            
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //18
        title: 'Roller/Y2ML41A',
        description: 'Suitable for Slding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/kRT5d6Zq70aQQv4xehg61UCouyVmkKMi9XOlBD6Y.jpg',
        details: 'Product category：Roller Main material：Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/093VNnikKk7PU1GzHHwMUHBr8pne5jJDPv1cXiOC.jpg',

        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //19
        title: 'Roller/Y2ML44',
        description: '1.Suitable for Sliding windows,Sliding doors 2.Max Load Bearing of two rollers: 80kg.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/930xtlLLj1fCiBME8o9meuPPzz4BU44ajm902K1L.jpg',
        details: 'Product category:Roller Main material:Plastic & Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/cbDz2H8tWExFVA6m1MV86QEvVzDJFA8RbQou6UUj.jpg',

        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //20
        title: 'Roller/Y2ML202',
        description: 'Suitable for Slding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/XF2Kk2uwNtmsETYMjfqBXBLODF3RlYRirYvTx2iJ.jpg',
        details: 'Product category：Roller Main material：Carbon steel',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/q4OCABXMB05PNtskd8lzpZakGxhIgC7Y5140YDhi.jpg',

        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //21
        title: 'Friction stay/Y2HC131B-10',
        description: 'Suitable for casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/AilJlPhuM5JucBbOfxJpvHq4jbthqTbcph8DtUhb.jpg',
        details: 'Product category:Friction stay Main material:Satinless steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/ASYv8fPFYNDMPNxF3wjqahkuOta9EJmthpiQkDUp.jpg',

        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //22
        title: 'Friction stay/Y2HC210B-10',
        description: 'Suitable for Open-out windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/4qVFUFVSIX0BwDMPpjX1bLfFdZUTuGeLhOYl7eOX.jpg',
        details: 'Product category：Friction stay Main material：Stainless steel Surface treatment：Natural',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/8HOQMhiladho5jumm0421Et6E4YfbwgcJFtFgwGJ.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //23
        title: 'Friction stay/Y2HC230B-12',
        description: 'Suitable for Open-out windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/BS1MdVZkIpRyhJuPfBrEqXy2MvaTgA8AKCf1a6p3.jpg',
        details: 'Product category：Friction stay Main material：Stainless steel Surface treatment：Natural.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/5gmvQCb5CcR1tYcH3c6llq51tYfx1QVwSV70TKdM.jpg',
          //  'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //24 ready
        title: 'Friction stay/Y2HC310B-12',
        description: 'Suitable for Open-out windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/vFKewAdXLA7BoFf0spbp42imSNR7l9iZdVX4CHz7.jpg',
        details: 'Product category：Friction stay Main material：Stainless steel Surface treatment：Natural',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/PjO51p2YF5e7Js5xwEoojXe9UydJcBaAarCrZ55x.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //25 ready
        title: 'Friction stay/Y2HC320B-14',
        description: 'Suitable for Open-out windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/WNFmxaPErdLzdIeIECJNTg4SkH8pLSFM25whsD6E.png',
        details: 'Product category：Friction stay Main material：Stainless steel Surface treatment：Natural',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/4Fk0WaqV48EqOUWpZuyjm53BFpzV3YjRLgvyIfDO.jpg',
           //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //26 ready
        title: 'Peg stay/Y2FC101B-10',
        description: 'Suitable for Casement window',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/liZPuXHnuQVkYRjZdXVO8mduq2ibuw4fY0zUckf6.jpg',
        details: 'Product category：Peg stay Main material：Stainless steel',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/K51xDlBeDu4VOhrkRi4sEOcmDcdvpfVP17HNhlH6.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //27 ready
        title: 'Peg stay/Y2FC111B-10',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/fPE0JI2Y8ZAxlPxMqyRPkICRp7DPrHEe6nW98rzs.jpg',
        details: 'Product category：Peg stay Main material：Stainless steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/DzB0U8NrraxFUHpG0CSoU7kgkt8oIOC6batBswuj.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //28 ready
        title: 'Peg stay/Y2FC200B-10',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/a2Wzw3WqpJbULoDeHfB928K3tnS0aQC4axfXQ15q.jpg',
        details: 'Product category：Peg stay Main material：Stainless steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/pxgX4Go4fsXX7JUk9x9OoLOtyZwsprEqGqstyTmx.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //29 ready
        title: 'Peg stay/Y2FC300B-10',
        description: 'Suitable for Casement window.', 
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/Z7BNkQ9GKdgSRCOiIMlEDn2ITRNmei04nSOApXE9.jpg',
        details: 'Product category：Peg stay Main material：Stainless steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/m9P35Vza5u3QOwQPDBtIeP8ZW8XZCqMQjAJ1sT52.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //30 ready
        title: 'Roller/Y2ML40A/I',
        description: 'Suitable for Slding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/r4UoT5qUKFdsoMi7wqkJC7XfOZysDqZXBr6r3uiV.jpg',
        details: 'Product category：Roller Main material：Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/wciCDOy07iuOJMLm5J4ex7zlVXCTmPH3IA5fIkWA.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //31 ready
        title: 'Roller/Y2ML44/I',
        description: '1.Suitable for Sliding windows,Sliding doors 2.Max Load Bearing of two rollers: 80kg.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/F5Nyaj00UOFgfpYkmI302Qv5NqRmlGcvBQZ7c1Ir.jpg',
        details: 'Product category:Roller Main material:Plastic.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/lky0P9W1cwlRhvuAsIK8JfZeQLsM8uju3RBV9k5n.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //32 ready
        title: 'Roller/Y2ML400',
        description: 'Suitable for Slding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/xIB7jpyIRE0mzF7BKOTkMZGOnoL2FdH51qWFivcv.jpg',
        details: 'Product category：Roller Main material：Carbon steel，Plastic.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/mUGTX4RM97pOKNjR5VozvTjkrRzmw5c3H3mB2QEV.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //33 ready
        title: 'Roller/Y2CL400',
        description: '1.Suitable for Sliding windows 2.Max Load Bearing of two rollers: 45kg',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/9K2LF932GLtj1mW1Uowja3x8VukZNi5lbc2YEcOs.jpg',
        details: 'Product category:Roller Main material:Plastic.',
        moreImages: [
            'hhttps://imart.kinlong.com:9091/storage/uploads/pictures/1G4qRll3rXAvPtZrquJQLMtUxvAe8XLFY4z1T2ND.jpg200',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //34 ready
        title: 'Roller/Y2CL400/I',
        description: '1.Suitable for Sliding windows 2.Max Load Bearing of two rollers: 45kg.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/9QMn2ZNiUhOjkarRtbKNRQB9yap1YzQdyx9LxFcF.jpg',
        details: 'Product category:Roller Main material:Plastic.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/f46F9t0J93uDWNT1UW5YeO5IzjPScYlHD0lHZWPE.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //35 ready
        title: 'Roller/Y2ML209',
        description: '1.Suitable for Sliding windows,Sliding doors 2.Max Load Bearing of two rollers: 80kg',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/p7aWMBuxr5ngO6234jfc7AGGgEkHhncIJIfGpoIm.jpg',
        details: 'Product category:Roller Main material:Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/cXeAl6QNc2fQGM0RFO9fl0XHM1j7EirQJDVtq54C.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //36 ready
        title: 'Shim for friction stay/Y2PKHCDP01',
        description: 'Suitable for Open-out windows',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/v6PvHKNzslBgVUbIkQ65Q5e96xDGP3lXSQ0QNz3u.png',
        details: 'Product category：Shim for friction stay Main material：Nylon',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/QzrOvhJtsJzpiEBsm12tiLL00slIL1oFyOeFM5ed.jpg',
           //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //37  ready
        title: 'Shims for friction stay/Y2PHCDP-16',
        description: 'Suitable for Friction stay of Y2PHCDP Series.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/BRHOVmqYhRgheeTVnXlBthntQdzXpLUvGxHdH91P.png',
        details: 'Product category：Shims for friction stay Main material：Plastic Surface treatment：Black.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/bq8aPqm5BrH7UxfQa2ray85VBcqyFYbdxzlkAKRF.jpg',
           //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //38 ready
        title: 'Friction stay gasket/Y2HCDP01',
        description: 'Fit to friction stay Y2HCDP01.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/JzOu3sHeX6fU4641EG2Auyl6KmPeNeINUUtzl7CF.png',
        details: 'Product category:Friction stay gasket Main material:Nylon Surface treatment:Black.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/iC0Ti6eAhzBINQq6OM6r0JTqNkgusiZzHizPkj3N.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //39 ready
        title: 'Roller/Y2CL260-G25',
        description: 'Suitable for sliding windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/nXf2F3XgHY6oY5dliGuAwJcZ4GXreAqv9DsKKyyk.jpg',
        details: 'Product category:Roller Main material:Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/UHtvQkWQPSTPrHQcS4syL4fEoALoYTYSxwcJ5A5E.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //40 ready
        title: 'Roller/Y2CL260T-G26K24.5',
        description: 'Suitable for Sliding woindows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/ixFeh2e1rEmiiB08ItMEwq7MGyT3NoSI6uAV8fsD.png',
        details: 'Product category：Roller Main material：Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/uwuPVkWDqDBABRbQSBybwAcWtTelaSejsUVKJodH.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //41 ready
        title: 'Roller/Y2CL220',
        description: 'Suitable for sliding windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/c0xxp2e7mwLsiTzvawQsUEqk1usXDBIjtG8c94iA.png',
        details: 'Product category:Roller Main material:Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/zDKhFZb4CRgMuDfFTzYfcZGiM8JPyIggz0vc5pOR.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //42 ready
        title: 'Roller/Y2ML219',
        description: 'Suitable for Slding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/luKeIj0sJ26ElVn68uzzsqsOMmH44CoBUvqdP8uz.png',
        details: 'Product category：Roller Main material：Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/Lcf39Dwh7WOBIh9d3rdRjDeFm8fTBiIkL57k3Y8r.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //43 ready
        title: 'Roller/Y2ML260-G21',
        description: 'Suitable for Slding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/wDo5l5eOBSa4pp2NYPsbwfnlDdqYJLEp6ycTwG8s.png',
        details: 'Product category：Roller Main material：Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/5INUNS4plffI6RyBX5QiBgEqXnpNhMhCn6T5C24l.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //44 ready 
        title: 'Roller/Y2ML260T-G22',
        description: 'Suitable for Slding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/4nAedo7en2dgTHDlPrspWoeTnhMpn58HIic74cnX.png',
        details: 'Product category：Roller Main material：Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/oZYx3F5yVcYvwaxMje0utDaHkYQVEG6oo9n3sBDY.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //45 ready
        title: 'Roller/Y2ML95-G32.5',
        description: '1.Suitable for Sliding windows,Sliding doors 2.Max Load Bearing of two rollers: 90kg.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/lMI5i8ddxanLpjUaoJ1CRV5LzeG7jdS0SMMLp7TD.png',
        details: 'Product category:Roller Main material:Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/xuKqIS8S5KrCT2S6WCxCwTr0DuyqA3Nb5FwRne9p.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //46 ready
        title: 'Roller/Y2ML150',
        description: '1.Suitable for Sliding doors 2.Max Load Bearing of two rollers: 150kg.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/WjDaJNL8TidoDYZWdRAhxWW3UeLM2L0asZMVwDpZ.png',
        details: 'Product category:Roller Main material:Satinless steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/JVgXNJ7Zk2GAyHf1PgXzebcp35VYtKKuv08CecTy.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //47 ready
        title: 'Roller/Y2ML40A/II',
        description: 'Suitable for Slding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/stpjmU0jETC2Yn7ISdLYjsSK1ckSSswDZzB61a23.png',
        details: 'Product category：Roller Main material：Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/F7UIN2Z2JiEmsgnHttAbplLETe5OCbcLfith0wfc.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //48 ready
        title: 'Roller/Y2ML44/II',
        description: '1.Suitable for Sliding windows,Sliding doors 2.Max Load Bearing of two rollers: 80kg',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/dvH79BFYa0ScNdVIGEpQRJfDZA7xfMrlaWTmXKex.png',
        details: 'Product category:Roller Main material:Plastic & Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/qz1yUPJaFSJ9pallkMhwU7Sd4Gi4KDaXMrYzdXcZ.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //49 ready
        title: 'Roller/Y2ML400/II-G20',
        description: '1.Suitable for Sliding windows,Sliding doors 2.Max Load Bearing of two rollers: 80kg.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/tLLMupYj23nKw2xDWBFAY8DwusoQbq9kuoPYL11u.jpg',
        details: 'Product category:Roller Main material:Plastic & Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/dorkPlVwFJ6vz0F1lEBzGoTAJLpzqA55Uz3tJwP1.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //50
        title: 'Roller/Y2ML80-G22',
        description: 'Suitable for Slding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/vvqMUMpU4cVoa3kt7WUN76ABgvBgsqEfhSDXQyh3.png',
        details: 'Product category：Roller Main material：Carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/xWFB7tX00hmf17S6huZ3TSCbDZe1QkPXrhBkMPof.jpg',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //51
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: '',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //52
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: '',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //53
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: '',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //54
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: '',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //55
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: '',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //56
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: '',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //57
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: '',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //58
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: '',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //59
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: '',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //60
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: '',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //61
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: '',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //62
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: '',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //63
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: '',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo', //64
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: '',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            //'https://via.placeholder.com/300x200?text=Vac%C3%ADo+por+el+momento'
        ]
    },


//-------------------------------sub categoria 2----------------------------------------------------------------


    {      //prodcutos con id product-aluminio-dw-hardware 2) 
        id: 'product-aluminio-dw-hardware', //1 ready
        title: 'Window handle/Y2CZS55',
        description: 'Suitable for open-in windows,turn-and-tilt windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/w5czPY600DUWoZPqBSOKmFV6YvlftLW3AtMpF0ri.jpg',
        details: 'Product category:Window handle Main material:Alumimum alloy&Zinc alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/PBC95GGEO01ptKHwG3etpTdm0djxSfz7E5ZF5cR0.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //2 ready 
        title: 'Handle hook lock/Y2LSGS32A',
        description: 'Suitable for Slding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/B4EvVGJgYZX9WZzdT81VDxmoeIaPjINOywIWIiqO.jpg',
        details: 'Product category：Handle hook lock Main material：Zinc alloy.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/q2vs7EblxRcPKhPxobgjbVyvEpHSv32No0ASVcdE.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //3 ready 
        title: 'Transmitter/Y2CDQ015-400',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/K0TCVI3A0gHrd9Pit7MxUyaYzhCf81vnmtasIcEy.png',
        details: 'Product category：Transmitter Main material：Stainless steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/auJG9yC0aYj9p3qSfiBnXlK0lpDciSrSA4a5NbGW.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //4 ready 
        title: 'Sliding lock catch/Y2TLSK03',
        description: 'Suitable for Sliding woindows，Sliding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/VX7lsQJAyRfDQ13XBlz8cqXTZBT77n13BLVxsgZx.jpg',
        details: 'Product category：Sliding lock hook Main material：Stainless steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/lWLm56i0w2PnW0saf9Um7tICSXaQX05kP9GAPLF8.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //5 ready 
        title: 'Fire-resistant locking plate/Y2SK16',
        description: 'Suitable for tutrn-and-tilt windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/0tCvb6Sy4lmxOT7YbbNFVFI1eivmUimTl3yMXpUO.jpg',
        details: 'Product category:Fire-resistant locking plate Main material:Satinless steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/FTySfI1T0scq0IwvLfimGAGlv8Ypvr9ryBkJ3DB6.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //6 ready 
        title: 'Hinge/Y2CHY08A',
        description: '1.The gap between frame and sash should be 3. 5～5mm； 2.Used for side hung open-in window with Euro-C Groove； 3.The fan clamping block needs to be put into the notch of the fan profice before the fan material assembly; 4.The thickness of the extrusion should be 1 . 2mm～1 . 7mm； 5.Max. load bearing capacity of the pivot hinge is 55kg, which depends on the method of installation , thickness of glass and profile stile.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/peiDNUeOwRwSXRs6RlcJQgvlnwZL77uxlTg5vvqG.jpg',
        details: 'Product category:Hinge Main material:Alumimum alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/pMK8UJHULBF9Ar7A2fZJnrwVhakhYRnNHQk1yqFT.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //7 ready 
        title: 'Hinge/Y2MHY01',
        description: '1.The gap between frame and sash should be 4～5mm； 2.Used for side hung open-in door with Euro-C Groove； 3.The clamping block of frame fan need to be put into the notch before the fan frame material assembly; 4.Max. load bearing capacity of the pivothinge is 1 30kg, which depends on the method of installation ,thickness of glass and profile stile.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/R2c4eYnpjvYrj5oKMQybdQ7HHj3im5N3FW4yCvSU.jpg',
        details: 'Product category:Hinge Main material:Alumimum alloy Surface treatment:Powder coated Divide left and right.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/W19GwRIaYCJhc1aDFuhOcw8cFhThTSk3bKBKYfvp.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //8 ready
        title: 'Hinge/Y2MHY06',
        description: '1.Suitable for side hung doors without channel on the profile 2.Max. load bearing capacity of the pivot hinge is 55kg, which depends on the method of installation and profile stile.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/ISZF8EFdSTko6Ow4mPmamm7REkwHRHco8nTU1M5H.jpg',
        details: 'Product category:Hinge Main material:Alumimum alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/062u0tDQWNA5kbehiVE2v5JXNacRcCKUEDcXvg3t.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //9 ready
        title: 'Hinge/Y2MHY06FB',
        description: '1.Suitable for side hung doors without channel on the profile 2.Max. load bearing capacity of the pivot hinge is 55kg, which depends on the method of installation and profile stile.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/owN1rmK1xURpWXu2n57T3SlQ0OGc5TQ8lBuNqkpC.jpg',
        details: 'Product category:Hinge Main material:Alumimum alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/RwFSzQMxGFHs6QO1ShMi9x4tVGVc23MMaOpsMr4v.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //10 ready 
        title: 'Hinge/Y2MHY07',
        description: '1.The gap between frame and sash should be 4～5mm； 2.Used for side hung open-in door with Euro-C Groove； 3.Max. load bearing capacity of the pivothinge is 120kg, which depends on the method of installation,thickness of glass and profile stile.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/25pcZeiG0HPsru5bwxwyMXZzGN5zro6M5WO31gm9.jpg',
        details: 'Product category:Hinge Main material:Alumimum alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/ktbV7AuLMSrrTvwSor1an3rqmQ3V5G9JvszFIbiz.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //11 ready 
        title: 'Hinge/Y2MHY08',
        description: '1.The gap between frame and sash should be 4～5mm； 2.Used for side hung open-in window with Euro-C Groove； 3.The fan clamping block needs to be put into the notch of the fan profice before the fan material assembly; 4.Max.load bearing capacity of the pivot hinge is 130kg, which depends on the method of installation , thickness of glass and profile stile.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/R9JHROUUKvMvuGAHXuqVvI87bIBRTThfybNfVyTu.jpg',
        details: 'Product category:Hinge Main material:Alumimum alloy Surface treatment:Powder coated Divide left and right.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/LV5ptFm68XE40mxRcmYaOVjtg0wVWAigg03yvUPm.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //12 ready 
        title: 'Hinge/Y2MHY09',
        description: '1.Suitable for side hung doors without channel on the profile 2.Max. load bearing capacity of the pivot hinge is 55kg, which depends on the method of installation and profile stile..',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/IiijlI9Za36ylfK4Qvgl5vABc36iqca4dqP17JFM.jpg',
        details: 'Product category:Hinge Main material:Alumimum alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/PVwwcHN399euadPZAY2C8YUuV4crp678b4B0UqFc.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //13 ready 
        title: 'Hinge/Y2MHY10',
        description: '1.The gap between frame and sash should be 4～5mm； 2.Used for side hung open-in door with Euro-C Groove； 3.Max. load bearing capacity of the pivothinge is 90kg, which depends on the method of installation,thickness of glass and profile stile.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/gsEcgahV4gHWFCIWSTutt0IRHJQyFNgMT1O4vXN5.jpg',
        details: 'Product category:Hinge Main material:Alumimum alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/JlJkRJ6u6x0E8yBEg0bN9cQnRz5Vt3ZdUejLIPF7.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //14 ready 
        title: 'Aluminum transmission rod/Y2LCDG01-400',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/GTujUvSj0BgGewFEBE0v2DL1yh3iYEvLEqRI5Lq1.jpg',
        details: 'Product category：Aluminum transmission rod Main material：Aluminum profile.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/IbBXXdA390gdHYPBOG844DVtKNtkwTcUseKr93fh.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //15 ready 
        title: 'Aluminum transmission rod/Y2LCDG01-800',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/QgNYwpZhh6WG4NKrotMe285SYHtGZ8riFbn2doWi.jpg',
        details: 'Product category：Aluminum transmission rod Main material：Aluminum profile.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/w56jlPAgqstyTks4KnEKD1nXiSdnOs09Jc1K2Mkn.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //16 ready 
        title: 'Aluminum transmission rod/Y2LCDG03-400',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/npVHCJere6eLvUVOJSArcwP73hrnT6OQFMZp4NxC.png',
        details: 'Product category：Aluminum transmission rod Main material：Aluminum profile.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/ebx6n3KCjEG8a1JmmKNHOvGiUWLB0deki9HzwCZj.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //17 ready
        title: 'Aluminum transmission rod/Y2LCDG03-800',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/z1JEA6mTlxpjPATPb1G4pNTbXeJ3q55yHViBMlN5.png',
        details: 'Product category：Aluminum transmission rod Main material：Aluminum profile.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/FyVuPyjji2gQyQb9HZtNG5GLNHwO7psx5s0iiknb.jpg' ,
            
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //18 ready
        title: 'Aluminum transmission rod/Y2LCDG04-400',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/SX0hzJjM4gK6wU8W0pdDEFgj3NJln0EZKMJdxqqq.png',
        details: 'Product category：Aluminum transmission rod Main material：Aluminum profile.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/XuZxQNrwlecIMx1LIYALvdGeKLgFoshENWYnWEZP.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //19 ready
        title: 'Aluminum transmission rod/Y2LCDG06-300',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/KjRCG3xSAv3LNCNbzbQolzTNULbUc0EpPopfeK0J.png',
        details: 'Product category：Aluminum transmission rod Main material：Aluminum profile.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/DQps7D3B8kfcvy53CzxD9dApKNCNjaYjph7pm9NL.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //20 ready
        title: 'Aluminum transmission rod/Y2LCDG08-400',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/c606HbLIzpWKPwIEWhZJcKYA9JuWgoQ3gwwTl0vc.png',
        details: 'Product category：Aluminum transmission rod Main material：Aluminum profile.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/DfTDtMoegc933xmiJLFaQQn6A0TWOzI8RwtBdcXF.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //21 ready
        title: 'Aluminum transmission rod/Y2LCDG09-300',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/gwHco3AipxUN4UWxmGoa2JIKttnBO5Zvb8dTNoVJ.png',
        details: 'Product category：Aluminum transmission rod Main material：Aluminum profile.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/shxPveWYfYDX5hZjVPuCSHxfr0tc1dmCwVGalPPG.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //22 ready
        title: 'Aluminum transmission rod/Y2LCDG10-400', 
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/iMRT6Dee9731VPvyHcC1pDcAF1ooHDOQOgB9RXNr.png',
        details: 'Product category：Aluminum transmission rod Main material：Aluminum profile.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/tMkL8Jz9iU0A1uL5Kc0Fkx5FysqPKHqfSUZomGvd.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //23 ready
        title: 'Limitter/Y2XWQ10-254',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/Is2Ugo61f9LYCmHeuDOBHzDfOiQDYF0JyQmfndpi.jpg',
        details: 'Product category：Limitter.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/jq43vQyIGnwkuCR8LHkHRHSRxD7250vDCVkYiJEv.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //24 ready
        title: 'Limitter/Y2XWQ20-225',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/qJMV7NRnpm3Hib85kypdTqxSjxxIFNvKjAPxVIoD.jpg',
        details: 'Product category：Limitter.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/ygH4l4XTo4iJAo2IEPvS49aGezkvia94LHRAwX9b.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //25 ready
        title: 'Lock hook/Y2SG005',
        description: 'Suitable for Sliding woindows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/w9OE0g5B98Mg1UeBYDwlivaXfhFiQ5yAGyduCmVb.jpg',
        details: 'Product category：Lock hook Main material：Stainless steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/uHYDj2FErcu6yzX45gEmKh2ybKzsc9ti7NnEL8rn.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //26 ready
        title: 'Lock hook/Y2SG011',
        description: 'Suitable for Sliding woindows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/EKFSCtPfGBpevKEkG5R4dy3VO5KX9qoY1RXJKjtA.jpg',
        details: 'Product category：Lock hook Main material：Stainless steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/XiUCcBDotEzZOLeSaTHwW9zFJ9nKvyja6C25ddhU.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //27 ready
        title: 'Gasket 25% adhesive content (EPDM)',
        description: 'Widely used on doors and windows, providing sealing, insulation, and thermal insulation effects.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/oUY1TTXTwhzUHyb8yhh1lAjFTnYLzE6Qi0jGKxGA.jpg',
        details: 'Product category：Gasket Main material：EPDM.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/qQFz8DCesSKGeMA9ZeE7MCeiUqA7rfmEvplaCF7D.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //28 ready
        title: 'Spinning handle/Y2XZ07A',
        description: '1.Suitable for Opin-out windows 2.Aspinning hand can only be used to open the fan diagonal construction of not more than 0.7 m.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/NnvmIPToY0oN1mpCmBgvemF26TMIVSBQsil5uTRi.jpg',
        details: 'Product category:Spinninghandle Main material:Aluminumalloy&Zinc alloy Surface treatment:Powder coated Leftandright.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/6WTpkLY35wHDM7CPpofHL5OQkBBxrMkLC834YTrC.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //29 ready
        title: 'Door lock/Y2MS11',
        description: 'Suitable for casement doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/2hrutYoXkF7CnFO92c7kmLnCbFLHZK6bFv1RylLl.jpg',
        details: 'Product category:Door lock Main material:Stainless steel,carbon steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/yz3VldS0c78xWBb8hJHhCJIAV7rDuownt3RbHg6P.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //30 ready
        title: 'Door lock/Y2MS12',
        description: 'Suitable for casement doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/GEm71Hsz6AeslmO7l3pe7eMdoD425FKVESHk437o.jpg',
        details: 'Product category:Door lock Main material:Satinless steel & Carbon alloy.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/gW7nyiao83idClVssabCoH1BtU2co1bpD9C3cHeH.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //31 ready
        title: 'Sliding lock catch /Y2TLSK07',
        description: 'Suitable for Sliding windows,Sliding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/HPJ1HX8KLG20k30H2zXu2SxdphvTviBLCf6JT9tu.jpg',
        details: 'Product category:Sliding lock catch Main material:Satinless steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/fRAYObB9rSMqUsDZD1DFaYNLLnxocKg4kdfHkSHB.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //32 ready
        title: 'Hinge/Y2CHY01A',
        description: '1.The gap between frame and sash should be 3.5～5mm； 2.Used for side hung open-in window with Euro-C Groove； 3.The thickness of the extrusion shouldbe 1.2mm～1.7mm； 4.A groove bottom fan profile slot, Y2CHY08A is remmended； 4.Max.load bearing capacity of the pivot hinge is 55kg, which depends on the method of installation , thickness of glass and profile stile.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/2UVtVgR1JxwJnnlZPRf3ZUNe6RTliaxJMzm3g2Fp.jpg',
        details: 'Product category:Hinge Main material:Alumimum alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/dyhkXaNzu7toOxd7traKxOA9VXR4RMsWBzpd6FCR.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //33 ready
        title: 'Look hook/Y2TLS01-05A',
        description: 'Suitable for Sliding woindows，Sliding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/LLzAIQTsgYXG5mPpR7Xn9eLWLUNFy1HCSiVpUJZL.png',
        details: 'Product category：Lock hook Main material：Zinc alloy.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/T3Mzz2iApZyIJQF1tiiKpUaVe1Cbaim0wzVDrvgW.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //34 ready
        title: 'Look hook/Y2TLS01-06A',
        description: 'Suitable for Sliding woindows，Sliding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/IiaAQ7pzGxAFvx5NW4JUHBfLaj3NWGikHhpPevYO.png',
        details: 'Product category：Lock hook Main material：Zinc alloy.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/tJtzX4l7XvFzSDazhuR2yBHyTrkjZzMvYEBP9Sak.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //35 ready
        title: 'Aluminum transmission rod/Y2LCDG01',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/qzuOPAHMx0Zoh3CloBWItIvUkcWp2HyFBiwqe9ms.jpg',
        details: 'Product category：Aluminum transmission rod Main material：Aluminum profile.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/uLc7B4xA0T6tgUmXF8pLLQ8a9LJ67i3oeG6kXgG0.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //36 ready
        title: 'Aluminum transmission rod/Y2LCDG03',
        description: 'Suitable for casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/SMCBR2hwtB9P0hWJUdzasuAseV5fzgUIUc8fuSYk.png',
        details: 'Product category:Transmission Rod Main material:Aluminum profile.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/JcadbjADf1DmQftyHlGKjmIchedNH1Z7Qf36GoHH.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //37 ready
        title: 'Aluminum transmission rod/Y2LCDG04',
        description: 'Suitable for casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/GR8ekAdhE6XNUVbWtSJzaP4nxP7z9q7NZS0nrnRK.png',
        details: 'Product category:Transmission Rod Main material:Aluminum profile.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/pKvRn6tBj08eaIoy4NwmrflK4O379RYSMshp20Hk.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //38 ready
        title: 'Aluminum transmission rod/Y2LCDG10',
        description: 'Suitable for casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/yKQ4C5VMwINw8ZroVkyKjPbNjnS4gLEcjroMp79q.jpg',
        details: 'Product category:Transmission Rod Main material:Aluminum profile.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/o8fQkg1V6lLWI66hRK90TPig0LrHbLMghrQqtmf3.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //39 ready
        title: 'Screw/Y2M5XL',
        description: 'Delivery Supplement Series.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/Pa693esGuWr9AovLH1fPEUmPrWKBGRHLTGxnhTZ4.jpg',
        details: 'Product category:Screw.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/FyyIFdKvVjIOPi3iRmYvARHopKmkzFjpcn3tHXLJ.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //40 ready
        title: 'Square steel/Y2FG01-L',
        description: 'Suitable for Square steel handle.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/IaExRTNFM44uAZPQUQOndD81fCVXOnwjpzXBkVRN.jpg',
        details: 'Product category：Square steel/.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/rW1Q1pTPxkTB8CQU8bL1hz5MtcoLBOD9YEj92YW1.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //41 ready
        title: 'Crescent lock/Y2YYS001',
        description: 'Suitable for sliding windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/l7J2HyEQUgJ0ucbhtJh84GH0l09C3HnWQIX1hQVt.png',
        details: 'Product category:Crescent Main material:Alumimum alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/ZpXRjSXMthsIYFmoHP8UOgtCoCOHE4QcMdptKt80.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //42 ready
        title: 'Crescent lock/Y2YYS011A',
        description: 'Suitable for sliding windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/0o3dxO9E039egZyrVfof1mdRzQmqsV3QYG6d6jcj.png',
        details: 'Product category:Crescent Main material:Alumimum alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/DCEeEA6STkJpenwMx4l4mJlJGUvSa1p11VcoorJT.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //43 ready
        title: 'Crescent lock/Y2YYS013',
        description: 'Suitable for sliding windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/fxxPnUOCtseDjQWIZmqGi9DYb5iCQC0oDGDMg1Xl.png',
        details: 'Product category:Crescent Main material:Alumimum alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/1ZGxhQJGHfk8Trizy3Hm9bjzZdRnIZjyobt6Vcpx.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //44 ready
        title: 'Crescent lock/Y2YYS015',
        description: 'Suitable for sliding windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/1ODSTePJNDemswGRiUUZTpRC9PRzd6N32vD1E09H.png',
        details: 'Product category:Crescent Main material:Alumimum alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/k9bjVNcmiiUElBYLpfm8mhl2oDaxlukQTHlmNViH.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //45 ready
        title: 'Anti-drop device/Y2FZQ11',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/97gmrAtfKl9lGJuw8iq3k5zSbD1xRiumaRtR5UMt.jpg',
        details: 'Product category：Anti-drop device.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/UsSumYJk8nqz1EWExEuiFMSNG99ocYBsg7itFEZ3.png',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //46 ready
        title: 'Sliding lock hook/Y2TLSK08',
        description: 'Suitable for sliding windows，sliding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/jUqFFNUPZuy19af7Wae7xxe3DwETCYbRc7iGKysh.png',
        details: 'Product category:Sliding lock hook Main material:Stainless steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/fk84FTrD5YbjBUOsjIaMFxXlBZxXBqXDY294Y26Q.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //47 ready
        title: 'Side transmission rod/Y2BCDG04',
        description: 'Suitable for casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/dKd8GGfKJOfrRcT11dSRpVsndRnfbpZsJ1DwuYAS.png',
        details: 'Product category:Side transmission rod Main material:Zinc alloy.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/KYB98g7LMrASL4OLFi5IIhqBJ6a5jYwoiDzLBjcd.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //48 ready
        title: 'Cushion block/Y2XZDK01',
        description: 'Suitable for casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/ApLZcYOJw4paiqGJOBRw29vQW2WF52KSU7bnvQjd.png',
        details: 'Product category: Shim Main material: Nylon.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/ND9wio7yB1cEGoys45QWGqn7C3eaFhCeUVovGQ1s.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //49 ready
        title: 'Shim/Y2DK04',
        description: 'Suitable for casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/peezFyS9qTRoMRvJwyl91rg1q87IEGTKYpWWkrx9.png',
        details: 'Product category:Shim Main material:Nylon.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/4B0Qt95hoPT17u8Ue7i0TZNwuF0797KT87BpVops.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //50 ready
        title: 'Hinge/Y2CHY11',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/eF4ayVoULScnRsas0uLfHAH6Eqsisjos4X2zEjh2.png',
        details: 'Product category：Hinge Main material：Aluminum alloy.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/VZcRc7F0iYHMC5YBsUuelygH6b4mvb0lfr2LnwGC.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //51 ready
        title: 'Over turn support/Y2FZZC03',
        description: 'Suitable for turn-and-tilt windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/TnPa5vNjdFiLzHZBah5AdLB5Poa3IlEpoD3i5y05.png',
        details: 'Product category:Overturn Supporter Main material:Zinc alloy.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/fsrZKgmH0E2MUxOFeIq7AcSk6jeXbX8xsVIJSBZR.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //52 ready
        title: 'Latch/Y2MCX250',
        description: 'Suitable for casement doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/fZHuccEUdKTAMBDK3bcBq1xuClV9ISIk00NpTKqH.jpg',
        details: 'Product category:Door Socket Main material:Zinc alloy & Aluminum alloy.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/MUfltWYEaDQocRGff40ZuPVjhkp9zyTCcuHQ3zX4.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //53 ready
        title: 'Fire-resistant Locking plate/Y2SK15A',
        description: 'Suitable for casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/SEci004DW5ei92NBnjJMMqcQ7gwHQvKykKVyhxs4.png',
        details: 'Product category:Locking Plate Main material:Zinc alloy.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/zLvx35s6L6AIsWsNkIEjhayi33Lb7zic2CJgJJ2D.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //54 ready
        title: 'Aluminum transmission rod/Y2LCDG11-1200',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/CVXVVQgB3FhNro5vJTCmJVoWCPUDjPlEujgcRENw.jpg',
        details: 'Product category：Aluminum transmission rod Main material：Aluminum profile.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/CV4Ra5GT27cz5hfpjn50l0I2gKgEpqm3RBJKudf3.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //55 ready
        title: 'Window handle/Y2ZSW00640',
        description: 'Suitable for Open-out windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/QS0aETyF8UwcgTOq4Fp3xDPGM90eNG5GIAGph62a.png',
        details: 'Product category:Window handle Main material:Alumimum alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/m4RGubctQVI34tLgCKX51PTOVFVRkVnnmgjx0IIF.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //56 ready
        title: 'Transmission rod /Y2LCDG11',
        description: 'Suitable for casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/IVDk1xukrA3AX4SXTorhV8XorVi7Q8mUipgQK00l.jpg',
        details: 'Product category:Transmission rod Main material:Aluminum profile.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/235doy9EZuQfdA7rwFlnpTPfR38nWRCdJpkM7BgP.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //57 ready
        title: 'Window handle/Y2ZSW00240',
        description: 'Suitable for Open-out windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/gYQwoXrzlDxCxpWxTizV4rPD0gC17BAQS1sV2dUq.png',
        details: 'Product category:Window handle Main material:Alumimum alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/F6Am7zwLhN8BENA0WhwhSOpj0QPqhVycr6F5wcks.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //58 ready
        title: 'Window handle/Y2CZS315A',
        description: 'Suitable for Open-out windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/7edBCuq9aiq6Av8xvHBJRYDdpyJFlR4ywdNxYkGi.jpg',
        details: 'Product category:Window handle Main material:Alumimum alloy&Zinc alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/EcAHDLf78GgNQG71LO7nMIWqS7yeZGFb6Bta7WFG.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //59 ready
        title: 'Window handle/Y2CZS81',
        description: 'Suitable for Open-in windows,turn-and-tilt windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/2SqEFhZqBwyv0vN8tCX60rxCdGdmuPHvsxazlfK5.png',
        details: 'Product category:Window handle Main material:Alumimum alloy&Zinc alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/Jn5ttHcq989jMKp5mmSkNKYBYRspuiSrfOmyUuxa.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //60 ready
        title: 'Window handle/Y2CZS82',
        description: 'Suitable for Open-in windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/JO9H07PkafiibmWIfmsWr9iBwPDAikOUfW4UCohN.png',
        details: 'Product category:Window handle Main material:Alumimum alloy&Zinc alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/a2pwtnDHRZGnNfatsRQzB2JSR0HWY6h2lVNBb4wL.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //61 ready
        title: 'Window handle/Y2CZS363',
        description: 'Suitable for Open-out windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/qYTWAHukKLvM8AQS8WDBZuN9tiEc995wTHhybonQ.png',
        details: 'Product category:Window handle Main material:Alumimum alloy&Zinc alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/BBayr4M999pGYwAY8yP8D5L14LNB7YoeX7FtypOq.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //62 ready
        title: 'Window handle/Y2CZS316',
        description: 'Suitable for Open-out windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/pwIl5wxAp69NgXI1YbaJjDYMUjiooRU2uZhykCJq.png',
        details: 'Product category:Window handle Main material:Alumimum alloy&Zinc alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/qoqhySKdouZeshoWx1oQg8b6WON9U56SrkxVFBMM.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //63 ready
        title: 'Hinge/Y2MHY11',
        description: 'Suitable for casement doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/XDq5V6xyiDODTxP2iPp7PLWDLYblSwm6PCWmxTZK.png',
        details: 'Product category:Hinge Main material:Alumimum alloy Surface treatment: Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/76RE5voUmlVQFYvEuDDzic4696FeM2XQL4BbhBdX.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //64 ready
        title: 'Automatic lock/Y2TLS04',
        description: 'Suitable for Sliding windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/lK5S2MPaUTCkdD8Hw2VmW8NEPJjJ0x0wRKBIX9x6.png',
        details: 'Product category:Automatic lock Main material: Zinc alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/G19qFCbeGpUVQiWdOLxuXS7OkFuDzBVYxlIh7WuX.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //65 ready
        title: 'Double-sided sliding lock/Y2TLS04S',
        description: 'Suitable for Sliding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/unOFrlSSYFZV7tyUx6GOvvPtIF0ehUvLVCtY3RTv.png',
        details: 'Product category:Double-sided sliding lock Main material:Alumimum alloy & Zinc alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/qTmyseSnVsU9Fsd5rvOMShsJEVzoUTEHlZwcPnU4.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //66 ready
        title: 'Sliding lock with konb /Y2TLS04LS',
        description: 'Suitable for Sliding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/RxluXhXRy80tl44gcHROqHrROLXnEneMmSXjaJPt.png',
        details: 'Product category:Sliding lock with konb Main material: Zinc alloy Surface treatment:Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/ilSWyObMwuXPU3SOr42PJvXYWRKu2unrPkkt1XWE.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //67 ready
        title: 'Pull rod/Y2LG03',
        description: 'Suitable for turn-and-tilt windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/BFtu9ecRIXC4W4tA0Y5fKTQHnQcIeHFBcyYGrbO4.jpg',
        details: 'Product category:Pull rod Main material:Stainless steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/p1p7qPNKmrBFW9DVGeDxxZPZaqxwFxrD0iMZe95x.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //68 ready
        title: 'Transmission Rod /Y2LG04',
        description: 'Suitable for tutrn-and-tilt windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/MbRi0JUsbEMJENvZA4wISsKuOp4BQ1ENm7sAvS0c.jpg',
        details: 'Product category:Transmission Rod Main material:Satinless steel.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/768B7HWAaDYBRurl3Yii1zJzmLveLMYiTvf1svha.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //69 ready
        title: 'Corner device/Y2ZJQ04',
        description: 'Suitable for casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/YWnhC4FnVuetkz5R0JUTBqgwzwn6qkwcDURmQE5h.png',
        details: 'Product category:Coner Device Main material:Zinc alloy.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/JuiaZ1jwpHwvLq8AtGu6JiwiKIhJqur2wiceB5dk.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //70 ready
        title: 'Cornerdevice/Y2ZJQ05',
        description: 'Suitable for tutrn-and-tilt windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/PaWy6ipDXPIhPiHXFgYHUXFMHP3sRFzX6WAvlDvU.jpg',
        details: 'Product category:Corner Device Main material:Zinc alloy.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/R2xtMJdVxnx3lE9UyafVR6lrWe3VfZEEbHidapay.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //71 ready
        title: 'Hidden hinge /Y2YPXSHYR01',
        description: 'Suitable for tutrn-and-tilt windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/HjpvhojMLMwRhCmHtQdRrUfFTzzq0U7vj1Z5sSm8.jpg',
        details: 'Product category:Stealth Hinge Main material:Satinless steel 304.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/shHRisV9KMdYDKNAP6TABM2dp0XV9kWKl9K3aEM1.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //72 ready
        title: 'Concealed hinge/Y2YPXXHYR01',
        description: '1.It is suitable for the inner flat hanging window with standard C notch profile. 2.The maximum bearing capacity of hinge is 90kg,which is related to hinge installation, profile and glass thickness. 3.The hinge should be used together with Y2YPXXHYR\L01A. 4.Three-dimensional adjustable hinge.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/1uAXZUfp9Zcd1mTL2aTkTV5IOB7OjYNHdMsDVsQi.png',
        details: 'Product category:Concealed hinge Main material:Stainless steel 304.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/Yp6aShHSPBQWS687Lzpzla4q8Qj3u50WnLA5lhsg.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //73 ready
        title: 'Supporting plate/Y2ZCK06',
        description: 'Suitable for casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/sTAayopv2M5xgGOiyOZaJZZqSCAFQ4yige9wwdsn.jpg',
        details: 'Product category:Supporting plate Main material:Zinc alloy.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/r5xNgpVT9iy63Girix3FhKDXxAgmflHX0HodNIHW.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //74 ready
        title: 'Anti-drop device/Y2FZQ15',
        description: 'Suitable for casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/xSzlHF3YVybO2UqzLX6k1StOMQZjOJvbMOhtxmnM.jpg',
        details: 'Product category:Anti-drop device Main material:Satinless steel 304.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/UjSlJP8yf3w7lWCY5QO8aiqc1crwgouDCq0du4YL.png',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //75 ready
        title: 'Hidden hinge/Y2YPXXHYL01',
        description: 'Suitable for tutrn-and-tilt windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/mQRMEYmMGzHLZh9tgp9HgnmtsjhqcpNDJattYe1M.png',
        details: 'Product category:Stealth Hinge Main material:Satinless steel 304.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/RJvM1QvV8UOlhjifC70rqplI9MrCtQwPHNShRXda.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //76 ready
        title: 'Hidden hinge/Y2YPXSHYL01',
        description: 'Suitable for tutrn-and-tilt windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/crbZcnmnaFyvd0t22EapZG2S26A5fGXFg5j8ZNKW.jpg',
        details: 'Product category:Stealth Hinge Main material:Satinless steel 304.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/ad8ndYrD1m0wvyhRNev9PlwXnJBY6njRPpIGDH2t.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //77 ready
        title: 'Locking plate/B04A',
        description: 'Suitable for Casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/uiLKEjKKT7tjGyvvfpzDXTEQ1nlmTL5YU9knookx.jpg',
        details: 'Product category：Locking plate Main material：Stainless steel Surface treatment：Natural.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/wyVUuhJJN9oTNBhcSxDdQhlSr14aomJTboe6wdrN.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //78 ready
        title: 'Handle/K318',
        description: 'Suitable for Casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/aHapmonU7MxhqbvvXRtPPsMAaF7psC6VfmsGzjgH.jpg',
        details: 'Product category：Handle Main material：Aluminum alloy Surface treatment：Powder coated.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/kqlH8TrkHJNYTuwEMWevfgc7je0cUoiyBLqVdeWJ.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //79 ready
        title: 'Right end/H52-18R',
        description: 'Suitable for TTL300 Series Lifting & Sliding Door.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/8EixRtXJPytEJaohxiL4j7GdyVrBlKfSl734FKMD.jpg',
        details: 'Product category：Right end Main material：Plastic Surface treatment：Black.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/vn4HqO1al4XWXiCosHwGzO79GQYdUz4p9lnE5uzX.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //80 ready
        title: 'Right cover/H52-15R',
        description: 'Suitable for TTL300 Series Lifting & Sliding Door.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/RsOx2mNAchSNnUkqWnu9fNHH3iW1oOu1MeWAkOT3.jpg',
        details: 'Product category：Right cover Main material：Plastic Surface treatment：Black.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/gCaP2cQI6xyaxeZOvOip6EGKLc63ZB7ikDLKEuME.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //81 ready
        title: 'Hinge/LYHE11-L',
        description: 'Suitable for Open-in windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/V5pkqsFUk45unZwUtCDG9LHvHVfQxQq2WYtZ3t17.jpg',
        details: 'Product category：Hinge Main material：Zinc alloy+Stainless steel Surface treatment：Natural.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/qQ4xzxEzCDTuKru4X8YF0IXtTmVAVkQ4AIcG17QD.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //82 ready
        title: 'Hinge/LYHE12-L',
        description: 'Suitable for Open-in windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/lJ1xky1SymgvBfgompNS9kYfGlfWRVlEGRLovIrV.jpg',
        details: 'Product category：Hinge Main material：Aluminum profile+Stainless steel Surface treatment：Natural.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/7IgT483LrXkkcdvwo8Oqw9xjuyRWLMHlqQtNpPi0.png',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //83 ready
        title: 'Limitter/LPX14A-8(LPX14A-203)',
        description: 'Suitable for Casement windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/9FwLkNgBZqhubPilVesVuo6JS31UCKUdkoSU0b0O.jpg',
        details: 'Product category：Limitter Main material：Stainless steel Surface treatment：Natural.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/njs0r80Af30dH2pnqQhT6vNgGcNYpBl6psTA3jf0.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //84 ready
        title: 'Turn-and-Tilt Window Multi-point Lock on 4 sides 1-1、NPD200 Series',
        description: 'Suitable for Turn and Tilt windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/z4snuHmfJaXzHvepNRxcCRsoCWmThqYtYGKn0Yhf.jpg',
        details: 'Product category：Turn-and-Tilt window.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/tEeyxXhe5I08mHjWBXfvrmTngeY9OWz5mq1HGYBU.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //85 ready
        title: 'Open-in side hung window with multi-point lock on single side 2-1、NP100 Series',
        description: 'Suitable for Open-in windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/qV2He82gy8apvi2ZN1P0J8gC0pQhPQfwZeTFxj3T.png',
        details: 'Product category：Open-in window.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/h9PJZ4oVT1PseWs7qSN7ohAOgkAECYEZF8zX4V3l.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //86 ready
        title: 'Open-in side hung window with multi-point lock on single side 2-3、NP300 Series',
        description: 'Suitable for Open-in windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/9J1zKyyjQQgepv7xdKQSxcKWleib0AXLVl0F52wl.jpg',
        details: 'Product category：Open-in window.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/To31vhhq5dwAkv6Uvgtz4UjbxOm9mJ7dljWs0a8z.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //87 ready
        title: 'Open-in side hung window with multi-point lock on single side 2-4、NP400 Series',
        description: 'Suitable for Open-in windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/S7WlZnSH5dMoFLMTQWfUwBuJynQ1nHUoz7LDWIJ8.jpg',
        details: 'Product category：Open-in window.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/MB5Z3gfQaXzoZ47UoNiNG08QqQUPaRY7WQPBZoY0.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //88 ready
        title: 'Open-in bidirection side hung window with multi-point lock on single side 2-5、NP500 Series',
        description: 'Suitable for Open-in windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/8p8KtVLVRITY5It6uyTPfcvG2Phjr1s5SnLxN2Pz.jpg',
        details: 'Product category：Open-in window.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/ZSWRZyHzu46wrmzWsI9tKZdwOAGGjSvUou9CjUuw.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //89 ready
        title: 'Open-in bidirection side hung window with multi-point lock on single side 2-7、NP700 Series',
        description: 'Suitable for Open-in windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/1jyhw7r6o5NKaTLplvWbeCVTLlFc2XrpRM8c7rxW.jpg',
        details: 'Product category：Open-in window.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/UQTxjhfy0fpKij9VajlWPos8t0wG5wb0XP3bAwh9.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //90 ready
        title: 'Open-in micro-ventilation side hung window with multi-point lock on single side 2-8、NP800 Series',
        description: 'Suitable for Open-in micro-ventilation side hung window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/1Tl0L3HhoNK2hib0aUUqcEZ6ROEdTzbSHMlsbZ2i.jpg',
        details: 'Product category：Open-in micro-ventilation side hung window.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/loKXNUcBV1Mqdok8Zkq95liDrLMMX2YmjQsyVi6Z.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //91 ready 
        title: 'Unilateral open-out&side hung window with C-groove 3-3、WK300 Series',
        description: 'Suitable for Open-out windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/8KD3toX7ctaNKwg5LYwYLxPyYCOQui6A6wXMvzU1.jpg',
        details: 'Product category：Open-out window.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/NoLq2G1kz1IP3jWvjtGOfLaa4QsJJqIErYcmNOPo.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //92 ready
        title: 'Open-out&side hung window with no groove 3-4、WK400 Series',
        description: 'Suitable for Open-out windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/T7shVTQReuUlhmt0oXproKjAxeyIHIdT6vbW8phD.jpg',
        details: 'Product category：Open-out window.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/RBkie3vxpJokjt9E2KHR3QwjyE62tIZm4l4RUZ65.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //93 ready
        title: 'open-out&side hung window with no groove3-5、WK500 Series',
        description: 'Suitable for Open-out windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/WB2agYF8ZdbH5frOzGDLgnBdI8SKvJQwx3QQypI9.jpg',
        details: 'Product category：Open-out window.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/FmK7OR0nOlN3GBmstRNSINUi5hnTLZkBXGS8Hqxp.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //94 ready
        title: 'Top-hung window 4-1、MQ100 Series',
        description: 'Suitable for Top-Hung windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/JAZuIBcvelelRJlaTelh9ynyEr2nqijLMQTtwTPT.jpg',
        details: 'Product category：Top-hung window.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/092TkWNjdW4L4Id0CA4FhAsiUCyAx54dRW6tmOoR.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //95 ready
        title: 'Top-hung window 4-2、MQ200 Series',
        description: 'Suitable for Top-Hung windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/gyJD7lSTcm19gMOKTd30CkwrkH06vjVONanULdKl.jpg',
        details: 'Product category：Top-hung window.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/Zccc6Vo1snUyc0Q2EVZp69HCdJQdVFXtU7Mpaq2P.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //96 ready
        title: 'Top-hung window 4-3、MQ310 Series',
        description: 'Suitable for Top-Hung windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/LsuoCgHmAHPB3yIiVzJfXm46Jwx9xfQYoWv8Degr.jpg',
        details: 'Product category：Top-hung window.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/bgF7CZSWMAXx0l0mRUOn7RRcM2xTE08X5S5CzEfc.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //97 ready
        title: 'Sliding window series5-1、TL100 Series',
        description: 'Suitable for Sliding window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/JM7OOkiXVouFINE03wtWZV00Ace4hOwLX13U2wSt.jpg',
        details: 'Product category：Sliding window.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/sBdH2Eq2UJQXr7gPcMlhE0qDF5BoggPhjQ8VhuAy.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //98 ready
        title: 'Sliding door series5-3、TLM100 Series',
        description: 'Suitable for Sliding door.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/qr1AC62JUsLyzyVIr6G6UEeliyeVV5QrVMom6OLy.jpg',
        details: 'Product category：Sliding door.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/OeteyJd1UJD234idrKKqdfdSNfZe0tkWQ2fhQ4W3.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //99 ready
        title: 'Side hung door without groove 6-4、PM410 Series',
        description: 'Suitable for Casement doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/9ichYpO8DLMqVHVuwZZaYlQvALJS9BSlamZg2wyi.jpg',
        details: 'Product category：Side hung door.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/1Tm62Owq584jvUvcCi3pMsVzaitKaZlYyawVd0Hr.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //100 ready
        title: 'Heat-insulation bridge-cut-off Double door 6-6、PM600 Series',
        description: 'Suitable for Double doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/m9dZeBBVfs9VnVea82m7fnaWhECavVWP8Zri8OI5.jpg',
        details: 'Product category：Double door.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/AyIqnJovZNsaa0Amls66eG2pUXwoDztC9fJp6ikn.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //101 ready
        title: 'Sliding door Series5-4、TLM200 Series',
        description: 'Suitable for Slding doors.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/YTswJSnyEtIaueS5nyrpx05GBqjdgeb8yNgKRArQ.jpg',
        details: 'Product category：Sliding door.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/S0NtjxacZhGWZWToBkyRKgXXHTjViC170BhtVs7p.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //102 ready
        title: 'Concealed Turn-and-Tilt Window with Multi-Point Lock on Multi side 1-2、NPD300 Series',
        description: 'Suitable for Turn and Tilt windows.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/QC4O8Diz7JX95S7Q4mP4Pk7sRputlJWp4qQmY0Gh.jpg',
        details: 'Product category：Turn-and-Tilt window.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/eodSG7a2yS1fCuHJKdtzE3a9Lszlm6fB6o5iMOkE.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //103 ready
        title: 'Bottom pivot hinge/Y2PXXHY02',
        description: '1.The gap between frame and sash should be3.5～5mm; 2.Work with pivot hinge Y2PSXHY02B for Turn and Tilt window; 3.Maximum load bearing capacity of the pivot hinge is 90kg,which depends on the method of installation and profile style.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/D70TSMt63m4QYh5fqkTPkvp4rr9zrWX0yHVHP4aE.jpg',
        details: 'Product category:Bottom hinge Main material:Alumimum alloy Surface treatment:Powder coated Divide left and right.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/MylCGQNUsKWGrIzZbMjG3EHAgplGIuo8eyqxWrzo.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //104 ready
        title: 'WK100 series open-out&side hung window with C-groove',
        description: 'There are a variety of friction stay to choose from.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/gZqF6BNkpguImQbIc4FgfGdRalI0t2jBycCWFuoP.jpg',
        details: 'Different braces have different loads.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/rGPeulDReaP7OMVwv7MO1EFCbjILZBsj373ZS81F.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //105 ready
        title: 'PM500 series biparting with C-groove',
        description: 'There are a variety of hinge to choose from.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/P0b0w4qis4g8ozadO7YzSkUxQwZLXufYvybjgnrz.jpg',
        details: 'Maximum load: 130kg.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/Pu6l0Z7Z9motQeAvTOKATHkWfj8CDSMvqUSTXMJX.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //106 ready
        title: 'PM200 series side hung door with C-groove',
        description: 'There are a variety of hinge to choose from.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/YmX7UXjGtpqOOjMU1OwKKxl4E3ur2tkfy9giFZMP.jpg',
        details: 'Maximum load: 130kg.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/shxrSBxmIJ9rBh5Chtn9YLdf6F2wQZJ9Loz0BLlp.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //107 ready
        title: 'PM100 series side hung door with C-groove',
        description: 'There are a variety of hinge to choose from.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/Z11SBRwDEz8V3PWL0Ui45FFflNMNcGP7GdBzat9r.jpg',
        details: 'Maximum load: 130kg.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/Nehvquky4myMOUL6htWtVXKHpmThfuzUKLlRMonM.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //108 ready
        title: 'TLM300 Series Configuration 3 Sliding door',
        description: 'Application scenario:suitable for 70, 72 and 80 series insulating sliding profile..',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/W2aWZx34VUkfB7gWxydqwcZTYAp7Cboq5lKwUZFZ.jpg',
        details: '1. The handle controls the door to open, which is easy to operate 2. Does not occupy indoor space.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/xBvekIZi2NmzC0neksVvyXTSKUz00wbxnQovgj51.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //109
        title: 'PM330 Series Single Door With C-groove Profile',
        description: 'Application scenario:applicable to the standard european C-Groove profiles in the market.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/JhePVUFxMi2MGM8yko4tLnvEgVnTh7jugF9ulsmT.jpg',
        details: '1. A variety of hinges are available.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/BTkqowyoOXfcgShbbmhqfkkksMKEP1DtEpt5h9Rk.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //110
        title: 'TWD100 series High airtight push-pull side pressure door',
        description: 'Application scenario: suitable for high-rise buildings, Luxurycommunities, villas,apartments, etc..',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/VsWXY7af5nKT2foBARwJZa35eTfBiWaD9zqdIRv0.jpg',
        details: '1. Single-point control, anti-misoperation, safe and convenient. 2. Multi-point locking, buffer design, superior performance..',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/FYyT0XJgxypoA71QkUx8o9mgpoqf8PyXarzUTg5o.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },












//---------------------------------------------------categoria 3----------------------------------------------------------------

    {       //productos con id product-upvc-dw-hardware 3)
        id: 'product-upvc-dw-hardware',
        title: 'Anti-bacteria Handle/PZSNK00130',
        description: 'Suitable for Casement window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/ox5REEsuNJgrhi2MtbbinL5DjOuWz9cITysU6cMZ.jpg',
        details: '1. Material: aluminum alloy 2. Surface treatment: white.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/7QrrH6fRMrqT9Y9cWlBMUKWA4Rz25h4Mc5nv5EWb.jpg',
            'https://imart.kinlong.com:9091/storage/uploads/pictures/S5AE2lcQoXhH6OPU70jIS4HJm59mWQkbwG0adTet.jpg'
        ]
    },
    {
        id: 'product-upvc-dw-hardware',
        title: 'Anti-bacteria Handle/PZSNK00230',
        description: 'Applicable window type: inner casement window, sliding door and window.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/mu49RteAZpXNvraYPUrXjlLCQY0OiAv5XNPv1a6O.jpg',
        details: '1. Material: aluminum alloy 2. Surface treatment: white.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/IhB0MAe8mMdD7B3XTvhMbOkR7K3u5YDFgg2ZE1HB.jpg',
            'https://imart.kinlong.com:9091/storage/uploads/pictures/e6Di1AT1x5MrUzLJfiU2yH22zWmktiDUBoyHHUQK.jpg'
        ]
    },




    //-------------------------------------------------ITEMS SOLO PARA Integracion D&W segunda opcion--------------------------------------------------
    // subcategoria 1 product-accesorios-afiliados
    {
        id: 'product-accesorios-afiliados',
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: 'https://via.placeholder.com/250x150',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo',
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: 'https://via.placeholder.com/250x150',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            'https://via.placeholder.com/300x200'
        ]
    },

    //subcategoria 2


    //ITEMS SOLO PARA Productos Barandillas y Postes
    {
        id: 'product-ferr-aluminio-lujo',
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: 'https://via.placeholder.com/250x150',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-ferr-aluminio-lujo',
        title: 'Ferretería D&W de Aluminio de Lujo',
        description: 'Productos de alta calidad en aluminio.',
        image: 'https://via.placeholder.com/250x150',
        details: 'Detalles adicionales sobre el producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            'https://via.placeholder.com/300x200'
        ]
    },













    //ITEMS SOLO PARA Productos de muro cortina
    {
        id: 'product-aluminio-dw-hardware',
        title: 'Aluminio D&W Hardware',
        description: 'Aluminio para aplicaciones industriales.',
        image: 'https://via.placeholder.com/250x150',
        details: 'Descripción extendida de este producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware',
        title: 'Aluminio D&W Hardware',
        description: 'Aluminio para aplicaciones industriales.',
        image: 'https://via.placeholder.com/250x150',
        details: 'Descripción extendida de este producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            'https://via.placeholder.com/300x200'
        ]
    },

















    //ITEMS SOLO PARA Sistema de puerta de vidrio y ducha
    {
        id: 'product-upvc-dw-hardware',
        title: 'UPVC D&W Hardware',
        description: 'Productos de hardware para UPVC.',
        image: 'https://via.placeholder.com/250x150',
        details: 'Detalles sobre productos UPVC.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware',
        title: 'Aluminio D&W Hardware',
        description: 'Aluminio para aplicaciones industriales.',
        image: 'https://via.placeholder.com/250x150',
        details: 'Descripción extendida de este producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            'https://via.placeholder.com/300x200'
        ]
    },


















    //ITEMS SOLO PARA Materiales de decoración
    {
        id: 'product-aluminio-dw-hardware',
        title: 'Aluminio D&W Hardware',
        description: 'Aluminio para aplicaciones industriales.',
        image: 'https://via.placeholder.com/250x150',
        details: 'Descripción extendida de este producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware',
        title: 'Aluminio D&W Hardware',
        description: 'Aluminio para aplicaciones industriales.',
        image: 'https://via.placeholder.com/250x150',
        details: 'Descripción extendida de este producto.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            'https://via.placeholder.com/300x200'
        ]
    },
















        // -----------------------------------ITEMS SOLO PARA Herramientas y suministros----------------------------------

        // -----------------------------------apartado solo para Equipos de manipulación-------------------------------------

    {
        id: 'product-equipos-manipulacion',
        title: 'Manual hydraulic pallet forklift/JXC-P3001', // 1 ready
        description: 'Suitable for handling goods with large volume or pallets.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/7MNupZxCmVp7E85dGYXQsXr8YY8wxYKROqQ6K4jL.jpg',
        details: 'Hydraulic forklift Specifications: 3T*680MM*1200MM Color: Tangerine.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/xNvIwdn4GQg1uamWd8Cbui9oz8pHtpg8ljLyo6YN.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion',
        title: 'Manual hydraulic forklift/JCBY-AC3.0T', // 2 ready
        description: 'Suitable for handling goods with large volume or pallets..',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/ZslZ7Q6XOQY0I4EE9iQSILG7iCs1uoYPFae0gqq4.jpg',
        details: 'Hydraulic forklift Specifications: 550MM*1150MM*3.0T Color: Orange.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/rB0prIhuuReZu0fTLpHSkEp80lYfkQRdTfmPHdbd.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion',
        title: 'Pallet truck/JCBY-JC2.0T', // 3 ready
        description: 'JCBY-JC light hydraulic truck is economical. Because of its compact car body, flexible movement, light weight, energy saving and environmental protection, and superior performance, it is widely used in factories, workshops, warehouses and other occasions that need horizontal handling, mainly for carrying pallets or goods directly.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/Rfrm8b1ZaMqQGkFbwnvAzJr52oucDAEC2UBrCKP0.jpg',
        details: 'Classification: Handling Product model: JCBY-JC2.0T Color: Tangerine Product specifications: 550mm*1150mm*2.0t Commodity number: 158701030042 Production cycle: 7 days.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/OPuzLiuruF5O6L9tbRGQAJT5hp9Dk14MVNfZKlpt.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', 
        title: 'Pallet truck/JCBY-5.0T', // 4 ready
        description: 'Manual hydraulic truck 5.0T Made of high quality Baosteel, the car body can be made of channel steel or 6MM steel plate. Heavy-duty load-bearing design can easily carry overweight goods. Unique hydraulic pump ensures easy lifting of heavy goods. Super nylon bearing wheel and steering wheel are durable. Suitable for heavy metal processing, stone processing, ceramics and other occasions of ultra-heavy cargo handling.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/uw7ZrCKMKf90ro44vvCDlKBJ3tl1wIvm4Dityfns.jpg',
        details: 'Classification: Handling Product model: JCBY-5.0T Color: Tangerine Product specifications: 550mm*1150mm*2.0t Commodity number: 158701030073 Production cycle: 7 days.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/K4lsNvvCvmYik3zJtX4oPtcZpfRTxVp4pfeFiYpN.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },

    {
        id: 'product-equipos-manipulacion',
        title: 'Long type manual hydraulic forklift/JCBY-LC3.0T', // 5 ready
        description: 'Suitable for handling goods with large volume or pallets..',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/I2tKHdSho8tusTCmnxMV7ktCzgjXednZlHAh6hDT.jpg',
        details: 'Hydraulic forklift Specifications: 685MM*1400MM*3.0T Color: Orange.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/FvmaWLlpDpWQss8vdWFjB2us9Jt6KSydm42rhxNI.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', // 6 ready 
        title: 'Electric balanced heavy duty forklift/JZL-CPD15FJ5',
        description: 'Suitable for handling goods with large volume or pallets.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/5aMQkWvcRsJmLb5tzLtMkq5Sgr01M7DVBjlKUQHk.jpg',
        details: 'Electric forklift Specifications: 1.5T*3.0M/Two section and three-meter gantry/Pneumatic tire Color: Orange.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/nTbyf4u1V7hgq6OHY3ikisXp0LVCJyAEiFSmLYrv.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', // 7 ready
        title: 'Electrical counterweight forklift/JZL-CPD25F8',
        description: 'Security Emergency power-off switch, which can easily cut off all power supplies when the operation is out of control to avoid emergency; Low voltage automatic protection, extending battery life; Strong roof protection frame design, safer operation; Lifting overload protection, explosion-proof design of hydraulic system, even if the oil pipe bursts, the gantry will not drop quickly, improving safety; Regenerative braking and anti-skid on slopes ensure driving safety. Characteristic configuration Upper and lower pedals, equipped with safety handrails, fully consider the humanized requirements; Intelligent instrument, which can display system information such as electric quantity, service time and fault code, and adjust vehicle parameters and the maximum driving speed according to gear position, which greatly facilitates operation under different working conditions; High-efficiency maintenance-free AC motor, high torque, strong climbing ability, large traction and strong power, ensures that the car can still run smoothly on uneven roads and ensure the longer service life of the battery; Imported AMP waterproof and dustproof connector; Adjustable steering wheel, large driving space, optimized layout of brake accelerator pedal, innovative design of brand-new instrument position, bringing brand-new driving experience; The steering pressure sensor can be added: so that the pump motor can work when steering is needed, which is more energy-saving..',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/zjOI2jLXEInM1mkKC9VmfeHU5wOT7FfqBJFcKPGz.jpg',
        details: 'Classification: Handling Product model: JZL-CPD25F8 Color: Tangerine Commodity specifications: 2.5T*3.0M/ Two 3m portal frames/pneumatic tires Commodity number: 158701030466 Production cycle: 20 days.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/MgTGQ9WmSb90iy1di9xBZhxVIvDaB6SLNosujStl.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', // 8 ready
        title: 'Electrical counterweight forklift/JZL-CPD35FT8H',
        description: 'Characteristic configuration Upper and lower pedals, equipped with safety handrails, fully consider the humanized requirements; Intelligent instrument, which can display system information such as electric quantity, service time and fault code, and adjust vehicle parameters and the maximum driving speed according to gear position, which greatly facilitates operation under different working conditions; Full AC drive control system; High-efficiency maintenance-free AC motor, high torque, strong climbing ability, large traction and strong power, ensures that the car can still run smoothly on uneven roads and ensure the longer service life of the battery; Imported AMP waterproof and dustproof connector; Adjustable steering wheel, large driving space, optimized layout of brake accelerator pedal, innovative design of brand-new instrument position, bringing brand-new driving experience; The integrated automobile standard fuel tank is used, which is cleaner inside and reliable in performance; New energy-saving tires (new tire pattern, more energy-saving and noise-reducing); The safety shed adopts specially customized pipe design, which is safe and beautiful; Can increase the battery side pull configuration, easily replace the battery, and facilitate continuous operation..',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/qh9NFYuqIjcikqvUqNTpFKkULJ56uKP7b7eJHz8i.jpg',
        details: 'Classification: Handling Product model: JZL-CPD35FT8H Color: Tangerine Commodity specifications: 3.5T*3.0M/ Two 3m portal frames/pneumatic tires Commodity number: 158701030470 Production cycle: 20 days.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/QDNy2JWnvONi1qRb38LThh7KBYm4HgbnXOpYZOWY.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', // 9 ready
        title: 'Electric Pallet Stacker/JZL-EST121',
        description: '1. Express delivery is not supported 2. Free delivery over 15,000.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/0H5uiIpt6sfzBaet0vtAv4nLMeAIXTfj494oQSm7.jpg',
        details: '1. Features: more convenient, wide field of view 2. Color: orange-red.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/eOyKh4p4vaXa4IugkjInGwVnxBDIFNigbhbM3z78.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', // 10 ready
        title: 'Electric Pallet Stacker/JZL-ES16-RS',
        description: '1. Express delivery is not supported 2. Free delivery over 15,000.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/kMn5xg72fCnCzUBNon2cKPwdkxZAee0LYMUrxkOM.jpg',
        details: '1. Features: high performance, high reliability, easy to operate, safer 2. Color: orange-red.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/duaRMWQ1mDHAJyGvifMX21Fz9QVY08nYUs8gMn4e.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', // 11 ready
        title: 'Electric Pallet Stacker/JZL-ES20-20RAS',
        description: '1. Express delivery is not supported 2. Free delivery over 15,000.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/Ga9dEdYsi7XrjhKCQTZYdJIGAVgR1eaYajUffSdx.jpg',
        details: '1. Features: high performance, high reliability, easy to operate, safer 2. Color: orange-red.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/rLFm4mgGhLBtzdcO4PycaxCQHcAzgaR1RIOiX12y.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', // 12 ready
        title: 'All electric truck/JZL-EPT30-RAS',
        description: '1. Express delivery is not supported 2. Free delivery over 15,000.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/hItSB4JRW9ST2Hzq3oRwRTySwhTGiYMQNg77eTEg.jpg',
        details: '1. Features: high performance, high reliability, easy to operate, safer 2. Color: orange-red.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/H0gHAurodWbTgfk0ueQN3yOkUNGJRu6oTkkw1nIE.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', // 13 ready
        title: 'Electric lift vehicle/JZL-RSB151Z',
        description: '1. Express delivery is not supported 2. Free delivery over 15,000.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/UTwKPoqZC080vW1JeeFxHw0INeXq5ClUxLjmYhMb.jpg',
        details: '1. Features: high performance, high reliability, easy to operate, safer 2. Color: orange-red.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/YajZg4n4EZPnJwl73W5dSyV3TyUoQbmB470QnEp4.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', // 14 ready
        title: 'Telescopic booms/JGTBZ16S',
        description: 'Suitable for high-altitude operations..',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/1c9LXcGYWDdns6D9bNChHt3pL8KhIDDvokIipsfz.jpg',
        details: 'Telescopic booms Specifications: 1.8M*0.76M diesel 4*2 straight arm/Platform height is 16m Color: Orange.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/3W5q9uLzVrasSjiJesvDrmP4kPZELkp6PBrWboWw.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', // 15 ready
        title: 'Articulating booms-engine/JGTBZ14A',
        description: 'Suitable for high-altitude operations..',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/c3Pl7OcWIw1YGOcK4v4fR84cGoZ5MgbAP6XMyttS.jpg',
        details: 'Articulating booms-engine Specifications: 1.8M*0.76M*1.1M diesel 4*2 tri-fold arm/Platform height is 14m Color: Orange.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/2lf8QMHO5BfsLPf144WGS0LRKOruKCanDQZhSB8w.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', // 16 ready
        title: 'Self-propelled shear fork aerial working platform/JZL-GTJZ-6',
        description: 'It is suitable for high altitude operation from 6 meters to 14 meters.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/Gdm7sa690WgtXEBBmCW49opYQnWdyDY7aTDzAVOV.jpg',
        details: 'Category: Equipment Machinery Product name: self-walking shear fork aerial working platform Color: Orange red Product specification: 2475X1150X1836MM Series: aerial work platform Product model: JZL-GTJZ-6.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/WvwvWNDhrrqodTMxIxibFfDxwmRdoR7JZ6JlxaB9.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    { 
        id: 'product-equipos-manipulacion', //17 ready
        title: 'Double masts aluminium alloy aerial lift platform/JGTWY802',
        description: 'Suitable for high-altitude operations.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/si7dfNDBAhDblUNMR4kvBeKbVjbFQDtPf34ER5M4.jpg',
        details: 'Double masts aluminium alloy aerial lift platform Specifications: 1.23M*0.61M Color: Orange.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/fZv7S1QeDrHy9o9SCs9ZI5uiBqTqYELfITX3LgJW.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', // 18  ready
        title: 'Hydraulic internal combustion counterbalanced forklift/JZL-CPCD50T8',
        description: 'Handling of goods.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/8JX18imfDLbhcgP55IiNDJ4mtn1jXKkoYsrDgPyu.jpg',
        details: 'Classification: Handling and unloading Color: Orange-red Product No.: JZL-CPCD50T8 Trade Name: Hydraulic Internal Combustion Engine Counterbalanced Forklift Product specifications: 5.0T*3.0M / two three-meter gantry Item number: 158701030610 Production cycle: 20 days.',
        moreImages: [
            //'',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', // 19
        title: 'Hydraulic combustion forklift/JZL-CPCD45T8-X',
        description: 'It is suitable for cargo handling in railway, highway, trade, industry and mining and other logistics operations..',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/FtjH3Lt2mloLbVPmcNOaFTLdWPoVCiM5KMnjCdCZ.jpg',
        details: 'Classification: Handling Product name: hydraulic combustion forklift truck Color: Orange red Product specification: 4.5TX3.0M/ two sections of three meters door frame Product model: JZL-CPCD45T8-X.',
        moreImages: [
            'https://imart.kinlong.com:9091/storage/uploads/pictures/1YNNyxL7PhR1uSMeOcI9D5MKexYqoCUPyqSXdQMa.jpg',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', // 20
        title: 'Mechanical internal combustion engine counterbalanced forklift/JZL-CPC30',
        description: 'Handling of goods.',
        image: 'https://imart.kinlong.com:9091/storage/uploads/pictures/LVES3bkdBjkuPrBOx7pfsUVc7zAkxaxBq9tGsEkJ.jpg',
        details: 'Classification: Handling and unloading Product specifications: 3.0T*3.0M / two three-meter mast / pneumatic tires Color: Orange-red Product No.: JZL-CPC30 Specification: 3.0T*3.0M Style: Normal/pneumatic tires Item number: 158701030473 Production cycle: 20 days.',
        moreImages: [
            //'',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-equipos-manipulacion', // 20
        title: '',
        description: '',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
];











// Referencias a elementos del DOM
const productContainer = document.getElementById("product-container");
const productDetails = document.getElementById("product-details");
const backBtn = document.getElementById("back-btn");
const productImg = document.getElementById("product-img");
const productTitle = document.getElementById("product-title");
const productDescription = document.getElementById("product-description");
const moreInfoBtn = document.getElementById("more-info-btn");
const orderBtn = document.getElementById("order-btn");
const orderForm = document.getElementById("order-form");
const cancelBtn = document.getElementById("cancel-btn");
const moreImagesContainer = document.getElementById("more-images"); // Contenedor de imágenes adicionales
const searchInput = document.getElementById("search-input");

// Guardar la posición de desplazamiento actual
function saveScrollPosition() {
    sessionStorage.setItem("scrollPosition", window.scrollY);
}

// Restaurar la posición de desplazamiento
function restoreScrollPosition() {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
    }
}

// Función para truncar la descripción y agregar "Ver más..." si tiene más de 10 palabras
function truncateDescription(description) {
    const words = description.split(" "); // Separar la descripción en palabras
    if (words.length > 10) {
        const truncated = words.slice(0, 10).join(" ") + "..."; // Truncar después de 10 palabras
        return { truncated, full: description }; // Devolver la descripción truncada y la completa
    } else {
        return { truncated: description, full: description }; // Si tiene 10 o menos palabras, no truncar
    }
}

// Mostrar productos según el ID del producto
function loadProductsById(productId) {
    productContainer.innerHTML = ""; // Limpiar el contenedor

    const filteredProducts = products.filter(product => product.id === productId);

    if (filteredProducts.length === 0) {
        productContainer.innerHTML = `<p>No hay productos disponibles para esta categoría.</p>`;
        return;
    }

    filteredProducts.forEach(product => {
        const { truncated, full } = truncateDescription(product.description); // Obtener descripción truncada y completa

        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3>${product.title}</h3>
            <p class="product-description">${truncated}</p>
            ${truncated !== full ? '<a href="#" class="more-info">See more...</a>' : ''}
        `;
        card.setAttribute('data-product-id', product.id);
        card.onclick = () => showProductDetails(product);
        productContainer.appendChild(card);

        // Añadir el evento para mostrar la descripción completa
        if (truncated !== full) {
            const moreInfoLink = card.querySelector(".more-info");
            moreInfoLink.addEventListener("click", (e) => {
                e.preventDefault();
                const descriptionElement = card.querySelector(".product-description");
                descriptionElement.textContent = full; // Mostrar la descripción completa
                moreInfoLink.remove(); // Eliminar el enlace "Ver más..."
            });
        }
    });

    restoreScrollPosition(); // Restaurar la posición del scroll al cargar productos
}

// Mostrar detalles del producto
function showProductDetails(product) {
    saveScrollPosition(); // Guardar la posición del scroll antes de cambiar de vista

    productContainer.classList.add("hidden");
    productDetails.classList.remove("hidden");

    productImg.src = product.image;
    productTitle.textContent = product.title;

// Mostrar tanto description como details
productDescription.innerHTML = `
    <div style="text-align: justify;">
        <strong>Descripción:</strong> ${product.description}<br><br>
        <strong>Detalles:</strong> ${product.details}
    </div>
`;


    // Mostrar imágenes adicionales
    moreImagesContainer.innerHTML = ""; // Limpiar contenedor de imágenes adicionales
    product.moreImages.forEach(imageUrl => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = `Imagen adicional de ${product.title}`;
        imgElement.style.width = "750px"; // Ajustar tamaño de las imágenes
        imgElement.style.margin = "5px";  // Espaciado entre imágenes
        imgElement.style.borderRadius = "5px"; // Bordes redondeados (opcional)
        moreImagesContainer.appendChild(imgElement);
    });

    moreInfoBtn.onclick = () => {
        const username = localStorage.getItem("userName") || "usuario";
        const whatsappUrl = `https://wa.me/50488118862?text=Hola, soy ${username} y tengo interés en ${product.title}`;
        window.open(whatsappUrl, "_blank");
    };
}

// Volver a la vista de productos
backBtn.onclick = () => {
    productDetails.classList.add("hidden");
    productContainer.classList.remove("hidden");

    restoreScrollPosition(); // Restaurar la posición al volver a los productos
};

// Cargar productos al hacer clic en los submenús
document.querySelectorAll('.submenu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        const productId = e.target.getAttribute('id'); // Obtener el ID del producto
        loadProductsById(productId); // Mostrar productos según el ID
        localStorage.setItem("lastCategory", productId); // Guardar la categoría seleccionada
    });
});

// Formulario de pedido
orderBtn.onclick = () => orderForm.classList.remove("hidden");
cancelBtn.onclick = () => orderForm.classList.add("hidden");

// Cargar siempre la categoría predeterminada primero
loadProductsById('product-equipos-manipulacion');



// Función de búsqueda de productos
function searchProducts() {
    const searchQuery = searchInput.value.toLowerCase(); // Obtener el término de búsqueda en minúsculas
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchQuery)); // Filtrar productos por título

    productContainer.innerHTML = ""; // Limpiar el contenedor antes de mostrar los resultados

    if (filteredProducts.length === 0) {
        productContainer.innerHTML = `<p>No se encontraron productos que coincidan con "${searchQuery}".</p>`;
    } else {
        filteredProducts.forEach(product => {
            const { truncated, full } = truncateDescription(product.description); // Obtener descripción truncada y completa
            const card = document.createElement("div");
            card.classList.add("product-card");
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <h3>${product.title}</h3>
                <p class="product-description">${truncated}</p>
                ${truncated !== full ? '<a href="#" class="more-info"></a>' : ''}
            `;
            card.setAttribute('data-product-id', product.id);
            card.onclick = () => showProductDetails(product);
            productContainer.appendChild(card);

            // Añadir el evento para mostrar la descripción completa
            if (truncated !== full) {
                const moreInfoLink = card.querySelector(".more-info");
                moreInfoLink.addEventListener("click", (e) => {
                    e.preventDefault();
                    const descriptionElement = card.querySelector(".product-description");
                    descriptionElement.textContent = full; // Mostrar la descripción completa
                    moreInfoLink.remove(); // Eliminar el enlace "Ver más..."
                });
            }
        });
    }
}

// Evento para la búsqueda cuando se escribe en el campo
searchInput.addEventListener('input', searchProducts);


document.querySelectorAll('.category-item > a').forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace

        // Obtener el elemento padre (category-item) del enlace
        const categoryItem = this.parentElement;

        // Alternar la clase 'active' para mostrar u ocultar el submenú
        const isActive = categoryItem.classList.contains('active');

        // Cerrar todos los demás submenús
        document.querySelectorAll('.category-item').forEach(function (item) {
            item.classList.remove('active');
        });

        // Si no estaba activo, activarlo
        if (!isActive) {
            categoryItem.classList.add('active');
        }
    });
});

document.querySelectorAll('.category-item').forEach(function (item) {
    item.classList.remove('active');
});
