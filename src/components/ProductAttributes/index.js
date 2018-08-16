import React from 'react'
import { Header, Divider, Table } from 'semantic-ui-react'

export default ({ description, materials, processing_min, processing_max }) => (
  <div>
    <Header as="h3">About this product</Header>
    <p>{description}</p>

    <Divider />

    <Table celled>
      <Table.Header style={{ background: '#f9fafb' }}>
        <Table.Row>
          <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Materials</Table.Cell>
          <Table.Cell>{materials ? materials.join(', ') : 'N/A'}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Ready in</Table.Cell>
          <Table.Cell>
            {processing_min != processing_max
              ? `${processing_min} - ${processing_max}`
              : `${processing_min}`}{' '}
            day(s)
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
)
