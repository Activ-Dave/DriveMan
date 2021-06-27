<template>
<div>
    <p style="font-size: 20px; text-align: center; font-weight: bold;" >
        {{ $route.params.tytul }}</p><hr>
    
    <p>{{ $route.params.streszczenie }}</p><hr>
    <p>{{ $route.params.tresc }}</p><hr>
    <p>{{ $route.params.tag}}</p>
    
 <br>
<br>
</div>

</template>

<script>
export default {
    props: ['artykuly.tytul', 'artykuly.streszczenie'],
    data() {
        return {
        artykulID: this.$route.params.id 
    }
    }
}
</script>
