import Link from "next/link";
import { Button } from "react-bootstrap";
// import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col h-screen w-full">
      <header className="flex items-center h-14 px-4 border-b gap-4">
        <Link href="#">
          <FilesIcon className="h-6 w-6" />
          <span className="sr-only">Go to Docs</span>
        </Link>
        <div className="flex items-center space-x-4 flex-1 justify-end">
          <div className="flex items-center space-x-2">
            <img
              alt="Avatar"
              className="rounded-full"
              height={32}
              src="./placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width={32}
            />
            <div className="flex flex-col text-sm not-italic">
              <div className="font-semibold">Alice</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                alice@example.com
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-4 p-4">
        <div className="flex h-10 items-center border rounded px-2">
          <Button className="h-8 w-8" size="icon" variant="outline">
            <BoldIcon className="w-4 h-4" />
            <span className="sr-only">Bold</span>
          </Button>
          <Button className="h-8 w-8" size="icon" variant="outline">
            <ItalicIcon className="w-4 h-4" />
            <span className="sr-only">Italic</span>
          </Button>
          <Button className="h-8 w-8" size="icon" variant="outline">
            <UnderlineIcon className="w-4 h-4" />
            <span className="sr-only">Underline</span>
          </Button>
          <Button className="h-8 w-8" size="icon" variant="outline">
            <StrikethroughIcon className="w-4 h-4" />
            <span className="sr-only">Strikethrough</span>
          </Button>
          <Button className="h-8 w-8" size="icon" variant="outline">
            <CodeIcon className="w-4 h-4" />
            <span className="sr-only">Code block</span>
          </Button>
          <Button className="h-8 w-8" size="icon" variant="outline">
            <ListIcon className="w-4 h-4" />
            <span className="sr-only">Numbered list</span>
          </Button>
          <Button className="h-8 w-8" size="icon" variant="outline">
            <ListIcon className="w-4 h-4" />
            <span className="sr-only">Bulleted list</span>
          </Button>
          <Button className="h-8 w-8" size="icon" variant="outline">
            <QuoteIcon className="w-4 h-4" />
            <span className="sr-only">Quote</span>
          </Button>
          <Button className="h-8 w-8" size="icon" variant="outline">
            <LinkIcon className="w-4 h-4" />
            <span className="sr-only">Link</span>
          </Button>
          <Button className="h-8 w-8" size="icon" variant="outline">
            <ImageIcon className="w-4 h-4" />
            <span className="sr-only">Image</span>
          </Button>
          <Button className="h-8 w-8" size="icon" variant="outline">
            <TableIcon className="w-4 h-4" />
            <span className="sr-only">Table</span>
          </Button>
          <Button className="h-8 w-8" size="icon" variant="outline">
            <CheckIcon className="w-4 h-4" />
            <span className="sr-only">Checklist</span>
          </Button>
          <Button className="h-8 w-8" size="icon" variant="outline">
            <ReplyIcon className="w-4 h-4" />
            <span className="sr-only">Comment</span>
          </Button>
        </div>
        <div className="flex-1 p-2 border rounded text-sm bg-gray-100 dark:bg-gray-800" />
      </main>
    </div>
  );
}

function BoldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 12a4 4 0 0 0 0-8H6v8" />
      <path d="M15 20a4 4 0 0 0 0-8H6v8Z" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function FilesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z" />
      <path d="M3 7.6v12.8c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h9.8" />
      <path d="M15 2v5h5" />
    </svg>
  );
}

function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function ItalicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" x2="10" y1="4" y2="4" />
      <line x1="14" x2="5" y1="20" y2="20" />
      <line x1="15" x2="9" y1="4" y2="20" />
    </svg>
  );
}

function LinkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function ListIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

function QuoteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

function ReplyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

function StrikethroughIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 4H9a3 3 0 0 0-2.83 4" />
      <path d="M14 12a4 4 0 0 1 0 8H6" />
      <line x1="4" x2="20" y1="12" y2="12" />
    </svg>
  );
}

function TableIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </svg>
  );
}

function UnderlineIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 4v6a6 6 0 0 0 12 0V4" />
      <line x1="4" x2="20" y1="20" y2="20" />
    </svg>
  );
}
