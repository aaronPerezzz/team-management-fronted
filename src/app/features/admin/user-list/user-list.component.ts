import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class UserListComponent implements AfterViewInit {
  displayedColumns: string[] = ['correo', 'nombreCompleto', 'rol'];
  dataSource = new MatTableDataSource<User>(USER_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface User {
  correo: string;
  nombreCompleto: string;
  rol: string;
}

const USER_DATA: User[] = [
  { correo: 'john.doe@example.com', nombreCompleto: 'John Doe', rol: 'Admin' },
  { correo: 'jane.smith@example.com', nombreCompleto: 'Jane Smith', rol: 'User' },
  { correo: 'mike.jones@example.com', nombreCompleto: 'Mike Jones', rol: 'Manager' },
  { correo: 'susan.wilson@example.com', nombreCompleto: 'Susan Wilson', rol: 'User' },
  { correo: 'lucas.martin@example.com', nombreCompleto: 'Lucas Martin', rol: 'Admin' },
  { correo: 'linda.white@example.com', nombreCompleto: 'Linda White', rol: 'Manager' },
];
