import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        const Surfer = Ember.Object.extend({
            sup(comment) {
                alert(`Sup? I am ${this.get('name')}
                My Comment: ${comment}`);
            }
        });

        const WahineSurfer = Surfer.extend({
            sup(comment) {
                this._super(`${comment}, :)`);
            }
        });



        let kai = Surfer.create({
            name: 'Uncle Kai'
        });
        kai.sup('Shootz Brah!');

        let sistah = WahineSurfer.create({
            name: 'Auntie Makai'
        })
        sistah.sup('I am a Wahine');
        return kai;
    }
});
