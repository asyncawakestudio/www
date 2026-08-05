import {
  Backdrop,
  Box,
  IconButton,
  Link,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  ModeEdit as EditModeIcon,
  Preview as PreviewModeIcon,
  SaveAlt as SaveIcon,
  QrCodeScanner,
} from "@mui/icons-material";
import React from "react";
import Markdown from "react-markdown";
import { useNavigate, useParams } from "react-router";
import { QRCodeSVG as QR } from "qrcode.react";

import style from "./Zettel.module.css";

function encode(data: string) {
  return window.btoa(data);
}

function decode(data: string) {
  return window.atob(data);
}

function compress(data: string) {
  return data;
}

function decompress(data: string) {
  return data;
}

type AppSchema = {
  content: string;
};

function getContentFromHash(hash: string | undefined): string {
  if (!hash) return "";
  const decoded = decode(hash);
  const decompressed = decompress(decoded);
  const newState: AppSchema = JSON.parse(decompressed);
  return newState.content;
}

export default function Zettel() {
  const { hash } = useParams();
  const navigate = useNavigate();

  const [content, setContent] = React.useState<string>(() =>
    getContentFromHash(hash),
  );
  const [isQRVisible, setIsQRVisible] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<"Edit" | "Preview">("Preview");

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setContent(event.target.value);
  };

  const handleSaveAction = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.ctrlKey && event.key === "s") {
      event.preventDefault();
      const encoded = save({ content });
      navigate(`/service/zk/${encoded}`);
    }
  };

  const handleModeChange = () => {
    setMode(mode === "Edit" ? "Preview" : "Edit");
  };

  const handleQRVisibleChange = () => {
    setIsQRVisible(!isQRVisible);
  };

  function save(data: AppSchema): string {
    const stateString = JSON.stringify(data);
    const compressed = compress(stateString);
    const encoded = encode(compressed);
    return encoded;
  }

  return (
    <Box className={style.Box} sx={{ maxWidth: 960, mx: "auto", px: 3, py: 4 }}>
      <Box className={style.Header}>
        <Tooltip
          sx={{ position: "absolute", left: 10 }}
          title="Just another zettelkasten — back to Async Awake Studio"
        >
          <Link className={style.Title} href="#/" underline="none">
            [zk]
          </Link>
        </Tooltip>
        <Tooltip title="Generate QR Code">
          <IconButton
            className={style.Button}
            data-testid="qr"
            onClick={handleQRVisibleChange}
          >
            <QrCodeScanner fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title={mode === "Edit" ? "Preview" : "Edit"}>
          <IconButton
            className={style.Button}
            data-testid="mode"
            onClick={handleModeChange}
          >
            {mode === "Edit" ? (
              <PreviewModeIcon fontSize="large" />
            ) : (
              <EditModeIcon fontSize="large" />
            )}
          </IconButton>
        </Tooltip>
        <Tooltip title="Save">
          <IconButton
            className={style.Button}
            data-testid="save"
            onClick={() => {
              const encoded = save({ content });
              navigate(`/service/zk/${encoded}`);
            }}
          >
            <SaveIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>
      {mode === "Edit" ? (
        <TextField
          multiline
          data-testid="content"
          onChange={handleContentChange}
          onKeyDown={handleSaveAction}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "0px",
                padding: "0px",
              },
            },
          }}
          placeholder="Start your knowledge base from your browser.. Press the Edit icon (or middle icon on top right) type something, press Ctrl+S (right icon on top right if on mobile), copy URL and share to someone."
          value={content}
        />
      ) : (
        <Markdown>
          {content === ""
            ? "Start your knowledge base from your browser.. Press the Edit icon (or middle icon on top right) type something, press Ctrl+S (right icon on top right if on mobile), copy URL and share to someone."
            : content}
        </Markdown>
      )}
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        className={style.Overlay}
        data-testid="overlay"
        open={isQRVisible}
        onClick={handleQRVisibleChange}
      >
        <Box className={style.QRCard}>
          <QR
            bgColor="#FFFFFF"
            fgColor="#111111"
            marginSize={2}
            value={window.location.href}
          />
          <Typography sx={{ color: "text.secondary" }} variant="body2">
            Scan now to share!
          </Typography>
        </Box>
      </Backdrop>
    </Box>
  );
}
