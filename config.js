// Įklijuokite savo Supabase duomenis tarp kabučių (Project Settings -> API)
const SUPABASE_URL='https://nxenlyhvtmuvdantkeld.supabase.co';
const SUPABASE_ANON_KEY='sb_publishable_KCvyAOAxl3o2nT53GjggFw_AzpDzUbJ';
 const sb = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
  webpush.setVapidDetails(
    Deno.env.get('VAPID_SUBJECT')!,
    Deno.env.get('VAPID_PUBLIC_KEY')!,
    Deno.env.get('VAPID_PRIVATE_KEY')!,
  );
