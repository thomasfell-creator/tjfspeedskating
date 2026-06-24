const supabaseUrl ='https://xpbnvqfmpfwjrqognlrc.supabase.co';

const supabaseKey ='sb_publishable_GhAbqKMMNfVT1oKlqpvbOg_-2CtJv-q';

window.supabaseClient =

window.supabase.createClient(

    supabaseUrl,

    supabaseKey

);

console.log(

    "Supabase client created:",

    window.supabaseClient

);