'use client';

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Button,
} from '@trinity/ui';
import ReactMarkdown from 'react-markdown';

interface TeamDialogProps {
  name: string;
  role: string;
  fullBio: string;
}

export function TeamDialog({ name, role, fullBio }: TeamDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="mt-2 border-border text-primary hover:bg-primary/10"
        >
          Read More
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto z-50 bg-background fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-6 border border-border shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-primary">{name} – {role}</DialogTitle>
          <DialogDescription className="text-foreground">
            Learn more about {name}'s contributions to the Portuguese Forum Rotary Club.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 prose prose-sm max-w-none text-muted-foreground">
          <ReactMarkdown>{fullBio}</ReactMarkdown>
        </div>

        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="bg-primary text-primary-foreground hover:bg-primary/90
                         focus-visible:outline-none focus-visible:ring-2
                         focus-visible:ring-secondary focus-visible:ring-offset-2"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
