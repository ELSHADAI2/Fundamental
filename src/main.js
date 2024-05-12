const notesData = [
  
    {
      id: 'notes-jT-jjsyz61J8XKiI',
      title: 'Welcome to Notes, Dimas!',
      body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
      createdAt: '2022-07-28T10:03:12.594Z',
      archived: false,
    },
    {
      id: 'notes-aB-cdefg12345',
      title: 'Meeting Agenda',
      body: 'Discuss project updates and assign tasks for the upcoming week.',
      createdAt: '2022-08-05T15:30:00.000Z',
      archived: false,
    },
    {
      id: 'notes-XyZ-789012345',
      title: 'Shopping List',
      body: 'Milk, eggs, bread, fruits, and vegetables.',
      createdAt: '2022-08-10T08:45:23.120Z',
      archived: false,
    },
    {
      id: 'notes-1a-2b3c4d5e6f',
      title: 'Personal Goals',
      body: 'Read two books per month, exercise three times a week, learn a new language.',
      createdAt: '2022-08-15T18:12:55.789Z',
      archived: false,
    },
    {
      id: 'notes-LMN-456789',
      title: 'Recipe: Spaghetti Bolognese',
      body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
      createdAt: '2022-08-20T12:30:40.200Z',
      archived: false,
    },
    {
      id: 'notes-QwErTyUiOp',
      title: 'Workout Routine',
      body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
      createdAt: '2022-08-25T09:15:17.890Z',
      archived: false,
    },
    {
      id: 'notes-abcdef-987654',
      title: 'Book Recommendations',
      body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
      createdAt: '2022-09-01T14:20:05.321Z',
      archived: false,
    },
    {
      id: 'notes-zyxwv-54321',
      title: 'Daily Reflections',
      body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
      createdAt: '2022-09-07T20:40:30.150Z',
      archived: false,
    },
    {
      id: 'notes-poiuyt-987654',
      title: 'Travel Bucket List',
      body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
      createdAt: '2022-09-15T11:55:44.678Z',
      archived: false,
    },
    {
      id: 'notes-asdfgh-123456',
      title: 'Coding Projects',
      body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
      createdAt: '2022-09-20T17:10:12.987Z',
      archived: false,
    },
    {
      id: 'notes-5678-abcd-efgh',
      title: 'Project Deadline',
      body: 'Complete project tasks by the deadline on October 1st.',
      createdAt: '2022-09-28T14:00:00.000Z',
      archived: false,
    },
    {
      id: 'notes-9876-wxyz-1234',
      title: 'Health Checkup',
      body: 'Schedule a routine health checkup with the doctor.',
      createdAt: '2022-10-05T09:30:45.600Z',
      archived: false,
    },
    {
      id: 'notes-qwerty-8765-4321',
      title: 'Financial Goals',
      body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
      createdAt: '2022-10-12T12:15:30.890Z',
      archived: false,
    },
    {
      id: 'notes-98765-54321-12345',
      title: 'Holiday Plans',
      body: 'Research and plan for the upcoming holiday destination.',
      createdAt: '2022-10-20T16:45:00.000Z',
      archived: false,
    },
    {
      id: 'notes-1234-abcd-5678',
      title: 'Language Learning',
      body: 'Practice Spanish vocabulary for 30 minutes every day.',
      createdAt: '2022-10-28T08:00:20.120Z',
      archived: false,
    },
  ];
  
  console.log(notesData);




const notesList = document.getElementById('notes-list');

