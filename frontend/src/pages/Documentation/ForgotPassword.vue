<template>
<div class="documentation">

<!-- markdown -->
<q-markdown >
Forgot Password
===

</q-markdown>
<!-- /markdown -->

<div class="component q-ma-lg">
    <div class="form-container">
        <u-q-forgotpassword></u-q-forgotpassword>
    </div>
</div>

<!-- markdown -->
<q-markdown >

The __code below__ is for `Forgot Password`

``` html
{{ code }}
```

</q-markdown>
<!-- /markdown -->


</div>
</template>

<script>
import UQForgotpassword from '../../components/UQForgotPassword'

export default
{
    data:() =>
    ({
        code: `<div class="component q-ma-lg">
    <div class="form-container">
        <u-q-forgotpassword></u-q-forgotpassword>
    </div>
</div>`
    }),
    components: { UQForgotpassword },
    mounted()
    {
    },
    methods: { },
}
</script>


