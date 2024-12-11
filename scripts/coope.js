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


//-------------------------------categoria 2----------------------------------------------------------------


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
        id: 'product-aluminio-dw-hardware', //26
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //27
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //28
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //29
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //30
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //31
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //32
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //33
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //34
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //35
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //36
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //37
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //38
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //38
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //39
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
            //'https://via.placeholder.com/300x200'
        ]
    },
    {
        id: 'product-aluminio-dw-hardware', //40
        title: '',
        description: '.',
        image: '',
        details: '.',
        moreImages: [
            '',
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




    //ITEMS SOLO PARA Integracion D&W
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


        // ITEMS SOLO PARA Herramientas y suministros
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
        id: 'product-upvc-dw-hardware',
        title: 'UPVC D&W Hardware',
        description: 'Materiales UPVC de alta calidad.',
        image: 'https://via.placeholder.com/250x150',
        details: 'Detalles sobre los materiales UPVC.',
        moreImages: [
            'https://via.placeholder.com/300x200',
            'https://via.placeholder.com/300x200'
        ]
    }
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

// Mostrar productos según el ID del producto
function loadProductsById(productId) {
    productContainer.innerHTML = ""; // Limpiar el contenedor

    const filteredProducts = products.filter(product => product.id === productId);

    if (filteredProducts.length === 0) {
        productContainer.innerHTML = `<p>No hay productos disponibles para esta categoría.</p>`;
        return;
    }

    filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
        `;
        card.setAttribute('data-product-id', product.id);
        card.onclick = () => showProductDetails(product);
        productContainer.appendChild(card);
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
        <strong>Descripción:</strong> ${product.description}<br><br>
        <strong>Detalles:</strong> ${product.details}
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

// Inicializar con los productos de la última categoría visitada
const lastCategory = localStorage.getItem("lastCategory");
if (lastCategory) {
    loadProductsById(lastCategory); // Cargar la categoría guardada
} else {
    loadProductsById('product-ferr-aluminio-lujo'); // Cambia este ID según tu configuración inicial
}

// Función de búsqueda de productos
function searchProducts() {
    const searchQuery = searchInput.value.toLowerCase(); // Obtener el término de búsqueda en minúsculas
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(searchQuery)); // Filtrar productos por título

    productContainer.innerHTML = ""; // Limpiar el contenedor antes de mostrar los resultados

    if (filteredProducts.length === 0) {
        productContainer.innerHTML = `<p>No se encontraron productos que coincidan con "${searchQuery}".</p>`;
    } else {
        filteredProducts.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("product-card");
            card.innerHTML = `
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
            `;
            card.setAttribute('data-product-id', product.id);
            card.onclick = () => showProductDetails(product);
            productContainer.appendChild(card);
        });
    }
}

// Evento para la búsqueda cuando se escribe en el campo
searchInput.addEventListener('input', searchProducts);
