<template>
    <button @click="fetchtest"></button>

<div name="post1">
    <table cellpadding="0" cellspacing="0" class="center">
        <tr>
          <td style="width: 150px">testuser1</td>
        </tr>

        <tr>
          <td style="width: 150px">Testpost</td>
        </tr>

        <tr>
          <td style="width: 150px"><iframe src="https://open.spotify.com/embed/track/2E7W1X4maFFcjHrVrFA7Vs?utm_source=generator" width="250" height="80" allowtransparency="true" allow="encrypted-media"></iframe> </td>
        </tr>
    </table>
</div> <br/>



<div name="post2">
    <table cellpadding="0" cellspacing="0" class="center">
        <tr>
          <td style="width: 150px">testuser2</td>
        </tr>

        <tr>
          <td style="width: 150px">Testpost2</td>
        </tr>

        <tr>
          <td style="width: 150px"><iframe src="https://open.spotify.com/embed/track/37y3r1updgfP7Jb2JBuYe6?utm_source=generator" width="250" height="80" allowtransparency="true" allow="encrypted-media"></iframe> </td>
        </tr>
    </table>

  <div>
    <b-row>
      <data-table></data-table>
    </b-row>
  </div>

</div>

</template>

<script>
export default{

  methods:{

    fetchtest(){
      fetch("http://localhost:8081/api/posts")
        .then(res => res.json())
        .then((result)=> 
        {console.log(result)} )
    }
  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>