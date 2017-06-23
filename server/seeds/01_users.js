exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id:1,
        first_name:"Lisa",
        last_name:"Ma",
        email:"limawebdev@gmail.com",
        referral_id: 1
      },{
        id:2,
        first_name:"Tim",
        last_name:"Cutter",
        email:"tjcutt@gmail.com",
        referral_id: 3
      },{
        id:3,
        first_name:"Joshua",
        last_name:"Lerner",
        email:"joshualerner@me.com",
        referral_id: 2
      },{
        id:4,
        first_name:"Heidi",
        last_name:"Grabenstatter",
        email:"heidi.grabenstatter@colorado.edu",
      },{
        id:5,
        first_name:"Craig",
        last_name:"Quincy",
        email:"cquincy@gmail.com",
        referral_id: 1
      },{
        id:6,
        first_name:"Pete",
        last_name:"Silva",
        email:"psilva@gmail.com",
        referral_id: 2
      },{
        id:7,
        first_name:"Alicia",
        last_name:"Key",
        email:"akey@gmail.com",
        referral_id: 3
      },{
        id:8,
        first_name:"Erica",
        last_name:"Epperson",
        email:"eepperson@gmail.com",
        referral_id: 1
      }]);
    });
};
