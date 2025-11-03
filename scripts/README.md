# BankFlow CRM Sync Agent

Automatically syncs new leads from Supabase to Notion CRM database.

## Setup

### 1. Install Dependencies

```bash
cd scripts
pnpm install
```

### 2. Configure Environment Variables

Make sure these are set in your parent project:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Notion Database

The Notion CRM database has been created with the following properties:

- **Name** (Title) - Lead's full name
- **Email** (Email) - Email address
- **Company** (Text) - Bank or company name
- **Status** (Select) - New, Contacted, Qualified, Proposal Sent, Closed Won, Closed Lost
- **Source** (Select) - Website, Intake Page, Webinar, LinkedIn, Referral
- **Assigned To** (Select) - RJ, Rose, Unassigned
- **Created** (Date) - When the lead was created
- **Next Action** (Text) - Next step to take
- **Notes** (Text) - Additional notes
- **Supabase ID** (Text) - Link back to Supabase record

**Database URL**: https://www.notion.so/084e6012d73f478e96de2b9b7b499395

## Usage

### Manual Sync

Run the sync agent manually:

```bash
cd scripts
pnpm run sync
```

### Automated Sync (Cron)

Set up a cron job to run every 5 minutes:

```bash
# Edit crontab
crontab -e

# Add this line (adjust path as needed)
*/5 * * * * cd /home/ubuntu/bankflow-landing/scripts && pnpm run sync >> /var/log/bankflow-sync.log 2>&1
```

### Automated Sync (Systemd Timer)

For more reliable scheduling, use systemd:

1. Create service file: `/etc/systemd/system/bankflow-sync.service`

```ini
[Unit]
Description=BankFlow CRM Sync
After=network.target

[Service]
Type=oneshot
WorkingDirectory=/home/ubuntu/bankflow-landing/scripts
ExecStart=/usr/bin/pnpm run sync
Environment="VITE_SUPABASE_URL=your-url"
Environment="VITE_SUPABASE_ANON_KEY=your-key"
```

2. Create timer file: `/etc/systemd/system/bankflow-sync.timer`

```ini
[Unit]
Description=Run BankFlow CRM Sync every 5 minutes

[Timer]
OnBootSec=1min
OnUnitActiveSec=5min

[Install]
WantedBy=timers.target
```

3. Enable and start:

```bash
sudo systemctl enable bankflow-sync.timer
sudo systemctl start bankflow-sync.timer
```

## How It Works

1. **Fetch New Leads**: Queries Supabase for leads where `enriched_data->notion_synced` is null
2. **Create in Notion**: Uses Notion MCP to create a new page in the CRM database
3. **Mark as Synced**: Updates Supabase record with `enriched_data = {notion_synced: true, notion_synced_at: timestamp}`
4. **Rate Limiting**: Waits 1 second between API calls to avoid rate limits

## Monitoring

Check sync logs:

```bash
# If using cron
tail -f /var/log/bankflow-sync.log

# If using systemd
journalctl -u bankflow-sync.service -f
```

## Troubleshooting

### "No new leads to sync"
This is normal - means all leads have already been synced.

### "Error fetching leads from Supabase"
Check your Supabase credentials and network connection.

### "Error creating Notion page"
Ensure Notion MCP is properly authenticated and the database still exists.

## Manual Testing

Test with a sample lead:

```bash
# Insert test lead in Supabase
curl -X POST 'https://your-project.supabase.co/rest/v1/clients' \
  -H "apikey: your-anon-key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Lead",
    "email": "test@example.com",
    "company": "Test Bank",
    "note": "This is a test lead"
  }'

# Run sync
pnpm run sync

# Check Notion database - should see new lead appear
```

## Future Enhancements

- [ ] Bi-directional sync (Notion → Supabase)
- [ ] Sync status updates from Notion back to Supabase
- [ ] Webhook-based real-time sync (instead of polling)
- [ ] Slack notifications for new leads
- [ ] Email enrichment (Clearbit, Hunter.io)
- [ ] Duplicate detection
