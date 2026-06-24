const supabaseUrl ='https://xpbnvqfmpfwjrqognlrc.supabase.co';

const supabaseKey ='YeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwYm52cWZtcGZ3anJxb2dubHJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNDg1MTEsImV4cCI6MjA5NzcyNDUxMX0.EPQIOgIV09QYFzU39EyjLb19bSr79Ao8mq97cyZyUcg';

window.supabaseClient =

window.supabase.createClient(

    supabaseUrl,

    supabaseKey

);

console.log(

    "Supabase client created:",

    window.supabaseClient

);