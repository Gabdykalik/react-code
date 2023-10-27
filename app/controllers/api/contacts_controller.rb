class Api::ContactsController < ApplicationController
  def index
    @contacts = Contact.all
    render json: contacts_json(@contacts)
  end

  def show
    contact_ids = JSON.parse(params[:id])

    contacts = Contact.where(id: contact_ids)
    render json: contacts_json(contacts)
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Product not found' }, status: :not_found
  end

  private

  def contacts_json(contacts)
    contacts.map { |contact| contact_json(contact) }
  end

  def contact_json(contact)
    {
        id: contact.id,
        body: contact.body,
        tel1: contact.tel1,
        tel2: contact.tel2,
        tel3: contact.tel3,
        email: contact.email,
        email2: contact.email2,
        whatsapp: contact.whatsapp,
        telegram: contact.telegram,
        instagram: contact.instagram,
        address: contact.address,
    }
  end
end
