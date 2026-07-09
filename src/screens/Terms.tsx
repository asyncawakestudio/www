import { Box, Link, Typography } from "@mui/material";

export default function Terms() {
  return (
    <Box sx={{ textAlign: "left" }}>
      <Typography data-testid="terms-title" variant="h4">
        Terms of Use
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
        Last updated 2026-07-09
      </Typography>
      <br />

      <Typography variant="h6">Content</Typography>
      <Typography variant="body1">
        Blog posts and other written content on this site are the property of
        Async Awake Studio and their respective authors. You may share links to
        and quote from this content with attribution.
      </Typography>
      <br />

      <Typography variant="h6">Tools provided as-is</Typography>
      <Typography variant="body1">
        Free tools on this site, such as the{" "}
        <Link href="#/service/zk">Zettelkasten</Link>, are provided as-is,
        without warranty of any kind, and may change or be discontinued at any
        time. Use them at your own discretion, and do not use them to store or
        transmit unlawful content.
      </Typography>
      <br />

      <Typography variant="h6">Limitation of liability</Typography>
      <Typography variant="body1">
        Async Awake Studio is not liable for any loss or damage arising from use
        of this site or the tools it provides.
      </Typography>
      <br />

      <Typography variant="h6">Changes</Typography>
      <Typography variant="body1">
        These terms may be updated from time to time; continued use of the site
        after a change constitutes acceptance of the updated terms. See also our{" "}
        <Link href="#/privacy">Privacy Policy</Link>.
      </Typography>
    </Box>
  );
}
