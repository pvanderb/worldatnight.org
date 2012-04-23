# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_worldatnight.org_session',
  :secret      => '883489d7ac868d3f7802844cf1b43ac8ea4436efc6c7afdd40694d7c002c77d25355d06d2446e27623ae4794731c20945c1a628182dedb59445802b6dda96e38'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
