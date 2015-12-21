
exports.seed = function(knex, Promise) {
  return knex('student').del().then(function() {
    return Promise.all([

      // Inserts seed entries
      knex('student').insert({
        first_name: 'Kyle',
        last_name: 'Coberly',
        date_of_birth: '01/01/1901',
        email: "kyle.coberly@galvanize.com"
      }),
      knex('student').insert({
        first_name: 'Danny',
        last_name: 'Fritz',
        date_of_birth: '01/01/2901',
        email: "danny.fritz@galvanize.com"
      }),
      knex('student').insert({
        first_name: 'CJ',
        last_name: 'Reynolds',
        date_of_birth: '01/28/1992',
        email: "cj.reynolds@galvanize.com"
      }),
      knex('student').insert({
        first_name: 'J',
        last_name: 'Drill',
        date_of_birth: '04/01/1968',
        email: "j.drill@galvanize.com"
      }),
      knex('student').insert({
        first_name: 'Ryan',
        last_name: 'Douglas',
        date_of_birth: '04/01/1983',
        email: "ryan.douglas@galvanize.com"
      }),
      knex('student').insert({
        first_name: 'Jenn',
        last_name: 'Bennett',
        date_of_birth: '12/13/1975',
        email: "Jenn.Bennett@galvanize.com"
      })
    ])
  })
};
