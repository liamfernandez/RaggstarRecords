import { writable } from 'svelte/store';

// Method to communicate with twilio endpoint to send message
export async function SendMessage(body: any) {
  return await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

// Method to communicate with server call that will add email to google sheet
export async function EmailNewsletterCapture(body: any) {
  return await fetch('/api/newsletter/capture', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}


// Type definition for modalPopup
export type ModalDependency = {
  dependentModal?: string;
  dependantAction?: () => void;
};

// Create a writable store for modal popups
export const modalStore = writable<ModalDependency>({});


export function onBookACall() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const bookACallLink = `https://calendly.com/raggstarrecords/30min?back=1&month=${year}-${month}`;

		// SHOW POLICIES POPUP
		const dialogElm = document.getElementById('policies-popup') as HTMLDialogElement;
		dialogElm.showModal();

		// SHOW CONTACT POPUP
		modalStore.update((store) => {
			store.dependantAction = () => {
				window.open(bookACallLink, '_blank');
			};
			return store;
		});
	}

	export function onClickOfContact() {
		// SHOW POLICIES POPUP
		const dialogElm = document.getElementById('policies-popup') as HTMLDialogElement;
		dialogElm.showModal();

		// SHOW CONTACT POPUP
		modalStore.update((store) => {
			store.dependentModal = 'send-a-message';
			return store;
		});
	}
