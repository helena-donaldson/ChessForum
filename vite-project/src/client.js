import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yijuejvlnqtikzciarpi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpanVlanZsbnF0aWt6Y2lhcnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODg1NjYsImV4cCI6MjA2OTY2NDU2Nn0.XG0R2KqgODtKvuo1jNE4vqDMLZN9p2D_El_Cvmimbks'
export const supabase = createClient(supabaseUrl, supabaseKey)