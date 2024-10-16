"use client";

import useGetUserNotes from "@/hooks/note/useGetUserNotes";

import AddNoteForm from "@/components/dashboards/AddNoteForm";
import Header from "@/components/dashboards/Header";
import NotesList from "@/components/note/NotesList";
import Laoder from "@/components/global/Loader";
import NoDataFound from "@/components/dashboards/NoDataFound";

function NotesPage() {
	const { data, isLoading } = useGetUserNotes();

	if (isLoading) return <Laoder />;

	return (
		<>
			{!data || data.length === 0 ? (
				<NoDataFound title="You don't have any notes yet." />
			) : (
				<div className="min-h-screen flex-1 bg-gray-100">
					<Header title="Your Video Notes" />
					<main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
						<div className="flex justify-end">
							<AddNoteForm />
						</div>
						<NotesList notes={data} />
					</main>
				</div>
			)}
		</>
	);
}

export default NotesPage;
