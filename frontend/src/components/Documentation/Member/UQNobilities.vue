<template>
  <div class="q-pa-md">
    <q-card class="justify-end">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Nobilities</q-item-label>
          <q-item-label caption>
            Purchase for yur friends
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
           <q-btn outline style="color: goldenrod;" label="Goldenrod" @click="is_open_nobities_dialog = true"/>
        </q-item-section>          
      </q-item>
    </q-card>

    <q-card class="justify-end">
        <div class="q-pa-md">
            <q-table
            title="Treats"
            :data="data"
            :columns="columns"
            row-key="name"
            hide-header
            hide-bottom
            />
        </div>
    </q-card>
    <q-dialog v-model="is_open_nobities_dialog">
      <q-card style="width: 600px; max-width: 60vw;">
        <q-card-section>
          <div class="text-h6">
            Add Nobilities
            <q-btn round flat dense icon="close" class="float-right" color="grey-8" v-close-popup></q-btn>
          </div>
        </q-card-section>
        <q-separator inset></q-separator>
        <q-card-section class="q-pt-none">
          <q-form class="q-gutter-md">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Title</q-item-label>
                  <q-input dense outlined v-model="nobilities.title" label="Title"/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Price</q-item-label>
                  <q-input dense outlined  type="number" v-model="nobilities.price" label="Price"/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Rank Order</q-item-label>
                  <q-input dense outlined type="number" v-model="nobilities.rank_order" label="Rank Order"/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Direct</q-item-label>
                  <q-input dense outlined type="number" v-model="nobilities.direct" label="Direct"/>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Rank</q-item-label>
                   <q-input dense outlined v-model="nobilities.rank" label="Rank" type="Number"/>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Bonus</q-item-label>
                   <q-input dense outlined type="number" v-model="nobilities.bonus" label="Bonus"/>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Max Income Per Day</q-item-label>
                   <q-input dense outlined v-model="nobilities.max_income_per_day" label="Max Income Per Day"/>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Perks</q-item-label>
                   <q-input dense outlined v-model="nobilities.perks" label="Perks" type="Perks"/>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Details</q-item-label>
                   <q-input dense outlined v-model="nobilities.details" label="Details"/>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section>
                  <q-item-label class="q-pb-xs">Badge Color</q-item-label>
                   <q-input dense outlined v-model="nobilities.badge_color" label="Badge Color"/>
                </q-item-section>
              </q-item>

            </q-list>
          </q-form>
        </q-card-section>

        <q-card-actions align="right" class="text-teal">
          <q-btn label="Save"  color="primary" @click="addUserAdmin()"/>
          <q-btn label="Clear"  color="primary" @click="reset()"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

  </div>    
</template>

<script>
import { postNobilities } from '../../../references/url'
export default {
  data () {
    return {
        is_open_nobities_dialog : false,
        nobilities: {},
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: []
    }
  },

    methods :{
        async postNobilities(){

            let post_result = await this.$_post(postNobilities, this.nobilities);
        }
    }

}
</script>
<style >

</style>