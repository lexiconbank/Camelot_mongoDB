<template>
<div class="documentation">

<!-- markdown -->
<q-markdown >
Login Form
===

</q-markdown>
<!-- /markdown -->

<div >
    <div>
        <u-q-nobilities></u-q-nobilities>
    </div>
</div>

<!-- markdown -->
<q-markdown >

The __code below__ is for `Nobilities` 

``` html
{{ code }}
```

</q-markdown>
<!-- /markdown -->


</div>
</template>

<script>
import UQNobilities from '../../../components/Documentation/Member/UQNobilities.vue'

export default
{
    data:() =>
    ({
        code: 
        `<div class="component q-ma-lg">
            <div class="form-container">
                <u-q-nobilities></u-q-nobilities>
            </div>
        </div>
        `
    }),
    components: { UQNobilities },
    mounted()
    {
    },
    methods: { },
}
</script>