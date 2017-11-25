const restfull = 'https://jsonplaceholder.typicode.com/users';
const sound = 'http://soundbible.com/mp3/Blop-Mark_DiAngelo-79054334.mp3';

const app = new Vue({
    el: 'main',
    mounted () {
      axios.get(restfull)
      .then( info => this.users = info.data );
    },
    data: {
        users: null
    },
    methods: {
      NotificationPop() {
        let pop_sound = new Audio();
            pop_sound.src = sound;
            pop_sound.load();
            pop_sound.play(); 
      },

      DeleteUser() {
        if ( this.users.length ) {
          this.NotificationPop();
          this.users.pop();    
        }
        
      },
      DeleteUserClick(index) {
        this.NotificationPop(); 
        this.users.splice(index, 1);
     }
   }
})