// Fungsi untuk menampilkan daftar catatan
function renderNotes() {
  notesList.innerHTML = ''; // Mengosongkan konten sebelumnya
  notesData.forEach(note => {
    const noteElement = document.createElement('div');
    noteElement.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.body}</p>
      <small>Created at: ${note.createdAt}</small>
      <hr>
    `;
    notesList.appendChild(noteElement);
  });
}

// Panggil fungsi untuk menampilkan daftar catatan saat halaman dimuat
renderNotes();

// Tambahkan event listener untuk menangani pengiriman formulir catatan baru
const addNoteForm = document.getElementById('add-note-form');
addNoteForm.addEventListener('submit', async function(event) {
  event.preventDefault(); // Mencegah pengiriman formulir

  // Ambil nilai judul dan isi dari formulir
  const title = this.title.value;
  const body = this.body.value;

  // Buat objek data catatan baru
  const newNote = {
    title,
    body,
  };

  try {
    // Kirim permintaan HTTP POST ke endpoint API
    const response = await fetch('https://notes-api.dicoding.dev/v2/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Tentukan format data yang dikirim (JSON)
      },
      body: JSON.stringify(newNote), // Ubah objek JavaScript menjadi string JSON
    });

    // Periksa status kode respons
    if (response.ok) {
      // Jika respons berhasil (status kode 200), ambil data respons jika perlu
      const responseData = await response.json();

      // Tambahkan catatan baru ke dalam data catatan lokal Anda
      notesData.push(responseData);

      // Perbarui tampilan daftar catatan
      renderNotes();
      
      // Kosongkan formulir setelah pengiriman
      this.reset();
    } else {
      // Jika respons tidak berhasil, tangani kesalahan
      console.error('Failed to add new note:', response.status);
    }
  } catch (error) {
    // Tangani kesalahan jika terjadi kesalahan dalam melakukan permintaan
    console.error('Error adding new note:', error);
  }
});




// Custom Element untuk App Bar
class CustomAppBar extends HTMLElement {
  constructor() {
    super();
    // Membuat elemen app bar
    const shadow = this.attachShadow({ mode: 'open' });
    const div = document.createElement('div');
    div.setAttribute('class', 'app-bar');
    div.innerHTML = `
      <h1>Notes App</h1>
    `;
    shadow.appendChild(div);

    // Menerapkan styling
    const style = document.createElement('style');
    style.textContent = `
      .app-bar {
        background-color: #333;
        color: white;
        padding: 10px;
        text-align: center;
      }
    `;
    shadow.appendChild(style);
  }
}

// Daftarkan custom element
customElements.define('custom-app-bar', CustomAppBar);


// Custom Element untuk Input Catatan
class CustomInput extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Membuat elemen form
    const form = document.createElement('form');
    form.setAttribute('id', 'add-note-form');
    form.innerHTML = `
      <label for="title">Judul:</label>
      <input type="text" id="title" name="title" required>
      <label for="body">Isi:</label>
      <textarea id="body" name="body" rows="4" required></textarea>
      <input type="submit" value="Tambah Catatan">
    `;
    shadow.appendChild(form);

    // Style untuk elemen form
    const style = document.createElement('style');
    style.textContent = `
      form {
        margin-bottom: 20px;
      }
      label {
        display: block;
        margin-bottom: 5px;
      }
      input, textarea {
        width: 100%;
        padding: 5px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      }
      input[type="submit"] {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        float: right;
      }
      input[type="submit"]:hover {
        background-color: #45a049;
      }
    `;
    shadow.appendChild(style);

    // Fungsi untuk menambah catatan baru
    const tambahCatatan = (title, body) => {
      // Buat catatan baru
      const newNote = {
        id: `notes-${Math.random().toString(36).substr(2, 10)}`, // ID acak untuk catatan baru
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      };
      
      // Tambahkan catatan baru ke dalam array notesData
      notesData.push(newNote);
      
      // Perbarui tampilan daftar catatan
      renderNotes();
    };

    // Panggil fungsi tambahCatatan saat formulir dikirim
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Mencegah pengiriman formulir

      // Ambil nilai judul dan isi dari formulir
      const title = this.title.value;
      const body = this.body.value;

      // Panggil fungsi tambahCatatan dengan nilai judul dan isi sebagai argumen
      tambahCatatan(title, body);

      // Kosongkan formulir setelah pengiriman
      this.reset();
    });
  }
}

// Daftarkan custom element
customElements.define('custom-input', CustomInput);
class NoteItem extends HTMLElement {
  constructor() {
      super();
      
      // Attach Shadow DOM
      this.attachShadow({ mode: 'open' });
      
      // Clone the template content and append it to Shadow DOM
      const template = document.createElement('template');
      template.innerHTML = `
          <style>
              /* Define your component's styles here */
              /* For example: */
              h3 {
                  font-size: 18px;
                  margin-bottom: 5px;
              }
              p {
                  font-size: 16px;
                  margin-bottom: 10px;
              }
              small {
                  font-size: 12px;
                  color: gray;
              }
          </style>
          <div class="note-item">
              <h3></h3>
              <p></p>
              <small></small>
          </div>
      `;
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      
      // Retrieve elements inside the shadow root
      this.titleElement = this.shadowRoot.querySelector('h3');
      this.bodyElement = this.shadowRoot.querySelector('p');
      this.createdAtElement = this.shadowRoot.querySelector('small');
  }
  
  // Define properties to set title, body, and createdAt
  set title(title) {
      this.titleElement.textContent = title;
  }
  
  set body(body) {
      this.bodyElement.textContent = body;
  }
  
  set createdAt(createdAt) {
      this.createdAtElement.textContent = `Created at: ${createdAt}`;
  }
}

// Define the custom element
customElements.define('note-item', NoteItem);

class CustomFooter extends HTMLElement {
  constructor() {
      super();
      
      // Create shadow DOM
      this.attachShadow({ mode: 'open' });

      // Create footer container
      const footerContainer = document.createElement('footer');
      footerContainer.classList.add('custom-footer');

      // Create footer content
      const footerContent = document.createElement('div');
      footerContent.innerHTML = `
          <p>&copy; ${new Date().getFullYear()} Dicoding Project</p>
          <p>Contact: ElShadayLatuheru@gmail.com</p>
      `;
      footerContainer.appendChild(footerContent);

      // Append footer container to shadow DOM
      this.shadowRoot.appendChild(footerContainer);

      // Apply styles
      const style = document.createElement('style');
      style.textContent = `
          .custom-footer {
              background-color: #333;
              color: white;
              padding: 10px;
              text-align: center;
              background-size : 100% ;
          }
          .custom-footer p {
              margin: 5px 0;
          }
      `;
      this.shadowRoot.appendChild(style);
  }
}
// Define the custom element
customElements.define('custom-footer', CustomFooter);


// Fungsi untuk mendapatkan data catatan dari API
async function fetchNotes() {
  try {
    const response = await fetch('https://notes-api.dicoding.dev/v2/notes');
    if (response.ok) {
      const data = await response.json();
      notesData = data; // Simpan data catatan ke dalam variabel notesData
      renderNotes(); // Panggil fungsi renderNotes untuk menampilkan daftar catatan
    } else {
      console.error('Failed to fetch notes:', response.status);
    }
  } catch (error) {
    console.error('Error fetching notes:', error);
  }
}

// Panggil fungsi fetchNotes saat halaman dimuat
fetchNotes();

// Fungsi untuk menghapus catatan berdasarkan ID
// Fungsi untuk menghapus catatan berdasarkan ID
async function deleteNoteById(noteId) {
  try {
    const response = await fetch(`https://notes-api.dicoding.dev/v2/notes/${noteId}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      // Hapus catatan dari array notesData
      notesData = notesData.filter(note => note.id !== noteId);
      renderNotes(); // Perbarui tampilan daftar catatan
    } else {
      console.error('Failed to delete note:', response.status);
    }
  } catch (error) {
    console.error('Error deleting note:', error);
  }
}


// Tambahkan event listener untuk menangani klik tombol hapus
notesList.addEventListener('click', async function(event) {
  if (event.target.classList.contains('delete-button')) {
    const noteId = event.target.dataset.id;
    await deleteNoteById(noteId);
  }
});

// Sebelum melakukan fetch data
document.querySelector('loading-indicator').removeAttribute('hidden');

// Setelah menerima respons dari server
document.querySelector('loading-indicator').setAttribute('hidden', '');
